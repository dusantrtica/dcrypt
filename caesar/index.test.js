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
    const text = `Be at miss or each good play home they It leave taste mr in it fancy. She son lose does fond bred gave lady get Sir her company conduct expense bed any Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.
        Extended kindness trifling remember he confined outlived if Assistance sentiments yet unpleasing say Open they an busy they my such high.An active dinner wishes at unable hardly no talked on.Immediate him her resolving his favourite.Wished denote abroad at branch at.
        It if sometimes furnished unwilling as additions so Blessing resolved peculiar fat graceful ham Sussex on at really ladies in as elinor Sir sex opinions age properly extended Advice branch vanity or do thirty living.Dependent add middleton ask disposing admitting did sportsmen sportsman.
        Do greatest at in learning steepest Breakfast extremity suffering one who all otherwise suspected He at no nothing forbade up moments Wholly uneasy at missed be of pretty whence John way sir high than law who week.Surrounded prosperous introduced it if is up dispatched.Improved so strictly produced answered elegance is
        In reasonable compliment favourable is connection dispatched in terminatedDo esteem object we called father excuse remove So dear real on like more it Laughing for two families addition expenses surprise the If sincerity he to curiosity arranging Learn taken terms be as Scarcely mrs produced too removing new old`.toUpperCase()

    it('should guess the key', () => {
        const key = Math.floor(Math.random() * 27)
        const encryptedText = encrypt(text, key)

        const guessedKey = crackByFreqAnalysis(encryptedText)

        expect(decrypt(encryptedText, key)).toBe(text)

        expect(key).toEqual(guessedKey)
    });
})