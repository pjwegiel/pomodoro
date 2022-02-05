import { makeStyles } from '@mui/styles'
import { Container, Button, TextField } from '@mui/material'
import { useState } from 'react'

const useStyles = makeStyles({
    container: {
        display: 'flex',
    },
})

export function Form(): JSX.Element {
    const [focusTime, setFocusTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [longerBreakTime, setLongerBreakTime] = useState(15)
    const classes = useStyles()
    return (
        <>
            <Container className={classes.container}>
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Focus time"
                    value={focusTime}
                    onChange={(e) => {
                        e.preventDefault()
                        const focusValue = parseInt(e.target.value, 10)
                        setFocusTime(focusValue)
                    }}
                />
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Break time"
                    value={breakTime}
                    onChange={(e) => {
                        e.preventDefault()
                        const focusValue = parseInt(e.target.value, 10)
                        setBreakTime(focusValue)
                    }}
                />
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Longer break time"
                    value={longerBreakTime}
                    onChange={(e) => {
                        e.preventDefault()
                        const focusValue = parseInt(e.target.value, 10)
                        setLongerBreakTime(focusValue)
                    }}
                />
            </Container>
            <Button variant="contained" fullWidth>
                Start
            </Button>
        </>
    )
}
