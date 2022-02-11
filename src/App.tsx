import { Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useSelector, useDispatch } from 'react-redux'
import { ProgressBar } from './Components/ProgressBar/ProgressBar'
import { Form } from './Components/Form/Form'
import { setIsRunning } from './Store/actionCreators'

// pomodoro app that alerts user about intervals set to enhance productivity

// progress bar of current interval/brake

// form to set own time of interval and brake that are initialy set to 25:5 with longer (initialy 15 minutes) break after 4 intervals

// counter of past intervals

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '3vh',
    },
})

function App() {
    const classes = useStyles()
    const isRunning = useSelector((state: AppState) => state.isRunning)
    const dispatch = useDispatch()
    return (
        <Container className={classes.container} maxWidth="sm">
            <ProgressBar />
            <Form />
            <Button
                onClick={() => {
                    dispatch(setIsRunning())
                }}
                fullWidth
                variant="contained"
                color={isRunning ? 'error' : 'success'}
            >
                {isRunning ? 'stop' : 'start'}
            </Button>
        </Container>
    )
}

export default App
