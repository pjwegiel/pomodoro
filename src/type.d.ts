interface ITimes {
    focusTime: number
    breakTime: number
    longerBreakTime: number
}

type AppState = {
    times: ITimes
    isRunning: boolean
    intervalsCount: number
    progress: number
}

type TimesAction = {
    type: string
    times: ITimes
}

type DispatchType = (args: TimesAction) => TimesAction
