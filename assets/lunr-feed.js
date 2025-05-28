// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('url')
  this.ref('id')
});





index.add({
    title: "A sample of a new topic",
    content: "New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/Sub%20Topic.html",
    id: 0
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 1
});












index.add({
    title: "A new sub topic for third menu",
    content: "New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/Third%20sub%20topic.html",
    id: 2
});












index.add({
    title: "Background and purpose",
    content: "Background and purpose\n\nContent goes here.\n",
    tags: ["poverty","inequality","women empoverment"],
    sdg: ["Gender Equality"],
    url: "/Getting%20started/background.html",
    id: 3
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]




    
    window.sdg = ["Gender Equality"]







index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nContent goes here.\n",
    tags: ["poverty","inequality","women empoverment","digital"],
    sdg: ["No Poverty","Zero Hunger","Quality Education"],
    url: "/Getting%20started/how-to-use-the-toolkit.html",
    id: 4
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]

    
    window.tags = ["poverty","inequality","women empoverment","digital"]




    
    window.sdg = ["No Poverty"]

    
    window.sdg = ["No Poverty","Zero Hunger"]

    
    window.sdg = ["No Poverty","Zero Hunger","Quality Education"]







index.add({
    title: "Third topic",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/",
    id: 5
});












index.add({
    title: "Second topic",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/",
    id: 6
});












index.add({
    title: "Getting Started",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/",
    id: 7
});












index.add({
    title: "Getting Started",
    content: "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
    tags: ["poverty","inequality","women empoverment"],
    sdg: ["No Poverty","Zero Hunger"],
    url: "/",
    id: 8
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]




    
    window.sdg = ["No Poverty"]

    
    window.sdg = ["No Poverty","Zero Hunger"]










index.add({
    title: "Third value",
    content: "## New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/third%20value.html",
    id: 10
});












index.add({
    title: "Value of toolkit",
    content: "## New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/value.html",
    id: 11
});












index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n\nContent goes here.",
    tags: ["poverty","inequality","women empoverment","digital"],
    sdg: ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"],
    url: "/Getting%20started/values.html",
    id: 12
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]

    
    window.tags = ["poverty","inequality","women empoverment","digital"]




    
    window.sdg = ["Gender Equality"]

    
    window.sdg = ["Gender Equality","Clean Water and Sanitation"]

    
    window.sdg = ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"]







index.add({
    title: "Jasmine Smith",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Jasmine-Smith.html",
    id: 13
});












index.add({
    title: "Carlos Rodriguez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Carlos-Rodriguez.html",
    id: 14
});












index.add({
    title: "Lena Kim",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Lena-Kim.html",
    id: 15
});












index.add({
    title: "Marcus Johnson",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Marcus-Johnson.html",
    id: 16
});












index.add({
    title: "Sophia Martinez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Sophia-Martinez.html",
    id: 17
});












index.add({
    title: "Daniel Chen",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Daniel-Chen.html",
    id: 18
});













