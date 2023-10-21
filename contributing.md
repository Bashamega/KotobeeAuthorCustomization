# Contributing to Kotobee Author Customization

Thank you for considering contributing to Kotobee Author Customization! We appreciate your interest in helping to improve our project.

The following are some guidelines that will help you get started with your contributions. Please take a moment to review this document before you begin.

## How to Contribute

1. **Fork the Repository**: Start by forking the [Kotobee Author Customization repository](https://github.com/Bashamega/KotobeeAuthorCustomization) to your GitHub account. You can do this by clicking the "Fork" button on the top right of the repository's page.

2. **Clone the Repository**: Clone your forked repository to your local machine:

    ```bash
    git clone https://github.com/Bashamega/KotobeeAuthorCustomization.git
    ```

3. **Create a Branch**: Create a new branch for your contribution with a descriptive name:

    ```bash
    git checkout -b feature/book-character-name-customizer
    ```

4. **Make Changes to `db/features.js`**: Open the `db/features.js` file and add the following feature entry:

    ```javascript
    {
        'title': '...',
        'author': '...',
        'link': '...',
        'date_created': '...'
    }
    ```
    Replace the dots with the coorrect info

5. **Create a New Folder**: Create a folder with the name you entered in the link section inside the product folder to house the code for this feature.

6. **Add Your Feature Code**: Inside your folder, add your feature code. Be sure to include documentation if needed.

7. **Commit Changes**: Commit your changes with a clear and concise commit message:

    ```bash
    git commit -m "feat: Add Book Character Name Customizer feature"
    ```

8. **Push Changes**: Push your changes to your forked repository:

    ```bash
    git push origin feature/book-character-name-customizer
    ```

9. **Pull Request**: Create a new Pull Request (PR) from your forked repository to the [Kotobee Author Customization repository](https://github.com/Bashamega/KotobeeAuthorCustomization). Be sure to provide a clear description of your changes in the PR.

10. **Review**: Your PR will be reviewed by project maintainers. Please be patient, and be prepared to make further changes if requested.

11. **Merge**: Once your PR is approved, a project maintainer will merge it into the main project.

## Code of Conduct

Please note that we have a [Code of Conduct](CODE_OF_CONDUCT.md) in place. Make sure to read and adhere to it while contributing to our project.

## Issue Tracker

If you find any bugs, have feature requests, or other issues, please check the [issue tracker](https://github.com/Bashamega/KotobeeAuthorCustomization/issues) before creating a new issue. If you create a new issue, please provide detailed information to help us understand and resolve it.

## Licensing

By contributing to Kotobee Author Customization, you agree that your contributions will be licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

Thank you for contributing to Kotobee Author Customization. Your contributions are greatly appreciated!

