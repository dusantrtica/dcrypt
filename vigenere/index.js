const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const N = ALPHABET.length;

const encryptLetter = (key, letter) => ALPHABET[
    (ALPHABET.indexOf(letter) + key) % N
]

const decryptLetter = (key, letter) => ALPHABET[
    (ALPHABET.indexOf(letter) - key + N) % N
]

export const encrypt = (text, secretWord) => {
    const n = secretWord.length;
    return text.split('').map((letter, index) => {
        const key = ALPHABET.indexOf(secretWord[index % n])
        return encryptLetter(key, letter)
    }).join('');
}

export const decrypt = (text, secretWord) => {
    const n = secretWord.length;
    return text.split('').map((letter, index) => {
        const key = ALPHABET.indexOf(secretWord[index % n])
        return decryptLetter(key, letter)
    }).join('');
}