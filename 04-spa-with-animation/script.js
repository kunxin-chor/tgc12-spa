function hideAllPages() {
    let allPages = document.querySelectorAll('.page');
    for (let eachPage of allPages) {
        eachPage.classList.remove('show');
        eachPage.classList.add('hide');
    }
}

document.querySelector('#page1-btn').addEventListener('click', function(){
    // hide all the pages
    hideAllPages();

    document.querySelector('#page1').classList.add('show');
    document.querySelector('#page1').classList.remove('hide');
})

document.querySelector('#page2-btn').addEventListener('click', function(){
    // hide page 1
    document.querySelector('#page1').classList.remove('show');
    document.querySelector('#page1').classList.add('hide');

    // hide page 3
    document.querySelector('#page3').classList.remove('show');
    document.querySelector('#page3').classList.add('hide');

    // show page 2
    document.querySelector('#page2').classList.remove('hide');
    document.querySelector('#page2').classList.add('show');
})

document.querySelector("#page3-btn").addEventListener('click', function(){
    hideAllPages();

    let page = document.querySelector('#page3');
    page.classList.add('show');
    page.classList.remove('hide');
})