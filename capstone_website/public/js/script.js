const booksBtn = document.getElementById('booksBtn')
const clothesBtn = document.getElementById('clothesBtn')
const gamesBtn = document.getElementById('gamesBtn')

const booksForm = document.getElementById('booksForm')
const clothesForm = document.getElementById('clothesForm')
const gamesForm = document.getElementById('gamesForm')

const container = document.getElementById('container')

booksBtn.onclick = function(){
    clothesForm.style.display = "none"
    gamesForm.style.display = "none"
    booksForm.style.removeProperty('display')
    window.scrollTo(0,document.body.scrollHeight);
}

clothesBtn.onclick = function(){
    booksForm.style.display = "none"
    gamesForm.style.display = "none"
    clothesForm.style.removeProperty('display') 
    window.scrollTo(0,document.body.scrollHeight);
}

gamesBtn.onclick = function(){
    clothesForm.style.display = "none"
    booksForm.style.display = "none"
    gamesForm.style.removeProperty('display')
    window.scrollTo(0,document.body.scrollHeight);
}