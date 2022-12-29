const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { first_name, last_name, age, email } = req.body;

  try {
    const length = await (
      await userModel.find({}).sort({ createdAt: -1 })
    ).length+1;
    const user = await userModel.create({
      id: length.toString(),
      first_name,
      last_name,
      age,
      email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await userModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

const getUserDetail = async (req, res) => {
  const { id } = req.params;

  const users = await userModel.find({
    id,
  });
  res.status(200).json(users);
};

const removeUser = async (req, res) => {
  const { id } = req.params;

  const user = await userModel.findOneAndDelete({ id });
  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserDetail,
  removeUser,
};
