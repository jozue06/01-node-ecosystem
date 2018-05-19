'use strict';
const arithmetic = require('../lib/arithmetic.js');
describe('Arithmetic Function', () => {

  it('should return null if passed non number', () =>{

    const expected = null;

    const actual = arithmetic.addition();

    expect(actual).toBe(expected);
  });

  it('add() should return sum of [a+b] if passed numbers', () =>{

    const expected = 2;

    const actual = arithmetic.addition(1,1);

    expect(actual).toBe(expected);
  });

  it('should return null if passed non number', () =>{

    const expected = null;

    const actual = arithmetic.subtraction();

    expect(actual).toBe(expected);
  });

  it('sub() should return sum of [a-b] if passed numbers', () =>{

    const expected = 1;

    const actual = arithmetic.subtraction(2,1);

    expect(actual).toBe(expected);
  });
  
});


// bracket notation (!) 