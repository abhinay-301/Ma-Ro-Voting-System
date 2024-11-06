# ZKP-Based Decentralized Voting System | Solidity, Next.js, Hardhat, zkSNARK, Semaphore Library

## Overview

This project implements a decentralized voting system with zero-knowledge proofs (ZKP) for voter privacy. We used Solidity for smart contract development, Hardhat for deployment, and Next.js for the frontend. The Semaphore library was also partially integrated to implement ZKP functionality for enhanced privacy.

Due to certain dependencies, we couldn't fully integrate Semaphore-based ZKP in the current version. However, we added the `votingSema.sol` file containing the ZKP-based contract code, which is ready for further integration.

## Instructions to Run

Follow these steps to set up and run the project on your local system:

1. **Open Project**: Open the project in an IDE (e.g., VS Code).
2. **Clean Setup**: Delete folders, if present: `artifacts`, `cache`, `node_modules`.
3. **Node Version**: Ensure you’re using Node v18 (Hardhat does not support the latest versions).
4. **Install Dependencies**:
    
    ```bash
    bash
    Copy code
    $ npm install
    
    ```
    
5. **Run Hardhat Node**:
    - Run the local Hardhat node in one terminal:
        
        ```bash
        bash
        Copy code
        $ npx hardhat node
        
        ```
        
    - This will provide localhost addresses. Do not close this terminal.
6. **Deploy the Contract**:
    - For deployment on Polygon's `polygon_amoy` network:
        
        ```bash
        bash
        Copy code
        $ npx hardhat run scripts/deploy.js --network polygon_amoy
        
        ```
        
    - For localhost:
        
        ```bash
        bash
        Copy code
        $ npx hardhat run scripts/deploy.js --network localhost
        
        ```
        
7. **Update ABI**: Drag and drop the ABI file (`VotingOrganization.json`) from `artifacts` to the `context` folder (replace if already present).
8. **Start the Frontend**:
    - Ensure MetaMask is installed (no manual network setup is needed).
    - Run the development server:
        
        ```bash
        bash
        Copy code
        $ npm run dev
        
        ```
        
    - Start the app:
        
        ```bash
        bash
        Copy code
        $ npm start
        
        ```
        
    - Access the app on [http://localhost:3000](http://localhost:3000/) and grant MetaMask permission to connect.

## Working of the Application

### Stakeholders

1. **Owner**:
    - Creates elections with start and end times.
    - Approves or rejects voters and candidates based on submitted documents.
    - Announces election results only after the end time.
    - Transfers ownership if needed.
2. **Voter**:
    - Registers and awaits owner approval.
    - Votes during the voting period.
    - Views registered voters and candidates.
3. **Candidate**:
    - Registers as a candidate (can also register as a voter).
    - Views election results post-election period.

### Semaphore Library and `votingSema.sol` Contract

- **Semaphore Integration**: We incorporated the Semaphore library, which is widely used for ZKP-based privacy in Ethereum-based applications. The `votingSema.sol` file includes the modified contract using Semaphore functions for ZKP.
- **Functionality**: Semaphore allows users to prove eligibility without revealing identities. It leverages group membership and generates zero-knowledge proofs for anonymous voting.
- **Current Limitations**: Full integration is pending due to dependency issues in the current Hardhat setup.

## Pinata IPFS Setup

To store JSON data and images, configure Pinata with the following:

- Create an account on [Pinata](https://www.pinata.cloud/) and replace the `pinata_api_key` and `pinata_secret_api_key` as needed in the code.

```
// For JSON Data Upload
headers: {
    pinata_api_key: `YOUR_API_KEY`,
    pinata_secret_api_key: `YOUR_SECRET_KEY`,
    "Content-Type": "application/json",
}

// For Image Upload
headers: {
    pinata_api_key: `YOUR_API_KEY`,
    pinata_secret_api_key: `YOUR_SECRET_KEY`,
    "Content-Type": "multipart/form-data",
}

```

## Node.js & NPM Versions

- Node.js: v18.6.2
- NPM: 10.5.0

## Test Faucets

Use [Alchemy](https://alchemy.com/) to obtain free test faucets for deploying on test networks.

## Authors

- Abhinay Maurya [2021101132]
- Rohan Rathee [2022101128]