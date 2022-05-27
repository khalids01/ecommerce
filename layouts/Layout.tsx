import { useState } from "react"
import { MantineProvider, Paper, ColorSchemeProvider, ColorScheme } from "@mantine/core"
import { useLocalStorage } from '@mantine/hooks';
import CustomHeader from "../components/Header";


const Layout = ({ children }: any) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,

    })

    const random = () => {
        const random = Math.floor(Math.random() * 5) + 1
        // return random;
        return 3;
    }
    const [bgImg, setBgImg] = useState<String>(`/assets/images/bg/img${random()}.jpg`)



    return (
        <MantineProvider theme={{ colorScheme }}>
            <Paper component="main" radius={0} withBorder={false} p={0}
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <div style={{
                    minHeight: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: "blur(10px)"
                }}>
                    <CustomHeader />
                    {children}
                </div>
            </Paper>
        </MantineProvider>
    )
}

export default Layout