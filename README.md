# test-helpers
Some small and simple helpers for my unit tests

# Content

## DispatchMock

How to use

```
import { DispatchMock } from "@luispablo/test-helpers";

...

const expectedActions = ["set item", "remove item"]; // The redux actions you want dispatched
const dispatch = DispatchMock(assert, expectedActions, true);
// the first param is the tape assert Object
// the last param is optional, if set to true makes an assert.comment with the actions dispatched
```

## FetcherMock

How to use

```
import { FetcherMock } from "@luispablo/test-helpers";

...
const response = { item: "value" };
const fetcher = FetcherMock(response);

// fetcher is a function that works as the new fetch API function, so when your
// code calls it as 'fetcher("url")' it will return a promise that resolves to
// a response with status 200, and a json() method that returns the response variable written here when invoked.
```

## LocalStorageMock

This is a HTML 5 window local storage mock, to use in your tests. Just do:

```
import { LocalStorageMock } from "@luispablo/test-helpers";

...

// and then
const storage = LocalStorageMock();
// and you're done!
```
