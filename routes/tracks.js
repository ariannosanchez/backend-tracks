const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem, validatorPutItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const router = express.Router();
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")

router.get("/", authMiddleware, getItems);
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.put("/:id", authMiddleware, validatorPutItem, updateItem);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)
module.exports = router