const myButton = document.getElementById('Github');
const myButton2 = document.getElementById('LinkedIn');

myButton.addEventListener('click', function() {
    window.location.href = 'https://github.com/AceArnold';
});
myButton2.addEventListener('click', function() {
    window.location.href = 'https://www.linkedin.com/in/mutara-arnold/';
});

const dwlbtn = document.querySelector('.download-btn');

dwlbtn.addEventListener('click', () => {
    printPage();
});

function sendEmail() {
    
    let vars = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_55enicw", "template_vzzo8zp", vars)
  .then(() => alert("Email sent successfully!"))
  .catch((err) => alert("Failed to send email: " + err));

  console.log(vars);
}