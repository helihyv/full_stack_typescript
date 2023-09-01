import { useEffect, useState } from "react";
import { DiaryEntry, NewDiaryEntry } from "./types";
import { createDiaryEntry, getAllDiaryEntries } from "./services/diaryService"
import axios from "axios";



const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [visibility,setVisibility] = useState("");
  const [weather,setWeather] = useState("");
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
        setVisibility("");
        setWeather("");
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
        value ={date}
        onChange = {(event) => setDate(event.target.value)}
      />
      <br/>
      Visibility <input 
        value ={visibility}
        onChange = {(event) => setVisibility(event.target.value)}
      />
      <br/>
      Weather  <input 
        value ={weather}
        onChange = {(event) => setWeather(event.target.value)}
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
