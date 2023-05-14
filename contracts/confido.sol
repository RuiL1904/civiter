// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Confido {
    address public owner;

    struct User {
        string username;
        address payable userAddress;
        uint256 serviceProviderReputation;
        uint256 serviceRecipientReputation;
        bytes32[] ProviderTransactions;
        bytes32[] RecipientTransactions;
    }

    struct Transaction {
        address payable serviceProvider;
        address payable serviceRecipient;
        string serviceProviderUsername;
        string serviceRecipientUsername;
        uint256 amount;
    }

    constructor() {
        owner = msg.sender;
    }

    event registeredUser(string _username, address _userAddress);
    event registeredTransaction(
        bytes32 _transactionId,
        string _serviceProviderUsername,
        string _serviceRecipientUsername,
        uint256 _amount
    );

    // the string is the user worldcoind id, which means a user can only have one account
    mapping(string => User) public users;
    mapping(string => string) public worldcoinIdToUsername;
    mapping(bytes32 => Transaction) public transactions;

    function registerUser(string memory _worldcoinId, string memory _username, address payable _userAddress) public {
        require(bytes(_worldcoinId).length > 0, "Worldcoin id cannot be empty");
        require(bytes(worldcoinIdToUsername[_worldcoinId]).length == 0, "User already exists");

        worldcoinIdToUsername[_worldcoinId] = _username;
        users[_username] = User(_username, _userAddress, 0, 0, new bytes32[](0), new bytes32[](0));
    
        emit registeredUser(_username, _userAddress);
    }

    function registerTransaction(
        string memory _serviceProviderUsername,
        string memory _serviceRecipientUsername,
        uint256 providerReputation,
        uint256 recipientReputation,
        uint256 _amount

    ) public returns (bytes32) {
        require(
            bytes(users[_serviceProviderUsername].username).length > 0,
            "Service provider does not exist"
        );
        require(
            bytes(users[_serviceRecipientUsername].username).length > 0,
            "Service recipient does not exist"
        );
        // require caller of this function to be the owner of the contract
        require(msg.sender == owner, "Only the owner of the contract can register transactions");

        // Create a new transaction struct
        Transaction memory newTransaction = Transaction(
            payable(msg.sender),
            payable(address(0)),
            _serviceProviderUsername,
            _serviceRecipientUsername,
            _amount
        );

        // Generate a unique ID for the transaction
        bytes32 transactionId = keccak256(
            abi.encodePacked(
                _serviceProviderUsername,
                _serviceRecipientUsername,
                block.timestamp
            )
        );

        // Store the transaction in the transactions mapping
        transactions[transactionId] = newTransaction;

        // Update the user's transaction lists
        User storage serviceProvider = users[_serviceProviderUsername];
        User storage serviceRecipient = users[_serviceRecipientUsername];

        serviceProvider.ProviderTransactions.push(transactionId);
        serviceRecipient.RecipientTransactions.push(transactionId);

        serviceProvider.serviceProviderReputation += providerReputation;
        serviceRecipient.serviceRecipientReputation += recipientReputation;

        emit registeredTransaction(
            transactionId,
            _serviceProviderUsername,
            _serviceRecipientUsername,
            _amount
        );

        // return the transaction id
        return transactionId;
    }
}
