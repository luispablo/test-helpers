const test = require("tape");
const LocalStorageMock = require("../lib/LocalStorageMock");

test("LocalStorageMock - setItem / getItem", assert => {
	const storage = LocalStorageMock();
	assert.ok(storage.getItem("key") === null, "First it's null");
	storage.setItem("key", "value");
	assert.equal(storage.getItem("key"), "value", "Now the value is set");
	assert.end();
});

test("LocalStorageMock - removeItem", assert => {
	const storage = LocalStorageMock();
	storage.setItem("key", "value");
	assert.ok(storage.getItem("key") !== null, "It's set");
	storage.removeItem("key");
	assert.ok(storage.getItem("key") === null, "Now it's null");
	assert.end();
});
