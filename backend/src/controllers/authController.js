const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { crearUsuario, buscarPorCorreo } = require('../models/userModel');

const SECRET = 'mi_clave_secreta'; // puedes usar process.env.SECRET

async function register(req, res) {
  const { nombre, correo, contrasena, rol } = req.body;

  try {
    const existente = buscarPorCorreo(correo);
    if (existente) return res.status(400).json({ error: 'Correo ya registrado' });

    const contrasenaHasheada = await bcrypt.hash(contrasena, 10);
    crearUsuario({ nombre, correo, contrasenaHasheada, rol: rol || 'usuario' });

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { correo, contrasena } = req.body;

  try {
    const usuario = buscarPorCorreo(correo);
    if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

    const coincide = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!coincide) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      SECRET,
      { expiresIn: '2h' }
    );

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login };
