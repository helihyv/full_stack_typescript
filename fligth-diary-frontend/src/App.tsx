import { useEffect, useState } from "react";
import { DiaryEntry, Visibility, Weather } from "./types";
import { createDiaryEntry, getAllDiaryEntries } from "./services/diaryService"
import axios from "axios";



const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [visibility,setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather,setWeather] = useState<Weather>(Weather.Sunny);
  const [comment,setComment] = useState("");
  const [errorMessage,setErrorMessage] = useState<string|undefined>();

  useEffect(() => {
    getAllDiaryEntries().then(data => setDiaryEntries(data));
  })

  const diaryEntryCreation = (event : React.SyntheticEvent) => {
    event.preventDefault();
  
 
    createDiaryEntry({date, visibility,weather,comment})
      .then(data => {
        setDiaryEntries(diaryEntries.concat(data));
        setDate("");
        setComment("");
        setErrorMessage("");
      })
      .catch (error => {
          if (axios.isAxiosError(error)) 
            if (error.response)
              {setErrorMessage(error.response.data)}

          })
      
  }


  return (
<div>
   <h1>Add new entry</h1>
    <span style={{color: "red"}}>{errorMessage}</span>
    <form onSubmit={diaryEntryCreation}>
      Date  <input
        type = "date"
        value ={date}
        onChange = {(event) => setDate(event.target.value)}
      />
      
      <br/>
      Visibility {"  "}
      <label>{Visibility.Great}</label>
      <input 
        type="radio"
        name="visibility"
        id="v1"
        value ={Visibility.Great}
        onChange = {() => setVisibility(Visibility.Great)}
      />
      <label>{Visibility.Good}</label>
      <input 
        type="radio"
        name="visibility"
        id="v2"
        value = {Visibility.Good}
        onChange = {() => setVisibility(Visibility.Good)}
      />
      <label>{Visibility.Ok}</label>
      <input 
        type="radio"
        name="visibility"
        id="v3"
        value ={Visibility.Ok}
        onChange = {() => setVisibility(Visibility.Ok)}
      />
      <label>{Visibility.Poor}</label>
      <input 
        type="radio"
        name="visibility"
        id="v4"
        value ={Visibility.Poor}
        onChange = {() => setVisibility(Visibility.Poor)}
      />
      
      <br/>

      Weather  
      <label>  {Weather.Sunny}</label>
      <input 
        type="radio"
        name="weather"
        id="w1"
        value = {Weather.Sunny}
        onChange = {() => setWeather(Weather.Sunny)}
      />
      <label>{Weather.Rainy}</label>
      <input 
        type="radio"
        name="weather"
        id="w2"
        value = {Weather.Rainy}
        onChange = {() => setWeather(Weather.Rainy)}
      />
      <label>{Weather.Cloudy}</label>
      <input 
        type="radio"
        name="weather"
        id="w3"
        value ={Weather.Cloudy}
        onChange = {() => setWeather(Weather.Cloudy)}
      />
      <label>{Weather.Stormy}</label>
      <input 
        type="radio"
        name="weather"
        id="w4"
        value ={Weather.Stormy}
        onChange = {() => setWeather(Weather.Stormy)}
      />
      <label>{Weather.Windy}</label>
      <input 
        type="radio"
        name="weather"
        id="w5"
        value = {Weather.Windy}
        onChange = {() => setWeather(Weather.Windy)}
      />
      <br/>
      Comment  <input 
        value ={comment}
        onChange = {(event) => setComment(event.target.value)}
      />
    <br/>
      <button type = 'submit'>add</button>


    </form>
   <h1>Diary entries</h1>
   <ul>
    {diaryEntries.map( (diaryItem : DiaryEntry) : JSX.Element => {

      return (
 
      <li key = {diaryItem.id}>

        <h2>{diaryItem.date}</h2>
          visibility : {diaryItem.visibility}<br/>
          weather: {diaryItem.weather}
      </li>
      );
    }
  )}
   </ul>
   
 </div>
  );
}

export default App;
