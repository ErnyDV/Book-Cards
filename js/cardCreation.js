let cardCreationInProcess = false;
const addCardButton = document.querySelector('#add-card')
const myLibrary = [];

function Book(title, author, pages, read, backgroundImage, element, id){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    this.backgroundImage = backgroundImage
    this.element = element
    this.id = id
}

function createEmptyCard(){
    const addCard = document.querySelector('#add-card');
    const emptyCard  = `<div class="card" id="empty-card">
                <div class="top-left"></div>
                <div class="top-right"></div>
                <div class="bottom-left"></div>
                <div class="bottom-right"></div>
                <div class="card-container">
                    <div class="book-title-container">
                        <input class="input" id="title-input" type="text" placeholder="Book Title" required>
                    </div>
                    <div class="card-content">
                        <div class="text-container">
                            <img class="icon" src="icons/author.svg" alt="">
                            <input class="input" id="author-input" type="text" placeholder="Author Name" required>
                        </div>
                        <div class="text-container">
                            <img class="icon" src="icons/pages.svg" alt="">
                            <input class="input" id="pages-input" type="number" placeholder="Amount of Pages" required>
                        </div>
                    </div>
                    <div class="background-container">
                        <input class="input" id="image-input" type="text" placeholder="Background Image Link" required>
                    </div>
                    <div class="options">
                        <button class="card-submit" type="submit">Finish</button>
                        <button class="card-cancel" type="button">Cancel</button>
                    </div>
                </div>
            </div>
            `

    addCard.insertAdjacentHTML('beforebegin',emptyCard)


    cardCreationInProcess = true

}


function validLink(link) {
    let linkExt = link.slice(-3)
    console.log(linkExt)
    if (linkExt === 'jgp' || linkExt === 'png' || linkExt === ''){
        return
    }
    linkExt = link.slice(-4)
    console.log(linkExt)
    if(linkExt === 'webp' || linkExt === 'jpeg'){
        return
    }

    return true
}

function formError() {
    const title =  document.querySelector('#title-input')
    const author = document.querySelector('#author-input')
    const pages = document.querySelector('#pages-input')
    const imageInput  = document.querySelector('#image-input')
    const fileType = imageInput.value.slice(-3)
    
    console.log(title)
    console.log(title.value)

    if(title.value === ''){
        title.setCustomValidity("Enter the book title");
        title.reportValidity();
        return true;
    }

    if(author.value === ''){
        author.setCustomValidity("Enter the authors name");
        author.reportValidity();
        return true;
    }

    console.log(pages.value)
    if(pages.value === ''){
        pages.setCustomValidity("Enter the amount of book pages");
        pages.reportValidity();
        return true
    }
    if(pages.value < 0){
        pages.setCustomValidity("Enter a number above 0");
        pages.reportValidity();
        return true
    }

    if(imageInput.value === '' || !validLink(imageInput.value)){
        imageInput.setCustomValidity('Enter an valid image link png/jpg/jpef/webp');
        imageInput.reportValidity();
        return true
    }
}

function sumbitCard(){
    const title =  document.querySelector('#title-input')
    const author = document.querySelector('#author-input')
    const pages = document.querySelector('#pages-input')
    const imageInput  = document.querySelector('#image-input')
    const addCard = document.querySelector('#add-card');
    const emptyCard = document.querySelector('#empty-card')

    if(formError()) return


    const newCard = document.createElement('div')
    const id = crypto.randomUUID()
    const cardHtml = `
                    <div class="card-inner">
                    <div class="top-left"></div>
                    <div class="top-right"></div>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>

                    <div class="front-card">
                        <div style="background-image: url(${imageInput.value});" class="background-image"></div>
                        <div class="book-title-container">
                            <h1 id="book-title">My Hero Academia</h1>
                        </div>
                        <div class="card-content">
                            <div class="text-container">
                                <img class="icon" src="icons/author.svg" alt="">
                                <p id="book-author" class="book-text">${author.value}</p>
                            </div>
                            <div class="text-container">
                                <img class="icon" src="icons/pages.svg" alt="">
                                <p id="book-pages">${pages.value}</p>
                            </div>
                            
                            <div class="text-container">
                                <img class="icon" src="icons/check.svg" alt="">
                                <p id="book-read">Not Read</p>
                            </div>
                            
                            <div class="mark-read-container">
                                <p>Mark as Read</p>
                                <img onclick = "changeReadStatus()" id="icon-read" src="icons/checkbox.svg" alt="">
                            </div>
                        </div>
                        <div class="id-container">
                            <p>ID</p>
                            <p id="book-id">${id}</p>
                        </div>
                    </div>
                    <div class="back-card"> 
                        <button type="button" class="delete-card" onclick = "removeCard(this.parentElement.parentElement.parentElement)">delete</button>
                        <div class="top-left"></div>
                        <div class="top-right"></div>
                        <div class="bottom-left"></div>
                        <div class="bottom-right"></div>
                    </div>
                </div>
            </div>
            `
    
    newCard.innerHTML = cardHtml;

    newCard.className = 'card'
    myLibrary.push(new Book(title.value, author.value, pages.value, true, imageInput.value, newCard, id))

    addCard.insertAdjacentElement('beforebegin', newCard)
    cardCreationInProcess = false

    emptyCard.remove()

}

function cancelCard(){
    const emptyCard = document.querySelector('#empty-card')
    emptyCard.remove();
    cardCreationInProcess = false

}
function isElementLoaded(element, fn){
    const interval = setInterval(() => {
        document.querySelector(element)
        if (document.querySelector(element)){
            fn(document.querySelector(element))
            clearInterval(interval)
        }
        console.log('check')

    }, 100)
}

let errorAnim;
addCardButton.addEventListener('click', async() => {
        const emptyCard = document.querySelector('#empty-card')


        console.log(emptyCard)

        if(emptyCard?.classList.contains('.error-card')){
            console.log('Hello')
            emptyCard.classList.remove('error-card')
            clearTimeout(errorAnim)
            return
        }
        

        if(cardCreationInProcess && !emptyCard?.classList.contains('.error-card')){
            emptyCard.classList.add('error-card')
    
            errorAnim = setTimeout(()=>{
                emptyCard.classList.remove('error-card')
            }, 500)
            return
        };
    
        createEmptyCard()
        interval = isElementLoaded('#empty-card', (element,) => {
            console.log(element)
            const submitBtn = element.querySelector('.card-submit')
            submitBtn.addEventListener('click', sumbitCard)

            const cancelBtn = element.querySelector('.card-cancel')
            cancelBtn.addEventListener('click', cancelCard)
        })

})


