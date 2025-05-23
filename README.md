# @pnpm/types-fixer

> A hook for fixing TypeScript issues

If you have issues in a TypeScript project that uses pnpm, this config dependency might help. It fixes packages in your dependencies by adding missing `@types/` dependencies to them during installation.

## Installation

```
pnpm add --config @pnpm/types-fixer
```

This will add `@pnpm/types-fixer` to the [configDependencies](https://pnpm.io/config-dependencies) field in your `pnpm-workspace.yaml`.

## Usage

If you don't have a [pnpmfile](https://pnpm.io/pnpmfile) in your project, then add this to `pnpm-workspace.yaml`:

```yaml
pnpmfile: node_modules/.pnpm-config/@pnpm/types-fixer/pnpmfile.cjs
```

If you have a `.pnpmfile.cjs` already in your project, then you can reexport the `readPackage` hooks from `@pnpm/types-fixer`. This should be your `.pnpmfile.cjs`:

```js
module.exports = {
  hooks: {
    ...require('.pnpm-config/@pnpm/types-fixer/pnpmfile.cjs').hooks,
    // Other hooks in your project
  }
}
```

Alternatively, you may have other changes in your `readPackage` hook:

```js
const { readPackage: fixTypes } = require('.pnpm-config/@pnpm/types-fixer/pnpmfile.cjs').hooks

module.exports = {
  hooks: {
    readPackage (pkg) {
      // ...
      return fixTypes(pkg)
    }
  }
}
```

## License

MIT
