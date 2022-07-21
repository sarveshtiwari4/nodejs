var db = require("./db.js");

let model = {
    signup: (input, cb) => {

        let data = {
            id: input.id,
            username: input.username,
            password: input.password,
            email: input.email,
            first_name: input.first_name,
            last_name: input.last_name,
          //  is_active: 1
        };
        
        return db.query("INSERT INTO users SET ?", [data], cb)
    },

    findOne: (username, cb) => {
        return db.query("SELECT * FROM users WHERE username=? ", [username], cb);
    },
    findById: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=? ", [id], cb);
    }
}

module.exports = model;