const bookmarkButton = document.querySelector('[data-js="questionBox1"]');
const answerButton = document.querySelector('[js-data"answerButton"]');

bookmarkButton.addEventListener('click', () => {

bookmarkButton.classList.toggle('active');
alert("Added to Bookmarks!");

})


answerButton.addEventListener('click' () => {
    answerButton.classList.toggle("active");
})


//beides geht nur während des maus klicks