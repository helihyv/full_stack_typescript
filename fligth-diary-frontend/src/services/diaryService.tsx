import axios from "axios"
import { DiaryEntry } from "../types"

export const getAllDiaries = () => {

    return axios
        .get<DiaryEntry[]>('http://localhost:3000/api/diaries')
        .then(response => response.data)

}