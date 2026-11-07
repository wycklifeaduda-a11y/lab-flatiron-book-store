const pagetitle = document.getElementById('Flatiron book store');
pagetitle.textContent = 'Flatiron Bookstore';

const bookList = document.getElementById('book-list');
bookStoredata.catalog.forEach(book => {
  
    const bookcard = document.createElement('div');
    bookcard.classList.add('book-card');

    const bookimage = document.createElement('img');
    bookimage.src = book.image;
    bookimage.alt = book.title;
    bookcard.appendChild(bookimage);

    const booktitle = document.createElement('h2');
    booktitle.textContent = book.title;
    bookcard.appendChild(booktitle);

    const bookauthor = document.createElement('p');
    bookauthor.textContent = `Author: ${book.author}`;
    bookcard.appendChild(bookauthor);

    const bookprice = document.createElement('p');
    bookprice.textContent = `Price: $${book.price.toFixed(2)}`;
    bookcard.appendChild(bookprice);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
        addToCart(book);
    });
    bookcard.appendChild(addToCartButton);

    bookList.appendChild(bookcard);
});

function addToCart(book) {
    // Implement the logic to add the book to the shopping cart
    console.log(`Added ${book.title} to cart.`);
}   





