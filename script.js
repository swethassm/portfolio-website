
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "SOFTWARE ENGINEER",
    "EARLY CAREER PROFESSIONAL",
    "COMPUTER VISION ENTHUSIAST"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "swethasmenon.mec@gmail.com",
        Password : "921FDCAA7A46B7D1257BD0552C6FBA3957D7",
        To : 'swethasmenon.mec@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Connection through my portfolio",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Email sent Successfully!")
    );
}
function showDiv(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    
    // Scroll to the selected section
    const selectedDiv = document.getElementById(sectionId);
    if (selectedDiv) {
        selectedDiv.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }

    // Update active link
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });
    event.target.classList.add('active'); // Add active class to clicked link
}

// Show all sections by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to home section
});

document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('input', function() {
        const label = this.nextElementSibling;
        if (this.value) {
            label.style.opacity = '0'; // Hide label when typing
        } else {
            label.style.opacity = '1'; // Show label if input is empty
        }
    });
});

// function createPopup(id) {
//     let popupNode = document.querySelector(id);
//     let overlay = popupNode.querySelector(".overlay");
//     let closeBtn = popupNode.querySelector(".close-btn");
//     function openPopup(){
//         popupNode.classList.add("active");

//     }
//     function closePopup(){
//         popupNode.classList.remove("active");
        
//     }

//     overlay.addEventListener("click", closePopup);
//     closeBtn.addEventListener("click",closePopup);
//     return openPopup;
// }

// let popup = createPopup("#popup");
// document.querySeclector("#open-popup").addEventListener("click",popup);

window.onload = typeWriter;



