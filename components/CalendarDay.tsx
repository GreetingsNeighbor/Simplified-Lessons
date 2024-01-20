const CalendarDay = ({ num, day, isDisabled, toggleModal, onDayClick
    //, month, year, events 
}:{num: number, day: Date | null, isDisabled: boolean, toggleModal: () => void, onDayClick: () => void;

}
) => {
    return (
        <div className={`btn outline-teal-800 m-2 ${isDisabled? "no-animation":"btn-outline"}` }key={num} aria-disabled={true} onClick={onDayClick}>
                        {day ? day.getDate() : ''}      
        </div>
    );
}

export default CalendarDay;