
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import {
    AppShell,
    useMantineTheme,
} from '@mantine/core';

const CustomAppShell = ({ children }: any) => {
    const theme = useMantineTheme();

    return (
        <AppShell
            navbarOffsetBreakpoint='sm'
            asideOffsetBreakpoint='sm'
            fixed
            style={{
                overflowX: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: "blur(10px)",
            }}
            styles={{
                main: {
                    background: (theme.colorScheme === 'dark') ? theme.colors.dark[8] : theme.colors.gray[0],
                    paddingInline: '0 !important',
                    paddingBottom: '0',
                    paddingTop: 70,

                }
            }}
            header={<Header />}

            navbar={<Sidebar />}

        >
            <div
                className='AppShellBody overflow-x-hidden'
                style={{
                    background: (theme.colorScheme === 'dark') ? theme.colors.dark[8] : theme.colors.gray[0]
                }}
            >
                {children}
            </div>

        </AppShell >
    )
}

export default CustomAppShell