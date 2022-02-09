import Button, { ButtonProps } from '@mui/material/Button'

type ActionButtonProps = {
    label: string
    onClickEvent: () => void
}

export function ActionButton({
    color,
    label,
    onClickEvent,
}: ButtonProps & ActionButtonProps): JSX.Element {
    return (
        <Button
            variant="contained"
            color={color}
            fullWidth
            onClick={() => {
                onClickEvent()
            }}
        >
            {label}
        </Button>
    )
}
