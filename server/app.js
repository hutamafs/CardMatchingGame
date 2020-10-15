const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

