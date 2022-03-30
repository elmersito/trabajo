let controller = {};
let format = require("../format").format;

controller.getdoctor = (req, res) => {
    const sql = "SELECT * FROM doctors WHERE id = ?";
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

controller.getdoctors = (req, res) => {
    const sql = "SELECT * FROM doctors;"
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

controller.postDoctor = (req, res) => {
    const sql = "INSERT INTO doctors SET ?";
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
                    format.message = "Doctor add";
                    format.success = true;
                    format.data = results.insertId;
                    res.status(201);
                    res.json(format);
                }

            })
        }
    })
}

controller.putdoctor = (req, res) => {
    const sql = "UPDATE doctors SET ? WHERE id = ?";
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
                        format.message = "Doctor updated";
                        format.success = true;
                        format.data = results;
                        res.status(200);
                        res.json(format);
                    } else {
                        format.code = 404;
                        format.message = "Pet can't updated, please confirm data";
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

controller.deletedoctor = (req, res) => {
    const sql = "DELETE from doctors WHERE id = ?";
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
                        format.message = "doctor deleted";
                        format.success = true;
                        format.data = results;
                        res.status(204);
                        res.json(format);
                    } else {
                        format.code = 404;
                        format.message = "doctor can't be deleted, please confirm data";
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