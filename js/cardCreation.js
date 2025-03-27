let cardCreationInProcess = false;
const addCardButton = document.querySelector('#add-card')

function createEmptyCard(){
    const addCard = document.querySelector('#add-card');
    const emptyCard  = `<div class="card" id="empty-card">
                <div class="top-left"></div>
                <div class="top-right"></div>
                <div class="bottom-left"></div>
                <div class="bottom-right"></div>
                <div class="card-container">
                    <div class="book-title-container">
                        <input class="input" type="text" placeholder="Book Title">
                    </div>
                    <div class="card-content">
                        <div class="text-container">
                            <img class="icon" src="icons/author.svg" alt="">
                            <input class="input" id="author-input" type="text" placeholder="Author Name">
                        </div>
                        <div class="text-container">
                            <img class="icon" src="icons/pages.svg" alt="">
                            <input class="input" id="pages-input" type="number" placeholder="Amount of Pages">
                        </div>
                        
                        
                        <div class="mark-read-container">
                            <p>Mark as Read</p>
                            <img id="icon-read" src="icons/uncheckedbox.svg" alt="">
                        </div>
                    </div>
                    <div class="background-container">
                        <input class="input" id="image-input" type="text" placeholder="Background Image Link">
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

function sumbitCard(){
    const emptyCard = document.querySelector('#empty-card');
    
    emptyCard.remove();
}


let errorAnim;
addCardButton.addEventListener('click', () => {
    const emptyCard = document.querySelector('#empty-card')
    const submit = emptyCard.querySelector('#card-submit');
    submitButton.addEventListener('click', () => {
        submitButton()
    })

    if(emptyCard?.classList){
        console.log('Hello')
        emptyCard.classList.remove('error-card')
    }

    clearTimeout(errorAnim)
    if(cardCreationInProcess){
        emptyCard.classList.add('error-card')

        errorAnim = setTimeout(()=>{
            emptyCard.classList.remove('error-card')
        }, 500)
        return
    };

    createEmptyCard()
    
})
