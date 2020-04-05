require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'idea climb flee skull guard render remain connect install battle swallow skate'; 
let testAccounts = [
"0xa71c304b4a2b53292c31429c7c8649607313c62a0f9ad9d26ae6e42e689a76c9",
"0x4eda535208f6cb8ab4c547fbf9ffc5e0f629d4b3651f09effa5dd575ebbc01e3",
"0x38f8b205af492d4bb97ecd186af8ed13470aef0f70b1b9db10648820458942e4",
"0x4bba6162ab9edd0862a368b6c2f451497db9cd513cd1100fdca990833f1f4a66",
"0xdf7669ca08ea642af5a92ced99ff59e06e1055fc68ab661ddbe5f5a98098df6b",
"0xa4696073cb979c41a5537407d011d232500fbc2689b4eb448dc3c90844f14ec2",
"0x4c9329b884bd92010b76d5a715c8e15bbcfe1b43ea001085e196b98ace762c04",
"0x943befd0262367521134e21d49fcc99b7b9cd9fd6d93358de631056c493caa0b",
"0xff06a42bfdfa86fa25bb15a6afeacc3c20006cee422d0545a74b1e90fa6284a7",
"0xe099e423b7603567a16f40e1d7842587e1b93115edf77c995b155c759c92b455"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
