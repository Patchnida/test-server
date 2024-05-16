
const UserModel = require("../Model/UserSchema");

const createUser = async (req, res) => {
    try {
        res.send("Hi")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = createUser;