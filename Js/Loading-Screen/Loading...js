const text = document.getElementById('Loader-Loading');
const main_Page = document.getElementById('Main_Page');
const Header = document.getElementById('Header_1')
setTimeout(() => {
    main_Page.style.display = 'none'
    Header.style.display = 'none'
    text.innerText = 'Loading.'
    setTimeout(() => {
        text.innerText = 'Loading..'
    }, 1000);
    setTimeout(() => {
        text.innerText = 'Loading...'
    }, 2000);
    setTimeout(() => {
        text.innerText = 'Loading.'
    }, 3000);
   setTimeout(() => {
       text.innerText = 'Loading..'
       setTimeout(() => {
           main_Page.style.display = 'Block'
           Header.style.display = 'Block'
       }, 10);
    },
     4000);
}, 10);