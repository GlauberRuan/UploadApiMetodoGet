// Requiring module
const express = require('express');

// Creating express object
const app = express ();

// Handling GET request
app.get('/', (req, res) => {
    res.send('A api está rodando ' + 'neste servidor')
res.end()})

// Handling GET request
app.get('/retorno', (req, res) => {
    res.send('Nodejs é muito fácil')
res.end()})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`))
