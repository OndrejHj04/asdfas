const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, getUserDetail, removeUser } = require("../controllers/userController");

router.post("/users/add-user", createUser);
router.get("/users/list", getAllUsers);
router.get("/user/detail/:id", getUserDetail);
router.delete("/user/remove/:id", removeUser);


module.exports = router;
