import * as CalendarActionCreators from './calendar'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...CalendarActionCreators
}
