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