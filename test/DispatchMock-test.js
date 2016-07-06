var test = require("tape");
var DispatchMock = require("../lib/DispatchMock");

var TEST_TYPE = "test type";
var TEST_PAYLOAD = "test payload";

test("DispatchMock - check action triggered", function (assert) {
	var dispatch = DispatchMock(assert, [{ type: TEST_TYPE }]);
	dispatch({type: TEST_TYPE});
	assert.end();
});

test("DispatchMock - check action payload", function (assert) {
	var dispatch = DispatchMock(assert, [{ type: TEST_TYPE, payload: TEST_PAYLOAD }]);
	dispatch({type: TEST_TYPE, payload: TEST_PAYLOAD});
	assert.end();
});

// const DispatchMock = function (assert, actions, debug) {
// 	return function (action) {
// 		if (debug) assert.comment(`Dispateched action: ${action.type}`);
// 		assert.ok(actions.some(a => action.type.indexOf(a) >= 0), `Action '${action.type}' triggered`);
// 	};
// };
