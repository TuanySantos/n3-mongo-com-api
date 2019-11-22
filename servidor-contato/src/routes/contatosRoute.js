const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/remover/:id", controller.removeById)
router.patch("/alterar/:id", controller.updateById)
router.post("/criar", controller.add)


module.exports = router
