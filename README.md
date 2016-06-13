# test-helpers
Some small and simple helpers for my unit tests

# Content

## DispatchMock

How to use

```javascript
import { DispatchMock } from "@luispablo/test-helpers";

...

const expectedActions = ["set item", "remove item"]; // The redux actions you want dispatched
const dispatch = DispatchMock(assert, expectedActions, true);
// the first param is the tape assert Object
// the last param is optional, if set to true makes an assert.comment with the actions dispatched
```

## FetcherMock

This component is a function that works as the new fetch API function, so when your code calls it as ```fetcher("url")``` it will return a promise that resolves or reject, based on the params you provide.
So, first do

```javascript
import { FetcherMock } from "@luispablo/test-helpers";
```

And then, for an **HTTP 200** response with a JSON body do

```javascript
const fetcher = FetcherMock({ json: { name: "Tom" } });
```

So, ```fetch("anyURL")``` will resolve a response with a ```json()``` function that returns ```{ name: "Tom" }```.

To resolve the promise, but with different HTTP code do

```javascript
const fetcher = FetcherMock({ status: 404 });
```

This will still resolve when you invoke it, but giving you a response object with the status property in 404.

And finally, if you want it to reject (as in a network error) do

```javascript
const fetcher = FetcherMock({ error: { code: 1, message: "Network error" } });
```

This will fall into the ```catch``` part of the promise, with an **error** param with code 1 and the message shown above.

## LocalStorageMock

This is a HTML 5 window local storage mock, to use in your tests. Just do:

```javascript
import { LocalStorageMock } from "@luispablo/test-helpers";

...

// and then
const storage = LocalStorageMock();
// and you're done!
```
