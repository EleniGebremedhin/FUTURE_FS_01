emailjs.init("rADPZvlkbRIzqwqyi");

const form = document.getElementById("contact-form");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_0hdz8na", "template_b4c4crr", "#contact-form").then(
    function (response) {
      statusDiv.innerText = "Message sent successfully! ✅";
      statusDiv.style.color = "green";
      form.reset();
    },
    function (error) {
      statusDiv.innerText = "Oops! Something went wrong. ❌ Please try again.";
      statusDiv.style.color = "red";
      console.error(error);
    },
  );
});
