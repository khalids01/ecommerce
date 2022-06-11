import { MantineProvider, Paper } from "@mantine/core"
import CustomHeader from "../components/Header";
import styled from 'styled-components'

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--theme-bg-color);
    position: relative;
    z-index: 1;
    backdrop-filter: blur(20px);
`;

const Fg = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 2;
`;


const Layout = ({ children }: any) => {
    return (
        <MantineProvider
            theme={{
                colors: {
                    'theme-color': ['#f9fafb'],
                    'inactive-color': ['#717790c7'],
                    'theme-bg-color': ['#71779040'],
                    'hover-menu-bg': ['#0c0f194d'],
                    'content-title-color': ['999ba5'],
                    'content-bg': ['#9297b321'],
                    'button-inactive': ['#f9fafb8c'],
                    'dropdown-bg': ['#21242d'],
                    'dropdown-hover': ['#2a2e3c'],
                    'overlay-bg': ['#24273b4d'],
                    'scrollbar-bg': ['#01020366']
                }
            }}

        >
            <Paper
                component="main"
                radius={0}
                withBorder={false}
                p={0}
                style={{
                    backgroundColor: 'transparent',
                    overflow: 'hidden'
                }}
            >

                {/* forGround */}
                <Fg>
                    <CustomHeader />
                    {children}
                </Fg>

                {/* background */}
                <Bg />

            </Paper>
        </MantineProvider >
    )
}

export default Layout