let rec1_time;
let rec2_time;

let name = "";
let topic = "";
let email = "";

function populateRecs() {

  document.getElementById("rec-name2").innerHTML = name
  document.getElementById("rec-email2").innerHTML = email
  document.getElementById("rec-topic2").innerHTML = "Chat Recommendation: " + topic


  profile_name = document.getElementById("name-placard")

  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/rec", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("name=" + profile_name);
  response = JSON.parse(xhttp.responseText)

  name = response["person"];
  topic = response["rec"];
  email = response["email"];
  

  document.getElementById("rec-name1").innerHTML = name
  document.getElementById("rec-email1").innerHTML = email
  document.getElementById("rec-topic").innerHTML = "Chat Recommendation: " + topic

}

//Finds new rec every 2 hrs
setInterval(populateRecs, 1000*60*60*2)