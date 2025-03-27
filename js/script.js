// Write a constructor for making “Book” objects. We will revisit this in the next project. 
// Your book objects should have the book’s title, author, the number of pages, and whether 
// or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Note: It is almost always best to return things rather than putting console.log() directly 
// into the function. In this case, return the info string and log it after the function has been called:
const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`
    }
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function addPadding(string){
    let paddingNeeded = 40 - string.length
    if (paddingNeeded % 2 === 0){
        return `-` + ' '.repeat(paddingNeeded / 2 - 1) + string + ' '.repeat(paddingNeeded / 2 - 1) + '-'
    }else {
        return `-` + ' '.repeat(paddingNeeded / 2 - 1) + string + ' '.repeat(paddingNeeded / 2) + '-'
    }
}

function displayBooks(library){

    for(let book of library){
        let card = `
        ----------------------------------------
        -                 Title                -
        -                                      -
        ${addPadding(book.title)}
        ----------------------------------------
        -                Author                -
        -                                      -
        ${addPadding(book.author)}
        ----------------------------------------
        -                Pages                 -
        -                                      -
        ${addPadding(String(book.pages))}
        ----------------------------------------
        -            Currently Read            -
        -                                      -
        ${addPadding(book.read ? 'Not read': 'Read')}
        ----------------------------------------
        -                  Id                  -
        -                                      -
        ${addPadding(book.id)}
        ----------------------------------------
        `
        console.log(card)
    }
}

addBookToLibrary('OPM', 'Saitama', 500, true);
addBookToLibrary('Solo leveling', 'Wing Zao', 200, false);
addBookToLibrary('Solo leveling', 'Wing Zao adfsdsd adsfasd', 200, false);

displayBooks(myLibrary);