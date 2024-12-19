import React, { useState } from 'react';
import './EventForm.css';

export function EventForm({ onSave }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (name && location && startTime && endTime) {
            onSave({ name, location, startTime, endTime, description });
        } else {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
    };

    return (
        <div className='templete-event'>
            <h3>Criar Evento</h3>

            <h2>Nome:</h2>
            <input className='name-event' type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <h2>Local:</h2>
            <input className='name-event' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

            <h2>Início:</h2>
            <input className='horario' type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

            <h2>Término:</h2>
            <input className='horario' type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />

            <h2>Descrição:</h2>
            <textarea name="mensagem" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <button type="button" className="btn btn-success" onClick={handleSubmit}>
                Salvar
            </button>
        </div>
    );
}

export default EventForm;
