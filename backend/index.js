const PORT = 26584

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongo = require("mongodb")

app.use(bodyParser.text())

const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);

app.get("/", (req, res) => {
    res.send("MEMORIA API")
})
app.get("/word-list", wrap(async (req, res) => 
{
    const mongoClient = new mongo.MongoClient("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const conn = await mongoClient.connect()
    const db = conn.db("memoria")
    const coll = db.collection("wordlist")
    const wordList = await coll.findOne()
    res.send(wordList.value)
    mongoClient.close()
}))

app.post("/word-list", wrap(async (req, res) =>
{
    const mongoClient = new mongo.MongoClient("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const conn = await mongoClient.connect()
    const db = conn.db("memoria")
    const coll = db.collection("wordlist")
    await coll.deleteMany({})
    console.log(req.body)
    await coll.insertOne({value: req.body})
    res.send("OK")
    await mongoClient.close()
}))

app.listen(PORT, () => console.log("Listening to port " + PORT))