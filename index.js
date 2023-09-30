
function fetchBooks() {fetch('https://anapioficeandfire.com/api/books')
.then(resp => resp.json()) // Convert the response to JSON
.then(json => renderBooks(json));
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//fetch("https://anapioficeandfire.com/api/books")
  //.then((resp) => resp.json())
  //.then((books) => {
    // Finding the 5th book in the series
    //const fifthBook = books[4];
    //console.log("The 5th book in the series:", fifthBook.name);

    // Finding the 1031st character in the series
    //fetch("https://anapioficeandfire.com/api/characters/1031")
      //.then((resp) => resp.json())
      //.then((character) => {
     //   console.log("The 1031st character in the series:", character.name);
      //});

    // Calculating the total number of pages of all the books
    //const totalNumberOfPages = books.reduce((total, book) => total + book.numberOfPages, 0);
    //console.log("The total number of pages of all the books:", totalNumberOfPages);
  //});





