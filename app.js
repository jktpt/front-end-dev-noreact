const items = document.querySelectorAll('.blur');
const bg = document.getElementById('background-page');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');


box1.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(1)
    removeClass(2)
    removeClass(3)
    removeClass(4)
    removeClass(5)
    removeClass(6)
})

box2.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(2)
    removeClass(1)
    removeClass(3)
    removeClass(4)
    removeClass(5)
    removeClass(6)
})

box3.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(3)
    removeClass(1)
    removeClass(2)
    removeClass(4)
    removeClass(5)
    removeClass(6)
})

box4.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(4)
    removeClass(1)
    removeClass(2)
    removeClass(3)
    removeClass(5)
    removeClass(6)
})

box5.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(5)
    removeClass(1)
    removeClass(2)
    removeClass(3)
    removeClass(4)
    removeClass(6)
})

box6.addEventListener('click',()=>{
    // console.log("Hello1");
    addClass(6)
    removeClass(1)
    removeClass(2)
    removeClass(3)
    removeClass(4)
    removeClass(5)
})

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
    })
});

function removeActive(){
    items.forEach((item)=>{
        item.classList.remove('active');
    })
}


function addClass(x){
    bg.classList.add(`image-${x}`)
        
}

function removeClass(x){
    bg.classList.remove(`image-${x}`)   
}