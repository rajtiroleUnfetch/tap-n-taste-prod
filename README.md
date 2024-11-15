# TapNTaste

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-standalone-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve tap-n-taste
```

To create a production bundle:

# Tap-n-Taste Repository

Welcome to the Tap-n-Taste application repository! This monorepo is structured using Nx for efficient and scalable development. Follow the guidelines below to set up the project, generate components, and maintain consistent workflows.

---

## Project Setup

### 1. Install Dependencies

Run the following command to install all dependencies:

```bash
pnpm i

```bash
nx serve t-scanning

```bash
nx reset




## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-standalone-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


## component generate ui

 npx nx generate @nx/react:component libs/ui/src/lib/<component-folder>/<t-component-name>;
 Example -- npx nx generate @nx/react:component libs/ui/src/lib/t-main-layout/t-main-layout;


Git Commit Message Guidelines
For clear and consistent commit history, follow these commit conventions:

feat: Introduces a new feature.
fix: Fixes a bug.
chore: Non-functional updates, like dependency changes or tooling updates.
refactor: Code changes that don’t add features or fix bugs.
style: Code style changes (formatting, etc.).
test: Adds or updates tests.
docs: Updates to documentation.
Example Commit Messages
feat: add TnButton component to ui library
fix: resolve button alignment issue on mobile view
chore: update dependencies and clean up config files
docs: update README with new component generation steps
Use the following structure:

plaintext
Copy code
<type>: <subject>

Branching Rules
To maintain a clean and organized Git history, follow these branch and pull request conventions.

Branch Naming
Feature branches: Prefix with feature/ and a concise description.
Example: feature/user-authentication
Bugfix branches: Prefix with fix/ and a brief description.
Example: fix/login-redirect
Workflow
Base Branch: Always branch off of dev.
Pull Requests: Submit PRs from your feature or bugfix branch into dev.



Example Workflow
Create a New Branch:

bash
Copy code
git checkout dev
git pull origin dev
git checkout -b feature/new-ui-component
Make and Commit Changes:

bash
Copy code
git add .
git commit -m "feat: add new TnButton component"
Push the Branch and Open a PR:

bash
Copy code
git push origin feature/new-ui-component
Then, open a pull request on GitHub from feature/new-ui-component into dev.

Useful Nx Commands
Run Development Server:

bash
Copy code
npx nx serve <app-name>
Build an App:

bash
Copy code
npx nx build <app-name>
Run Tests:

bash
Copy code
npx nx test <project-name>
Generate a New Library:

bash
Copy code
npx nx generate @nx/react:library <library-name>