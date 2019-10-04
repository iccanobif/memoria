const PORT = 26584

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongo = require("mongodb")

app.use(bodyParser.text())

// This wrapper is copypasted from somewhere... I'm not sure why it only catches
// errors and doesn't do something like .then(next) too...
const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);

async function doStuffOnCollection(task)
{
    const mongoClient = new mongo.MongoClient("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const conn = await mongoClient.connect()
    const db = conn.db("memoria")
    const coll = db.collection("words")
    await task(coll)
    mongoClient.close()
}

app.get("/", (req, res) =>
{
    res.send("MEMORIA API")
})

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

app.get("/word", wrap(async (req, res) => 
{
    await doStuffOnCollection(async coll =>
    {
        const cursor = await coll.find({ toBeLearned: true })
        const arr = await cursor.toArray()
        res.send(shuffle(arr).map(x => x.word))
    })
}))

function removeDuplicates(list) 
{
    const { listWithoutDuplicates } = list.reduce((acc, val) =>
    {
        if (acc.set.has(val))
            return acc

        acc.set.add(val)
        acc.listWithoutDuplicates.push(val)
        return acc

    }, { listWithoutDuplicates: [], set: new Set() });
    return listWithoutDuplicates;
}

app.delete("/word/:word", wrap(async (req, res) =>
{
    const word = req.params.word
    await doStuffOnCollection(coll =>
        coll.updateOne(
            { word: word },
            { $set: { toBeLearned: false } }
        )
    )
    res.send("OK")
}))

app.post("/word", wrap(async (req, res) =>
{
    const words = req.body
        .split("\n")
        .map(x => x.trim())
        .filter(x => x != "")
    const wordsWithoutDuplicates = removeDuplicates(words)

    await doStuffOnCollection(async coll =>
    {
        for (let i = 0; i < wordsWithoutDuplicates.length; i++)
        {
            await coll.updateOne(
                { word: wordsWithoutDuplicates[i] },
                { $setOnInsert: { word: wordsWithoutDuplicates[i], toBeLearned: true } },
                { upsert: true })
        }
    })
    res.send("OK")
}))

app.listen(PORT, () => console.log("Listening to port " + PORT))