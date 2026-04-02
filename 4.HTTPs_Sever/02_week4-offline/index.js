const express = require("express");
const app = express();
app.use(express.json());
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
app.get("/", (req, res) => {
  const tridipKindneys = users[0].kidneys;
  const numberOfKidneys = tridipKindneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (tridipKindneys[i].healthy == true) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    "Number of kidneys ": numberOfKidneys,
    "Healthy Kidneys": numberOfHealthyKidneys,
    "Unhealthy Kidneys": numberOfUnHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    massage: "Kidney added",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    message: " Done! ",
  });
});

app.delete("/", (req, res) => {
  // you should return a 411
  // only if atleast one unhealthy kidney is there do this . return 411
  if (isatleasltOneUnhealthyKindney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      message: "Removed Unhealthy kindneys",
    });
  }
  else{
    res.status(411).json({
      msg : "You don't have unhealthy kidneys"
    })
  }
});

function isatleasltOneUnhealthyKindney() {
  let atleasltOneUnhealthyKindney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleasltOneUnhealthyKindney = true;
    }
  }
  return atleasltOneUnhealthyKindney;
}


app.listen(3000);
