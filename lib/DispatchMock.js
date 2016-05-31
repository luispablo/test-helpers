const DispatchMock = function (assert, actions, debug) {
	return function (action) {
		if (debug) assert.comment(`Dispateched action: ${action.type}`);
		assert.ok(actions.some(a => action.type.indexOf(a) >= 0), `Action '${action.type}' triggered`);
	};
};

module.exports = DispatchMock;
