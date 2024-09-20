const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    //state
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    } else{ 
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () =>{
            isMobileNavOpen = false;
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
        });
    });
};

<<<<<<< HEAD
const handleDownload = () => {
    let fileUrl = '/cv.pdf';
    let link = document.createElement('a');
    link.href = fileUrl;
    link.download = '/cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

document.getElementById('resume').addEventListener('click', function(){
    handleDownload();
})
=======
>>>>>>> baab88babf4f2f869e3c4a28a9b6b8aab2c9a4b5
export default mobileNav;