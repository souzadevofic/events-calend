import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamburguer from '../../../public/hamburguer.png'

export function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <>
            <header>
                <div className='cabelhaco'>
                    <Logo />
                </div>

                <div className='scroll-usuario'>
                    <div className="btn-hamburguer btn " type="button" onClick={toggleOffcanvas}>
                        <span className='hamburguer'>
                            <img className='img-hamburguer' src={Hamburguer} alt="hamburguer" />
                        </span>
                    </div>

                    {showOffcanvas && (
                        <div className="offcanvas offcanvas-end show" tabIndex="-1" id="offcanvasRight">
                            <div className="offcanvas-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={toggleOffcanvas}
                                ></button>
                                <h5 className="offcanvas-title">Olá, Usuário...</h5>
                                <a href="#">Editar Perfil</a>
                            </div>
                            <div className="offcanvas-body">
                                
                                <a href="#">Minhas Tarefas</a>
                            </div>
                                <div className='container-close'>
                                    <a href="#">Sair</a>
                                </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
