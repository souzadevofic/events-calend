import React from 'react';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Modal({ children, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-dialog modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="modal-body">
                    {children}
                </div>
                <div className="container-btn">
                    <button 
                        type="button" 
                        className="btn-fechar btn btn-secondary" 
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                    <button type="button" className="btn-save btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    );
}