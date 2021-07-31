function displayBurger(){
    let nav = document.getElementById('nav-bar')

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
}