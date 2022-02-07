import { useEffect, useState } from 'react'

import { LinearProgress, Typography, Box } from '@mui/material'

export function ProgressBar(): JSX.Element {
    const [isWorkingState, setIsWorking] = useState(true)
    const progress = 59
    useEffect(() => {
        console.log('essa')
    }, [isWorkingState])
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
