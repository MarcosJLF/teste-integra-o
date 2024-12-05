
import data from '../model/model.js'

const hello = async (req,res) => {
    res.status(200).json({"Status":"rodando"})
}

const Postnome = async (req, res) => {

    const {name} = req.body

    res.status(200).json({message: `Hello ${name}, seja bem vindo`})

    console.log(name)
}

const Getnome = async (req, res) => {

    const name = req.query.name;

    res.status(200).json({message: `Hello ${name}`})

}

const Getdata = async (req, res) => {

    var text = data.testarConexao
    res.status(200).json({message:text})

}

export default {hello, Postnome, Getnome, Getdata}