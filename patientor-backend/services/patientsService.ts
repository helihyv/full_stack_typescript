import { PatientWithoutSsn } from "../types/patient";
import data from "../data/patients";

const getPatientsWithoutSsn = () : PatientWithoutSsn[] => {
    return data.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation

    }));
};

export default getPatientsWithoutSsn;