const port = 3000

const express = require('express')
const app = express();

app.set('view engine', 'ejs');

function getDayOfWeek(date){
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    return daysOfWeek[date.getDay()];
}


app.get('/today', (req,res) => {
    var today = new Date();
    //res.send(getDayOfWeek(today));
    res.render('dayOfWeek', {
        date: today,
        dayOfWeek: getDayOfWeek(today)
    });
})

app.get('/birthday', (req,res) => {
    var birthday = new Date(2002, 5, 17);
    //res.send(getDayOfWeek(today));
    res.render('dayOfWeek', {
        date: birthday,
        dayOfWeek: getDayOfWeek(birthday)
    });
})

app.listen(port, () => console.log(`Started listening on port ${port}`))