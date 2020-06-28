const badges = {
  "BSD 3 Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "GPL3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};

function licenseBadge(license) {
  if (license !== "None") {
    return (
      `This project is licesned under ${license}.`
    )
  }
  return "No Licenses were used for this project."
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badges[data.license]}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  Here is hwo to install this project:
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  
  ${licenseBadge(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests
  This is how you will run any necessary tests:

  ${data.tests}
  
  ## Questions

  Any questions, feel free to check out my github:

  GitHub profile: [${data.gitHub}](https://github.com/${data.gitHub})
    
  Or feel free to shoot me an email:
    
  My email is: [${data.email}](mailto:${data.email})
    
  ${data.contact}
`;
}

module.exports = generateMarkdown;
