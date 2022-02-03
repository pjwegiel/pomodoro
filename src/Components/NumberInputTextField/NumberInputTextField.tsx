import TextField from '@mui/material/TextField'
import { ChangeEvent } from 'react'

type NumberInputTextFieldProps = {
    label: string
    value: number
    onChangeEvent: (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void
}

export function NumberInputTextField({
    label,
    value,
    onChangeEvent,
}: NumberInputTextFieldProps) {
    return (
        <TextField
            type="number"
            inputProps={{ min: 0 }}
            label={label}
            value={value}
            onChange={onChangeEvent}
        />
    )
}
