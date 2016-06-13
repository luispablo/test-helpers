module.exports = function (params) {
	return function (assert) {
		return new Promise(function (resolve, reject) {
			if (params.error) {
				reject(params.error);
			} else {
				var response = {};

				if (params.json) response.json = function () {
					return new Promise(function (resolveJSON) { resolveJSON(params.json); });
				}
				response.status = params.status || 200;
				resolve(response);
			}
		});
	};
};
