//Firebase configuration
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

const classes = {"Math": 1, "Science": 2, "English": 3, "History": 4, "PE": 5, "Arts": 6, "Foreign Language": 7}

const rating = {"Bad": -1, "Okay": 0, "Good": 1}

let name_var = ""
let password_var = ""
let email_var = ""

let schedule_arr = []
let ratings_arr = []

var register = function() {
  name_var = document.getElementById("name").value
  email_var = document.getElementById("email").value
  password_var = document.getElementById("psw").value
  
  let menu = [...document.getElementsByTagName("select")]

  let schedule = menu.filter(ea => ea.name.includes("p")).map(fa => fa.value)
  let ratings = menu.filter(eb => eb.name.includes("s")).map(fb => fb.value)

  schedule_arr = [...schedule].map(e => classes[e])
  ratings_arr = [...ratings].map(r => rating[r])

  let obj = {
    "name": name_var,
    "password": password_var,
    "email": email_var,
    "schedule": schedule_arr,
    "ratings": ratings_arr
  };

  database.ref("users").push(obj)

};

