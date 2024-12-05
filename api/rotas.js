import express from "express"
import con from "./controlador.js"


const router = express.Router()


router.get("/hello", con.hello)

router.post("/user", con.Postnome)

router.post("/nome", con.Getnome)



export default router
