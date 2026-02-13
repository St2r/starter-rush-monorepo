---
trigger: model_decision
description: Concise guide for Rush monorepo management
---

# Rush Monorepo Cheat Sheet

## 1. Essential Commands

### Dependency Management
- **`rush update`**: Updates dependencies and links projects.
  - **Best Practice**: Limit scope to avoid full repo updates.
  - `rush update --to <project>`: Update for a specific project.
  - `rush update --subspace <subspace>`: Update for a specific subspace.
  - `rush update --recheck`: Force check all dependencies.
- **`rush add -p <package>`**: Adds a dependency to the current project.
  - `rush add -p <package> --dev`: Add as dev dependency.
- **`rush purge`**: Cleans temporary files.

### Building
- **`rush build`**: Incremental build of changed projects.
- **`rush rebuild`**: Clean build of all targeted projects.
- **`rushx <command>`**: Runs a package.json script (like `npm run`) for the current project.

## 2. Project Selectors
Target specific parts of the graph to save time:

- **`--to <project>`**: The project AND its dependencies.
- **`--from <project>`**: The project AND things that depend on it.
- **`--only <project>`**: ONLY the project (ignores dependencies).
- **`--impacted-by <project>`**: Projects affected by changes in `<project>`.

## 3. Project Structure
- **`rush.json`**: Main config (projects list, pnpm version).
- **`common/`**: Shared configurations and configs.
  - **`config/rush/`**: Core Rush configs.
  - **`config/subspaces/`**: Subspace-specific lockfiles.
- **`packages/`**: Source code for projects/libraries.

## 4. Troubleshooting
- **Build acting weird?** → `rush rebuild`
- **Dependencies broken?** → `rush purge` then `rush update`
- **Need more info?** → Add `--verbose` flag
