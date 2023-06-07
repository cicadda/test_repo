
# 前置配置
.env.example 改名为.env
将各类properties改为自己的

# Token部署
1. 部署Token
```
   npm i
   npx hardhat flatten contracts/SimpleToken.sol > ./contracts/FlatternedToken.sol
   修改FlatternedToken.sol contract Erc20Token，防止编译产物和UniswapV2Factory重复
   可能需要把FlatternedToken中的// SPDX-License-Identifier: MIT去掉，再次编译
   npx hardhat compile --force
   npx hardhat run scripts/deploy.js
   npx hardhat verify --contract contracts/FlatternedToken.sol:Erc20Token --network goerli ${部署地址} ${deploy参数}
```
测试部署的Token 地址 0x1984b4f72A33F036E7Aa30f6C43F623801Cf6f59  
https://goerli.etherscan.io/address/0x1984b4f72A33F036E7Aa30f6C43F623801Cf6f59#code

### ArbPepe.sol  
参考历史操作
https://arbiscan.io/address/0xB8e710F7d0F74faB82cdbecd4746018d77BaE28b

# uniswap部署


### 部署uniswap步骤：

1. 修改UniswapV2ERC20.sol文件

```
   string public constant name = 'BSwap V2';  
   string public constant symbol = 'BSwap-V2';
```

2. 修改UniswapV2Factory.sol，新增如下代码

```
   bytes32 public constant INIT_CODE_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
```

3. 部署UniswapV2Factory.sol

```
   npm i
   npx hardhat flatten contracts/UniswapV2Factory.sol > ./contracts/BSwapV2Factory.sol
   修改contract name为BUniswapV2Factory，防止编译产物和UniswapV2Factory重复，再次编译
   npx hardhat compile --force
   npx hardhat run scripts/deploy.js
   npx hardhat verify --network goerli ${factory_address} ${合约部署时候的参数}
```


4. 预估固步消耗0.006GWETH  
   测试部署Factory 地址：0xDe6e31e7811531624246a1D66a142596629a90a3
   https://goerli.etherscan.io/address/0xde6e31e7811531624246a1d66a142596629a90a3
   INIT_CODE_HASH = 672e81cdc06c44048a23ab295a346d6daad79c9d55d859ce0e895c4a57a2e74f


5. 修改UniswapV2Router02.sol 696行，替换INIT_CODE_HASH


6. 部署Router02
   hardhat编译一直会超过最大部署size  
   选用remix部署 https://remix.ethereum.org/  
   一样的原理，EVM VERSION需要使用istanbul  
   测试部署Router02地址：0x0Da479B7F09f9A69b73a5dF3Bfd2cf702978db05
```
   npm i
   npx hardhat compile --force
   npx hardhat run scripts/deploy.js
   npx hardhat verify --network goerli ${factory_address} ${weth_address}
```
