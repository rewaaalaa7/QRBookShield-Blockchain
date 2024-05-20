// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookOwnership {
    // Struct to represent a book
    struct Book {
        uint256 id;
        string Title;
        string AuthorName;
        string PublishingHouse;
        uint Price;
        uint NumPages;
        address owner;
        bool exists;
    }

    // Mapping from book ID to Book struct
    mapping(uint256 => Book) public books;
    // Mapping to keep track of scanned QR codes
    mapping(string => bool) public scannedQRCodes;
    

    // Event emitted when a book is minted
    event BookMinted(uint256 id, string Title, string AuthorName, string PublishingHouse, uint256 Price, uint256 NumPages, address owner);

    // Function to mint a new book
    function mintBook(
        uint256 id,
        string memory Title,
        string memory AuthorName,
        string memory PublishingHouse,
        uint Price,
        uint NumPages
    ) public {
        require(!books[id].exists, "Book ID already exists");

        // Create the Book struct
        Book memory newBook = Book({
            id: id,
            Title: Title,
            AuthorName: AuthorName,
            PublishingHouse: PublishingHouse,
            Price: Price,
            NumPages: NumPages,
            owner: msg.sender,
            exists: true
        });

        // Add the book to the mapping
        books[id] = newBook;

        // Emit the BookMinted event
        emit BookMinted(id, Title, AuthorName, PublishingHouse, Price, NumPages, msg.sender);
    }

    // Function to transfer ownership of a book
    function transferOwnership(uint256 bookId, address newOwner) public {
        require(books[bookId].exists, "Book does not exist");
        require(books[bookId].owner == msg.sender, "You are not the owner of this book");

        // Update the owner of the book
        books[bookId].owner = newOwner;
    }
        // Function to scan a QR code
    function scanQRCode(string memory qrCode) public {
        require(!scannedQRCodes[qrCode], "QR code already scanned");

        // Mark the QR code as scanned
        scannedQRCodes[qrCode] = true;
    }
    // Function to get book details by ID
    function getBookDetails(uint256 bookId) public view returns (
        string memory Title,
        string memory AuthorName,
        string memory PublishingHouse,
        uint Price,
        uint NumPages,
        address owner
    ) {
        require(books[bookId].exists, "Book does not exist");

        // Return book details
        Book memory book = books[bookId];
        return (book.Title, book.AuthorName, book.PublishingHouse, book.Price, book.NumPages, book.owner);
    }
}
