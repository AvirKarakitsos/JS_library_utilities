const pkg = require("./package.json")
const multi = require("@rollup/plugin-multi-entry")

let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} licence */`


let formats = ["iife","es","cjs"]


module.exports = formats.map(function(format) {
    return {
        input: "utils/*.js",
        output: {
            file: `build/package.${format}.js`,
            format: format,
            name: "Utilities",
            banner: banner,
            exports: "auto"
        },
        plugins: [multi()]
    }
})
