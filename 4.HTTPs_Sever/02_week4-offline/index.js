
const express = require("express");
const app = express();
app.use(express.json())
// memorry array
const users = [
  {
    name: "Tridip",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

// routes
app.get("/", (req , res) => {
    const tridipKindneys = users[0].kidneys;
    const numberOfKidneys = tridipKindneys.length;
    let numberOfHealthyKidneys = 0 ;
    for(let i = 0 ; i <numberOfKidneys ; i++){
        if(tridipKindneys[i].healthy == true){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        "Number of kidneys " : numberOfKidneys,
        "Healthy Kidneys" : numberOfHealthyKidneys,
        "Unhealthy Kidneys" : numberOfUnHealthyKidneys,

    })

})

app.post("/" , (req , res) => {
    const isHealthy = req.body.kindney;
    users[0].kidneys.push({
        healthy: isHealthy
    });
   res.json({
    "massage": "Kidney added"
   }) 
})
app.put("/" , (req , res) => {

})
app.delete("/" , (req , res) => {

})

app.listen(3000);