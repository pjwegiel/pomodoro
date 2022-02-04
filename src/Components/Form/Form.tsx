import { Container } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { NumberInputTextField } from '../NumberInputTextField/NumberInputTextField'
import { ActionButton } from '../ActionButton/ActionButton'
import { setTimes } from '../../Store/actionCreators'

export function Form(): JSX.Element {
    const [focusTime, setFocusTime] = useState<number>(25)
    const [breakTime, setBreakTime] = useState<number>(5)
    const [longerBreakTime, setLongerBreakTime] = useState<number>(15)
    const dispatch: Dispatch<any> = useDispatch()
    function onStartClick() {
        const times = {
            focusTime,
            breakTime,
            longerBreakTime,
        }
        dispatch(setTimes(times))
    }
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
                    label="Break time"
                    value={breakTime}
                    onChangeEvent={(e) => {
                        e.preventDefault()
                        const breakValue = parseInt(e.target.value, 10)
                        setBreakTime(breakValue)
                    }}
                />
                <NumberInputTextField
                    label="Longer break time"
                    value={longerBreakTime}
                    onChangeEvent={(e) => {
                        e.preventDefault()
                        const longerBreakValue = parseInt(e.target.value, 10)
                        setLongerBreakTime(longerBreakValue)
                    }}
                />
            </Container>
            <br />
            <ActionButton label="Start" onClickEvent={() => onStartClick()} />
        </>
    )
}
