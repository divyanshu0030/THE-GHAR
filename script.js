// ===============================
// THE GHAR - script.js
// ===============================

// Smooth Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Navbar Background Change

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.style.background="#0D47A1";
        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        nav.style.background="rgba(0,0,0,.75)";
        nav.style.boxShadow="none";

    }

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll(".card,.price-card,.gallery img,.amenity-grid div")
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Gallery Lightbox

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`
<img id="lightbox-img">
<span id="close-lightbox">&times;</span>
`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightbox-img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

document.getElementById("close-lightbox").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Hero Background Slider

const hero=document.querySelector(".hero");

const heroImages = [
    "IMAGES/IMAGE1.JPG.jpeg",
    "IMAGES/IMAGE2.JPG.jpeg",
    "IMAGES/IMAGE3.JPG.jpeg"
];

let current=0;

setInterval(()=>{

current++;

if(current>=heroImages.length){

current=0;

}

hero.style.backgroundImage=`url(${heroImages[current]})`;

},4000);