require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom clog other security notice birth spider unveil hunt bean olympic skate'; 
let testAccounts = [
"0x48ef4f70562b36f2dfca3b5fdad944259e4176cfb35817c4dcf482c29bf40d43",
"0x008d628d0c8c21b1b86747bcd2d7abf6f98845f70b9241a56429972cec0bb859",
"0xa7d5e1fea2ae7ce1f9979c9a5a9cd0272a6032b727bacf27663c605648c85f65",
"0x25c70cfbee2bd00c207e0037d0556282cb682b20af3407bd8bf8069f332d8a8e",
"0xfbd785128abc8b448295cbc72399307fe6ae4473158c7a98cc4ba45ddcfdc491",
"0x4e1089355e251a5f8874130c6c51cdd04eaa32a849359982c9e3cbb89c9d09b0",
"0x41702c25c85994a7376041c4bfc2bc2df3f4472dc219280364a406a0f3dd78dc",
"0xf47104be1d05092641b6bcd9bdc24faf25799cefc798070fb7212e3300e9eb11",
"0xcadc887c3a58874b5e4ea9268093e7c33199a26048e3946fed23d1ca930e9c20",
"0x5a9df518bb5e2a38023a67b8860c0798984807468a609f6ef66f694f14d5fb2b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


