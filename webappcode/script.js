// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBnr40k4QUCDU7SzY2fiF6EypT7BuJ5jRs",
//     authDomain: "discord-clone-6f17b.firebaseapp.com",
//     databaseURL: "https://discord-clone-6f17b.firebaseio.com",
//     projectId: "discord-clone-6f17b",
//     storageBucket: "discord-clone-6f17b.appspot.com",
//     messagingSenderId: "1098926788524",
//     appId: "1:1098926788524:web:3571d33f395585b97a3409",
//     measurementId: "G-9MF8JZJMY9"
//   };

// Top bar navigation
function clicked() {
  var bar = document.getElementById("menu");
  if (bar.className === "topnav") {
    bar.className += "responsive";
  } else {
    bar.className = "topnav";
  }
}

// // Initialize Firebase  

// firebase.initializeApp(firebaseConfig);
// let database = firebase.database();

/*
let name = document.getElementById("username");
let input = document.getElementById("message");

input.addEventListener('keypress', function(event) {
  if(event.key == "Enter") {

    database.ref("messages").push({
      name: name.value,
      value: input.value
    })
    input.value=""

  }
})

database.ref("messages").on('child_added', function(message) {

  let messages = document.getElementById("messages");
  let name = message.val().name;
  let value = message.val().value;

  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = "@" + name;
  let p = document.createElement("p");
  p.innerHTML = value;

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight
  // 

})*/