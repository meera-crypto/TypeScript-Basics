# TypeScript Fundamentals — Learning Project

## What this project is

A hands-on TypeScript tutorial workspace: short, numbered lessons under `src/` that build from basics to async patterns. Each file is a self-contained example with comments explaining the idea.

This is **not** an app or library. It’s a practice sandbox for learning TypeScript’s type system and everyday language features.

## What you’ll achieve

By working through these lessons you will be able to:

- Annotate variables, functions, and objects so TypeScript catches mistakes early
- Model real data with interfaces, type aliases, unions, and intersections
- Use classes, generics, and utility types for reusable, safer code
- Narrow types with guards and assertions
- Type promises and `async`/`await` for asynchronous work

After this path, you should feel ready to use TypeScript in Vue, React, Node, or other JS projects with confidence.

## Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)

## Setup & commands

Use these steps to install TypeScript, configure a project, compile, and run lessons.

### Install TypeScript globally

```bash
npm i -g typescript
```

`-g` installs TypeScript globally so `tsc` is available from any folder.

### Check the version

```bash
tsc --version
```

### Initialize `package.json`

```bash
npm init -y
```

Creates a default `package.json` for the project.

### Install TypeScript for this project

```bash
npm i --save-dev typescript
```

Adds TypeScript as a **dev dependency** so this project has its own compiler version (recommended even if you also installed globally).

### Create TypeScript configuration

```bash
npx tsc --init
```

Generates `tsconfig.json` (compiler options such as `rootDir`, `outDir`, and `strict`).

### Compile TypeScript → JavaScript

```bash
tsc
```

Reads files from `src/` and writes compiled output to `dist/` (as configured in `tsconfig.json`).

### Run a particular file

```bash
node dist/file_name.js
```

Example:

```bash
node dist/01-basics.js
```

### Quick workflow for this repo

```bash
# Install project dependencies
npm install

# Compile all lessons
tsc

# Run a lesson
node dist/01-basics.js
```

## Project structure

```
ts/
├── src/                 # Lesson source files (edit & experiment here)
│   ├── 01-basics.ts
│   ├── 02-primitives.ts
│   ├── ...
│   └── 14-async-await.ts
├── dist/                # Compiled JavaScript (from `tsc`)
├── package.json
├── tsconfig.json        # Strict TypeScript config
└── README.md
```

- **`src/`** — TypeScript lessons you read and change
- **`dist/`** — Output after compiling with `tsc`
- **`tsconfig.json`** — `strict: true`, CommonJS modules, ES2020 target

## Learning path

| #  | File                         | Focus                                                                  |
| -- | ---------------------------- | ---------------------------------------------------------------------- |
| 01 | `01-basics.ts`               | First typed variable and `console.log`                                 |
| 02 | `02-primitives.ts`           | `number`, `string`, `boolean`, arrays, tuples, `any` / `unknown`, `void` |
| 03 | `03-inference.ts`            | Letting TypeScript infer types from values                             |
| 04 | `04-functions.ts`            | Typed params/returns, optional & default args, rest, arrow & function types |
| 05 | `05-objects.ts`              | Interfaces, optional & `readonly` properties, methods                  |
| 06 | `06-type-aliases.ts`         | `type` vs `interface`, unions for IDs, extending & merging             |
| 07 | `07-union-intersection.ts`   | `A \| B` (OR) and `A & B` (AND)                                        |
| 08 | `08-literal-types.ts`        | Exact string/number values; discriminating API response shapes         |
| 09 | `09-type-assertion-guards.ts`| `as` assertions, `typeof` / `instanceof` narrowing                     |
| 10 | `10-classes.ts`              | Classes, constructors, access modifiers, getters/setters               |
| 11 | `11-generics.ts`             | Reusable functions & interfaces with type parameters                   |
| 12 | `12-utility-types.ts`        | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`            |
| 13 | `13-enums.ts`                | Numeric, string, and `const` enums                                     |
| 14 | `14-async-await.ts`          | Typed `Promise`s, `async`/`await`, generic fetch helpers               |

Work through them **in order**. Later lessons assume earlier concepts.

## How to learn with this project

1. Open a lesson in `src/`, read the comments, change values, and notice what the type checker allows or rejects.
2. Recompile with `tsc` after edits.
3. Prefer learning from **type errors** — they are the main feedback loop.

## Who it’s for

- Beginners moving from JavaScript to TypeScript
- Developers refreshing core TS before a typed framework (e.g. Vue + TS)
- Anyone who wants small, annotated examples instead of a large sample app

## Tech notes

- TypeScript as a project and/or global dependency
- **Strict mode** enabled for safer defaults
- CommonJS output suitable for running with Node

---

**In short:** this repo is a progressive TypeScript learning kit — 14 short lessons covering primitives, functions, objects, unions, classes, generics, utility types, enums, and async code. Follow `src/01` through `src/14`, compile with `tsc`, and practice until you can confidently type everyday JavaScript patterns.
