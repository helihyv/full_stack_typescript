
import express from "express";
import getPatientsWithoutSsn from "../services/patientsService";

const router = express.Router();

router.get("/", (_req,res) => {
    res.send(getPatientsWithoutSsn());
});

export default router;