const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const matricula = 'A01323753'

app.get('/students/:id', function(req, res) {
    
    if(req.params.id != matricula){
        return res.send({
            error: 'Error 404 super fatal, matricula fatalmente mal'
        })

    }
     res.send({
        id: "A01323753",
        fullname: "Yehrson Emmanuel Escobedo Gonzalez",
        nickname: "Emmanuel3753",
        age: 23
    })
})

app.get('*', function(req, res){
    res.send({
        error: 'La ruta no existe'
    })
})
    
app.listen(port, function(){
    console.log('up and running')
})
