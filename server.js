const port = 3000

const express = require('express')
const app = express();

function getDayOfWeek(date){
    var daysOfWeek = ["Sunday you're stuck on my mind", "Monday comes and my eyes are darting all around me", "Tuesday i see you", "Wednesday everything slows down", "Thursday i'd like to get to know you", "Friday i haven't recovered", "Saturday you're stuck on my mind"]
    
    return daysOfWeek[date.getDay()];
}


app.get('/', (req,res) => {
    var today = new Date();
    res.send(getDayOfWeek(today));
})

app.listen(port, () => console.log(`Started listening on port ${port}`))