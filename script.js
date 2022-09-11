//Alert message on button cklick

let button = document.querySelectorAll('.btn');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    alert('Button Clicked!');
  });
}

// burger menu functionality
let toggleBtn = document.getElementById('burger');
let navigation = document.getElementById('nav');

toggleBtn.addEventListener('click', function () {
  navigation.classList.toggle('active');
});
