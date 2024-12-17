import React, { useEffect, useRef } from 'react';
import './Section.css';
import '../../../src/App.css';

export function Section() {
    const daysRef = useRef(null);
    const currentDateRef = useRef(null);
    const date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const renderCalendar = () => {
        if (!daysRef.current || !currentDateRef.current) return;

        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        let liTag = "";

        // Dias do mês anterior
        for (let i = firstDayOfMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
        }

        // Dias do mês atual
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() 
                ? "active" 
                : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }

        // Dias do próximo mês
        for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
            liTag += `<li class="inactive">${i}</li>`;
        }

        // Atualizando o conteúdo
        currentDateRef.current.innerText = `${months[currMonth]} ${currYear}`;
        daysRef.current.innerHTML = liTag;
    };

    useEffect(() => {
        renderCalendar();
    }, []);

    return (
        <>
            <div className='title-calend'>
                <h2>Confira seu Calendário</h2>
            </div>

            <div className="wrapper">
                <section>
                    <p ref={currentDateRef} className="current-date"></p>
                    <div className="icons">
                        <span id="prev" className="material-symbols-rounded" onClick={() => {
                            currMonth--;
                            renderCalendar();
                        }}>-</span>
                        <span id="next" className="material-symbols-rounded" onClick={() => {
                            currMonth++;
                            renderCalendar();
                        }}>-</span>
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
                    <ul ref={daysRef} className="days"></ul>
                </div>
            </div>
        </>
    );
}

export default Section;
