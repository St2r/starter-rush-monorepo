# AI Agent Guidelines

## 📍 Project Context
- **Type**: RushJS Monorepo
- **Package Manager**: pnpm (managed via Rush)
- **Configuration**: `rush.json` in root, `common/config/rush/` for details.

## 🛠 Technology Stack
According to `.agents/rules/template.md`:
- **Frontend**: **Angular** (Preferred)
- **Backend**: **NestJS** (Preferred)
- **Linting/Formatting**: `eslint` (v10) with `@antfu/eslint-config`

## 🤖 Workflow Instructions for Agents

### 1. Dependency Management
- **Adding Packages**:
  - use `rush add -p <package_name> [--dev]` inside the project folder.
  - **DO NOT** use `npm install`, `pnpm install`, or `yarn add` manual commands.
- **Updating**:
  - Run `rush update` to ensure `common/config/rush/pnpm-lock.yaml` is consistent.

### 2. Running Scripts
- Use `rushx <script_name>` (equivalent to `npm run`) within a project folder.
- Use `rush build` to build the entire repository (or impacted projects).

### 3. Creating New Projects
- **Frontend**: Use Angular CLI (`ng new`)
- **Backend**: Use NestJS CLI (`nest new`)
- **Location**: Organize under `packages/` or `apps/` (check `rush.json` `projects` entry).
- **Post-Creation**:
  - Add the new project to `rush.json`.
  - run `rush update`.

## 📂 Key Directories
- `.agents/`: Agent-specific rules and skills.
- `common/`: Global configuration (autoinstallers, Rush config).
- `packages/`: Source code for libraries and apps.
- `submodules/`: Submodules for external dependencies.
