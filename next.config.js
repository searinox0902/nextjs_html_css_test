/**
 * @type {import('next').NextConfig}
 */

module.exports = (_phase, { defaultConfig }) => {
    const plugins = [withStaticImport, withBundleAnalyzer, withCustomWebpack]
    return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...config })
}