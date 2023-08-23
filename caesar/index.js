
const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const N = ALPHABET.length;

const encryptLetter = (key) => letter => ALPHABET[
    (ALPHABET.indexOf(letter) + key) % N
]

const decryptLetter = (key) => letter => ALPHABET[
    (ALPHABET.indexOf(letter) - key + N) % N
]

export const encrypt = (text, key) => {
    return text.split('').map(encryptLetter(key)).join('');
}

export const decrypt = (text, key) => {
    return text.split('').map(
        decryptLetter(key)
    ).join('');
}

export const crackBruteForce = (text, expected) => {
    for (let i = 0; i < N; i++) {
        if (decrypt(text, i) === expected) {
            return i;
        }
    }
}

export const freqencyAnalysis = (text) => {
    return text.split('').filter(c => c !== ' ').reduce((acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] || 0) + 1
    }), {})
}

export const crackByFreqAnalysis = (encryptedText) => {
    /*
    The most common letter in English is E. As Casear algo simply
    slides (moves) letters by a constant factor, if you get the most frequenst
    letter in an encrypted text it is quite likely that letter will correspods to
    'E' translated by that constant factor which is actually a key we want to get (crack).
    Algorithms of such type are called information leaking.
    */
    const histogram = freqencyAnalysis(encryptedText)
    const sortedHistogram = Object.entries(histogram)
        .sort(([, a], [, b]) => b - a)

    const mostFrequentLetter = sortedHistogram[0][0]
    const indexOfE = ALPHABET.indexOf('E')
    const indexOfMostFrequentLetter = ALPHABET.indexOf(mostFrequentLetter)

    const key = Math.abs(indexOfMostFrequentLetter - indexOfE)

    return key
}