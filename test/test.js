import { expect } from 'chai';


import { sumCalculator, isPalindrome } from '../src/index.js'
/*
describe('Test Sum Calculator Function', function () {
  it('should calculate the sum', function () {
    expect(sumCalculator(4,12)).to.equal(16);
  });
});
*/
describe('Palindrome', function () {
  it('should check if a string is palindrome', function () {
    expect(isPalindrome("abba")).to.be.true;
  });

  it('should check if a string is not palindrome', function () {
    expect(isPalindrome("ab4665")).to.be.false;
  });

  it('should check if the string is', function () {
    expect(isPalindrome("")).to.be.true;
  });

  it('should check if the string is null', function () {
    expect(isPalindrome(null)).to.throw();
  });
});

/*
describe("parse numbers", function(){

  it("returns array when passed comma separated list of numbers", function(){
     let items = parse("5,8,0,17,6,4,9,3", ",");
     expect(Array.isArray(items)).toBeTrue();
  });

});
*/