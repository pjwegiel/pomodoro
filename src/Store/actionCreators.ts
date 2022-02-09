import * as actionTypes from './actionTypes'

export function setTimes(times: ITimes) {
    const action: TimesAction = {
        type: actionTypes.SET_TIMES,
        times,
    }
    return action
}

export function setIsRunning(isRunning: boolean) {
    const action: IsRunningAction = {
        type: actionTypes.SET_ISRUNNING,
        isRunning,
    }
    return action
}
