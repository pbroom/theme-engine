const path = require('path');

module.exports = function (buildOptions) {
	return {
		...buildOptions,
		define: {
			global: 'window',
		},
	};
};
