//SIDEBAR

const menuItems = document.querySelectorAll('.menu-items');
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



//remove active class from menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => { 
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }

    })
})

//================MESSAGES==================

//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        
        if (name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);


//highlight messages card when messages in the sideBar is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var( --color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
    
})


//===========THEME CUSTOMIZATION===========

// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);





//===========FONT SIZE===========

//remove active class from spans of FONT SIZE
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click',() => {

    let fontSize;
    removeSizeSelector();
    size.classList.toggle('active');
    
        if (size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--stickt-top-left', '5.4rem');
            root.style.setProperty('--stickt-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--stickt-top-left', '5.4rem');
            root.style.setProperty('--stickt-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--stickt-top-left', '-2rem');
            root.style.setProperty('--stickt-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--stickt-top-left', '-5rem');
            root.style.setProperty('--stickt-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--stickt-top-left', '-12rem');
            root.style.setProperty('--stickt-top-right', '-35rem');
            
        }
        //change font size of the root html
    document.querySelector('html').style.fontSize = fontSize;
    })

    
})


//===========CHANGE PRIMARY COLORS==========

//remove active class from color
const changeActiveColorClass = () =>{
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPallete.forEach(color => {
    color.addEventListener('click', () => {

        let primary;
        changeActiveColorClass(); //remove active class from color
        
        if(color.classList.contains('color-1')){
            primaryHue = 253;
        }else if(color.classList.contains('color-2')){
            primaryHue = 341;
        }else if(color.classList.contains('color-3')){
            primaryHue = 0;
        }else if(color.classList.contains('color-4')){
            primaryHue = 199;
        }else if(color.classList.contains('color-5')){
            primaryHue = 50;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


//===========CHANGE BACKGROUND COLORS==========
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

//changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg1.addEventListener('click', () => {
     
    //add active class
    
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
})


Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();
})



