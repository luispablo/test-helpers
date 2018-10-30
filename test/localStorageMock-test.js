const test = require("tape");
const localStorageMock = require("../lib/localStorageMock");

test("localStorageMock - setItem / getItem", assert => {
	const storage = localStorageMock();
	assert.ok(storage.getItem("key") === null, "First it's null");
	storage.setItem("key", "value");
	assert.equal(storage.getItem("key"), "value", "Now the value is set");
	assert.end();
});

test("localStorageMock - removeItem", assert => {
	const storage = localStorageMock();
	storage.setItem("key", "value");
	assert.ok(storage.getItem("key") !== null, "It's set");
	storage.removeItem("key");
	assert.ok(storage.getItem("key") === null, "Now it's null");
	assert.end();
});
