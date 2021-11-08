

const open = document.querySelector('.menuIcon')
const close = document.querySelector('.closes')
const openFunc = ()=>{
    console.log('working')
    const nav = document.querySelector('.nav__mobileMenu')
    nav.classList.add('active')
}
const closeFunc = ()=>{
    console.log('working')
    const nav = document.querySelector('.nav__mobileMenu')
    nav.classList.remove('active')
}
open.onclick = openFunc
close.onclick = closeFunc

$(document)
    .ready(function () {
        $('.owl-carousel').owlCarousel({
            autoplay: true,
            loop: true,
            dots: false,
            items: 3,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    

/*
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Private investors', 
            'Private Sale', 
            'Pre-sale', 
            'Airdrop Reward', 
            'Strategic Partnership', 
            'Marketing and Buyback',
            'Team Token',
            'Burn',
            'Liquidity'
        ],
        datasets: [{
            label: 'Tokens',
            data: [5, 
                10, 
                30, 
                5, 
                10, 
                15,
                10,
                5,
                5 
                ],
            backgroundColor: [
                '#03C5FF',
                '#FFCC3E',
                '#67FA97',
                '#FF3E72',
                '#FFCC3E',
                '#03C5EE',
                '#AD00FE',
                '#FF3E72',
                'black'
            ],
            borderWidth: 1,
            weight:1,
            raduis:'10%'
        }]
    },
    options: {
        responsive: true,
        plugins:{
            legend: {
            position: 'top',
            labels: {
                font:{
                    size:16,
                    family:'Work-sans'
                },
                boxheight:30,
                boxWidth: 10,
                padding: 20
        }
        }
        },
        scales: {
            x :{
                display:false,
                grid:{
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                display:false,
                grid:{
                    display:false
                }
            }
        }
    }
});
*/

const privateSaleBtn =  document.querySelector('.privateSaleBtn')
const formFunc = async ()=>{
    const type =  document.querySelector('#type').value
    const firstName =  document.querySelector('#firstName').value
    const lastName =  document.querySelector('#lastName').value
    const email =  document.querySelector('#email').value
    document.querySelector('.privateSaleForm').style.display = 'none'
    document.querySelector('.privateSaleLoading').style.display = 'block'
     const response = await fetch('https://api.transfi.net/api/user-list', {
        headers: { 'Content-Type': 'application/json',
                    Accept:'application/json'
                },
                method:'POST',
        body:JSON.stringify({
            type: type,
            first_name: firstName,
            last_name: lastName,
            email: email
        })    
    })
    if (response.ok){
        const jsonResponse = await response.json()
        document.querySelector('.privateSaleSuccess').innerHTML = jsonResponse.message
        document.querySelector('.privateSaleLoading').style.display = 'none'
        document.querySelector('.privateSaleSuccess').style.display = 'block'
    }
}
privateSaleBtn.onclick = formFunc;


const mailingListBtn =  document.querySelector('.mailingListBtn')
const mailingFunc = async()=>{
    console.log('submitting')
    const email =  document.querySelector('#mailingMail').value
    
     const response = await fetch('https://api.transfi.net/api/user-list', {
        headers: { 'Content-Type': 'application/json',
                    Accept:'application/json'
                },
        method:'POST',
        body:JSON.stringify({
            type: 'mailing_list',
            email: email
        })    
    })
    if (response.ok){
        const jsonResponse = await response.json()
        document.querySelector('#mailingMail').style.display = 'none'
        document.querySelector('.mailingListBtn').innerHTML = jsonResponse.message
        document.querySelector('#mailingListBtn').style.width = '100%'
    }
}
mailingListBtn.onclick = mailingFunc;


const productBtn =  document.querySelector('.productBtn')
const productFunc = async ()=>{
    const email =  document.querySelector('#productEmail').value
    document.querySelector('.productForm').style.display = 'none'
    document.querySelector('.productLoading').style.display = 'block'
     const response = await fetch('https://api.transfi.net/api/user-list', {
        headers: { 'Content-Type': 'application/json',
                    Accept:'application/json'
                },
        method:'POST',
        body:JSON.stringify({
            type:'product_waiting_list',
            email: email
        })    
    })
    if (response.ok){
        const jsonResponse = await response.json()
        document.querySelector('.productSuccess').innerHTML = jsonResponse.message
        document.querySelector('.productLoading').style.display = 'none'
        document.querySelector('.productSuccess').style.display = 'block'
    }
}
productBtn.onclick = productFunc;







/*$('.privateSaleForm').submit(function(){
    $.post("https://api.transfi.net/api/user-list",
        {
            headers: { 'Content-Type': 'application/json' },
            type: 'private_sale',
            first_name:'Emmanuel',
            last_name:'Tudje',
            email: 'emmanueltudje@gmail.com'  
        },
        function(message){
            alert(message)
        }
    )
})
*/



/*$("#menuIcon").on("click", () => {
    console.log('working')
    $(".nav__mobileMenu").addClass('active')
})

$('.closes').on('click', () => {
    $('.nav__mobileMenu').removeClass('active')
})*/

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 200) {
        $('.nav').addClass('fixed')
        $('.nav__mobile').addClass('fixed')
    } else {
        $('.nav').removeClass('fixed');
        $('.nav__mobile').removeClass('fixed')
    }
})

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 380,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 2
            },
            "image": {
                "src": "img/github.svg",
                "width": 200,
                "height": 200
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#023E8A",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/* ---- stats.js config ---- */

let count_particles,
    stats,
    update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document
    .body
    .appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};


