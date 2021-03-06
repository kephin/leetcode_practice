/*
520. Detect Capital

Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:

1. All letters in this word are capitals, like "USA".
2. All letters in this word are not capitals, like "leetcode".
3. Only the first letter in this word is capital, if it has more than one letter, like "Google".
Otherwise, we define that this word doesn 't use capitals in a right way.
*/

const expect = require('expect');

describe('520 Detect Capital', () => {
  it('all upper case returns true', () => {
    //arrange
    const input = 'USA';
    const expected = true;
    //act
    const actual = detectCapitalUse(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('all lower case returns true', () => {
    //arrange
    const input = 'leetcode';
    const expected = true;
    //act
    const actual = detectCapitalUse(input);
    //assert
    expect(actual).toBe(expected);
  });

  it('only the first letter is capital returns true', () => {
    //arrange
    const input = 'Google';
    const expected = true;
    //act
    const actual = detectCapitalUse(input);
    //assert
    expect(actual).toBe(expected);
  });
});

const detectCapitalUse = word => word.toUpperCase() === word || word.slice(1).toLowerCase() === word.slice(1);
