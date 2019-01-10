const fs = require('fs')
const path = require('path')
const arg = require('minimist')(process.argv)
const name = arg['name']
String.prototype.firstUpperCase = function () {
  this[0] = this[0].toUpperCase()
  return this
}
if (!name || name === true) {
  console.error('no name assign!')
  process.emit('error', 1)
  return 1
} else {
  /** @type {string} */
  let _name = name.replace(/.*-(.*)/, '$1')
  let fnName = arg['fn'] || _name
  let beforeFn = `before(() => { console.time("${fnName}") })\n`
  let afterFn = `after(() => { console.timeEnd("${fnName}") })\n`
  let template = `module.exports.${fnName} = ${fnName}\n`
  let linkNode = `const ln = require('../lib/linkNode.js')\n`
  let spec = `const { ${fnName} } = require('../case/${name}.js')\n${arg['ln'] && linkNode || ''}const assert = require('assert')\n\ndescribe('${_name.firstUpperCase()} test', () => {\n${beforeFn + afterFn}\n})`
  fs.writeFileSync(path.resolve(__dirname, 'case', name + '.js'), template, { encoding: 'utf8' })
  fs.writeFileSync(path.resolve(__dirname, 'test', `${name}.spec.js`), spec, { encoding: 'utf8' })
  console.log('Create Success')
}
if (arg['help'] || arg['h']) {
  console.log('--name <filename>')
}