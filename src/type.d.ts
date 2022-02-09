interface ITimes {
    focusTime: number
    breakTime: number
    longerBreakTime: number
}

type AppState = {
    times: ITimes
    isRunning: boolean
    intervalsCount: number
}

type TimesAction = {
    type: actionTypes.SET_TIMES
    times: ITimes
}

type IsRunningAction = {
    type: actionTypes.SET_ISRUNING
    isRunning: boolean
}

type DispatchType = (args: TimesAction) => TimesAction
