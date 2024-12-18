import './CadUser.css';
import { HeaderInicio } from '../HeaderInicio/HeaderInicio.jsx';
import { Footer } from '../Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CadUser() {
    return (        
        <>
            <HeaderInicio/>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="container-forms col-md-8 col-lg-6 p-4 rounded shadow">
                        <h2 className="text-center mb-4">Criar Conta</h2>

                        {/* Informações Pessoais */}
                        <form className='forms-conta'>
                            <h4 className="mb-3">Informações Pessoais</h4>

                            {/* Nome Completo */}
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">* Nome Completo:</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    name="nome" 
                                    className="form-control" 
                                    placeholder="Insira seu nome" 
                                    required 
                                />
                            </div>

                            {/* CPF */}
                            <div className="mb-3">
                                <label htmlFor="cpf" className="form-label">* CPF:</label>
                                <input 
                                    type="text" 
                                    id="cpf" 
                                    name="cpf" 
                                    className="form-control" 
                                    placeholder="Insira seu CPF" 
                                    required 
                                />
                            </div>

                            {/* E-mail */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">* E-mail:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Insira seu e-mail" 
                                    required 
                                />
                            </div>

                            {/* Senha */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">* Senha:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Digite sua senha" 
                                    required 
                                />
                            </div>

                            {/* Confirmar Senha */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">* Confirme sua Senha:</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    className="form-control" 
                                    placeholder="Confirme sua senha" 
                                    required 
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="form-check mb-3">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="dataConsent" 
                                    required 
                                />
                                <label htmlFor="dataConsent" className="form-check-label">
                                    Você aceita fornecer seus dados para acessar este sistema.
                                </label>
                            </div>

                            {/* Botão Criar Conta */}
                            <div className="text-center">
                                <button type="submit" className="btn-forms  btn-primary w-100">Criar Conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
