module.exports = {
  hooks: { readPackage },
}

function readPackage (pkg) {
  for (const [devDepName, devDepRange] of Object.entries(pkg.devDependencies)) {
    if (
      devDepName.startsWith('@types/') &&
      !pkg.dependencies[devDepName] &&
      !pkg.peerDependencies[devDepName]
    ) {
      const pkgName = devDepName.substring('@types/'.length)
      if (pkg.dependencies[pkgName]) {
        pkg.dependencies[devDepName] = devDepRange
      } else if (pkg.peerDependencies[pkgName]) {
        pkg.peerDependencies[devDepName] = '*'
      }
    }
  }
  return pkg
}
