const editBtn = document.querySelector('#edit');
let editOn = false

editBtn.addEventListener('click', () => {
    console.log(myLibrary)

    console.log(editOn)
    if(editOn === false){
        for (book of myLibrary){
            const cardEl = book.element
            element = book.element
            console.log(cardEl)
            const innerCard = element.querySelector('.card-inner')
            innerCard.addEventListener('mouseenter', () => {
                innerCard.style.transform = "rotateY(180deg)"
        })
    
            innerCard.addEventListener('mouseleave', () => {
                innerCard.style.transform = "rotateY(0)"
            })
        }
        editOn = true;

    }else{
        for (book of myLibrary){
            let oldEl = book.element
            let newEl = book.element.cloneNode(true)
            oldEl.parentNode.replaceChild(newEl, oldEl)
            book.element = newEl;
            editOn = false
        }
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