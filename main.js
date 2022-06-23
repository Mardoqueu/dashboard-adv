const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span').classList.toggle('active');
})
