# QR Book - Secure Your Copy Rights with NFTs
This project aims to secure the copyrights of authors using QR codes and Non-Fungible Tokens (NFTs). By leveraging blockchain technology, specifically Ethereum and Solidity smart contracts, we ensure that each book copy is uniquely identifiable and protected against unauthorized duplication.

# How It Works
Each physical copy of the book is equipped with a unique QR code. When scanned for the first time, the QR code triggers the creation of an NFT on the Ethereum blockchain. This NFT represents the ownership and authenticity of the book copy. The QR code becomes "scratched" or "used" after the initial scan, making subsequent scans invalid. This mechanism ensures that each book copy can only be verified once, preventing unauthorized duplication and piracy.

# Tools Used
- HTML, CSS, JavaScript (React): Used for the frontend development of the application, including the QR code scanning interface and user interactions.

- Solidity: Used for writing smart contracts that govern the creation and management of NFTs on the Ethereum blockchain.
  
- Metamask: Ethereum wallet and browser extension used for interacting with the Ethereum blockchain and signing transactions.
  
- Ganache: Local Ethereum blockchain for development and testing purposes.

# Using the QR Book Application
1- Scan a QR Code applied on the book.

2- Login by using Email and Password click "Submit".

Open the QR Book application.
Use the QR code scanner to scan the QR code embedded in the book.
Upon scanning, the application will verify the authenticity of the book and display relevant information.
View Book Information:
After scanning the QR code, the application will provide the following information about the book:

Email
Password 
Unique ID of the QR code for the book in case the book is valid. 

If the book is fake and not valid for scanning by using NFT will alert a message saying that this book is fake. 

Verify Authenticity:
The application uses blockchain technology to verify the authenticity of the book. The NFT ownership status indicates whether the book is genuine or potentially counterfeit.
