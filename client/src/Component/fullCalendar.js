import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Data from "../data/data.json";

function fullCalendar(eventInfo){
    const INITIAL_EVENTS = Data.map((item) =>{
        const {title, start, end} = item;

        let startTime = new Date(start)
        let endTime = new Date(end)

        return{
            title,
            start:startTime,
            end:endTime,
            extendedProps:{...item}
        }
    })

    return(
        <div className="calendar">
            <div className="calendar-main">
                <FullCalendar
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    /*headerToolbar={{
                        left: 'prev,next today',
                        center:'title',
                        right:'dayGridMonth,timeGridWeek,timeGridDay'
                    }}*/
                    initialView='dayGridWeek'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    initialEvents={INITIAL_EVENTS}
                />
            </div>
      </div>
    )
}

export default fullCalendar;