// builds reference data
var store = [{
  "title": "A sample of a new topic",
  "url": "/Second%20Topic/Sub%20Topic.html",
  "content": "New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "New Topic\n\nContent goes here.\n",
  "id": 19
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator...",
  "id": 19
},{
  "title": "A new sub topic for third menu",
  "url": "/Third%20topic/Third%20sub%20topic.html",
  "content": "New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "New Topic\n\nContent goes here.\n",
  "id": 19
},{
  "title": "Background and purpose",
  "url": "/Getting%20started/background.html",
  "content": "Background and purpose\n\nContent goes here.\n",
  "tags": ["poverty","inequality","women empoverment"],
  "sdg": ["Gender Equality"],
  "excerpt": "Background and purpose\n\nContent goes here.\n",
  "id": 19
},{
  "title": "How to use the toolkit",
  "url": "/Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nContent goes here.\n",
  "tags": ["poverty","inequality","women empoverment","digital"],
  "sdg": ["No Poverty","Zero Hunger","Quality Education"],
  "excerpt": "How to use this toolkit\n\nContent goes here.\n",
  "id": 19
},{
  "title": "Third topic",
  "url": "/Third%20topic/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 19
},{
  "title": "Second topic",
  "url": "/Second%20Topic/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 19
},{
  "title": "Getting Started",
  "url": "/Getting%20started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 19
},{
  "title": "Getting Started",
  "url": "/",
  "content": "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
  "tags": ["poverty","inequality","women empoverment"],
  "sdg": ["No Poverty","Zero Hunger"],
  "excerpt": "Markdown Basics Introduction This page serves as a reference guide to the Markdown syntax used for creating different elements in...",
  "id": 19
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n  function customSort(a, b) {\n    // Check if strings start with a number\n    let startsWithNumberA = /^\\d+/.test(a);\n    let startsWithNumberB = /^\\d+/.test(b);\n    \n    // If both start with numbers, sort by number\n    if (startsWithNumberA && startsWithNumberB) {\n        let numA = parseInt(a.match(/^\\d+/)[0]);\n        let numB = parseInt(b.match(/^\\d+/)[0]);\n        return numA - numB;\n    } else if (startsWithNumberA) {\n        // If only a starts with a number, it comes first\n        return -1;\n    } else if (startsWithNumberB) {\n        // If only b starts with a number, it comes first\n        return 1;\n    } else {\n        // Otherwise, sort alphabetically\n        return a.localeCompare(b);\n    }\n}\n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    tags = tags.sort(customSort);\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    sdg = sdg.sort(customSort);\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); {% assign...",
  "id": 19
},{
  "title": "Third value",
  "url": "/Third%20topic/third%20value.html",
  "content": "## New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## New Topic\n\nContent goes here.\n",
  "id": 19
},{
  "title": "Value of toolkit",
  "url": "/Second%20Topic/value.html",
  "content": "## New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## New Topic\n\nContent goes here.\n",
  "id": 19
},{
  "title": "Values and attitude",
  "url": "/Getting%20started/values.html",
  "content": "## Values and attitude\n\n\nContent goes here.",
  "tags": ["poverty","inequality","women empoverment","digital"],
  "sdg": ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"],
  "excerpt": "## Values and attitude\n\n\nContent goes here.",
  "id": 19
},{
  "title": "Jasmine Smith",
  "url": "/contributors/Jasmine-Smith.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative....",
  "id": 19
},{
  "title": "Carlos Rodriguez",
  "url": "/contributors/Carlos-Rodriguez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Carlos Rodriguez TechSolutions Inc. CEO Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in...",
  "id": 19
},{
  "title": "Lena Kim",
  "url": "/contributors/Lena-Kim.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lena Kim Global Finance Corp. Senior Financial Analyst Lena Kim is a financial analyst with a sharp eye for market...",
  "id": 19
},{
  "title": "Marcus Johnson",
  "url": "/contributors/Marcus-Johnson.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Marcus Johnson Urban Revitalization Project Chief Urban Planner Marcus Johnson is an experienced urban planner and architect, currently leading the...",
  "id": 19
},{
  "title": "Sophia Martinez",
  "url": "/contributors/Sophia-Martinez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sophia Martinez Human Rights Watch Lead Counsel Sophia Martinez is a human rights lawyer with a strong commitment to justice...",
  "id": 19
},{
  "title": "Daniel Chen",
  "url": "/contributors/Daniel-Chen.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Daniel Chen BioTech Solutions Head of Research Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for...",
  "id": 19
}]


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
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/toolkit-template${store[ref]?.url}">
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
  
  function customSort(a, b) {
    // Check if strings start with a number
    let startsWithNumberA = /^\d+/.test(a);
    let startsWithNumberB = /^\d+/.test(b);
    
    // If both start with numbers, sort by number
    if (startsWithNumberA && startsWithNumberB) {
        let numA = parseInt(a.match(/^\d+/)[0]);
        let numB = parseInt(b.match(/^\d+/)[0]);
        return numA - numB;
    } else if (startsWithNumberA) {
        // If only a starts with a number, it comes first
        return -1;
    } else if (startsWithNumberB) {
        // If only b starts with a number, it comes first
        return 1;
    } else {
        // Otherwise, sort alphabetically
        return a.localeCompare(b);
    }
}

  //POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')

if(tags.length > 0){
    tags = tags.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    sdg = sdg.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

let taglist = []
let sdglist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/toolkit-template${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [...sdglist, ...taglist].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    contentdiv.empty()
    filterresult()
} )

})