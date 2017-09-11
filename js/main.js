var feedback = document.querySelector(".feedback-button");
  
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  
  if (storageLogin) {
    login.value = storageLogin;
  }
  
  if (storageEmail) {
    email.value = storageEmail;
  }
  
  if (login.value && email.value) {
    message.focus();
  }
  else if (!login.value && !email.value) {
    login.focus();
  }
  else if (login.value && !email.value) {
    email.focus();
  }
  else if (!login.value && email.value) {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

window.onload = function () {
  var map = new YMaps.Map(document.getElementById("YMapsID"));

  map.setCenter(new YMaps.GeoPoint(30.323055, 59.938635), 17);

  var s = new YMaps.Style();

  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "img/marker.png";
  s.iconStyle.size = new YMaps.Point(231, 190);
  s.iconStyle.offset = new YMaps.Point(-115, -190);
  s.hasBalloon = false;

  var placemark = new YMaps.Placemark(map.getCenter(), {
    style: s,
    hideIcon: false
  });

  map.addOverlay(placemark);
};