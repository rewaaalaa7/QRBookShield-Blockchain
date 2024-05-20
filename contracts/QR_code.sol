// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QRCode {
    address public manager;
    
    // Struct to represent a book
    struct Book {
        uint256 id;
        string Title;
        string AuthorName;
        string PublishingHouse;
        uint Price;
        uint NumPages;
    }
    
    // Mapping from book ID to Book struct
    mapping(uint256 => Book) public books;
    // Mapping to track if a book's QR code has been scanned
    mapping(uint256 => bool) public qrScanned;
    uint public totalBooks;
    
    // Constructor to set the manager (buyer)
    constructor() {
        manager = msg.sender;
    }
    
    // Modifier to restrict access to the manager
    modifier onlyAdmin() {
        require(msg.sender == manager, "Only the contract manager can perform this operation.");
        _;
    }
    
    // Function to add a new book
    function addBook(
        string memory _title,
        string memory _authorName,
        string memory _publishingHouse,
        uint _price,
        uint _numPages
    ) public onlyAdmin {
        totalBooks++;
        uint256 newBookId = totalBooks;

        books[newBookId] = Book({
            id: newBookId,
            Title: _title,
            AuthorName: _authorName,
            PublishingHouse: _publishingHouse,
            Price: _price,
            NumPages: _numPages
        });

        // Initialize QR scan status to false
        qrScanned[newBookId] = false;
    }

    // Function to get book details by ID
    function getBookDetails(uint256 bookId) public view returns (
        string memory Title,
        string memory AuthorName,
        string memory PublishingHouse,
        uint Price,
        uint NumPages
    ) {
        require(bookId > 0 && bookId <= totalBooks, "Book does not exist");

        // Return book details
        Book memory book = books[bookId];
        return (book.Title, book.AuthorName, book.PublishingHouse, book.Price, book.NumPages);
    }

    // Function to scan a book's QR code
    function scanQRCode(uint256 bookId) public {
        require(bookId > 0 && bookId <= totalBooks, "Book does not exist");
        require(!qrScanned[bookId], "QR code has already been scanned");

        // Mark the QR code as scanned
        qrScanned[bookId] = true;
    }

    // Function to check if a book's QR code has been scanned
    function isQRCodeScanned(uint256 bookId) public view returns (bool) {
        require(bookId > 0 && bookId <= totalBooks, "Book does not exist");
        return qrScanned[bookId];
    }
    struct User {
    string email;
    string password;
}

mapping(address => User) public users;

function AddUser(string memory _email, string memory _password) public {
    users[msg.sender] = User(_email, _password);
}
}



