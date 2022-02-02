import './App.css'

import { Container } from '@mui/material'
import { ProgressBar } from './Components/ProgressBar/ProgressBar'

// pomodoro app that alerts user about intervals set to enhance productivity

// progress bar of current interval/brake

// form to set own time of interval and brake that are initialy set to 25:5 with longer (initialy 15 minutes) break after 4 intervals

// counter of past intervals

function App() {
    const brake = true
    return (
        <div className="App">
            <Container maxWidth="sm">
                <ProgressBar brake={brake} />
            </Container>
        </div>
    )
}

export default App
