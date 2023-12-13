---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 200})
  this.field('category')
  this.field('tags')
  this.field('url')
  this.ref('id')
});

{% assign count = 0 %}
{% for post in site.pages %}
{% unless post.url contains 'assets/' %}
index.add({
    title: {{post.title | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{post.tags | jsonify}},
    url: {{ post.url | jsonify }},
    id: {{count}}
});
{% endunless %}
{% assign count = count | plus: 1 %}
{% endfor %}


// builds reference data
var store = [{% for post in site.pages %}{
  "title": {{post.title | jsonify}},
  "url": {{ post.url | jsonify  }},
  "content": {{post.content | strip_html | jsonify}},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }},
  "id": {{ count }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="{{site.baseurl}}${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
});