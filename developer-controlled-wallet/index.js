import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

import forge from "node-forge";

const API_KEY =
  "TEST_API_KEY:299e498e7b603cf5b622ed41727697d5:76f80e042de9e528105fe18a611cb67a";

const ENTITY_KEY =
  "759dc4513089ed8ca4da86e20b83cdf18218d823c04c5fdaed4d54b2be24c47d";

const PUBLIC_KEY =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtgOnv8ZzedkuUMop70iz\n" +
  "HzXGdiA4kWztJ9e4vKw3IOLfAbCGNH7UxImrx7Of84EL7lTsF3ErUaCyGdqL/Axn\n" +
  "qyDMcdh/xwbsrrLdNntKKW14iDWfDI1ne0gDg6dVqHlT8FKArwQEQHh2ntX5BoSJ\n" +
  "Na6NjEWKpI0knupWcP3+KjvqiDH8P0rhi3zENAmprGl+Y4Nk3+JAI0IMLkxNjWqL\n" +
  "MCRi96GTzSpJYyqjsB7D58BgzXuZdIl8qymgMWWuWMlxDVcFiJ5JqF8q5y45lIih\n" +
  "vUJ3ZCQ+rdfkEGHawiCoUIiMSt61bGboSzlHFZwizrj/zB7FKOLGD1gkxmcVI10p\n" +
  "DhUCnRYt31pRIqYYTX5KIwcvs4Wn/bnnim8BiLyR+q4uT9b7XKaP7To/qCNl3C1s\n" +
  "vj3QWPG9MbPUXCBE7TBzEkl8OX4Zqcog5k6UeVIEjcll9K5ZJ1FIQaeYfW1ZPvtY\n" +
  "Ry9iRqtlZcNuWISBZeoefdKdg3vDdTVFaaVxnaRK8OOmf6BGL06kxr+sBgDXSAOP\n" +
  "K3Qbihe1C0k7nJJBL7kUIGwKCWipq0lazoJFPNrsULXvVZf26gcFbTxPLvutGizU\n" +
  "fAjscztqXdYYFZlSd/ptKUG7W30AZGkjj/LEWTJBvnK0K0PE3KJBee5JGfnI1ZwB\n" +
  "YMyO89r44M1oKfA6WWfcPGkCAwEAAQ==\n" +
  "-----END PUBLIC KEY-----\n";

const circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
  apiKey: API_KEY,
  entitySecret: ENTITY_KEY, // Make sure to enter the entity secret from the step above.
});

// const response = await circleDeveloperSdk.getPublicKey({});

// const entitySecret = forge.util.hexToBytes(ENTITY_KEY);
// const publicKey = forge.pki.publicKeyFromPem(PUBLIC_KEY);
// const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
//   md: forge.md.sha256.create(),
//   mgf1: {
//     md: forge.md.sha256.create(),
//   },
// });

// console.log(forge.util.encode64(encryptedData));

// console.log(response.data);

const createWalletSet = async () => {
  const response = await circleDeveloperSdk.createWalletSet({
    name: "Subhashish's Wallet Set",
  });

  console.log(response.data);
};

const createWallet = async () => {
  const response = await circleDeveloperSdk.createWallets({
    accountType: "EOA", // Change to 'EOA' for Externally Owned Account
    blockchains: ["ETH-Sepolia"], // Change to 'ETH-Sepolia' for Sepolia testnet
    count: 2,
    walletSetId: "500f8b80-de53-55bc-89a8-aa8afe85bc26",
  });

  console.log(response.data);
};

const checkWalletBalance = async (walletId) => {
  const response = await circleDeveloperSdk.getWalletTokenBalance({
    id: walletId,
  });

  console.log(response?.data);
};

const listWallet = async () => {
  const response = await circleDeveloperSdk.listWallets({});

  console.log(response?.data);
};

// createWallet();

checkWalletBalance("1ba02224-924a-5389-bfe1-5a23c0ecc14c");

const transferToken = async () => {
  const response = await circleDeveloperSdk.createTransaction({
    walletId: "4b762ee3-6445-5065-9472-65bcf15e9178",
    tokenId: "5797fbd6-3795-519d-84ca-ec4c5f80c3b1",
    destinationAddress: "0x99a9b5e865121599e22bc02d5959cf9215303626",
    amounts: ["0.1"],
    fee: {
      type: "level",
      config: {
        feeLevel: "MEDIUM",
      },
    },
  });
  console.log(response?.data);
};

// transferToken();

listWallet();

const getTransaction = async (transactionId) => {
  const response = await circleDeveloperSdk.getTransaction({
    id: transactionId,
  });

  console.log(response.data);
};

getTransaction("1744217e-3487-5a93-b20e-a227905bb085");
