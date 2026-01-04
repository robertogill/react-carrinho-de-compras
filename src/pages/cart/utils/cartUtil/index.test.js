import { add,subtract } from ".";

describe("addCartUtil", () => {

    it("deve adicionar um item", () => {

        //Arrange
        const inpu1 = undefined;
        const input2 = 0;
        const input3 = 1;
        const input4 = null;

        //Act
        const length1 = add(inpu1);
        const length2 = add(input2);
        const length3 = add(input3);
        const length4 = add(input4);

        //Asert
        expect(length1).toEqual('1');
        expect(length2).toEqual('1');
        expect(length3).toEqual('2');
        expect(length4).toEqual('1');
    });
});

describe("subtractCartUtil", () => {

    it("deve subtrair um item", () => {

        //Arrange
        const inpu1 = undefined;
        const input2 = 0;
        const input3 = 1;
        const input4 = null;
        const input5 = 2;

        //Act
        const length1 = subtract(inpu1);
        const length2 = subtract(input2);
        const length3 = subtract(input3);
        const length4 = subtract(input4);
        const length5 = subtract(input5);

        //Asert
        expect(length1).toEqual('0');
        expect(length2).toEqual('0');
        expect(length3).toEqual('0');
        expect(length4).toEqual('0');
        expect(length5).toEqual('1');
    });
});