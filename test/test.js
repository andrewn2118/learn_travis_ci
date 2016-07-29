var app = require('../app.js');
var expect = require('chai').expect;

describe('add function', function() {
  it('should return 2', function() {
    expect(app.add(1, 1)).to.equal(2);
  });

  it('should return 3', function() {
    expect(app.add(1, 1)).to.equal(3);
  });
});