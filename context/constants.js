import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

//IMPORT CONTRACT ABI
import votingOrganization from "./VotingOrganization.json";

export const OWNER_ADDRESS = "0x37291701E6a6B44bC77F758e32183B2f4B7E08C4";
export const CONTRACT_ADDRESS = "0xb4b2A4353867bB3c67aDc49Db9D013CdFFF99E70";
// export const OWNER_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const CONTRACT_ABI = votingOrganization.abi;

//NETWORK
const networks = {
  sepolia : {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["http://eth-sepolia.g.alchemy.com/v2/sdqpQyGd-eIQ5FTA7KtvAEF6gLNje0e1"],
    blockExplorerUrls: ["https://etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "loacalhost"; // change here to switch network
  await changeNetwork({ networkName });
};

export const checkIfWalletIsConnected = async () => {
  if (!window.ethereum) return console.log("Please Install MetaMask");
  const network = await handleNetworkSwitch();

  const account = await window.ethereum.request({ method: "eth_accounts" });

  if (account.length) {
    return account[0];
  } else {
    console.log("Please Install MetaMask & Connect, Reload");
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return alert("Please install MetaMask");
    const network = await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};
//CONTRACT

//---FETCHING SMART CONTRACT
const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const VOTING_CONTRACT = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};
