var test = require("tape");
var fetcherMock = require("../lib/fetcherMock");

test("fetcherMock - HTTP 200", function (assert) {
	var person = { name: "Tom" };
	var fetcher = fetcherMock({ json: person });
	assert.plan(1);
	fetcher().then(function (res) {
		res.json().then(function (obj) { assert.deepEqual(obj, person, "The given object"); });
	});
});

test("fetcherMock - text()", function (assert) {
	var dummyText = "Some dummy text";
	var fetcher = fetcherMock({ text: dummyText });
	assert.plan(1);
	fetcher().then(function (res) {
		res.text().then(function (data) { assert.equal(data, dummyText, "The expected text"); });
	});
});

test("fetcherMock - HTTP 404", function (assert) {
	var NOT_FOUND = 404;
	var fetcher = fetcherMock({ status: NOT_FOUND });
	assert.plan(1);
	fetcher("").then(function (response) { assert.equal(response.status, NOT_FOUND, "The expected HTTP code is 404"); });
});

test("fetcherMock - reject", function (assert) {
	var error = { code: 1, message: "Network error" };
	var fetcher = fetcherMock({ error: error });
	assert.plan(1);
	fetcher("").catch(function (err) { assert.deepEqual(err, error, "The given error is thrown"); });
});

test("fetcherMock - invokedURL", function (assert) {
	var fetcher = fetcherMock();
	var URL = "http://test.sample";
	fetcher(URL);
	assert.equal(fetcher.invokedURL, URL, "The invoked URL stored in the fetcher");
	assert.end();
});

test("fetcherMock - providedOptions", function (assert) {
	var fetcher = fetcherMock();
	var options = { test: "a", dummy: 3 };
	fetcher("some url", options);
	assert.deepEqual(fetcher.providedOptions, options, "The second param given to fetch");
	assert.end();
});
