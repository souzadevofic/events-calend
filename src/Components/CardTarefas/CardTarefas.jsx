import './CardTarefas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

export function CardTarefas({ events, onEdit, onDelete }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedEvent, setEditedEvent] = useState(null);

    const handleEditClick = (index, event) => {
        setEditingIndex(index);
        setEditedEvent(event);
    };

    const handleSaveClick = () => {
        onEdit(editingIndex, editedEvent);
        setEditingIndex(null);
        setEditedEvent(null);
    };

    const handleCancelClick = () => {
        setEditingIndex(null);
        setEditedEvent(null);
    };

    return (
        <div className="card-container">
            {events.map((event, index) => (
                <div className="card card-tarefas" key={index}>
                    <div className="card-body">
                        {editingIndex === index ? (
                            <>
                                <h5 className="card-title">
                                    <input
                                        type="text"
                                        value={editedEvent.name}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, name: e.target.value })}
                                    />
                                </h5>
                                <span>
                                    Dia: <input
                                        type="date"
                                        value={editedEvent.date}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
                                    />
                                </span>
                                <br />
                                <span>
                                    Local: <input
                                        type="text"
                                        value={editedEvent.location}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, location: e.target.value })}
                                    />
                                </span>
                                <br />
                                <span>
                                    Horário: 
                                    <input
                                        type="time"
                                        value={editedEvent.startTime}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, startTime: e.target.value })}
                                    />
                                    -
                                    <input
                                        type="time"
                                        value={editedEvent.endTime}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, endTime: e.target.value })}
                                    />
                                </span>
                                <p className="card-text">
                                    Descrição: <textarea
                                        value={editedEvent.description}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })}
                                    />
                                </p>
                                <div className='container-btn-edition'>
                                    <button className="btn btn-success" onClick={handleSaveClick}>
                                        Salvar
                                    </button>
                                    <button className="btn btn-secondary" onClick={handleCancelClick}>
                                        Cancelar
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                            <div className='container-card-efetuado'>
                                <div className='text-conteudo'> 
                                    <h5>{event.name}</h5>
                                    <span>Dia: {event.date}</span>
                                    <br />
                                    <span>Local: {event.location}</span>
                                    <br />
                                    <span>
                                        Horário: {event.startTime} - {event.endTime}
                                    </span>
                                    <p className="card-text">Descrição: {event.description}</p>
                                </div>
                                <div className='container-btn-card'>
                                    <button className="btn btn-primary" onClick={() => handleEditClick(index, event)}>
                                        Editar
                                    </button>
                                    <button className="btn btn-danger" onClick={() => onDelete(index)}>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardTarefas;


