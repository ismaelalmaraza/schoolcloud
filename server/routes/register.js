const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/usuario');
const app = express();

 
app.post('/register', function (req, res) {
    let body = req.body;

    let { nombre, paterno, materno, direccion, telefono, email, password, role } = body;
    let usuario = new Usuario({
      nombre,
      paterno,
      materno,
      direccion,
      telefono,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    });

    usuario.save((err, usuarioDB) => {
      if (err) {
          return res.status(400).json({
              ok: false,
              err,
          });
      }

      

      res.json({
          ok: true,
          usuario: usuarioDB
      });

    })
});



module.exports = app;

