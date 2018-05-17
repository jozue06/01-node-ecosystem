'use strict';
const greet = require('../lib/greet.js');

describe('Greet Function', ()=>{

  it('should return null if passed non string', () =>{

    const expected = null;

    const actual = greet();

    expect(actual).toBe(expected);
  });

  it('should return [string] if passed string', () =>{

    const expected = null;

    const actual = greet(0);

    expect(actual).toBe(expected);
  });


  it('should return Hello, [name] if passed name', () =>{

    const expected = 'Hello, Tama';

    const actual = greet('Tama');

    expect(actual).toBe(expected);
  });
  
});


// bracket notation (!) 