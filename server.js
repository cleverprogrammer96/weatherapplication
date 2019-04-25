const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({
extended: true
}))

app.use('/',
express.static(__dirname + '/public/dist/weather-app')
)

const PORT=process.env.PORT||4200;
app.listen(PORT); 