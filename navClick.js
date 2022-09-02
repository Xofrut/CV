const but = document.querySelector('#but')
const popUp = document.querySelector('#popUp')
const menu = document.querySelector('#menu').cloneNode(true)
const body = document.body

but.addEventListener('click',butAction)

function butAction(event){
    event.preventDefault();
    popUp.classList.toggle('open')
   
    renderMenu(menu)

    body.classList.toggle('noScroll')
}
function renderMenu (node){
    popUp.appendChild(node)
}