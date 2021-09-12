import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/app.css'

moment.locale('en-GB');
const localizer = momentLocalizer(moment)

export default class AppCalendar extends Component {
  render() {
    return (
      <section>
        <h2>Calendar</h2>
        <Calendar
        className="overflow-scroll h-70 text-gray-100"
          localizer={localizer}
          events={[
            {
              'title': 'My event',
              'allDay': false,
              'start': new Date(2021, 8, 15, 10, 0), // 10.00 AM
              'end': new Date(2021, 8, 15, 14, 0), // 2.00 PM 
            }
          ]}
          view='week'
          views={['week']}
          min={new Date(2008, 0, 1, 6, 0)} // 8.00 AM
          max={new Date(2008, 0, 1, 22, 0)} // Max  6.00 PM
          startAccessor="start"
          endAccessor="end"
    />
      </section>
    )
  }
}
