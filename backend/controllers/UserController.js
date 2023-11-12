const authuser = (req, res) => {
  res.status(200).json({ message: "Auth user" });
};

export { authuser };
