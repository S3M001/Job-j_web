import crypto from 'crypto-js'

const encode = (encodeData) => {
    const encrypted = crypto.AES.encrypt(encodeData, 'qwepoiasdlkjzxcmnb')
    // console.log(encrypted)
    return encrypted
}

const decode = (decodeData) => {
    const decrypted = crypto.AES.decrypt(decodeData, 'qwepoiasdlkjzxcmnb')
    return Number(decrypted)
}

const cryptoObject = {
    encode,
    decode,
}

export default cryptoObject;
