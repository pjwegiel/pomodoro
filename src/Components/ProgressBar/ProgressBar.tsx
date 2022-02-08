import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'

export function ProgressBar(): JSX.Element {
    const [isWorkingState, setIsWorkingState] = useState(true)
    const timesState = useSelector((state: TimesState) => state.times)
    const [progress, setProgress] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isWorkingState) {
                const currentInterval = timesState.focusTime
                const currentProgress = Number(
                    (progress + 1 / currentInterval).toFixed(2)
                )
                if (currentProgress < 100) {
                    setProgress(currentProgress)
                } else {
                    setIsWorkingState(false)
                    setProgress(0)
                }
            } else {
                const currentInterval = timesState.breakTime
                const currentProgress = Number(
                    (progress + 1 / currentInterval).toFixed(2)
                )
                if (currentProgress < 100) {
                    setProgress(currentProgress)
                } else {
                    setIsWorkingState(true)
                    setProgress(0)
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
