import * as actionTypes from './actionTypes'

export function setTimes(times: ITimes) {
    const action: TimesAction = {
        type: actionTypes.SET_TIMES,
        times,
    }
    return action
}

export function setIsRunning() {
    const action = {
        type: actionTypes.SET_ISRUNNING,
    }
    return action
}

export function incrementIntervals() {
    const action = {
        type: actionTypes.INCREMENT_INTERVALS,
    }
    return action
}
