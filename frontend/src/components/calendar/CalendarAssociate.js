// Calendar Associate...//

import React, { useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5 from "@fullcalendar/bootstrap5";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { confirm } from "react-confirm-box";
import axios from "axios";
import "./ViewCalendar.css";

const CalendarAssociate = () => {
  const [weekendsVisible, setweekendsVisible] = useState(true);
  const [currentEvents, setcurrentEvents] = useState([]);
  let weekendToggle = true;

  const handleWeekendsToggle = () => {
    weekendToggle = !weekendToggle;
    setweekendsVisible(weekendToggle);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      let response = await axios.get("/viewbooking");
      let data = response.data.map((booking) => {
        return {
          ictkid: booking.ictkid,
          name: booking.name,
          hall: booking.hall,
          date: booking.date,
          start: new Date(booking.date + " " + booking.start),
          end: new Date(booking.date + " " + booking.end),
          title: booking.event,
          event: booking.event,
        };
      });
      setcurrentEvents(data);
    };
    fetchEvents();
  }, []);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.ictkid}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.ictkid}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setcurrentEvents(events);
  };
  return (
    <>
      <div className="row bg-white bg-gradient">
        <div className="col-3">
          <br></br>
          <div
            class="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ height: "50%" }}
          >
            <div class="card-body">
              <h5 class="card-title">All Events</h5>
              {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}

              <ul>
                {currentEvents.map((event) => (
                  <li key={event.id}>
                    <b>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </b>
                    <i>{event.ictkid}</i>
                  </li>
                ))}
              </ul>
              <br />

              <input
                type="checkbox"
                className="form-check-input"
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              ></input>
              <label className="form-check-label">Toggle Weekends</label>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="demo-app-main card-body shadow p-3 mb-5 bg-body rounded">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              events={currentEvents}
              themeSystem={bootstrap5}
            />
          </div>
        </div>
      </div>
      <div className="demo-app card-body"></div>
    </>
  );
};

export default CalendarAssociate;
