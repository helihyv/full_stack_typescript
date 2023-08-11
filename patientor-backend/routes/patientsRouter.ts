/* eslint-disable @typescript-eslint/no-unsafe-assignment*/

import express from "express";
import {getPatientsWithoutSsn, addPatient} from "../services/patientsService";

const router = express.Router();

router.get("/", (_req,res) => {
    res.send(getPatientsWithoutSsn());
});

router.post("/", (req, res) => {

    console.log(req.body);
    const {name, dateOfBirth, ssn,gender,occupation} = req.body;
    res.send(addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    }));
});

export default router;