import { decrypt, encrypt } from ".";

describe('Vigenere Cipher', () => {
    const secretWord = 'SECRET';

    it('encrypts text', () => {
        const text = 'THISISAMESSAGE';

        expect(encrypt(text, secretWord)).toEqual('LLKJMLSQGJWTYI')
    })

    it('decrypts text properly', () => {
        const encryptedText = 'LLKJMLSQGJWTYI'
        expect(decrypt(encryptedText, secretWord)).toEqual('THISISAMESSAGE')
    });

    it('decryptes encrypted text properly', () => {
        const text = 'TODAYISABEAUTIFULDAY';
        expect(decrypt(encrypt(text, secretWord), secretWord)).toEqual(text)
    })
});