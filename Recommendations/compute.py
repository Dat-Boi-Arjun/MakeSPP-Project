import numpy as np
import random
import pandas as pd

def schedule_similarity(array_person1, array_person2):

    non_catagorical_sim_array = np.equal(array_person1, array_person2)
                                          
    catagorical_sim_array = non_catagorical_sim_array.astype(int)

    return catagorical_sim_array


def rec(schedule1, schedule2, interest1, interest2):
  int_level = interest1 + interest2

  similarities = schedule_similarity(schedule1, schedule2)

  rec_array = np.absolute((similarities * int_level))
  rec = np.random.choice(np.where(rec_array == rec_array.max())[0])
  return rec


def match_person(in_df, name):
  d = {}

  #Gets random sample, computes schedule similarity values between two people
  random_people = (random.sample(in_df["name"], 9)).append(name)

  df = pd.DataFrame()

  for i in random_people:
    for j in random_people:
      if (i + ' with ' + j)  or (j + ' with ' + i)  in df.columns:
        if i != j:
          df.loc[0, i + ' with ' j] = schedule_similarity(i,j)

  
  #Get the ss values, put them into a dictionary
  for person in random_people:
    try: 
      d[person] = (df.loc[0, person + ' with '+ name])
    except: 
      d[person] = (df.iloc[0, name + ' with '+ person])
  
  #Finds the most similar person
  indexmax = argmax(d.values())
  return d.keys()[indexmax]

