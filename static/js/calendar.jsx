import {Calendar, momentLocalizer} from "react-big-calendar";
import PropTypes from 'prop-types'
import moment from 'moment'
import i18n from "@generated/i18n";
import events from './events';
import '../../src/css/calendar.css'

let mapped_events = events.map(event => {
    event.start = moment(event.start, 'YYYY-MM-DD HH:mm').toDate();
    event.end = moment(event.end, 'YYYY-MM-DD HH:mm').toDate();

    return event
})

const languages = {
    en: null,
    fr: {
        week: 'La semaine',
        work_week: 'Semaine de travail',
        day: 'Jour',
        month: 'Mois',
        previous: 'Antérieur',
        next: 'Prochain',
        today: "Aujourd'hui",
        agenda: 'Ordre du jour',

        showMore: (total) => `+${total} plus`,
    },
}

moment.updateLocale('*', {
    week: {
        dow: 1,
        doy: 1,
    }
})

const localizer = momentLocalizer(moment)
let culture = i18n.currentLocale
let messages = languages[i18n.currentLocale]

function EventDescription(event) {
    let description  = <></>

    if (event.description !== undefined) {
        description = <p>{ event.description }</p>
    }

    return description
}

function Event({ event }) {

    return (
        <span>
            <strong>{event.title}</strong>
            { EventDescription(event) }
        </span>
    )
}
Event.propTypes = {
    event: PropTypes.object,
}

function EventAgenda({ event }) {
    return (
        <span>
            <strong>{event.title}</strong>
            { EventDescription(event) }
        </span>
    )
}
EventAgenda.propTypes = {
    event: PropTypes.object,
}

const components = {
    agenda: {
        event: EventAgenda,
    },
    event: Event,
}

export function CustomCalendar() {
    return (
        <Calendar
            culture={culture}
            messages={messages}
            localizer={localizer}
            events={mapped_events}
            components={components}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400, width: 820 }}
        />
    )
}