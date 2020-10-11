import pyrebase
from flask import Flask
from flask import request
import pandas as pd
import numpy
import compute

app = Flask(__name__)

config = {
  "apiKey": "AIzaSyBnr40k4QUCDU7SzY2fiF6EypT7BuJ5jRs",
  "authDomain": "discord-clone-6f17b.firebaseapp.com",
  "databaseURL": "https://discord-clone-6f17b.firebaseio.com",
  "storageBucket": "discord-clone-6f17b.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

data = db.child("users").get().val()
df = pd.DataFrame(data)

@app.route('/rec', method=['POST'])
def recommendations():
    name = request.form['name']
    person = match_person(name)

    a = df.loc[df["name"] == name]
    schedule1 = a.loc["schedule"]
    schedule1 = np.array(schedule1)
    ratings1 = a.loc["ratings"]
    ratings1 = np.array(ratings1)

    b = df.loc[df["name"] == person]
    schedule2 = b.loc["schedule"]
    schedule2 = np.array(schedule2)
    ratings2 = b.loc["ratings"]
    ratings2 = np.array(ratings2)

    email = b.loc["email"]
    rec_index = rec(schedule1, schedule2, ratings1, ratings2)
    rec = "Period {}".format(rec_index)
    response = {"person": person, "rec": rec, "email": email}

    return response


#Make sure the entire database is always used, even when new users are added in
def stream_handler(message):
    data = db.child("users").get().val()
    df = pd.DataFrame(data)

new_users = db.child("users").stream(stream_handler)