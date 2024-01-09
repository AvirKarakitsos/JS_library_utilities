const {titleUpperCase} = require("../build/package.cjs")

describe('formatString', () => {
    
    it('return the string with upper case for the first letter of each word', () => {
      expect(titleUpperCase('premier test avec jest')).toBe('Premier Test Avec Jest');
    });
    
    it('return the string with upper case for the first letter of each word', () => {
      expect(titleUpperCase('premier test avec jest')).not.toBe('Premier Test avec Jest');
    });

  });