// Input Name
function replacename() {
  let nama = prompt("Please enter your name 👋", "");
  document.getElementById("name").innerHTML = nama;
}

replacename();

// Input Form
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}

// Output Form
function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messsages").innerHTML = messages;
}

// Slide Show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgList.length;
  }

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";

  setInterval(() => {
    plusDivs(1);
  }, 5000);
}
// function showDivs(n) {
//   var i;
//   var imgList = document.getElementsByClassName("img-slideshow");
//   if (n > imgList.length) {
//     slideIndex = 1;
//   } else if (n < 1) slideIndex = imgList.length;

//   for (i = 0; (i = imgList.length); i++) {
//     imgList[i].style.display = "none";
//   }

//   imgList[slideIndex - 1].style.display = "block";
// }
