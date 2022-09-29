///////////////////////////////////////////////////// ~Products~ /////////////////////////////////////////////////////////////

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
  // Store the card dimensions inside this variable
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })

})

///////////////////////////////////////////////////// ~Hero Section~ /////////////////////////////////////////////////////////////
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

///////////////////////////////////////////////////// ~Pop Up~ /////////////////////////////////////////////////////////////

function show_pup() {
  document.getElementById("pup").classList.toggle("open");
  // document.getElementById("pup").innerHTML=` <h1> hello </h1>`
}

///////////////////////////////////////////////////// ~Count Down~ ///////////////////////////////////////////////////////////

const storeOpening = new Date('October 11, 2022 00:00:00');
setCountdown(storeOpening); // calls setCountdown only once!
// calls setCountdown every second
setInterval(function () {
  setCountdown(storeOpening);
}, 1000);
function setCountdown(countingDownTime) {
  let now = new Date();
  let timeRemaining = countingDownTime - now;
  //  console.log(timeRemaining);
  // convert it in regular unit
  let seconds = Math.floor(timeRemaining / 1000);
  let minutes = Math.floor(timeRemaining / (1000 * 60));
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  //console.log(seconds , minutes , hours , days);
  let daysToDisplay = days;
  let hoursToDisplay = hours - (days * 24);
  let minutesToDisplay = minutes - (hours * 60);
  let secondsToDisplay = seconds - (minutes * 60);
  //  console.log(daysToDisplay , hoursToDisplay , minutesToDisplay , secondsToDisplay);
  var daysElement = document.getElementById("days");
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");
  daysElement.textContent = daysToDisplay;
  hoursElement.textContent = hoursToDisplay;
  minutesElement.textContent = minutesToDisplay;
  secondsElement.textContent = secondsToDisplay;
}

///////////////////////////////////////////////////// ~FAQ's~ ///////////////////////////////////////////////////////////

const accordion = document.getElementsByClassName("contentBox");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle('active')
  });
}

///////////////////////////////////////////////////// ~About Us~ ///////////////////////////////////////////////////////////

function show_aboutUS() {
  document.getElementById("display").innerHTML = `
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}
.about-section {
  padding: 20px; text-align: center; background-color: #474e5d; color: white; height:200px;
}
.container {
  padding: 0 16px;
}
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}
.title {
  color: orange;
}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
</head>
<body>
<div class="about-section" >
  <h1>About Our Company</h1>
<p><font>Our E-Commerce is a Pan-African technology company that is built around a marketplace, logistics service and payment service. </font><br>
The logistics service enables the delivery of packages through a network of local partners while
the payment services facilitate the payments of online transactions within our company's ecosystem.</p>
</div>
<h2 style="text-align:center">Our Team</h2>

<div class="row">

  <div class="column">
    <div class="card">
      <img src="./img/f1111.jpg" style="width:200px; height:200px">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>jane@hotmail.com</p>
      </div>
    </div>
  </div>

  <div class="column">
  <div class="card">
    <img src="./img/f3.jpg" style="width:200px; height:200px">
    <div class="container">
      <h2>John Doe</h2>
      <p class="title">Designer</p>
      <p>john@hotmail.com</p>
    </div>
  </div>
</div>

  <div class="column">
    <div class="card">
      <img src="./img/f2.jpg" style="width:200px; height:200px">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>mike@hotmail.com</p>
      </div>
    </div>
  </div>
  


</div>

</body>
`;
}
///////////////////////////////////////////////////// ~Find Us~ ////////////////////////////////////////////////////////////

function show_findUS() {
  document.getElementById("display").innerHTML = `
<b style="font-size:20px ;">  Let's drink a coffe together! </b> <br><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.0133004303602!2d29.903900515359776!3d31.192644570371698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c394ebd03ec1%3A0x16cbff5d844ff34b!2sInformation%20Technology%20Institute!5e0!3m2!1sen!2seg!4v1663850631757!5m2!1sen!2seg" 
width="80%" height="450" style="border:0.5; text-align: center;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`
}

///////////////////////////////////////////////////// ~Active li~ ////////////////////////////////////////////////////////////

let list = document.querySelectorAll("li a");
let aTags = document.querySelectorAll("#aTag");
list.forEach((li) => {
  li.addEventListener("click", (e) => {
    li.forEach((li) => {
      // remove active class from all li
      li.classList.remove("active")
    });
    // add active class to current clicked
    aTags.style.backgroundColor = e.currentTarget.classList.add("active");
    //  aTags.style.backgroundColor = e.currentTarget.dataset;
  });
});







