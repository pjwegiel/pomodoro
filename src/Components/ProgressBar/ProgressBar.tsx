import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'

export function ProgressBar(): JSX.Element {
    const [isWorkingState, setIsWorkingState] = useState(true)
    const [seconds, setSeconds] = useState(1)
    const timesState = useSelector((state: AppState) => state.times)
    const isRunningState = useSelector((state: AppState) => state.isRunning)
    const [progress, setProgress] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunningState) {
                if (isWorkingState) {
                    setSeconds(seconds + 1)
                    const currentInterval = timesState.focusTime * 60
                    const currentProgress = (seconds * 10) / currentInterval
                    if (currentProgress < 100) {
                        setProgress(currentProgress)
                    } else {
                        setIsWorkingState(false)
                        setProgress(0)
                        setSeconds(1)
                    }
                } else {
                    setSeconds(seconds + 1)
                    const currentInterval = timesState.breakTime * 60
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
    }, [isWorkingState, timesState, progress])
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
                <Typography variant="h4">essa</Typography>
            </Box>
        </>
    )
}
