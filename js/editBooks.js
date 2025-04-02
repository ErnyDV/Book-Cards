const editBtn = document.querySelector('#edit');
let editOn = false

editBtn.addEventListener('click', () => {
    console.log(myLibrary)

    console.log(editOn)
    if(editOn === false){
        document.querySelector('.start-text').textContent = 'Hover a card to delete it!'
        document.querySelector('#add-card').style.display = 'none'
        const emptyCard = document.querySelector('#empty-card');
        if(emptyCard){
            emptyCard.style.display = 'none'
        }
        for (book of myLibrary){
            const cardEl = book.element
            element = book.element
            console.log(cardEl)
            const innerCard = element.querySelector('.card-inner')
            element.addEventListener('mouseenter', () => {
                innerCard.style.transform = "rotateY(180deg)"
            

            })
            element.addEventListener('mouseleave', () =>{
                innerCard.style.transform = "rotateY(0)"
            })


        }
        editOn = true;

    }else{
        document.querySelector('.start-text').textContent = 'Click the empty card to create a new book!'
        document.querySelector('#add-card').style.display = 'flex'
        const emptyCard = document.querySelector('#empty-card');
        if(emptyCard){
            emptyCard.style.display = 'flex'
        }
        for (book of myLibrary){
            let oldEl = book.element
            let newEl = book.element.cloneNode(true)
            oldEl.parentNode.replaceChild(newEl, oldEl)
            book.element = newEl;
        }
        editOn = false

    }
})



function changeReadStatus(element){
    const container = element.parentElement.parentElement.parentElement;
    console.log(element)
    console.log(container)
    const id = container.querySelector('#book-id')
    const readEl = container.querySelector('#book-read')
    console.log(readEl.textContent)
    for (book of myLibrary){

        if (book.id === id.textContent){
            if(book.read){
                element.src = './icons/uncheckedbox.svg'
                book.read = false
                readEl.textContent = "Not Read"
            }else {
                book.read = true
                readEl.textContent = "Read"
                element.src = './icons/checkbox.svg'

            }
        }
    }
}

function removeCard(element){
    let counter = 0
    const id = element.querySelector('#book-id').textContent
    console.log(element)
    for(book of myLibrary){

        if(id === book.id){
            delete  myLibrary[counter]
            element.remove()
        }
        counter++;

    }
}