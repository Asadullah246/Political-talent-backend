// const get user
import express from "express";
import { createUserApi, deleteUser, getUser, getUsers, updateUser } from "./user.controller.js";
const router = express.Router();
// post single users
router.post("/create", createUserApi);
// patch single users
router.patch("/:_id", updateUser);
// delete single users
router.delete("/:_id", deleteUser);
// single users
router.get("/:_id", getUser);
// all users
router.get("/", getUsers);

export default router;
