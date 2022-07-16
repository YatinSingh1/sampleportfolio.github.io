const http = require('http');

const app = express();

const path = require('path');
const port = 80;

app.set('view engine', 'pug') // set the template engine as a pug template
app.set('template', path.join(__dirname, 'template')) // set the template directory

app.get("/", (req, res)=>{

    res.status(200).render('index.pug');
})

app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`);
})