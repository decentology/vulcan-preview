require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet recipe mad around imitate private equal gasp'; 
let testAccounts = [
"0x811e39e4999209211aa13af4ac87bde32aa92bb9a5d2048b91bbdcd3f61b7608",
"0x0b5f348667c81cf069a7a7ff32ef5dc3e8a5eb7c5028d6c7e3c31fa97ea9d580",
"0x53dabbed111235324c7707d5680eefeacc8daae0e5cc58ba0fc482c557dba4b6",
"0x674f5a21d91ac97140b84a2ce7f73842ba251928f57e7f76e23f482e1df93f43",
"0x561ef36dc3113fd90882770adadb77fdcaf87ab35c325d35f5219feb674f445e",
"0x18ea227c5e1e82f8be3dee2bd7e5a3ce0f81636d6d73391217083ee9dcf19ac1",
"0xc519aa7a638442b82f5093365060fc254b834080d9bbace5fe990956487d7888",
"0x1cd0f6ec436e525c078834950a73979a58dc3e47cc658804c178d0c57f612270",
"0x9e0c1e1c06c11b3aa508bfc39db4d5fef919bc258e5f694d88d923c5ca60231f",
"0x1328c33230611c491073821e6b88745b95e350085f5efacdf0808516e8d071f4"
]; 
let devUri = 'http://127.0.0.1:7545/';//'https://test-rpc.vulcanblockchain.com'//

module.exports = {
    testAccounts,
    mnemonic,
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

