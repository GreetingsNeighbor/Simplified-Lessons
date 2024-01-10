'use client'
import React, { useState } from 'react';
import CalendarDay from './CalendarDay';
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
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the first day of the current month
    const firstDayOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
    );

    // Get the last day of the current month
    const lastDayOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
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

    // add the days from the previous month to the calendar
    const previousMonthDays = [];
    const previousMonthLastDay = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        0
    );
    for (
        let day = new Date(previousMonthLastDay);
        previousMonthDays.length < startDayOfWeek;
        day.setDate(day.getDate() - 1)
    ) {
        previousMonthDays.unshift(new Date(day));
    }

    const nextMonthDays = [];
    const lastDayOfCalendar = calendarDays[calendarDays.length - 1];

    for (
        let day = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
        nextMonthDays.length < 7 - lastDayOfCalendar.getDay() - 1;
        day.setDate(day.getDate() + 1)
    ) {
        nextMonthDays.push(new Date(day));
    }

    // Combine the days from the previous month, current month, and next month
    const allCalendarDays = [...previousMonthDays, ...calendarDays, ...nextMonthDays];
    const changeMonth = (offset: number) => {
        setSelectedDate(
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + offset,
                1
            )
        );
    };

    // Render the calendar
    return (
        <div>
            <button onClick={() => changeMonth(-1)}>Prev</button>
            <button onClick={() => changeMonth(1)}>Next</button>
            <h1>{ selectedDate.getFullYear()}</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {daysOfWeek.map((day) => (
                    <div className="text-center" key={day}>
                        {day}
                    </div>
                ))}
                {allCalendarDays.map((day, index) => (
                    <CalendarDay num={index} day={day} isDisabled={day.getMonth()!== selectedDate.getMonth()}/>
                    
                ))}
            </div>
        </div>
    );
    // for (let i = 0; i < startDayOfWeek; i++) {
    //     calendarDays.unshift(null);
    // }

 
}

export default Calendar;
