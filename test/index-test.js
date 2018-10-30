const test = require("tape");
const index = require("../index");
const dispatchMock = require("../lib/dispatchMock");
const fetcherMock = require("../lib/fetcherMock");
const localStorageMock = require("../lib/localStorageMock");

test("index - imports", assert => {
	assert.equal(index.dispatchMock, dispatchMock, "require dispatch mock");
	assert.equal(index.fetcherMock, fetcherMock, "require fetcher mock");
	assert.equal(index.localStorageMock, localStorageMock, "require local storage mock");
	assert.end();
});
