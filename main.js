

    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        });
    };

    let button = document.querySelector('.button');
    let footer = document.querySelector('#footer');
    

    button.addEventListener('click', () => scrollTo(footer));
