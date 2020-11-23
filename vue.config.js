module.exports = {
  productionSourceMap: false,
  pwa: {
    name: 'IEEEMySIGHT4Rehab Web App',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
