const express = require("express")
const fs = require("fs")
const app = express()

//THIS IS FIXING THE OAUTH (FOR LOGIN)
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))

//THIS FOR FORTNITE URL TO GRAB
app.use((req, res, next) => {
    console.log(`[${req.method}] [${req.url}]`);
    next();
})

const PORT = process.env.PORT || 4495

fs.readdir('./TimFN_Data/Main', (err, files) => {
    files.forEach(file => {
      require("./TimFN_Data/Main/" + file)(app, fs)
    })
});

app.listen(PORT, () => console.log(`TimFN Backend is Running on Port `, PORT))
