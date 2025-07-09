# @pnpm/plugin-types-fixer

> A hook for fixing TypeScript issues

If you have issues in a TypeScript project that uses pnpm, this config dependency might help. It fixes packages in your dependencies by adding missing `@types/` dependencies to them during installation.

## Installation

```
pnpm add --config @pnpm/plugin-types-fixer
```

This will add `@pnpm/plugin-types-fixer` to the [configDependencies](https://pnpm.io/config-dependencies) field in your `pnpm-workspace.yaml`.

## License

MIT
