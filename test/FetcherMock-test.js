var test = require("tape");
var FetcherMock = require("../lib/FetcherMock");

test("FetcherMock - HTTP 200", function (assert) {
	var person = { name: "Tom" };
	var fetcher = FetcherMock({ json: person });
	assert.plan(1);
	fetcher().then(function (res) {
		res.json().then(function (obj) { assert.deepEqual(obj, person, "The given object"); });
	});
});

test("FetcherMock - HTTP 404", function (assert) {
	var NOT_FOUND = 404;
	var fetcher = FetcherMock({ status: NOT_FOUND });
	assert.plan(1);
	fetcher("").then(function (response) { assert.equal(response.status, NOT_FOUND, "The expected HTTP code is 404"); });
});

test("FetcherMock - reject", function (assert) {
	var error = { code: 1, message: "Network error" };
	var fetcher = FetcherMock({ error: error });
	assert.plan(1);
	fetcher("").catch(function (err) { assert.deepEqual(err, error, "The given error is thrown"); });
});

test("FetcherMock - invokedURL", function (assert) {
	var fetcher = FetcherMock();
	var URL = "http://test.sample";
	fetcher(URL);
	assert.equal(fetcher.invokedURL, URL, "The invoked URL stored in the fetcher");
	assert.end();
});

test("FetcherMock - providedOptions", function (assert) {
	var fetcher = FetcherMock();
	var options = { test: "a", dummy: 3 };
	fetcher("some url", options);
	assert.deepEqual(fetcher.providedOptions, options, "The second param given to fetch");
	assert.end();
});
