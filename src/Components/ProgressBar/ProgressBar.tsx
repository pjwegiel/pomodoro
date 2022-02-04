import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'

type ProgressBarProps = {
    isWorking: boolean
}

export function ProgressBar({ isWorking }: ProgressBarProps): JSX.Element {
    const [isWorkingState, setIsWorking] = useState(false)
    const timesState = useSelector((state: TimesState) => state.times)
    const [progress, setProgress] = useState<number>(0)
    useEffect(() => {
        setIsWorking(isWorking)
        const interval = setInterval(() => {
            setProgress(
                Number((progress + 1 / timesState.focusTime).toFixed(2)) <= 100
                    ? Number((progress + 1 / timesState.focusTime).toFixed(2))
                    : 0
            )
            console.log(progress)
        }, 1000)
        return () => clearInterval(interval)
    }, [isWorking, timesState, progress])
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
