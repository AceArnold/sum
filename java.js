// this block is for the linkedin and github buttons
const myButton = document.getElementById('Github');
const myButton2 = document.getElementById('LinkedIn');
myButton.addEventListener('click', function() {
    window.location.href = 'https://github.com/AceArnold';
});
myButton2.addEventListener('click', function() {
    window.location.href = 'https://www.linkedin.com/in/mutara-arnold/';
});


// this block is for the download button for the whole page
const dwlbtn = document.getElementById('download-page');
dwlbtn.addEventListener('click', () => {
    window.print();
});


// this block is for the download button for the CV in PDF
const cv = document.getElementById('download-cv');
cv.addEventListener('click', function() {
    console.log("CV Downloaded");
    const url = 'https://drive.google.com/uc?export=download&id=1AiZqUup3P-TXmgxCXoNKLRQ7I1H4d_G2'
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Arnold_Mutara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});


// this block is for the email sending functionality using EmailJS
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


// this block is for the projects button functionality
const projectButtons = document.getElementById('imgbtn');
projectButtons.addEventListener('click', function() {
    alert("There is currently no more information about this project. Please check back later.");
});

const projectButtons1 = document.getElementById('imgbtn1');
projectButtons1.addEventListener('click', function() {
    alert("There is currently no more information about this project. Please check back later.");
});

const projectButtons2 = document.getElementById('imgbtn2');
projectButtons2.addEventListener('click', function() {
    alert("There is currently no more information about this project. Please check back later.");
});