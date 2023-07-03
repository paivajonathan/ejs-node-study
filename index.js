const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./database/FileSystem");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const connection = require("./database/connection");
const Article = require("./database/Article");
const Profile = require("./database/Profile");

const app = express();

app.use("/", express.static("./public"));
app.use("/files", express.static("./database/FileSystem"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    res.status(500).send("ERRO");
});

connection.authenticate().then(() => {
    console.log("A conexão com o banco de dados foi criada!");
});

app.get("/", (req, res) => {
    Article.findAll({ 
        raw: true, 
        order: [ ["id", "DESC"] ]
    }).then((articles) => {
        res.render("index", {
            articles: articles
        });
    });
});

app.get("/subscribe", (req, res) => {
    res.render("subscribe");
});

app.post("/save-profile", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const birthDate = req.body.birthDate;
    const state = req.body.state;
    const city = req.body.city;

    Profile.create({
        name: name,
        surname: surname,
        email: email,
        birthDate: birthDate,
        state: state,
        city: city
    }).then(() => {
        res.redirect("/")
    });
});

app.get("/make-article", (req, res) => {
    res.render("make-article");
});

app.post("/save-article", upload.single("image"), (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const imageName = req.file.filename;

    Article.create({
        title: title,
        description: description,
        content: content,
        imageName: imageName
    }).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
    });
});

app.get("/article/:id", (req, res) => {
    const articleId = req.params.id;

    Article.findOne({
        where: { id: articleId }
    }).then((article) => {
        res.render("article", {
            article: article
        });
    });
});

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("O servidor iniciou com sucesso!");
    }
});