function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('You did not entered numbers');
    }
  });
}

addPromise(1, "a").then(function(result) {
  console.log('promise success', result);
}, function(err) {
    console.log('promise error', err);
});
