const FileIO = require('../fileIO');
const fs = require("fs");


jest.mock("fs")

describe('FileIO', () => {
    describe('read', () => {
        it("should call fs.readFileSync with the passed in 'file' argument", () => {
            // TODO: Your code here
            const fileIO = new FileIO();
            const newFile = "meessage.txt";
            let data;
            fs.readFileSync.mockReturnValue("Hello World!")
            data = fileIO.read(newFile);

            expect(data).toEqual("Hello World!")
        });
    });

    describe('write', () => {
        it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
            // TODO: Your code here
        });
    });
});