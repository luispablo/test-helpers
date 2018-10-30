var test = require("tape");
var dispatchMock = require("../lib/dispatchMock");

var TEST_TYPE = "test type";
var TEST_PAYLOAD = "test payload";

test("dispatchMock - check action triggered", function (assert) {
	var dispatch = dispatchMock(assert, [{ type: TEST_TYPE }]);
	dispatch({type: TEST_TYPE});
	assert.end();
});

test("dispatchMock - check action payload", function (assert) {
	var dispatch = dispatchMock(assert, [{ type: TEST_TYPE, payload: TEST_PAYLOAD }]);
	dispatch({type: TEST_TYPE, payload: TEST_PAYLOAD});
	assert.end();
});

test("dispatchMock - show payload of unexpected action", function (assert) {
	assert.plan(1);
	var assertMock = {
		fail: function (message) {
			assert.equal(message, "Action test type not expected (payload: {\"message\":\"test payload\"})", "Includes the payload in the reported message");
		}
	};
	var dispatch = dispatchMock(assertMock, []);
	dispatch({ type: TEST_TYPE, payload: { message: TEST_PAYLOAD } });
});
