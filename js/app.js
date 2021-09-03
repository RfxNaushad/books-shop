// calling all ids
const searchText = document.getElementById("book-title");
const searchBtn = document.getElementById("search-button");
const booksShowing = document.getElementById("books-showing");
const totalBooks = document.getElementById("total-books");
const mainDiv = document.getElementById('main-search-div');
const errorMsg = document.getElementById("error-msg");
const booksNumber = document.getElementById("books-number");

// fetching books
const loadBooks = () => {
    
    const inputText = searchText.value;
    console.log(inputText);

    // searchText.value = '';
    // const url = `https://openlibrary.org/search.json?q=${inputText}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data => showBooks(data.docs.slice(0,15),data.docs.length))

    if(inputText){
        searchText.value = '';
        const url = `https://openlibrary.org/search.json?q=${inputText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => showBooks(data.docs.slice(0,15),data.docs.length))
    }
    else{
        alert("Please Input valid name");
    }
}

const showBooks = (books, length) => {

    mainDiv.innerHTML = '';
    // error handling
    if(length === 0){
         errorMsg.classList.remove('d-none');
         booksNumber.classList.add('d-none');
    }
    else{
        errorMsg.classList.add("d-none");
    }
    // books showing in search result
    booksShowing.innerText = books.length;
    totalBooks.innerText = length;
    books.forEach(book =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div class="card">
              <div class="card-body">
              <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text author-name">${book.author_name}</p>
              <p class="card-text publisher-name">${book.publisher}</p>
              <p class="card-text publishing-date">${book.publish_date}</p>
              </div> 
            </div>
        </div> 
    `;
        mainDiv.appendChild(div);
    });
}

  