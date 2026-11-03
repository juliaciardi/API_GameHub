// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const conexao = require("./db.js");


import "dotenv/config";
import express from "express";
import cors from "cors";
import conexao from "./db.js";


import {textoValido, inteiroPositivo} from "./src/utils/validacoes.js";
import { validarId } from "./src/middlewares/validarId.js";
import { tratarErro } from "./src/middlewares/tratarErro.js";
import estudioRoutes from "./src/routes/estudioRoute.js";




const app = express();
const PORTA = Number(process.env.PORTA || 3000);
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "API do GameHub funcionando" });
});


app.use("/estudios", estudioRoutes);