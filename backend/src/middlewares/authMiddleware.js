const jwt = require('jsonwebtoken');
const SECRET = 'mi_clave_secreta'; // mismo que en login

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.usuario = decoded; // attach info del usuario al request
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
}

function soloAdmin(req, res, next) {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ error: 'Solo accesible para administradores' });
  }
  next();
}

module.exports = {
  verificarToken,
  soloAdmin,
};
