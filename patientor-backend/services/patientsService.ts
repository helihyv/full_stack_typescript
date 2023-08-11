import { NewPatient, Patient, PatientWithoutSsn } from "../types/patient";
import data from "../data/patients";
import {v1 as uuid} from 'uuid';

export const getPatientsWithoutSsn = () : PatientWithoutSsn[] => {
    return data.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation

    }));
};

export const addPatient = (patient : NewPatient) : Patient => {

    console.log(patient);
    const id = uuid();

    const newPatient : Patient = {
        id, 
        ...patient
    };

    data.push(newPatient);

    return newPatient;
};
