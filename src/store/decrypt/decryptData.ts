import CryptoJS from "crypto-js";

const SECRET_KEY = 'my-secret-key';

// Función para encriptar datos
export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (ciphertext: string): any => {
  if (!ciphertext) return ciphertext;
  
  try {
    // Si es un objeto JSON stringificado (como el user)
    if (ciphertext.startsWith("{") || ciphertext.startsWith("[")) {
      return JSON.parse(ciphertext);
    }
    
    // Si parece un token JWT (3 partes separadas por puntos)
    if (ciphertext.split('.').length === 3) {
      return ciphertext;
    }

    // Intenta desencriptar
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    
    // Intenta parsear si es JSON
    try {
      return JSON.parse(decrypted);
    } catch {
      return decrypted || ciphertext;
    }
  } catch (error) {
    console.error("Advertencia en desencriptación:", error);
    return ciphertext;
  }
};





