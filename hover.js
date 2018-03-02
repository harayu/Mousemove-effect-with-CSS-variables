window.addEventListener( 'load', () => { document.body.classList.remove('loading'); } );

Array.from(document.querySelectorAll('li > a')).forEach( (li, idx) => {

    li.addEventListener( 'mousemove', (e) => {
        // グラデーションの中心位置
        let x = e.pageX - e.target.offsetWidth * 2;
        let y =  (e.pageY - document.documentElement.scrollTop) - e.target.offsetHeight * idx;

        // CSS カスタムプロパティ Set
        e.target.style.setProperty('--custom-left', `${x}px`);
        e.target.style.setProperty('--custom-top', `${y}px`);
    }, false);

});
