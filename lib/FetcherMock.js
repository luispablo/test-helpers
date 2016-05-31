module.exports = function (response) {
	const okResponse = { json: () => response, status: 200 };

	return function () {
		return new Promise(function (resolve, reject) {
			resolve(okResponse);
		});
	};
};
