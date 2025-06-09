const { ethers } = require("hardhat");

async function main() {
  // ✅ 合约地址：替换成你部署输出的地址
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // ✅ 获取合约工厂
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // ✅ 连接已部署合约实例
  const hello = await HelloWorld.attach(contractAddress);

  // ✅ 读取 message 变量
  const currentMessage = await hello.message();
  console.log("当前 message:", currentMessage);

  // ✅ 设置新 message
  const tx = await hello.setMessage("你好，区块链！");
  await tx.wait(); // 等待交易确认

  // ✅ 再次读取 message
  const newMessage = await hello.message();
  console.log("更新后的 message:", newMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
