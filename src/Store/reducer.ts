import * as actionTypes from './actionTypes'

const initialState: AppState = {
    times: {
        focusTime: 25,
        breakTime: 5,
        longerBreakTime: 15,
    },
    isRunning: true,
    intervalsCount: 0,
    progress: 0,
}

// eslint-disable-next-line default-param-last
function reducer(state: AppState = initialState, action: TimesAction) {
    switch (action.type) {
        case actionTypes.SET_TIMES:
            return {
                ...state,
                times: {
                    focusTime: action.times.focusTime,
                    breakTime: action.times.breakTime,
                    longerBreakTime: action.times.longerBreakTime,
                },
            }
        case actionTypes.SET_ISRUNNING:
            return {
                ...state,
                isRunning: !state.isRunning,
            }
        default:
            return state
    }
}

export default reducer
