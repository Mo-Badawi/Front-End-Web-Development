import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

describe("shuffle()", () => {
    it("should return a permutation of the array", () => {
        const original = [1, 2, 3, 4, 5];
        const result = shuffle(original);

        expect(result.length).to.equal(original.length);

        expect([...result].sort()).to.deep.equal([...original].sort());

        expect(result).to.not.equal(original);
    });
});
