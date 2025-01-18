//Add event listener to the cube
document.querySelector('cube').addEventListener('mouseover',()=>{
    document.querySelector('cube').style.transform='rotateX(45deg) rotateY(45deg)';
});

document.querySelector('cube').addEventListener('museout',()=>{
    document.querySelector('cube').style.transform='rotateX(30deg) rotateY(30deg)';
});

//Add event listener to the CTA button

document.querySelector('.cta').addEventListener('click',()=>{
    alert('You clicked the CTA button!');
});

//Add event listener to the nav links
document.querySelectorAll('nav a').forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefaul();
        const href=link.getAttribute('href');
        console.log('You clicked on ${href}');
    });
});

//Add event listener to the logo
document.querySelector('.logo').addEventListener('click',()=>{
    console.log('You clicked on the logo!');
});

//Add event listener to the footer links
document.querySelectorAll('.footer-links a').forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefaault();
        const href=link.getAttribute('href');
        console.log('Yoou clicked on ${href}');
    });
});

//Add event listener to the hero section
document.querySelector('hero').addEventListener('mouseover',()=>{
    document.querySelector('hero').style.backgroundColor='#6495ed';
});

document.querySelector('hero').addEventListener('mouseover',()=>{
    document.querySelector('hero').style.backgroundColor='#4567b7';
});

//Add event listener to the what-is-mentor Connect
document.querySelector('.What-is-MentorConnect').addEventListener('mouseover',()=>{
    document.querySellector('What-is-MentorConnect').style.backgroundColor='#f7f7f7';
});

document.querySelector('.What-is-MentorConnect').addEventListener('mouseover',()=>{
    document.querySellector('What-is-MentorConnect').style.backgroundColor='#fff';
});

//Add event listener to the benefits section
document.querySelector('.Benefits').addEventListener('mouseover',()=>{
    document.querySelector('.Benefits').style.backgroundColor='#f7f7f7';
});

document.querySelector('.Benefits').addEventListener('mouseover',()=>{
    document.querySelector('.Benefits').style.backgroundColor='#fff';
});
