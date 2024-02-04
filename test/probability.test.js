const {Proba} = require("../build/package.cjs")

test('Counting word frequencies in a string', () => {
    const result1 = Proba.wordFrequency(
      'The quick brown fox jumps over the lazy dog.'
    )
  
    expect(result1.get('the')).toBe(2)
    expect(result1.get('quick')).toBe(1)
    expect(result1.get('brown')).toBe(1)
    expect(result1.get('fox')).toBe(1)
    expect(result1.get('jumps')).toBe(1)
    expect(result1.get('over')).toBe(1)
    expect(result1.get('lazy')).toBe(1)
    expect(result1.get('dog')).toBe(1)
})