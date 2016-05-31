const test = require("tape");
const index = require("../index");
const DispatchMock = require("../lib/DispatchMock");
const FetcherMock = require("../lib/FetcherMock");
const LocalStorageMock = require("../lib/LocalStorageMock");

test("index - imports", assert => {
	assert.equal(index.DispatchMock, DispatchMock, "require dispatch mock");
	assert.equal(index.FetcherMock, FetcherMock, "require fetcher mock");
	assert.equal(index.LocalStorageMock, LocalStorageMock, "require local storage mock");
	assert.end();
});
