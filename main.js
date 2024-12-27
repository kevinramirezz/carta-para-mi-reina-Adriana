const btnOpenElemnt = document.querySelector('#open')
const btnCloseElemnt = document.querySelector('#close')





btnOpenElemnt.addEventListener('click', ()=> {


    const coverElement = document.querySelector('.cover')
    coverElement.classList.add('open-cover')

    setTimeout(()=>{
        coverElement.style.zIndex = -1

        const paperElement = document.querySelector('.paper')
        paperElement.classList.add('open-paper')
    
        
        //animacion del corazon
        const heartElement = document.querySelector('.heart')
        heartElement.style.display = 'block'

    }, 500)

})
btnCloseElemnt.addEventListener('click', ()=> {



    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('open-paper')
    paperElement.classList.add('close-paper')
    
    setTimeout(()=>{
        coverElement.style.zIndex = 0
        coverElement.classList.remove('open-cover')

        //animacion del corazon
        const heartElement = document.querySelector('.heart')
        heartElement.style.display = 'block'
    },500)
})
