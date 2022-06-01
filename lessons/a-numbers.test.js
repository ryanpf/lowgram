describe("a number", () => {
    it("can be added", () => {
        expect(add(4, 5)).toEqual(9)

        function add(a, b) {
            // use the + operator
        }
    })

    it("can be subtracted", () => {
        expect(subtract(8, 5)).toEqual(3)

        function subtract(minuend, subtrahend) {
            // use the - operator
        }
    })

    it("can be multiplied", () => {
        expect(multiply(8, 5)).toEqual(40)

        function multiply(a, b) {
            // use the * operator
        }
    })

    it("can be divided", () => {
        expect(divide(8, 4)).toEqual(2)

        function divide(dividend, divisor) {
            // use the / operator
        }
    })
})