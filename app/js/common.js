let mobileButtonWrapper = document.querySelector('.mobile-button-wrapper');

let html = document.querySelector('html')

if(mobileButtonWrapper){
    mobileButtonWrapper.addEventListener('click', function () {
        let ps
        let mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper')
        mobileButtonWrapper.classList.toggle('open')
        mobileMenuWrapper.classList.toggle('open')
        html.classList.toggle('hidden')
        if(ps){
            ps.destroy()
        }
        else{
            if (event.cancelable) event.preventDefault();
            ps = new PerfectScrollbar(mobileMenuWrapper, {
                useBothWheelAxes: false,
                suppressScrollX: true
            });
        }
    })
}

let mobileSubmenuButtonList = document.querySelectorAll('.mobile-menu-wrapper .menu-item-has-children');

if(mobileSubmenuButtonList.length > 0){
    mobileSubmenuButtonList.forEach( element => {
        element.addEventListener('click', function () {
            element.classList.toggle('open')
        })
    })
}


