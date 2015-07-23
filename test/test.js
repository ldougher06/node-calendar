var should = require("chai").should();

describe('Mocha + Chai', function() {
  it('thruthiness', function () {
    true.should.equal(true);
    false.should.equal(false);
  });
});
