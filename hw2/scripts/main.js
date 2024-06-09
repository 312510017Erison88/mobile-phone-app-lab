// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let greetingMessage = document.querySelector('#greeting');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } 
  else {
    let storedName = localStorage.getItem('name');
    if (storedName !== myName) {
      // If the user changes the name, update localStorage and reset visitorCount
      localStorage.setItem('name', myName);
      localStorage.setItem('visitorCount', 0);
      myHeading.innerHTML = myName + ' love iclab';
      incrementVisitorCount(); // Increment visitor count
    } else {
      // If the name remains the same, just update the greeting
      myHeading.innerHTML = myName + ' love iclab';
    }
  }
}

// Check if the name is stored in localStorage and display greeting message
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ' love iclab, ' ;
}

myButton.onclick = function() {
  setUserName();
}

// Check if the name is stored in localStorage and display greeting message
if (!localStorage.getItem('name')) {
  setUserName();
} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'I am handsome, ' + storedName;
}

// below is my code
function displayTimeAndDate() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let month = today.getMonth() + 1; // Month is zero-based, so we add 1
  let day = today.getDate();
  let year = today.getFullYear();

  // Display time
  let timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

  // Display date
  let dateString = month + '/' + day + '/' + year;

  // Display greeting message based on time of day
  let greeting;
  if (hours < 12) {
    greeting = 'Good morning!';
  } else if (hours < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  // Update the greeting message on the page
  greetingMessage.innerHTML = greeting + ' Current time: ' + timeString + ', Date: ' + dateString;
}

// Helper function to add leading zero to single-digit numbers
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Display the time, date, and greeting message when the page loads
displayTimeAndDate();

// Update the time, date, and greeting message every second
setInterval(displayTimeAndDate, 1000);


// Image slider code
let sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

function switchImage() {
  // Hide all images
  sliderImages.forEach(image => image.style.display = 'none');

  // Display the current image
  sliderImages[currentImageIndex].style.display = 'block';

  // Move to the next image (loop back to the first image if at the end)
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
}

// Display the first image immediately when the page loads
switchImage();

// Start the image slider after the first image is displayed
setTimeout(() => {
  setInterval(switchImage, 3000); // Change the interval (in milliseconds) for image transition as needed
}, 500); // Wait for 3 seconds before starting the slider


// Function to increment and display the visitor count
function incrementVisitorCount() {
  let visitorCount = sessionStorage.getItem('visitorCount');
  if (visitorCount === null) {
    // If visitorCount is null (first visit in this session), set it to 1
    visitorCount = 1;
  } else {
    // If visitorCount exists, parse it as an integer and increment it
    visitorCount = parseInt(visitorCount) + 1;
  }
  
  // Update the visitorCount in sessionStorage
  sessionStorage.setItem('visitorCount', visitorCount);

  // Display the visitorCount on the page
  document.getElementById('visitor-count').textContent = visitorCount;
}

incrementVisitorCount();


