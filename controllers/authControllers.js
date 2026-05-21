import jwt from 'jsonwebtoken';
// Array em memória — simula o banco de dados de usuários
const usuarios = [
    { id: 1, email: 'ana@devlog.com', senha: '123456' },
    { id: 2, email: 'bob@devlog.com', senha: 'abcdef' },
];
export function login(req, res) {
    const { email, senha } = req.body;
    // Busca o usuário pelo email
    const usuario = usuarios.find(u => u.email === email);
    // Mesma mensagem para email não encontrado E senha errada (segurança)
    if (!usuario || usuario.senha !== senha) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
    }
    // Gera o token JWT
    const token = jwt.sign(
        { userId: usuario.id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
    res.json({ token });
}
