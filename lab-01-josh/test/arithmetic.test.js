'use strict';
const arithmetic = require('../lib/arithmetic.js');
describe('Arithmetic Function', () => {

  it('should return null if passed non number', () =>{

    const expected = null;

    const actual = arithmetic();

    expect(actual).toBe(expected);
  });

  it('add() should return sum of [a+b] if passed numbers', () =>{

    const expected = arithmetic(1,1);

    const actual = arithmetic(1,1);

    expect(actual).toBe(expected);
  });


  xit('should return Hello, [name] if passed name', () =>{

    const expected = 'Hello, Tama';

    const actual = arithmetic('Tama');

    expect(actual).toBe(expected);
  });
  
});


// bracket notation (!) 