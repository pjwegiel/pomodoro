import * as actionTypes from './actionTypes'

const initialState: TimesState = {
    times: {
        focusTime: 25,
        breakTime: 5,
        longerBreakTime: 15,
    },
}

// eslint-disable-next-line default-param-last
function reducer(state: TimesState = initialState, action: TimesAction) {
    switch (action.type) {
        case actionTypes.SET_TIMES:
            console.log('essa')
            return {
                times: {
                    focusTime: action.times.focusTime,
                    breakTime: action.times.breakTime,
                    longerBreakTime: action.times.longerBreakTime,
                },
            }
        default:
            return state
    }
}

export default reducer
