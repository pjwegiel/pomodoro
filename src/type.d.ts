interface ITimes {
    focusTime: number
    breakTime: number
    longerBreakTime: number
}

type TimesState = {
    times: ITimes
}

type TimesAction = {
    type: string
    times: ITimes
}

type DispatchType = (args: TimesAction) => TimesAction
