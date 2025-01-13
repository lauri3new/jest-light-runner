module.exports = {
  USE_SOURCE_MAPS: process.env.USE_SOURCE_MAPS === 'true',
  replacePathWithSourcePath: path => path.replace(/\/dist\//, '/src/').replace('.js', '.ts'),
  replacePathWithSourceMapPath: path => path.replace('.js', '.js.map')
}