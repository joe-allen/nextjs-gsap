// next.config.js
const withTM = require('next-transpile-modules');

module.exports = withTM({
	// pass the modules you would like to see transpiled
	transpileModules: ['gsap']
});