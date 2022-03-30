let controller = {};
let format = require("../format").format;
const jwt = require("jsonwebtoken");
const db = require("../database").config;

controller.getLogin = (req, res) => {
    const hospital = {
        id: req.body.id,
        time: new Date().getTime()
    };
    const token = jwt.sign({ hospital }, db.secret_key, { expiresIn: "6m" });
    format.code = 200;
    format.message = "token";
    format.success = true;
    format.data = token;
    res.status(200);
    res.json(format);
};
controller.gethospital = (req, res) => {
    const sql = "SELECT * hospitals users WHERE id = ?";
    req.getConnection((error, conn) => {
        if (error) {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        } else {
            conn.query(sql, [req.query.id], (err, results) => {
                if (err) {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                } else {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }

            })
        }

    });
};

controller.gethospitals = (req, res) => {
    const sql = "SELECT * FROM hospitals";
    req.getConnection((error, conn) => {
        if (error) {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        } else {
            conn.query(sql, [req.query.id], (err, results) => {
                if (err) {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                } else {
                    format.code = 200;
                    format.message = "Success";
                    format.success = true;
                    format.data = results;
                    res.status(200);
                    res.json(format);
                }

            })
        }
    })
}

controller.posthospital = (req, res) => {
    const sql = "INSERT INTO hospitals SET ?";
    //const sql = "INSERT INTO user (name,lastname,address,phone) values (?,?,?,?)
    req.getConnection((error, conn) => {
        if (error) {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        } else {
            conn.query(sql, [req.body], (err, results) => {
                if (err) {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                } else {
                    format.code = 201;
                    format.message = "hospital add";
                    format.success = true;
                    format.data = results.insertId;
                    res.status(201);
                    res.json(format);
                }

            })
        }
    })
}

controller.puthospital = (req, res) => {
    const sql = "UPDATE hospitals SET ? WHERE id = ?";
    req.getConnection((error, conn) => {
        if (error) {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        } else {
            conn.query(sql, [req.body, req.body.id], (err, results) => {
                if (err) {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                } else {
                    if (results.affectedRows > 0) {
                        format.code = 200;
                        format.message = "hospital updated";
                        format.success = true;
                        format.data = results;
                        res.status(200);
                        res.json(format);
                    } else {
                        format.code = 404;
                        format.message = "hospital can't be updated, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }

                }
            })
        }
    })
}

controller.deletehospital = (req, res) => {
    const sql = "DELETE from hospitals WHERE id = ?";
    req.getConnection((error, conn) => {
        if (error) {
            format.code = 500;
            format.message = "Error to connect to DB, please contact to admin";
            format.success = false;
            res.status(500);
            res.json(format);
        } else {
            conn.query(sql, [req.body.id], (err, results) => {
                if (err) {
                    format.code = 400;
                    format.message = err.sqlMessage;
                    format.success = false;
                    res.status(400);
                    res.json(format);
                } else {
                    if (results.affectedRows > 0) {
                        format.code = 204;
                        format.message = "hospital deleted";
                        format.success = true;
                        format.data = results;
                        res.status(204);
                        res.json(format);
                    } else {
                        format.code = 404;
                        format.message = "hospital can't be deleted, please confirm data";
                        format.success = false;
                        format.data = results;
                        res.status(404);
                        res.json(format);
                    }

                }
            })
        }
    })
}
module.exports = controller;