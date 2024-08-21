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

    // WhatsApp number (replace with the number you want to send the message to)
    let whatsappNumber = "+212773192006"; // Replace with your number

    // Create the WhatsApp URL
    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    // Open WhatsApp with the message pre-filled
    if (name === '' || message === '') {
        alert('Please fill up the input fields')
    }else{
        window.open(whatsappURL, '_blank');
    }
    
}