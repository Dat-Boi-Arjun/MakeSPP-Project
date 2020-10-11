// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnr40k4QUCDU7SzY2fiF6EypT7BuJ5jRs",
    authDomain: "discord-clone-6f17b.firebaseapp.com",databaseURL: "https://discord-clone-6f17b.firebaseio.com",
    projectId: "discord-clone-6f17b",
    storageBucket: "discord-clone-6f17b.appspot.com",
    messagingSenderId: "1098926788524",
    appId: "1:1098926788524:web:3571d33f395585b97a3409",
    measurementId: "G-9MF8JZJMY9"
};

// Initialize Firebase  

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

data = database.get().val()

var login = function(){
  login_name = document.getElementById("l-name")
  login_pw = document.getElementById("l-psw")
  let i;
  for (i in data){
    if (i["name"] == login_name && i["password"] == login_psw){
      window.open("/profile.html")
      document.getElementById("user-greeting").value = `Hello ${login_name}`
      document.getElementById("name-placard").value = login_name
      document.getElementById("email-placard").value = i["email"]

      break;
    }
  }

  alert("Wrong Username/Password, Please Try Again")
  window.open("/home.html")
};

