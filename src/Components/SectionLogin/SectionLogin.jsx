import React, { useState } from 'react';
import './SectionLogin.css';
// import Facebook from '../../../public/icon-facebook.svg';
// import Gmail from '../../../public/icon-gmail.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export function SectionLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                throw new Error('Login falhou');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);

            setSuccessMessage('Login bem-sucedido!');
        } catch (error) {
            console.error('Erro:', error.message);
            setError('Erro ao tentar fazer login.');
        }
    };

    return (
        <section className="container mt-1">
            <div className="row justify-content-center">
                <div className="container-caixa col-md-6">
                    <form onSubmit={handleLogin} className="container-forms-login p-4 rounded shadow">
                        <h2 className="text-center mb-4">Acesse sua conta</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}

                        {/* Input de Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Input de Senha */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Lembre-me</label>
                        </div>

                        {/* Botão Submit */}
                        <button type="submit" className="btn-forms btn-primary w-100">Entrar</button>

                        {/* Login de Cadastro */}
                        <div className="container-cad text-center mt-4">
                            <span>Ainda não tem cadastro?</span>
                            <a href="#" className="text-decoration-none">Fazer cadastro</a>
                        </div>

                        {/* Link de Recuperação de Senha */}
                        <div className="text-center mt-3">
                            <a href="#" className="recup-senha text-decoration-none">Esqueci minha senha</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

