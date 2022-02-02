import { useEffect, useState } from 'react'

import { LinearProgress, Typography } from '@mui/material'

type ProgressBarProps = {
    brake: boolean
}

export const ProgressBar = function ProgressBar({
    brake,
}: ProgressBarProps): JSX.Element {
    const [brakeState, setBrakeState] = useState(false)
    const progress = 100
    useEffect(() => {
        setBrakeState(brake)
    }, [brake])
    return (
        <>
            <Typography variant="h1">
                {brakeState ? 'Work!' : 'Brake'}
            </Typography>
            <LinearProgress
                variant="determinate"
                value={progress}
                color={brakeState ? 'primary' : 'inherit'}
            />
        </>
    )
}
