const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const N = ALPHABET.length;

export const randomSequence = (message) => {
    const random = message.split('').map(() => Math.floor(Math.random() * N));

    return random
}

export const encrypt = (text, key) => {
    let cipherText = '';
    for (let i = 0; i < text.length; i++) {
        const keyAtPos = key[i];
        const charIndex = ALPHABET.indexOf(text[i]);

        cipherText += ALPHABET[(charIndex + keyAtPos) % N]
    }

    return cipherText
}

export const decrypt = (cipherText, key) => {
    let text = '';
    for (let i = 0; i < cipherText.length; i++) {
        const keyAtPos = key[i];
        const charIndex = ALPHABET.indexOf(cipherText[i])
        text += ALPHABET[(charIndex - keyAtPos) % N]
    }
    return text;
}
