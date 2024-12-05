
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

export default {hello, Postnome, Getnome}