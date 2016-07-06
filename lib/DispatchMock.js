const DispatchMock = function (assert, expectedActions, debug) {
	return function (action) {
		if (debug) {
			assert.comment(`Dispateched action: ${action.type}`);
		}

		var filteredExpectedActions = expectedActions.filter(a => action.type.indexOf(a.type) >= 0);

		if (filteredExpectedActions && filteredExpectedActions.length > 0) {
			if (filteredExpectedActions.length === 1) {
				var expectedAction = filteredExpectedActions[0];

				if (expectedAction.payload) {
					assert.equal(expectedAction.payload, action.payload, expectedAction.type +" expected payload");
				} else {
					assert.pass("Action "+ expectedAction.type +" triggered ("+ action.type +")");
				}
			} else {
				assert.fail("Action "+ action.type +" matches "+ filteredExpectedActions.length +" expected actions");
			}
		} else {
			assert.fail("Action "+ action.type +" not expected");
		}
	};
};

module.exports = DispatchMock;
