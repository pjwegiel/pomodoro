import { makeStyles } from '@mui/styles'
import { Container, Button } from '@mui/material'
import { useState } from 'react'
import { NumberInputTextField } from '../NumberInputTextField/NumberInputTextField'

const useStyles = makeStyles({
    container: {
        display: 'flex',
    },
})

export function Form(): JSX.Element {
    const [focusTime, setFocusTime] = useState(25)
    const [brakeTime, setBrakeTime] = useState(5)
    const [longerBrakeTime, setLongerBrakeTime] = useState(15)
    const classes = useStyles()
    return (
        <>
            <Container className={classes.container}>
                <NumberInputTextField
                    label="Focus time"
                    value={focusTime}
                    onChangeEvent={(e) => {
                        e.preventDefault()
                        const focusValue = parseInt(e.target.value, 10)
                        setFocusTime(focusValue)
                    }}
                />
                <NumberInputTextField
                    label="Brake time"
                    value={brakeTime}
                    onChangeEvent={(e) => {
                        e.preventDefault()
                        const brakeValue = parseInt(e.target.value, 10)
                        setBrakeTime(brakeValue)
                    }}
                />
                <NumberInputTextField
                    label="Longer brake time"
                    value={longerBrakeTime}
                    onChangeEvent={(e) => {
                        e.preventDefault()
                        const longerBrakeValue = parseInt(e.target.value, 10)
                        setLongerBrakeTime(longerBrakeValue)
                    }}
                />
            </Container>
            <Button variant="contained" fullWidth>
                Start
            </Button>
        </>
    )
}
