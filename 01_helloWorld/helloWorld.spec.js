const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, You!"', function() {
    expect(helloWorld()).toEqual('Hello, You!');
  });
});
