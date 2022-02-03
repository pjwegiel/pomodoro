import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'

type ProgressBarProps = {
    isWorking: boolean
}

export function ProgressBar({ isWorking }: ProgressBarProps): JSX.Element {
    const [isWorkingState, setIsWorking] = useState(false)
    const progress = 59
    useEffect(() => {
        setIsWorking(isWorking)
    }, [isWorking])
    return (
        <>
            <Typography variant="h1">
                {isWorkingState ? 'Work!' : 'Break'}
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
