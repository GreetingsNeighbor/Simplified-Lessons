'use client'
import React, { useState } from 'react';
import CalendarDay from './CalendarDay';
import Modal from './Modal';
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

    // click a day bring up the activities for that day in a modal
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        console.log("toggleModal");
        setShowModal(prevShowModal => !prevShowModal);
    }

    const onShowChange = () => {
        console.log("onShowChange");
        setShowModal(prevShowModal => !prevShowModal);
    }
    const onDayClick = (day: Date) => {
        console.log("onDayClick");
        setSelectedDate(day);
        toggleModal();
    }


    // Render the calendar
    return (
        <div>
            <Modal showModal={showModal} onShowChange={onShowChange} >
                <p>{`${selectedDate.toLocaleString('default', { month: 'short' })} ${selectedDate.getDate()}, ${selectedDate.getFullYear()} `}</p>
                <p>Activities for the day (pi chart, charge)</p>
                {/* I'm adding a reflection| I'm viewing my reflections/}
                {/* adding */}
                <form className='flex flex-col'>
                    {/* dropdown for activity type */}
                    <label htmlFor="activityType">Activity Type</label>
                    <select className='dropdown dro'  name="activityType" id="activityType">
                        <option value="meditation">Meditation</option>
                        <option value="exercise">Exercise</option>
                        <option value="reading">Reading</option>
                        <option value="writing">Writing</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="activity">Activity</label>
                    <input type="text" name="activity" id="activity" />
                    <div>
                        <input type="checkbox" name="listened" id="listened" />
                        <label htmlFor="listened">Listened 80% of the time</label>

                    </div>
                    <div>

                    </div>
                    <label htmlFor="reflection">Reflection</label>
                    <textarea name="reflection" id="reflection" cols={30} rows={10}></textarea>
                    {/* checkbox - did i listen 80% of the time */}
                    {/* wonder if I can leverage this into a survey creator tool */}
                </form>
                {/* deleting */}

                {/* editing*/}

            </Modal>
            <button onClick={() => changeMonth(-1)}>Prev</button>
            <button onClick={() => changeMonth(1)}>Next</button>
            <h1>{selectedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long'})}</h1>
            <div className='grid grid-cols-7' >
                {daysOfWeek.map((day) => (
                    <div className="text-center" key={day}>
                        {day}
                    </div>
                ))}
                {allCalendarDays.map((day, index) => (
                    <CalendarDay key={index} num={index} day={day} isDisabled={day.getMonth() !== selectedDate.getMonth()} onDayClick={ ()=>onDayClick(day)} toggleModal={toggleModal} />
                ))}
            </div>
        </div>
    );
}

export default Calendar;
