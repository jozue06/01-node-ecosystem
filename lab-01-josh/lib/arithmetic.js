'use strict';

module.exports = exports = {};


exports.addition = function add(a,b) {

  if(typeof a !== 'number' && typeof b !== 'number'){
    return null;
  }
  return (a+b);

};

exports.subtraction = function sub(a,b) {
  if(typeof a !== 'number' && typeof b !== 'number'){
    return null;
  }
  return (a-b);

};