const {formatShort} = require("../build/package.cjs")

describe('formatDate', () => {
    test('fomratShort function', () => {
        let testDate = new Date(1990,8,6)
      
        expect(formatShort(testDate,{date: "wmy", space: "-", zero: true})).toBe("06-09-1990");
    })
})

