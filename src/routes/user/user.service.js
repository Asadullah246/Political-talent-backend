
import mongoose from "mongoose";
import { user } from "./user.model.js";
const { ObjectId } = mongoose.Types;

// create Job
export const createuser = async (data) => {
  const findUser = await user.findOne({ email: data.email });
  if (findUser) {
    return findUser;
  } else {
    const result = new user(data);
    await result.save();
    return result;
  }
};


// export const patchJob = async ({
//   _id,
//   data,
// })=> {
//   const query = { _id: new ObjectId(_id) };
//   const updateDoc = { $set: data };
//   const option = { upsert: true, runValidators: true };
//   const result = await user.findByIdAndUpdate(query, updateDoc, option);
//   return result;
// };

// delete Job
// export const removeJob = async (_id) => {
//   const result = await user.findByIdAndDelete({ _id: new ObjectId(_id) });
//   return result;
// };

// get single Job from DB
// export const getJobApi = async (_id) => {
//   const result = await user.findOne({ _id: new ObjectId(_id) });
//   return result;
// };

// get Jobs from DB
export const getALLusers = async ()=> {
  const result = await user.find({});
  return result;
};
