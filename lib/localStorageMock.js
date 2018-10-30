const localStorageMock = function localStorageMock () {
	const storage = {};

	return {
		setItem (key, value) { storage[key] = value || ''; },
		getItem (key) { return storage[key] || null; },
		removeItem (key) { delete storage[key]; },
		get length() { return Object.keys(storage).length; },
		key(i) { return Object.keys(storage)[i] || null; }
	};
};

module.exports = localStorageMock;
