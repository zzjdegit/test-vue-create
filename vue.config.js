module.exports = {
  outputDir: 'dist',
  // 配置自己域名前
  // publicPath: process.env.NODE_ENV === 'production' ? '/test-vue-create/' : '/'
  // 配置自己域名后
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}