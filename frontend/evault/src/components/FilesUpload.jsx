import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { BrowserProvider } from "ethers";
const { Web3 } = require('web3');
// const { ethers } = require("ethers");
// const contractABI = require("./Contracts/evault.json");


const addressuser = "0xc37AB49d350b1001fA6d05ca3140bBEfaa69F5A9";
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "folder_name",
                "type": "string"
            }
        ],
        "name": "create_folder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "files_names",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "folder_names",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "folder_num",
                "type": "uint256"
            }
        ],
        "name": "getAllFiles",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllFolders",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "folder_Num",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "file_Num",
                "type": "uint256"
            }
        ],
        "name": "getFile",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "CID",
                "type": "string"
            }
        ],
        "name": "getFileName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "folder_num",
                "type": "uint256"
            }
        ],
        "name": "get_total_files_Num",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get_total_folder_Num",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "folder_Num",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "file_Name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_CID",
                "type": "string"
            }
        ],
        "name": "storeUploadedFile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "user2files",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

const YOUR_CONTRACT_ADDRESS = "0xd892227Fe717b8C004e01a3D8e6C01F3208F7d38";
const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    // let contentupload = async (cid) => {
    //     const tx = await getContract().addUser(addressuser);
    //     alert("Once block is mined, Value will be auto updated");
    //     // await tx.wait();
    //     // fetchCurrentValue();
    // };
    let contract;
    const connectContract = async () => {
        // console.log(ethers.provider)
        // const provider = new BrowserProvider(window.ethereum);
        // const signer = provider.getSigner();
        // contract = new ethers.Contract(YOUR_CONTRACT_ADDRESS, abi, signer);
        // console.log(contract);
        window.web3 = new Web3(window.ethereum)
        window.contract = await new window.web3.eth.Contract(abi, YOUR_CONTRACT_ADDRESS)
        // let res = await (window.contract).approve(YOUR_CONTRACT_ADDRESS, 3000000)
        console.log("done")
    }

    // const addUser = async () => {
    //     try {
    //         const user = await window.contract.methods.addUser(addressuser).send({ from: addressuser, gasLimit: 3000000 });
    //         console.log(user)
    //     }
    //     catch (err) {
    //         console.log("Transanction declined");
    //     }
    // }
    const createFolder = async () => {
        try {
            // const accounts = window.web3.eth.getAccounts();
            // await window.web3.eth.getBalance(addressuser).then(res => console.log(res));
            const folder = await window.contract.methods.create_folder("myfiles2").send({ from: addressuser, gasLimit: 3000000, value: 0, chainId: 11155111 });
            console.log(folder)
        }
        catch (err) {
            console.log("Transanction declined", err);
        }
    }
    const uploadfileto = async (cid) => {
        try {
            // const accounts = window.web3.eth.getAccounts();
            // await window.web3.eth.getBalance(addressuser).then(res => console.log(res));
            const folder = await window.contract.methods.storeUploadedFile(0, "myfiles", cid).send({ from: addressuser, gasLimit: 3000000 });
            console.log(folder)
        }
        catch (err) {
            console.log("Transanction declined", err);
        }
    }
    const getFoldercnt = async () => {
        try {
            const foldercnt = await window.contract.methods.get_total_folder_Num().call({ from: addressuser });
            console.log(foldercnt)
        }
        catch (er) {
            console.log("Transanction declined", er);
        }
    }


    const handleButtonClick = async () => {
        if (!selectedFile) {
            alert('Please choose a file to upload.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('http://localhost:8000/uploadfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log("done file :", response.data);
            uploadfileto(response.data);
            alert(`File uploaded successfully`);
        } catch (error) {
            console.log(" not done file");
            alert(`Error uploading file: ${error.message}`);
        }
    };
    useEffect(() => {
        connectContract();

    }, [])


    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleButtonClick}>Upload</button>
            {/* <button onClick={addUser}>upload user</button> */}
            <button onClick={createFolder}>Create Folder</button>
            <button onClick={getFoldercnt}>Folder cnt</button>

        </div>
    );
};

export default FileUpload;