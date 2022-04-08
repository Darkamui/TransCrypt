

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      accounts: ['34c3cb3d59608618d1d27017825709841c749d4f2beac203d41448535517ab71'],
      url: 'https://eth-ropsten.alchemyapi.io/v2/vVfFcxgQwSVWlhFtMYxozZwIzddrVHcn'
    }
  }
}