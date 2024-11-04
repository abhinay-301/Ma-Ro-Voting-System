# ZKP based decentralised voting system | Solidity, Next.js, Hardhat,zkSNARK


## Instruction to run 

Kindly follow the following Instructions to run the project in your system and install the necessary requirements
- open the project in iny ide eg. VS code
- delete the folders if present - "artifacts","cache","node_modules"
- ```$ npm start```
- if you want to run on polygon_amoy\
  ```$ npx hardhat run scripts/deploy.js --network polygon_amoy```\
 if you want to run on local host\
```$ npx hardhat run scripts/deploy.js --network localhost```
- now drag and drop the abi file of smart contract form "artifacts" to "contracts" folder
- ``` $ npx run hardhat ``` 
- ``` $ npm start ```



## PInata IPFS JSON DATA UPLOAD
- Create account on pinata and replace the pinata_api_key and pinata_secret_api_key
```
https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
             "Content-Type": "application/json",
          },
```
## PInata IPFS IMAGE UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
            "Content-Type": "multipart/form-data",
          },
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```https://faucet.polygon.technology/
  Get: Free Test Faucets
```

#### Polygon Amoy

```https://www.oklink.com/amoy
  OPEN: Polygon Amoy
```

#### Formspree

```https://formspree.io/
  CREATE ACCOUNT: https://formspree.io/
  const [state, handleSubmit] = useForm("YOUR_KEY");
```

## Authors

- `Abhinay Maurya[2021101132]`
- `Rohan Rathee[2022103220]`
