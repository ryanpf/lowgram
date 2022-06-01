describe("code", () => {
    it("transforms input into output through functions", () => {
        function addOne(input) {
            return input + 1
        }

        function giveIdentical(input) {
            // return the input unchanged
        }

        expect(addOne(1)).toEqual(2)
        expect(giveIdentical(1)).toEqual(1)
    })

    it("can call functions within functions", () => {
        function addOne(input) {
            return input + 1
        }
        expect(addOne(1)).toEqual(2)
        expect(givePlusOne(1)).toEqual(2)

        function givePlusOne(input) {
            // call addOne() from here!
        }
    })

    it("limits access to functions, called scope", () => {
        // These tests are functions, and therefore separate scopes
        // addOne is not in this scope! so we test for an error ("throw")
        expect(() => addOne(1)).toThrow()
        expect(givePlusOne(1)).toEqual(2)

        // you can declare a function named givePlusOne in this scope
    })
})