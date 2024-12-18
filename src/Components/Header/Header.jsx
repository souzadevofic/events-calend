import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <button className="btn btn-primary" type="button" onClick={toggleOffcanvas}>
                        Toggle right offcanvas
                    </button>

                    {showOffcanvas && (
                        <div className="offcanvas offcanvas-end show" tabIndex="-1" id="offcanvasRight">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">Offcanvas right</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={toggleOffcanvas}
                                ></button>
                            </div>
                            <div className="offcanvas-body">Conteúdo do Offcanvas...</div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
