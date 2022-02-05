import { makeStyles } from '@mui/styles'
import { Container, Button, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

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
    const handleChange =
        (cb: (number: number) => void) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            event.preventDefault()
            const value = parseInt(event.target.value, 10)
            cb(value)
        }
    return (
        <>
            <Container className={classes.container}>
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Focus time"
                    value={focusTime}
                    onChange={handleChange(setFocusTime)}
                />
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Break time"
                    value={breakTime}
                    onChange={handleChange(setBreakTime)}
                />
                <TextField
                    type="number"
                    inputProps={{ min: 0 }}
                    label="Longer break time"
                    value={longerBreakTime}
                    onChange={handleChange(setLongerBreakTime)}
                />
            </Container>
            <Button variant="contained" fullWidth>
                Start
            </Button>
        </>
    )
}
