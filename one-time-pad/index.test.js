import { decrypt, encrypt, randomSequence } from ".";

describe('One time pad', () => {
    it('Encrypts the text', () => {
        const text = "THIS IS A MESSAGE";
        const seq = randomSequence(text)
        const cipherText = encrypt(text, seq)
        const decipherText = decrypt(cipherText, seq)

        expect(decipherText).toEqual(text)
    });
});