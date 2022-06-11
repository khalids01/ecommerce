import {
    Burger,
    Text,
    Group,
    Avatar,
    Select,
    MediaQuery,
    useMantineTheme,
    Container
} from "@mantine/core";
import Image from "next/image";
import { useState, forwardRef } from 'react';
import Link from "next/link";
import { GoHome as Home } from 'react-icons/go';
import { CgProfile as Profile } from 'react-icons/cg';
import { MdVideoSettings } from 'react-icons/md'
import { Tooltip } from "@mantine/core";
import Menu from './Menu'
import { useSelector } from "react-redux";
import { selectStatus } from '../redux/store';
import styled from 'styled-components';

interface selectOption {
    image?: HTMLImageElement | JSX.Element,
    label: string,
    value: string | number,
    description: string
}

const allSelectOptions = [
    {
        image: <MdVideoSettings />,
        label: 'Web Development',
        value: 'web development',
        description: 'Web Development videos'
    },
    {
        image: <MdVideoSettings />,
        label: 'App Development',
        value: 'app development',
        description: 'App Development videos'
    },
    {
        image: <MdVideoSettings />,
        label: 'UI/UX',
        value: 'ui ux',
        description: 'UI/UX video tutorials'
    },
    {
        image: <MdVideoSettings />,
        label: 'Game Development',
        value: 'game development',
        description: 'Game Development videos'
    },
    {
        image: <MdVideoSettings />,
        label: 'Anime',
        value: 'anime',
        description: 'Popular Anime'
    },
    {
        image: <MdVideoSettings />,
        label: 'AMV Music Videos',
        value: 'amv music videos',
        description: 'Anime music videos'
    },
    {
        image: <MdVideoSettings />,
        label: 'Movies',
        value: 'movies',
        description: 'Popular English Movies'
    },

]

const SelectItem = forwardRef<HTMLDivElement, selectOption>(
    ({ image, label, description, ...others }: selectOption, ref) => (
        <div ref={ref} {...others}

        >
            <Group noWrap >
                <Avatar>
                    <Image src='/assets/images/logo.png' height={30} width={40} className="object-contain" />
                </Avatar>

                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" color="dimmed">
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
);

const SearchSuggestions = () => {

    return (
        <MediaQuery smallerThan={600} styles={{ display: 'none' }}>
            <Select
                placeholder="Search"
                itemComponent={SelectItem}
                data={allSelectOptions}
                searchable
                allowDeselect
                clearable
                creatable
                radius={0}
                iconWidth={30}
                maxDropdownHeight={300}

                nothingFound="No results found"
                classNames={{ input: 'bg-slate-900/20 backdrop-blur-md  placeholder:text-teal-400 text-teal-400 ' }}
                style={{
                    minWidth: '300px',
                    border: 'none'
                }}

                filter={(value, item) =>
                    item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
                    item.description?.toLowerCase().includes(value.toLowerCase().trim())
                }
            />
        </MediaQuery>

    )
}


const Header = styled.header`
    position: relative;
    z-index: 3;
    display: inline-block; 
    padding: 0 16px;
    border-bottom: 1px solid var(--border-color);
`

const NavItems = () => {
    <MediaQuery
        smallerThan={'md'}
        styles={{
            flexDirection: "column"
        }}
    >

    </MediaQuery>
}

const CustomHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useMantineTheme();
    const { isLoggedIn } = useSelector(selectStatus);


    return (
        <Header className="w-full">

            <Container fluid className="header-container flex justify-between items-center ">
                <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                    <Burger
                        opened={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        color={theme.colors.gray[6]}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>

                <div className="flex items-center justify-start gap-8 flex-1">
                    <Link href="/">
                        <a className="cursor-pointer flex items-center">
                            <Image className="object-contain" src='/assets/images/logo.png' width={40} height={30} layout="intrinsic" />
                        </a>
                    </Link>
                </div>

                <SearchSuggestions />

                <div className="flex justify-end items-center flex-1">
                    <Link href="/">
                        <a className="cursor-pointer text-xl px-4 py-3 text-teal-400 hover:text-teal-500 transition-all duration-300">
                            <Home />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="cursor-pointer text-xl px-4 py-3 text-teal-400 hover:text-teal-500 transition-all duration-300">
                            {
                                isLoggedIn ?
                                    (
                                        <Tooltip
                                            label={<Text weight={600} className="text-slate-50 " size="sm">userName</Text>}
                                            radius="sm"
                                            position="bottom"
                                            withArrow
                                            closeDelay={300}
                                            arrowSize={3}
                                            styles={{
                                                body: {
                                                    backgroundColor: theme.colors.teal[5],
                                                },
                                                arrow: {
                                                    backgroundColor: theme.colors.teal[5],
                                                }
                                            }}
                                        >
                                            <div className="-mb-1">
                                                <Profile />
                                            </div>
                                        </Tooltip>
                                    ) : <Profile />

                            }
                        </a>
                    </Link>

                    <Menu />
                </div>
            </Container>

        </Header>
    )
}

export default CustomHeader