const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const _ = require("underscore");
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const Usuario = require("../models/usuario");

const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

app.get("/usuario", verificaToken, (req, res) => {

    //req.query viene siendo el queryString
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, "nombre email role estado google img")
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
            });
        });
});

app.post("/usuario", [verificaToken, verificaAdmin_Role], function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10), // encripta el password
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.put("/usuario/:id", [verificaToken, verificaAdmin_Role], function(req, res) {
    let id = req.params.id;

    //usa metodo _.píck para obtener del body solo aquellos campos que se desean actualizar
    //los demás serán omitidos
    let body = _.pick(req.body, ["nombre", "email", "role", "estado"]);

    Usuario.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true }, // new retorna el objeto actualizado, runValidators hace que se corran los validadores establecidos
        (err, usuarioDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuario: usuarioDB
            });
        }
    );
});

app.delete("/usuario/:id", [verificaToken, verificaAdmin_Role], function(req, res) {
    let id = req.params.id;
    let cambiaEstado = {
        estado: false
    };

    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true },
        (err, usuarioBorrado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            if (!usuarioBorrado) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: "Usuario no encontrado"
                    }
                });
            }

            res.json({
                ok: true,
                usuario: usuarioBorrado
            });
        }
    );
});

module.exports = app;
