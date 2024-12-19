import React, { useEffect, useState } from 'react';
import './Section.css';
import '../../../src/App.css';
import { Modal } from '../Modal/Modal';
import { CardTarefas } from '../CardTarefas/CardTarefas';
import { EventForm } from '../EventForm/EventForm';

export function Section() {
    const [currYear, setCurrYear] = useState(new Date().getFullYear());
    const [currMonth, setCurrMonth] = useState(new Date().getMonth());
    const [days, setDays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]); // Armazena os eventos cadastrados

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const renderCalendar = () => {
        const date = new Date();
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        const daysArray = [];

        // Dias do mês anterior
        for (let i = firstDayOfMonth; i > 0; i--) {
            daysArray.push({ day: lastDateOfLastMonth - i + 1, className: "inactive", isCurrentMonth: false });
        }

        // Dias do mês atual
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear();
            daysArray.push({ day: i, className: isToday ? "active" : "", isCurrentMonth: true });
        }

        // Dias do próximo mês
        for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
            daysArray.push({ day: i, className: "inactive", isCurrentMonth: false });
        }

        setDays(daysArray);
    };

    useEffect(() => {
        renderCalendar();
    }, [currYear, currMonth]);

    const handlePrevMonth = () => {
        setCurrMonth((prev) => (prev === 0 ? 11 : prev - 1));
        setCurrYear((prevYear) => (currMonth === 0 ? prevYear - 1 : prevYear));
    };

    const handleNextMonth = () => {
        setCurrMonth((prev) => (prev === 11 ? 0 : prev + 1));
        setCurrYear((prevYear) => (currMonth === 11 ? prevYear + 1 : prevYear));
    };

    const handleDayClick = (day, isCurrentMonth) => {
        if (isCurrentMonth) {
            setSelectedDate(`${day} ${months[currMonth]} ${currYear}`);
            setIsModalOpen(true);
        }
    };

    const handleSaveEvent = (eventDetails) => {
        setEvents((prevEvents) => [...prevEvents, { ...eventDetails, date: selectedDate }]);
        setIsModalOpen(false); // Fecha o modal após salvar
    };

    const handleEditEvent = (index, updatedEvent) => {
        const updatedEvents = [...events];
        updatedEvents[index] = updatedEvent;
        setEvents(updatedEvents);
    };

    const handleDeleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
    };

    return (
        <>
            <section className='container-calendario-marca'>
                <div className="title-calend">
                    <h2>Confira seu Calendário</h2>
                </div>

                <div className="wrapper">
                    <section>
                        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
                        <div className="icons">
                            <span id="prev" className="material-symbols-rounded" onClick={handlePrevMonth}>-</span>
                            <span id="next" className="material-symbols-rounded" onClick={handleNextMonth}>-</span>
                        </div>
                    </section>

                    <div className="calendar">
                        <ul className="weeks">
                            <li>Dom</li>
                            <li>Seg</li>
                            <li>Ter</li>
                            <li>Qua</li>
                            <li>Qui</li>
                            <li>Sex</li>
                            <li>Sab</li>
                        </ul>
                        <ul className="days">
                            {days.map((item, index) => (
                                <li
                                    key={index}
                                    className={item.className}
                                    onClick={() => handleDayClick(item.day, item.isCurrentMonth)}
                                    style={{ cursor: item.isCurrentMonth ? 'pointer' : 'default' }}
                                >
                                    {item.day}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <EventForm onSave={handleSaveEvent} />
                </Modal>
            )}

            <CardTarefas
                events={events}
                onEdit={handleEditEvent}
                onDelete={handleDeleteEvent}
            />
        </>
    );
}

export default Section;




