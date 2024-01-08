const CalendarDay = ({ keya, day
    //, month, year, events 
}:{keya: number, day: Date | null}
) => {
    return (
        <div className="btn btn-outline outline-teal-800 m-2" key={keya}>
                        {day ? day.getDate() : ''}      
        </div>
    );
}

export default CalendarDay;