// Generate README with structure and markdown based on the user inputs
function generateMarkdown({ userName, userEmail, projectTitle, projectDescription, projectImgSRC, projectInstall, projectRun, projectTest, projectInfo, projectLicense, avatarURL }) {
  projectTitleDashed = projectTitle.replace(/\s+/g, '-');
  return `
  # ${projectTitle}

  ## Description
  ${projectDescription}

  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Information](#additional-information)
  - [License](#license)
  - [Contributing](#contributing)

  ## Installation
  Download (and unpack) or clone the repo, then using a CLI run the ${projectInstall} command.

  ## Usage
  Run the application with the CLI command ${projectRun} and follow the prompts.

  ## Testing
  Run the tests with the CLI command ${projectTest}.

  ## Additional Information
  ${projectInfo}

  ## License
  This project is licensed under the ${projectLicense} License - see the [LICENSE.txt] file for details

  ## Contributing
  Please read [CONTRIBUTING.md] for details on the code of conduct, and the process for submitting pull requests.


// Parse the markdown README
module.exports = generateMarkdown;
