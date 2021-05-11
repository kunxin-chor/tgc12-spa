function hideAllPages() {
    let allPages = document.querySelectorAll('.page');
    for (let eachPage of allPages) {
        eachPage.classList.remove('show');
        eachPage.classList.add('hide');
    }
}

let allPageButtons = document.querySelectorAll('.page-btn');
for (let b of allPageButtons) {
    b.addEventListener('click', function(event){
        let clickedButton = event.target;
        let pageNumber = clickedButton.dataset.page;

        hideAllPages();

        // show the page indicated by the pageNumber variable
        let page = document.querySelector('#page'+pageNumber);
        page.classList.remove('hide');
        page.classList.add('show');
    })
}