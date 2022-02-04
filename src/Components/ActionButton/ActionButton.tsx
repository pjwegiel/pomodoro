import Button from '@mui/material/Button'

type ActionButtonProps = {
    label: string
    onClickEvent: () => void
}

export function ActionButton({
    label,
    onClickEvent,
}: ActionButtonProps): JSX.Element {
    return (
        <Button
            variant="contained"
            fullWidth
            onClick={(e) => {
                e.preventDefault()
                onClickEvent()
            }}
        >
            {label}
        </Button>
    )
}
