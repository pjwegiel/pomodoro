import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { incrementIntervals } from '../../Store/actionCreators'

export function ProgressBar(): JSX.Element {
    const [isWorkingState, setIsWorkingState] = useState(true)
    const [progress, setProgress] = useState<number>(0)
    const [seconds, setSeconds] = useState(1)
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const progressBarState = useSelector((state: AppState) => {
        return {
            times: state.times,
            isRunning: state.isRunning,
            intervalsCount: state.intervalsCount,
        }
    })
    const dispatch = useDispatch()
    useEffect(() => {
        const interval = setInterval(() => {
            if (progressBarState.isRunning) {
                if (isWorkingState) {
                    console.log(timerSeconds)
                    if (timerSeconds === 59) {
                        console.log('essa')
                        setTimerSeconds(timerSeconds - 60)
                        setTimerMinutes(timerMinutes + 1)
                    }
                    setTimerSeconds(timerSeconds + 1)
                    setSeconds(seconds + 1)
                    const currentInterval =
                        progressBarState.times.focusTime * 60
                    const currentProgress = (seconds * 10) / currentInterval
                    if (currentProgress < 100) {
                        setProgress(currentProgress)
                    } else {
                        setIsWorkingState(false)
                        setProgress(0)
                        setSeconds(1)
                        dispatch(incrementIntervals())
                    }
                } else {
                    setSeconds(seconds + 1)
                    const currentInterval =
                        progressBarState.intervalsCount % 4 === 0
                            ? progressBarState.times.breakTime * 60
                            : progressBarState.times.longerBreakTime * 60
                    const currentProgress = (seconds * 10) / currentInterval
                    if (currentProgress < 100) {
                        setProgress(currentProgress)
                    } else {
                        setIsWorkingState(true)
                        setProgress(0)
                        setSeconds(1)
                    }
                }
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [progressBarState, progress, timerSeconds, timerMinutes])
    return (
        <>
            <Typography variant="h1">
                {isWorkingState ? 'Focus!' : 'Break'}
            </Typography>
            <Box>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    color={isWorkingState ? 'primary' : 'inherit'}
                />
                <Typography variant="h4">{`${timerMinutes}:${timerSeconds}`}</Typography>
            </Box>
        </>
    )
}
