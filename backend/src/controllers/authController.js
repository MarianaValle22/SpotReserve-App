const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { buscarPorCorreo, guardarUsuario } = require('../models/userModel');
const { crearUsuario } = require('../factories/userFactory');

const SECRET = 'mi_clave_secreta';

async function register(req, res) {
  const { nombre, correo, contraseña, rol } = req.body;

  try {
    const existente = buscarPorCorreo(correo);
    if (existente) return res.status(400).json({ error: 'Correo ya registrado' });

    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);
    
    const nuevoUsuario = crearUsuario({
      nombre,
      correo,
      contraseña: contraseñaHasheada,
      rol
    });

    guardarUsuario(nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const { correo, contraseña } = req.body;

  try {
    const usuario = buscarPorCorreo(correo);
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const coincide = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!coincide) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      SECRET,
      { expiresIn: '2h' }
    );
    
    res.status(200).json({ mensaje: 'Login exitoso', token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login };
