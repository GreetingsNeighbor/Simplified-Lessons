const CalendarDay = ({ num, day, isDisabled
    //, month, year, events 
}:{num: number, day: Date | null, isDisabled: boolean}
) => {
    return (
        <div className={`btn outline-teal-800 m-2 ${isDisabled? "no-animation":"btn-outline"}` }key={num} aria-disabled={true}>
                        {day ? day.getDate() : ''}      
        </div>
    );
}

export default CalendarDay;