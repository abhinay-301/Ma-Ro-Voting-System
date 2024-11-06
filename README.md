# ZKP based decentralised voting system | Solidity, Next.js, Hardhat,zkSNARK


## Instruction to run 

Kindly follow the following Instructions to run the project in your system and install the necessary requirements
- open the project in any ide eg. VS code
- delete the folders if present - "artifacts","cache","node_modules"
- before running make sure you are using node v18(hardhat doesn't support latest version)
- ```$ npm install```
- ``` $ npx hardhat node ``` (you will get all local host addresses, `do not close` this terminal)-open other terminal and follow furthur instruction
- if you want to run on polygon_amoy
  ```$ npx hardhat run scripts/deploy.js --network polygon_amoy```
  if you want to run on local host\
  ```$ npx hardhat run scripts/deploy.js --network localhost```
- now drag and drop the abi file of smart contract(VotingOrganization.json) form "artifacts" to "context" folder(if already present the replace that)
- ``` $ npm run dev```
- make sure before starting app on browser , Metamask should be installed (no need to setup or connect with any network eg.localhost,polygon_amoy - there is automated code to do that)
- ``` $ npm start ```
- start the app on http://localhost:3000
- give the permission to metamask for connecting with localhost/polygon_amoy
```
 npm install
 npx hardhat node
 npx hardhat run scripts/deploy.js --network localhost
 npm run dev
 npm start
```

## Working of Application
### Stakeholders
#### Owner 
- `Create Election` by setting start_time and end_time of election
  - Only after start_time approved voter can vote for approved candidates
  - Resuls of election announced only after end_time of election
  - No one can see who gets how many votes before end_time
- can also `register as Voter`
- can also `register as Candidate`
- He/she has to `approve voter/candidate` based on submitted document/information
  - Every approved voters/candidates can see the information/document submitted by other approved voters/candidates
- He/She can also `reject the voter/candidate`
  - Voter/Candidate can `reRegister with updated document/information`
- He/She can `transfer the ownership` to other

### Voter
- registered as voter
- After approval from owner can vote for any one candidate within voting period
- can see the all voter/candidates registered
- can see the result after end_time of election
### Candidate
- registered as candidate
- can register as voter
- After approval of voter criteria from owner can vote for any one candidate within voting period(includin himself)
- can see the all voter/candidates registered
- can see the result after end_time of election

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
  NodeJs: v18.6.2 
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

## Authors

- `Abhinay Maurya[2021101132]`
- `Rohan Rathee[2022101128]`
