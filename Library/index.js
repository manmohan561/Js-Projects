console.log("hello world")
showBooks();

//constructor for books
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.type = type;
        this.author = author;
    }
}

//dis[lay constructor

class Display {
    constructor() {
    }
    add(book) {
        let oldItems = JSON.parse(localStorage.getItem('books')) || [];
         oldItems.push(book);
         localStorage.setItem('books', JSON.stringify(oldItems));

    }
    validate(book) {
        if (book.name.length < 2 || book.name.length < 2)
            return false;

        return true;
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }

        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Messge:</strong> ${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        </div>`;

      setTimeout(function(){
            message.innerHTML=``
      },10000);
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
}
// add records to the text field
function showBooks() {
    let books = localStorage.getItem("books")
    let booksArray;
    if (books == null) {
      booksArray = [];
    }
    else {
      booksArray = JSON.parse(books)
    }
    let html = "";


    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML="";
    booksArray.forEach(function (book, index) {
        let uiString = `<tr>
        <td>${index}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
        `;
    tableBody.innerHTML += uiString;
    });
  }
  function deleteBook(index) {
     console.log('delete called', index)
    let books = localStorage.getItem("books")
    let booksArray;
    if (books == null) {
      booksArray = [];
    }
    else {
      booksArray = JSON.parse(books)
    }

    booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArray));
    showBooks();
  }

///event listner from library form
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    //console.log("hello form");

    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;

    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked){
        type=fiction.value;
    }else if(programming.checked){
        type=programming.value;
    }else if(cooking.checked){
        type=cooking.value;
    }

    let book=new Book(name,author,type);
    let display=new Display();
    if(display.validate(book)){
        display.add(book)
        display.clear();
        display.show('success',' Your book has been added');
        showBooks();
    }
    else{
        display.show('danger',' Sorry you cannot add this book');
    }
}