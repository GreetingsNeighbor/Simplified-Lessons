const CalendarDay = ({ key, day
    //, month, year, events 
}:{key: number, day: Date}
) => {
    return (
        <div className="btn btn-outline outline-teal-800 m-2" key={key}>
                        {day ? day.getDate() : ''}      
        </div>
    );
}

export default CalendarDay;