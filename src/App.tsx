import { Container } from '@mui/material'
import { useState } from 'react'
import { ProgressBar } from './Components/ProgressBar/ProgressBar'
import { Form } from './Components/Form/Form'

// pomodoro app that alerts user about intervals set to enhance productivity

// progress bar of current interval/brake

// form to set own time of interval and brake that are initialy set to 25:5 with longer (initialy 15 minutes) break after 4 intervals

// counter of past intervals

function App() {
    type timesStateType = {
        focusTime: number
        breakTime: number
        longerBreakTime: number
    }
    const [timesState, setTimesState] = useState<timesStateType>({
        focusTime: 15,
        breakTime: 5,
        longerBreakTime: 15,
    })

    const isWorking = false
    return (
        <Container maxWidth="sm">
            <ProgressBar isWorking={isWorking} />
            <Form />
        </Container>
    )
}

export default App
