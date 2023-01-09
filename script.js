//Get the button:
mybutton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
{
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// EmailJS
function sendMail(params) {
    var tempParams2 = {
        from_name: document.getElementById("from_name").value,
        from_handphone: document.getElementById("from_handphone").value,
        from_email: document.getElementById("from_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_jhjfm3m','template_122rrun', tempParams2)
        .then(function(res){
            console.log("success", res.status);
    })
}

// Alert send
function myAlert() {
    alert("Message Delivered!");
}

// Reset the input fields
function myReset() {
    document.getElementById("emailForm").reset();
}


