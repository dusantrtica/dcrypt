import { crackBruteForce, crackByFreqAnalysis, decrypt, encrypt, freqencyAnalysis } from ".";

describe('Caesar', () => {
    it('Encrypts simple text', () => {
        expect(encrypt('ABC', 3)).toEqual('DEF')
    })

    it('Encrypts simple text that is near the end of alpha', () => {
        expect(encrypt('XYZ', 2)).toEqual('Z A')
    });

    it('Decrypts simple text', () => {
        expect(decrypt('DEF', 3)).toEqual('ABC')
    })

    it('Decrypts simple text that is near the end of alpha', () => {
        expect(decrypt('Z A', 2)).toEqual('XYZ')
    });

    it('decrypts encrypted text to the original text', () => {
        expect(decrypt(encrypt('DUSAN', 5), 5)).toEqual('DUSAN')
    })
});

describe('Crack Caeasar ', () => {
    it('cracks Caeasar and returns the key', () => {
        const expected = 'HELLO';
        const cipher = 'MJQQT'

        expect(crackBruteForce(cipher, expected)).toBe(5)
    })
})

describe('Frequency Analisys', () => {
    it('calculates frequency for simple string', () => {
        expect(freqencyAnalysis('aaa')).toEqual({
            'a': 3
        })
    })

    it('calculates frequency analysis for string with few characters', () => {
        expect(freqencyAnalysis('abca')).toEqual({
            'a': 2,
            'b': 1,
            'c': 1
        })
    })
})

describe('Crack By Freq. Analysis', () => {
    const text = `This is very long sentence and I have been working lately on this algorithm However for some reason i cannot make it work as I am obviosly missing some information but neverthelss i wont give up`.toUpperCase()

    it('should guess the key', () => {
        const key = Math.floor(Math.random() * 27)
        console.log('key is ', key)
        const encryptedText = encrypt(text, key)

        const guessedKey = crackByFreqAnalysis(encryptedText)

        expect(key).toEqual(guessedKey)
    });
})