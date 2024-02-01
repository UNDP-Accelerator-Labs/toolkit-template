# UNDP Accelerator Labs Toolkit Micro-site

Welcome to the UNDP Accelerator Labs Toolkit Micro-site project! This guide provides instructions on setting up and customizing your Toolkit site.

## Table of Contents

- [Introduction](#introduction)
- [Toolkit Webpage Sample](#toolkit-webpage-sample)
- [Folder Structure](#folder-structure)
- [Tutorials](#tutorials)
- [Customizing Configuration](#customizing-configuration)
- [Submitting Requests](#submitting-requests)
- [Set Up the Toolkit Micro-site Locally](#set-up-the-toolkit-micro-site-locally)
- [License](#license)

## Introduction

The Toolkit micro-site uses Jekyll, a static site generator. Follow the steps below to get started.

## Toolkit Webpage Sample
See the [sample](https://undp-accelerator-labs.github.io/national_innovation_ecosystems_toolkit/) for an idea of the minimal configuration options available.

## Folder Structure

Recommended structure for your toolkit project:

```markdown
├── index.md # Home page
├── _data/
│ ├── site_info.yml # Customize site configuration
├── _layouts/
│ ├── default.html # Default layout template
content
│ ├── getting-started/
│ ├── index.md # Getting started side menu config
│ │ ├── values.md # Example page under Getting Started
│ ├── Second Topic/
├── index.md # Side menu config
│ │ ├── values.md # Example page new sub-topic
├── public/
│ ├── imgs/ # Image files
├── _config.yml # Jekyll configuration file
├── README.md # Instructions for users
```

## Tutorials

Explore the [Tutorials section](./Tutorials/index.md) for step-by-step guides:

- [Create a GitHub Account](./Tutorials/create-github-account.md)
- [Create a Toolkit Repository](./Tutorials/create-a-toolkit.md)
- [Create a Branch on GitHub](./Tutorials/create-branch.md)
- [Create a Folder or File on GitHub](./Tutorials/create-file.md)
- [Manage merge request](./Tutorials/merge-request.md)
- [Write Your Content](./Tutorials/write-content.md)
- [Publish Your Changes to Live Website](./Tutorials/publish.md)
- [Customizing the Contributors Page](#customizing-the-contributors-page)

## Customizing Configuration

Edit `_data/site_info.yml` and `_data/site_styles.yml` for site configuration. Update `baseurl` in `_config.yml`. For navigation/menu customization, update nav.html and sidebar.html.

## Tagging System 

The toolkit has a tagging system, allowing you to categorize factsheets based on five key criteria: 'Signature Solutions', 'Enablers', 'RBLAC Priorities', 'TAGS' and 'SDG'.


### How to Use Tags

To utilize this tagging feature, you can include the following configuration in your toolkit:

```yaml
# CONFIGURATION BELOW IS ONLY NEEDED IF YOU WANT TO USE TAGS AND CATEGORY IN THE TOOLKIT

signature_solutions: [ Poverty and Inequality, Governance ]
enablers: [ Digitalisation ]
rblac_priorities: [ Pillar 1 Inclusive and Sustainable Growth ]
sdg: [ 1 No Poverty ]
tags: [ Policy, Governance ]
```

These tags are optional. If no tags are used within your toolkit, the tagging and filter-by-tag features will not be present. However, if any of the tags are used, the corresponding filters will be dynamically added to your toolkit.

Once you add any of these tags to your factsheets, the corresponding sidebar and dropdown filters for these tags will automatically appear. You can preview a sample of this feature in the training toolkit.

That's it! You're ready to create, customize, and deploy your Toolkit site. Have fun documenting and sharing your content!

## Submitting Requests

Have a question or facing an issue? We're here to help! Follow the steps below to submit a request using our issue template.

### Types of Requests

#### Bug Report
Encountered a bug in the toolkit? Help us improve by [reporting it](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues/new?assignees=this-pama%2Cmyjyby&labels=bug%2Ctriage&projects=&template=bug_report.yaml&title=%5BBug%5D%3A+). Provide details on what happened, expected behavior, and any error messages.

#### Toolkit Creation Assistance
Need to start a new project that requires a toolkit? [Let us know](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues/new?assignees=this-pama%2Cmyjyby&labels=new+toolkit&projects=&template=feature_request.yml&title=%5BNEW+TOOLKIT%5D%3A+), and we'll provide the support you need.

#### Custom Domain Configuration
Looking to set up a custom domain for your toolkit? [Submit a request](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues/new?assignees=this-pama%2Cmyjyby&labels=domain+configuration&projects=&template=custom-domain.yaml&title=%5BDOMAIN+CONFIGURATION%5D%3A+), and we'll guide you through the configuration process.

#### Usage Monitor Configuration
Interested in monitoring usage and performance? [Reach out for assistance](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues/new?assignees=this-pama%2Cmyjyby&labels=goatcounter+configuration&projects=&template=usage-monitor.yaml&title=%5BGOATCOUNTER+CONFIGURATION%5D%3A+) in configuring usage monitors for your toolkit.

### How to Submit a Request

1. Click on the [Issues](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues) tab at the top of the repository.
2. Select "New Issue."
3. Choose the appropriate issue template based on your request type.
4. Fill in the template with as much detail as possible.
5. Click "Submit New Issue" to open your request.

Our team will review your request and provide assistance as soon as possible. Thank you for contributing to the improvement of the UNDP Accelerator Labs Toolkit!

## Set Up the Toolkit Micro-site Locally

Follow these steps to set up the UNDP Accelerator Labs Toolkit Micro-site locally on your computer for development and customization:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template.git
    ```

2. **Navigate to the Repository**:
    ```bash
    cd toolkit-micro-site-template
    ```

3. **Install Dependencies**:
    Ensure you have Ruby and Bundler installed on your computer. If not, you can install them following these instructions. Then, install the required dependencies by running:
    ```bash
    bundle install
    ```

4. **Run the Local Server**:
    Start the local development server by running the following command:
    ```bash
    bundle exec jekyll serve 
    ```

    This command will build the site and start a local server. You'll see an output with a URL like http://127.0.0.1:4000/. Open this URL in your web browser to view your locally hosted toolkit micro-site.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License.

You can view the full license text [here](https://creativecommons.org/licenses/by/4.0/legalcode).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
