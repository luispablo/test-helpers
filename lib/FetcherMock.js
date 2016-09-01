module.exports = function (params) {
	var fetcher = function (URL, options) {
		fetcher.invokedURL = URL;
		fetcher.providedOptions = options;

		return new Promise(function (resolve, reject) {
			if (params.error) {
				reject(params.error);
			} else {
				var response = {};

				if (params.json) response.json = function () {
					return new Promise(function (resolveJSON) { resolveJSON(params.json); });
				}
				if (params.text) response.text = function () {
					return new Promise(function (resolveText) { resolveText(params.text); });
				}
				response.status = params.status || 200;
				resolve(response);
			}
		});
	};

	return fetcher;
};
