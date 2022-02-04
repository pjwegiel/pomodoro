import * as actionTypes from './actionTypes'

export function setTimes(times: ITimes) {
    const action: TimesAction = {
        type: actionTypes.SET_TIMES,
        times,
    }
    return action
}
