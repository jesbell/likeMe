const express = require("express");
const pool = require('./dbConfig');
const { guardarPost, getPosts, like } = require("./consultas");
const app = express();
const PORT = 3000;
app.use(express.json());


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/post", async (req, res) => {
  try {
    const post = Object.values(req.body);
    const result = await guardarPost(post);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    console.log(posts);
    res.json(posts);
  } catch (error) {
    console.error("Error en POST /post:", error); 
    res.status(500).send(error);
  }
});

app.put("/post", async (req, res) => {
  try {
    let { id } = req.query;
    const posts = await like(id);
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});
