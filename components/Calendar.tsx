'use client'
import React, { useState } from 'react';
/* calendar for the current month */
/** Todo:
 * 1. show the current month
 * 2. show the current day
 * 3. select a day and see the activities for that day
 * 4. add, delete, edit activities for the day selected
 * 
 */
/** count down
 * 1. show down to important dates
 */
function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the first day of the current month
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );

    // Get the last day of the current month
    const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );

    // Calculate the days to be displayed in the calendar
    const calendarDays = [];
    for (
        let day = new Date(firstDayOfMonth);
        day <= lastDayOfMonth;
        day.setDate(day.getDate() + 1)
    ) {
        calendarDays.push(new Date(day));
    }

    // Adjust the first row of the calendar if the month doesn't start on Sunday
    const startDayOfWeek = firstDayOfMonth.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
        calendarDays.unshift(null);
    }

    const changeMonth = (offset: number) => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + offset,
                1
            )
        );
    };

    return (
        <div>
            <button onClick={() => changeMonth(-1)}>Prev</button>
            <button onClick={() => changeMonth(1)}>Next</button>
            <div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
                {calendarDays.map((day, index) => (
                    <div key={index}>
                        {day ? day.getDate() : ''}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
