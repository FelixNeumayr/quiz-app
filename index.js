const bookmarkButton = document.querySelector('[data-js="questionBox1"]');
const answerButton = document.querySelector('[data-js="answerButton"]');

let bookmarkActive = false;

bookmarkButton.addEventListener('click', () => {

    

    if (bookmarkActive === false) {
bookmarkButton.classList.toggle('active');
event.preventDefault();
bookmarkActive = true;


    } else if (bookmarkActive === true){
        bookmarkButton.classList.toggle('active');
        
    }

})


answerButton.addEventListener('click', () => {
    event.preventDefault();
    answerButton.classList.toggle("active");
})


