import { expect } from 'chai';


import { sumCalculator, isPalindrome } from '../src/index.js'

describe('Sum', function () {
  it('should calculate the sum', function () {
    expect(sumCalculator(3, 4)).to.be.equal(7);
  });
});

describe('Palindrome', function () {
  it('should check if a string is palindrome', function () {
    expect(isPalindrome("abba")).to.be.true;
  });
});


describe("parse numbers", function(){

  it("returns array when passed comma separated list of numbers", function(){
     let items = parse("5,8,0,17,6,4,9,3", ",");
     expect(Array.isArray(items)).toBeTrue();
  });

});