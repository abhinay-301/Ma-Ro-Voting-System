// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import SemaphoreVerifier contract
import "@semaphore-protocol/contracts/verifiers/SemaphoreVerifier.sol";

contract VotingOrganization is SemaphoreVerifier {
    address public owner;
    uint256 public startTime;
    uint256 public endTime;

    // Semaphore group ID and commitment management
    uint256 public semaphoreGroupId = 1; // Group ID for Semaphore voters group

    // Mappings for storing commitments and candidate votes
    mapping(uint256 => bool) public registeredCommitments; // To track unique voter commitments
    mapping(address => uint256) public candidateVotes;

    // Candidate struct with unique candidate details
    struct Candidate {
        address candidateAddress;
        string name;
        string ipfs;
        uint256 registerId;
        uint256 voteCount;
    }

    // Mapping and array for storing candidates
    mapping(address => Candidate) public candidates;
    address[] public registeredCandidates;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    modifier onlyDuringVotingPeriod() {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "Voting is not active.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Semaphore Integration: Register voter with commitment
    function registerVoter(uint256 identityCommitment) public onlyOwner {
        require(!registeredCommitments[identityCommitment], "Voter already registered with this commitment.");

        // Add voter commitment to Semaphore group
        registeredCommitments[identityCommitment] = true;
        // This would also include an external call to update the Merkle tree in Semaphore's off-chain state
    }

    // Register a new candidate
    function registerCandidate(string memory _name, string memory _ipfs) public {
        Candidate memory newCandidate = Candidate(msg.sender, _name, _ipfs, registeredCandidates.length + 1, 0);
        candidates[msg.sender] = newCandidate;
        registeredCandidates.push(msg.sender);
    }

    // Semaphore Voting Function
    function vote(
        uint256 identityCommitment,
        address _candidateAddress,
        uint256 signal,
        uint256 nullifierHash,
        uint256 externalNullifier,
        uint256[8] calldata proof
    ) public onlyDuringVotingPeriod {
        require(registeredCommitments[identityCommitment], "Voter not registered.");

        // Verify the ZK proof using Semaphore
        require(
            verifyProof(
                semaphoreGroupId,
                signal,
                nullifierHash,
                externalNullifier,
                proof
            ),
            "Invalid proof"
        );

        // Ensure voter hasn’t voted before (using nullifier hash)
        require(!registeredCommitments[nullifierHash], "Vote already cast by this voter.");
        registeredCommitments[nullifierHash] = true; // Prevent double voting

        // Process the vote
        candidates[_candidateAddress].voteCount++;
    }

    // Set voting period
    function setVotingPeriod(uint256 _startTime, uint256 _endTime) public onlyOwner {
        require(_startTime < _endTime, "Start time must be before end time.");
        startTime = _startTime;
        endTime = _endTime;
    }

    // Function to get candidate details
    function getCandidate(address _candidateAddress) public view returns (Candidate memory) {
        return candidates[_candidateAddress];
    }
}
