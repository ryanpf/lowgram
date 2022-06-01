describe("a string", () => {
    it("is delineated with a special character", () => {
        expect(sayMessage()).toEqual("big mood")
        expect(sayMessage()).toEqual(`big mood`)
        expect(sayMessage()).toEqual('big mood')

        function sayMessage() {
            // return a string
        }
    })

    it("can be constructed from smaller strings", () => {
        const meat = "pork"
        expect(`salty ${meat}`).toEqual("salty pork")
        expect(`the secret is ${revealSecret()}`).toEqual("the secret is 42")
        expect(sayMessage("goober")).toEqual(`goofy goober`)
        expect(sayMessage("gabe")).toEqual("goofy gabe")

        function sayMessage(noun) {
            // build a string using a template and the function parameter
        }

        function revealSecret() {
            return "42"
        }
    })
})