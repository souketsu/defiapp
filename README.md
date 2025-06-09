# defiapp

## ✅ 第一步：打好基础（理解区块链 & Solidity）

### 1. 安装开发环境

在 Windows 上搭建 Solidity 开发环境：

```bash
# 安装 Node.js（建议 LTS 版本）
https://nodejs.org/

# 安装 VS Code（强烈建议）
https://code.visualstudio.com/

# 安装 Git（用于项目管理）
https://git-scm.com/

# 安装 Hardhat 开发框架
npm install --global hardhat
```

### 2. 推荐入门资源（中文）

* **Bilibili 视频教程：**

  * [B站搜索：“Solidity 从零到一”](https://search.bilibili.com/all?keyword=Solidity)
  * 推荐频道：EatTheBlocks 中文、链茶馆、炼金术士 Alchemy 中文
* **入门文章：**

  * [Solidity 中文文档（权威）](https://learnblockchain.cn/docs/solidity/)
  * [以太坊开发者文档（中文）](https://learnblockchain.cn/docs/ethereum/)

---

## ✅ 第二步：写出第一个智能合约

### 1. 创建项目（推荐 Hardhat）

打开 VS Code，终端执行：

```bash
mkdir my-first-dapp && cd my-first-dapp
npm init -y
npm install --save-dev hardhat
npx hardhat
# 选择“Create a basic sample project”
```

### 2. 理解基础结构

生成后的目录：

```
- contracts/        # Solidity 合约放在这里
- scripts/          # 自动部署脚本
- test/             # 自动化测试脚本
- hardhat.config.js # 配置文件
```

### 3. 修改合约试一试

打开 `contracts/Lock.sol`，看看结构，比如下面这个最简单的合约：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, Web3!";
}
```

---

## ✅ 第三步：部署和交互（模拟链测试）

### 1. 编译合约

```bash
npx hardhat compile
```

### 2. 部署合约到本地网络

创建脚本 `scripts/deploy.js`，部署 HelloWorld：

```js
async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  console.log("Deployed to:", hello.address);
}
main().catch((err) => console.error(err));
```

执行部署：

```bash
npx hardhat run scripts/deploy.js
```

---

## ✅ 第四步：连接钱包和网页前端（真正体验 DApp）

你可以使用现成模板开始 Web3 项目：

### 推荐模板

```bash
npx create-next-app my-dapp
cd my-dapp
npm install ethers
```

加入钱包连接按钮（用 MetaMask），访问部署好的合约，体验完整 Web3 流程。

---

## ✅ 第五步：动手做项目

你可以从以下小项目中选一个开始练习：

| 项目       | 涉及知识点                  |
| -------- | ---------------------- |
| 投票系统     | 状态变量、mapping、modifier  |
| 简单代币     | ERC20、余额转账、权限管理        |
| NFT 发售平台 | ERC721、mint 函数、元数据 URI |
| 去中心化留言板  | events、读取链上日志          |
| 签到领奖系统   | block.timestamp、地址记录   |

> 这些都是能变现的原型，后续可以拓展成成熟产品。

---

## ✅ 第六步：提升阶段

### 进阶知识

* 常见漏洞：重入攻击、授权越权、算术溢出
* 安全模式：使用 OpenZeppelin 库、合约升级、代理合约
* 真实合约分析：看看 Uniswap、Aave 等开源代码