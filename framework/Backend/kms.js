const { KeyManagementServiceClient } = require('@google-cloud/kms');
const kmsClient = new KeyManagementServiceClient();

const projectId = 'newproject-428819';
const locationId = 'global';
const keyRingId = 'Test';
const keyId = 'asdw';

const getCryptoKeyPath = () => {
  return kmsClient.cryptoKeyPath(projectId, locationId, keyRingId, keyId);
};

const encrypt = async (plaintext) => {
  try {
    const [result] = await kmsClient.encrypt({
      name: getCryptoKeyPath(),
      plaintext: Buffer.from(plaintext).toString('base64'),
    });
    return result.ciphertext;
  } catch (error) {
    console.error('Error encriptando:', error.message);
    throw error;
  }
};

const decrypt = async (ciphertext) => {
  try {
    const [result] = await kmsClient.decrypt({
      name: getCryptoKeyPath(),
      ciphertext: ciphertext,
    });
    return Buffer.from(result.plaintext, 'base64').toString('utf8');
  } catch (error) {
    console.error('Error desencriptando:', error.message);
    throw error;
  }
};

module.exports = { encrypt, decrypt };
