const { hooks } = require('./pnpmfile.cjs')

test('type dependency is added to prod deps', () => {
  const manifest = hooks.readPackage({
    dependencies: {
      react: '16',
    },
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {},
  })
  expect(manifest).toStrictEqual({
    dependencies: {
      '@types/react': '1',
      react: '16',
    },
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {},
  })
})

test('type dependency is added to peer deps', () => {
  const manifest = hooks.readPackage({
    dependencies: {},
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      react: '16',
    },
  })
  expect(manifest).toStrictEqual({
    dependencies: {},
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      '@types/react': '*',
      react: '16',
    },
  })
})

test('existing type dependency is not replaced in peer deps', () => {
  const manifest = hooks.readPackage({
    dependencies: {},
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      '@types/react': '20',
      react: '16',
    },
  })
  expect(manifest).toStrictEqual({
    dependencies: {},
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      '@types/react': '20',
      react: '16',
    },
  })
})

test('existing type dependency is not replaced in prod deps', () => {
  const manifest = hooks.readPackage({
    dependencies: {
      '@types/react': '20',
    },
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      react: '16',
    },
  })
  expect(manifest).toStrictEqual({
    dependencies: {
      '@types/react': '20',
    },
    devDependencies: {
      '@types/react': '1',
    },
    peerDependencies: {
      react: '16',
    },
  })
})
