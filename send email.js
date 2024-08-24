function sendToWhatsApp() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    // Format the message
    let whatsappMessage = "Name: " + name + " "
                        + "Email: " + email + " "
                        + "Subject: " + subject + " "
                        + "Message: " + message;

    let whatsappNumber = "+212773192006";

    // Create the WhatsApp URL
    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    if (name === '' || message === '') {
        alert('Please fill up the input fields')
    }else{
        window.open(whatsappURL, '_blank');
    }
    
}
