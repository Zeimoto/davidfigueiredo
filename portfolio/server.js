import express from 'express'

//initialize express into the app variable
const app = express();

//set static folder
app.use(express.static('public'));
// Parse url-encoded bodies /as sent by HTML forms)
app.use(express.urlencoded({extended: true}))
//Parse JSON bodies (as sent by API clients)
app.use(express.json())

//start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});