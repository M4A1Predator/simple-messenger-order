
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
console.log('START EXPRESS')

// Middlwares
const logger = morgan('tiny')
app.use(logger)
app.use(bodyParser.json({limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public', express.static(path.join(__dirname, 'public') ), (req, res) => {res.end()})
app.use('/mats', express.static(path.join(__dirname, 'public', 'mats') ), (req, res) => {res.end()})
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true } // This make new initiaiize session every request
}))

// Routers
// Session for storing state
// This is workaround solution
app.put("/sess", (req, res) => {
    // get data
    const body = req.body
    const sessionData = body.data

    // set session
    req.session.state = sessionData

    res.send(sessionData)
})

// Prevent error window undefined
global.window = undefined
const render = require('./assets/bundle-server')
app.use("/*", render.default)

// Run
process.env.NODE_ENV = 'development';
const port = 3000
app.listen(port, () => {
    console.log("Servre running on " + port)
})
