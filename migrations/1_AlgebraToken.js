const BN = require('bn.js');

require('dotenv').config();
const {
    DEPLOY_GAS_LIMIT_MAX,
    DEPLOY_GAS_LIMIT_TOKEN
} = process.env;

const TokenContract = artifacts.require("MainToken");
const Router = artifacts.require("UniswapRouterV2");
const routerAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';

const ZERO = new BN(0);
const ONE = new BN(1);

module.exports = async function (deployer, network) {
    let routerInst = await Router.at(routerAddress);

    await deployer.deploy(
        TokenContract,
        '0x1d8b6fA722230153BE08C4Fa4Aa4B4c7cd01A95a',
        '0x81764b6e81D842D52D7791D20F335802af31C64A',
        '0xDE0820170c2C104C275c33fF912f4C4ae4e12976',
        '0x85f351E5f1079aC8f30e259303d9b898B4211886',
        '0x53f89E551a4eB21F6c5A4066DA236AA074a4bc39',
        '0x6D39Df45C4459e666ED100f88883359Efb3B032A',
        {gas: DEPLOY_GAS_LIMIT_TOKEN}
    );
    let TokenContractInst = await TokenContract.deployed();
    console.log('Token address: ', TokenContractInst.address)

};