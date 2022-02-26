import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        type: "dark",
        primary: {
            main: '#9a5e5d',
            light: '#b67d7c',
            dark: '#623837',
            contrastText: '#f0f0f5',
        },
        secondary: {
            main: '#7d7db1',
        },
        text: {
            primary: '#f0edff',
        },
    },
});

export default function CustomTheme(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
}