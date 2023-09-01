import { useEffect, useState } from "react";
import axios from 'axios';
import { DiaryEntry } from "./types";
import { getAllDiaries } from "./services/diaryService";


const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAllDiaries().then(data => setDiaries(data));
  })
  return (
<div>
   <h1>Diary entries</h1>
   <ul>
    {diaries.map( (diaryItem : DiaryEntry) : JSX.Element => {

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
