import { Container, Button } from '@mui/material'
import { useState } from 'react'
import { NumberInputTextField } from '../NumberInputTextField/NumberInputTextField'

export function Form(): JSX.Element {
    const [focusTime, setFocusTime] = useState<number>(25)
    const [brakeTime, setBrakeTime] = useState<number>(5)
    const [longerBrakeTime, setLongerBrakeTime] = useState<number>(15)
    return (
        <>
            <br />
            <Container style={{ display: 'flex' }}>
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
            <br />
            <Button variant="contained" fullWidth>
                Start
            </Button>
        </>
    )
}
