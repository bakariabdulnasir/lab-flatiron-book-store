const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// index.js

// Step 2: Manipulating Existing Elements
// Select the DOM element with the id of 'header' and save as a variable called 'bookStoreTitle'
const bookStoreTitle = document.getElementById('header');

// Change the textContent of 'bookStoreTitle' to the name property of the 'bookStore' variable
if (bookStoreTitle && bookStore) {
    bookStoreTitle.textContent = bookStore.name;
} else {
    console.error('Error: bookStoreTitle element or bookStore variable not found.');
}

// Step 3: Book Elements
// Select the book list element (assuming it has id 'book-list')
const bookList = document.getElementById('book-list');

if (bookList && bookStore && bookStore.books) {
    // Loop through every book in the books property of the bookStore variable
    bookStore.books.forEach(book => {
        // Create elements for each book
        const bookContainer = document.createElement('li');  // li element: bookContainer
        const bookTitle = document.createElement('h3');      // h3 element: bookTitle
        const bookAuthor = document.createElement('p');      // p element: bookAuthor
        const bookImage = document.createElement('img');     // img element: bookImage

        // Change the textContent/src of each element to match the book object
        bookTitle.textContent = book.title;      // Set bookTitle textContent to the title of the book
        bookAuthor.textContent = book.author;    // Set bookAuthor textContent to the author of the book
        bookImage.src = book.imageUrl;           // Set bookImage src to the image url of the book

        // Append book elements to bookContainer
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);

        // Append bookContainer to bookList
        bookList.appendChild(bookContainer);
    });
} else {
    console.error('Error: bookList element or bookStore/books not found.');
}

// Optional: Log for debugging (visible in dev tools console)
console.log('Bookstore title updated and books rendered.');

