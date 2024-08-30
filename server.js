const http = require('http')
const express = require('express');
const path = require('path');
const app = express()
const server = http.createServer(app);
const body = require('body-parser');
const urlencoded = body.urlencoded({extended:false});
const fs = require('fs')

app.use(express.static(__dirname));

app.use(body.json());

app.get('/' , (req,res) =>{
    console.log('came here')
    res.sendFile(path.join(__dirname , './form.html'))
})

app.get('/table' , (req,res) =>{
    res.sendFile(path.join(__dirname , './table.html'))
})

app.post('/update' ,urlencoded, (req,res) =>{
    const data = req.body;

    console.log(data)

    const readFile = JSON.parse(fs.readFileSync(path.join(__dirname , 'file.json')))
    readFile.push(data);

    try{
        const report = fs.writeFileSync(path.join(__dirname , 'file.json') , JSON.stringify(readFile));
        // res.json({status:true})
        res.sendFile(path.join(__dirname , './table.html'))
    }catch(err)
    {
        res.json({status:'an error occured'})
    }
})

server.listen(8080,() =>{console.log('server running')})