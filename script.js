// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//cursor circle (Just an extra idea)

// document.addEventListener('mousemove', function(event) {
//     var circleContainer = document.getElementById('circle-container');
//     circleContainer.style.left = event.clientX + 'px';
//     circleContainer.style.top = event.clientY + 'px';
//   });


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar lines
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id +']').classList.add('active');
            })

            //active sections for animations on scroll
            sec.classList.add('show-animate'); 
            //toggling this will repeat animations on scroll
        }
        //toggling this will repeat animations on scroll
        // else {
        //     sec.classList.remove('show-animate') 
        // }
    })

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// document.addEventListener('DOMContentLoaded', function() {
//     var reachOutLink = document.querySelector('.btn-box a');
//     var contactSection = document.getElementById('contact');
  
//     reachOutLink.addEventListener('click', function(event) {
//       event.preventDefault();
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     });
//   });
