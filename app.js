let express = require('express')

let app = express()


app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(5000,function(){
    console.log('ssserver started ss')
})