export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type PatientWithoutSsn = Omit<Patient,"ssn">; 

export type NewPatient = Omit<Patient,"id">;

export enum Gender {
    Female = "female",
    Male = "male",
    Other = "other"
}