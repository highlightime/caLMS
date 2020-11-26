import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Data from "../data/data.json";

function createColor(){
    var color=['#FADBFF', '#FFE4D7', '#F4FCCC', '#D8FEFB', '#D6E4FF'];

    return color[Math.round(Math.random() * 5)];
}

function fullCalendar(eventInfo){
    const INITIAL_EVENTS = Data.map((item) =>{
        const {title, start, end} = item;

        let startTime = new Date(start)
        let endTime = new Date(end)

        return{
            title,
            start:startTime,
            end:endTime,
            color:createColor(),
            extendedProps:{...item}
        }
    })

    return(
        <body>
            <div className="fadeIn">
              <div className="calendar">
                <br/>
                    <div className="calendar-main">
                        <FullCalendar
                            plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                            headerToolbar={{
                                left: 'prev,next today',
                                center:'title',
                                right:'dayGridMonth,dayGridWeek,timeGridDay'
                            }}
                            buttonText={{
                                today: 'TODAY',
                                month: 'MONTH',
                                week: 'WEEK',
                                day: 'DAY'
                            }}
                            initialView='dayGridWeek' // 초기 화면 세팅
                            editable={false} // 마우스를 이용한 수정 불가
                            selectable={true} // 
                            navLinks={true} // 클릭시, 해당 날짜에 있는 일정을 보여줌
                            selectMirror={true}
                            dayMaxEvents={true}
                            weekends={true}
                            initialEvents={INITIAL_EVENTS}
                            stickyHeaderDates={true}
                            eventTextColor={'#3D3D3D'}
                            firstDay={1}
                            height={750+'px'}
                        />
                 </div>
            </div>  
        </div>
      </body>
    )
}

export default fullCalendar;