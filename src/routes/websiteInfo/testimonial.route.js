// const get user
import express from "express";
import { createUserApi, deleteUser, getUser, getUsers, updateUser, updateUser2 } from "./testimonial.controller.js";

const router = express.Router();

// post single users
router.post("/", createUserApi);
// patch single users
router.patch("/", updateUser2);
router.patch("/:_id", updateUser);
// delete single users
router.delete("/:_id", deleteUser);
// single users
router.get("/:_id", getUser);
// all users
router.get("/", getUsers);

export default router;
