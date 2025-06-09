const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy(); // 部署合约
  await hello.waitForDeployment(); // 等待部署完成 ✅
  console.log("合约部署成功，地址：", hello.target); // 使用 .target 获取地址
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
