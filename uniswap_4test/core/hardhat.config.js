require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const {API_URL, PRIVATE_KEY, ETHER_SCAN_API_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.5.16",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        sepolia: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        goerli: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        ganache: {
            url: "http://127.0.0.1:7545",
            chainId: 1337
        }
    },
    etherscan: {
        apiKey: {
            sepolia: `${ETHER_SCAN_API_KEY}`,
            goerli: `${ETHER_SCAN_API_KEY}`,
        }
    },
    settings: {
        optimizer: {
            enabled: true,
            runs: 1000,
        },
    },
};
