import React, { useEffect, useState } from 'react';
import './Section.css';
import '../../../src/App.css';

export function Section() {
    const [currYear, setCurrYear] = useState(new Date().getFullYear());
    const [currMonth, setCurrMonth] = useState(new Date().getMonth());
    const [days, setDays] = useState([]);

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Função para gerar o calendário
    const renderCalendar = () => {
        const date = new Date();
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        const daysArray = [];

        // Dias do mês anterior
        for (let i = firstDayOfMonth; i > 0; i--) {
            daysArray.push({ day: lastDateOfLastMonth - i + 1, className: "inactive" });
        }

        // Dias do mês atual
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
            daysArray.push({ day: i, className: isToday ? "active" : "" });
        }

        // Dias do próximo mês
        for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
            daysArray.push({ day: i, className: "inactive" });
        }

        setDays(daysArray);
    };

    // Atualiza o calendário quando `currYear` ou `currMonth` mudarem
    useEffect(() => {
        renderCalendar();
    }, [currYear, currMonth]);

    // Funções de navegação
    const handlePrevMonth = () => {
        setCurrMonth((prev) => {
            if (prev === 0) {
                setCurrYear((year) => year - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const handleNextMonth = () => {
        setCurrMonth((prev) => {
            if (prev === 11) {
                setCurrYear((year) => year + 1);
                return 0;
            }
            return prev + 1;
        });
    };

    return (
        <>
            <div className='title-calend'>
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
                            <li key={index} className={item.className}>{item.day}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Section;
