const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const packageRouter = require('./routes/packageRouter')
const sliderRouter = require('./routes/sliderRouter')
const banneroneRouter = require('./routes/bannerOneRouter')
const gallaryRouter = require('./routes/gallaryRouter')
const reviewRouter = require('./routes/reviewRouter')
const teamRouter = require('./routes/teamRouter')
const contactUsRouter = require('./routes/contactUsRouter')
const userRouter = require('./routes/userRouter')
const appointmentRouter = require('./routes/appointmentRouter')

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())

const port = process.env.PORT || 5000


// Connection 
mongoose.connect(process.env.MONGODB_ACCESS,
    {useNewUrlParser:true},
    {useUnifiedTopology: true }
    )
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))

// Error Handeler 
function ErrorHandeler (err,req,res,next){
    if(res.headersSent){
        return err
    }
    res.status(500).json({ error:err })
}

// router 
app.use('/package',packageRouter)
app.use('/slider',sliderRouter)
app.use('/bannerone',banneroneRouter)
app.use('/gallary',gallaryRouter)
app.use('/review',reviewRouter)
app.use('/team',teamRouter)
app.use('/contactus',contactUsRouter)
app.use('/user',userRouter)
app.use('/appointment',appointmentRouter)

app.get('/',async(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log('app lisining port number 5000')
})

