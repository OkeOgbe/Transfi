// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days ;
  document.getElementById("hours").innerHTML = hours; 
  document.getElementById("min").innerHTML = minutes ;
  document.getElementById("sec").innerHTML = seconds 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

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
    

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Platform', 
            'Seed, Private and Public Sale', 
            'Team, Advisors and Development', 
            'Liquidity and Exchange', 
            'Marketing and Partnership', 
            'Airdrop/community Bounty',
        ],
        datasets: [{
            label: 'Tokens',
            data: [ 
                10, 
                25, 
                20, 
                20, 
                20,
                5,
                ],
            backgroundColor: [
                '#03C5FF',
                '#FFCC3E',
                '#67FA97',
                '#FF3E72',
                '#FF6B3E',
                '#3E72FF',
            ],
            borderWidth: 1,
            weight:1,
            raduis:'10%'
        }]
    },
    options: {
        responsive: true,
        radius:'100%',
        plugins:{
            legend: {
            position: 'bottom',
            display:false,
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


const privateSaleBtn =  document.querySelector('.privateSaleBtn')
const formFunc = async ()=>{
    //const type =  document.querySelector('#type').value
    const firstName =  document.querySelector('#firstName').value
    const lastName =  document.querySelector('#lastName').value
    const email =  document.querySelector('#email').value
    document.querySelector('.privateSaleForm').style.display = 'none'
    document.querySelector('.privateSaleLoading').style.display = 'block'

    _scq.push(["identify",{ 
    email: email, 
    firstName: firstName, 
    lastName: lastName,
    tags: ["privateSales"],
    success:()=>{
        document.querySelector('.privateSaleSuccess').innerHTML = "Added to List"
        document.querySelector('.privateSaleLoading').style.display = 'none'
        document.querySelector('.privateSaleSuccess').style.display = 'block'
        setTimeout(()=>{
            document.querySelector('.privateSaleSuccess').style.display = 'none'
            document.querySelector('.privateSaleForm').style.display = 'block'
            document.querySelector('#firstName').value = ""
            document.querySelector('#lastName').value = ""
            document.querySelector('#email').value = ""
        }, 1000)
    },
    failure:()=>{
        document.querySelector('.privateSaleSuccess').innerHTML = "Not Added to List"
        document.querySelector('.privateSaleLoading').style.display = 'none'
        document.querySelector('.privateSaleSuccess').style.display = 'block'
        setTimeout(()=>{
            document.querySelector('.privateSaleSuccess').style.display = 'none'
            document.querySelector('.privateSaleForm').style.display = 'block'
            document.querySelector('#firstName').value = ""
            document.querySelector('#lastName').value = ""
            document.querySelector('#email').value = ""
        }, 1000) 
    }
    }]);
}
privateSaleBtn.onclick = formFunc;


const mailingListBtn =  document.querySelector('.mailingListBtn')
const mailingFunc = async()=>{
    console.log('submitting')
    const email =  document.querySelector('#mailingMail').value
    _scq.push(["identify",{ 
        email: email, 
        tags: ["mailingList"],
        success:()=>{
            document.querySelector('#mailingMail').style.display = 'none'
            document.querySelector('.mailingListBtn').innerHTML = "Thanks for subcribing"
            setTimeout(()=>{
                document.querySelector('#mailingMail').style.display = 'block'
                document.querySelector('#mailingMail').value = ""
                document.querySelector('.mailingListBtn').innerHTML = "Subscribe to our Newsletter"
            }, 1000)
        },
        failure:()=>{
            document.querySelector('#mailingMail').style.display = 'none'
            document.querySelector('.mailingListBtn').innerHTML = "Unable to subscribe"
            setTimeout(()=>{
                document.querySelector('#mailingMail').style.display = 'block'
                document.querySelector('#mailingMail').value = ""
                document.querySelector('.mailingListBtn').innerHTML = "Subscribe to our Newsletter"
            }, 1000)
        }
    }])
}
mailingListBtn.onclick = mailingFunc;


const productBtn =  document.querySelector('.productBtn')
const productFunc = async ()=>{
    const email =  document.querySelector('#productEmail').value
    document.querySelector('.productForm').style.display = 'none'
    document.querySelector('.productLoading').style.display = 'block'
    _scq.push(["identify",{ 
        email: email, 
        tags: ["productsWaitingList"],
        success:()=>{
            document.querySelector('.productSuccess').innerHTML = "added to list"
            document.querySelector('.productLoading').style.display = 'none'
            document.querySelector('.productSuccess').style.display = 'block'
            setTimeout(()=>{
                document.querySelector('.productSuccess').style.display = 'none'
                document.querySelector('.productForm').style.display = 'block'
                document.querySelector('#productEmail').value = ""
            }, 1000)
        },
        failure:()=>{
            document.querySelector('.productSuccess').innerHTML = "Not addded to list"
            document.querySelector('.productLoading').style.display = 'none'
            document.querySelector('.productSuccess').style.display = 'block'
            setTimeout(()=>{
                document.querySelector('.productSuccess').style.display = 'none'
                document.querySelector('.productForm').style.display = 'block'
                document.querySelector('#productEmail').value = ""
            }, 1000)
        }
        }]);
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


