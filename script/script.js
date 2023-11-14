const carouselSlide = document.querySelector('.carousel-slide');
const Images = document.querySelectorAll('.carousel-slide img');
const BoxImages = document.querySelectorAll('#box img');
const carousel = document.querySelector('.carousel')
//counter

let counter = 1;
const size = Images[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//buttons
const nextbtn = document.querySelector("#next")
const prevbtn = document.querySelector("#prev")

//btn listener

nextbtn.addEventListener('click', myfunction);
function myfunction() {
    if (counter >= Images.length - 1) return;
    carouselSlide.style.transition = 'transform  0.4s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
}

carouselSlide.addEventListener('click', nefunc);
function nefunc() {
    myfunction();
}
prevbtn.addEventListener('click', myfunc);
function myfunc() {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
carouselSlide.addEventListener('transitionend', function () {
    if (Images[counter].id === "lastClone") {
        carouselSlide.style.transition = 'none'
        counter = Images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (Images[counter].id === "firstClone") {
        carouselSlide.style.transition = 'none'
        counter = Images.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
//dragedItem
for (i = 0; i <= Images.length - 1; i++) {
    const item = Images[i];
    item.addEventListener('dragstart', function () {
        setTimeout(function () {
            draggedItem = item;
            console.log('dragstrat')

        }, 0)
    })
    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem = item;
            console.log('dragend')

        }, 0)
    })
}

//start drag to boxs-------------------------------------------------------------
const box = document.querySelectorAll('#box')
for (j = 0; j <= box.length - 1; j++) {
    const boxs = box[j]
    const imgs = Images[j]
    boxs.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    boxs.addEventListener('dragenter', function (e) {
        e.preventDefault();
    })
    boxs.addEventListener('dragleave', function (e) {
        e.preventDefault();
    })
    boxs.addEventListener('drop', function () {
        this.append(draggedItem)
    })
    //End drag to boxs----------------------------------------------------
    //Start Seperate button listener-----------------------------------------
    const seperateBtn = document.querySelector('#seperate');
    const p = document.querySelector('p');
    seperateBtn.addEventListener('click', function () {
        boxs.append(imgs)
        p.style.display = "block";

    })
    //End Seperate button listener-----------------------------------------------

    var c = 0;
    const count = 20;

    while (c < count) {

        const stars = document.createElement('i')
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight) / 1.5;
        const size = Math.random() * 4
        const duration = Math.random() * 5;
        stars.style.width = 1 + size + 'px';
        stars.style.height = 1 + size + 'px';
        stars.style.animationDuration = 2 + duration + 's';
        p.style.animationDuration = 8 + duration + 's';
        stars.style.top = y + 'px'
        stars.style.left = x + 'px'
        carousel.append(stars);
        c++
    }
    //Start Collect button listener----------------------
    //mouseMove Stars
    
    //end mouseMove Stars
    const collectBtn = document.querySelector('#collect');
    collectBtn.addEventListener('click', function () {
        carousels.append(imgs)
        p.style.display = "none"

    })

    //End Collect button listener----------------------------
}
//Start drag to carousel-------------------------------------------------------
const carousels = carouselSlide;
carousels.addEventListener('dragover', function (e) {
    e.preventDefault();
})
carousels.addEventListener('dragenter', function (e) {
    e.preventDefault();
})
carousels.addEventListener('dragleave', function (e) {
    e.preventDefault();
})
carousels.addEventListener('drop', function () {
    carousels.append(draggedItem)
})
//End drag to carousel----------------------------------------------------------------------



window.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const star = document.createElement('i');
    star.setAttribute('class', 'star')
    star.style.left =  x + 'px';
    star.style.top =  y + 'px';
    document.body.appendChild(star)
    if(star>=10) document.body.remove(star)
    star.style.transition = 'all 0.5s linear 0s'
    star.style.left = star.offsetLeft -0.2 + 'px'
    star.style.top = star.offsetTop - 0.2 + 'px'
    star.style.width = '10px';
    star.style.height = '10px';
    star.style.opacity = 0
})

