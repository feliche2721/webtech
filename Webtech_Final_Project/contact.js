function sendMessage(event) {
    event.preventDefault();

    let u_name = document.getElementById('i_name').value;
    let u_email = document.getElementById('i_email').value;
    let u_msg = document.getElementById('i_msg').value;

    alert("Client: " + u_name + "\nEmail: " + u_email + "\nMessage: " + u_msg);
    document.getElementById('ticket-form').reset(); // Reset the form fields
}
