var icon = document.getElementById("eyeIcon");

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    icon.classList.add("fa-eye-slash");
  } else {
    x.type = "password";
    icon.classList.remove("fa-eye-slash");
  }
}
