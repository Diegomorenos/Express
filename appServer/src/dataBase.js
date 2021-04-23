import mongoose from 'mongoose'

const atlas = "mongodb+srv://Diego:1010*@cluster0.fri08.mongodb.net/express?retryWrites=true&w=majority"
const native = "mongodb://localhost/express"

mongoose.connect(atlas, {useNewUrlParser: true, 
                useUnifiedTopology: true})
    .then(db => {
        console.log("Base de datos conectada")
    })
    .catch(err=>{
        console.log("Error en la BD", err)
    })