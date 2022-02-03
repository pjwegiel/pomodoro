import { TextField, Container, Button } from '@mui/material'

export function Form(): JSX.Element {
    return (
        <>
            <br />
            <Container style={{ display: 'flex' }}>
                <TextField type="number" label="Focus time" />
                <TextField type="number" label="Brake time" />
                <TextField type="number" label="Longer brake time" />
            </Container>
            <br />
            <Button variant="contained" fullWidth>
                Essa
            </Button>
        </>
    )
}
