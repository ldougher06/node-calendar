var should = require("chai").should();

describe('Mocha + Chai', function() {
  it('thruthiness', function () {
    true.should.equal(true);
    false.should.equal(false);
  });
});

describe('Array', function () {
  describe('dayOfMonth', function () {
    it('should return the current day of the month', function () {
      var array = [0, 1, 2, 3, 4, 5, 6];
      var output = array.filter(function (item) {
        return item % 2;
      });
      output.should.eql([1, 3, 5]);
    });
  });
});

