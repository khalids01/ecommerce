import { Menu, Divider, UnstyledButton } from '@mantine/core';
import { BsCart3 as Cart } from 'react-icons/bs';
import { CgProfile as Profile } from 'react-icons/cg';
import { MdOutlineManageAccounts as Account } from 'react-icons/md';
import { GoHome as Home } from 'react-icons/go';
import { VscSignOut as Logout } from 'react-icons/vsc';
import { BsThreeDotsVertical as MenuIcon } from "react-icons/bs";
import { BsViewList as List } from "react-icons/bs";
import { useRouter } from 'next/router';
import { AiOutlineLogin as Login } from 'react-icons/ai'
import { NextLink } from '@mantine/next';
import { useSelector } from 'react-redux';
import { selectStatus } from '../redux/store';

const CustomMenu = () => {
    const { isLoggedIn } = useSelector(selectStatus);
    const router = useRouter();

    const handleOnClickMyList = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        router.push('/mylist');

    }


    return (
        <Menu
            trigger='hover'
            delay={500}
            control={
                <UnstyledButton className="p-3 ml-2 text-teal-400 hover:text-teal-500 dark:hover:text-teal-500">
                    <MenuIcon />
                </UnstyledButton>
            }
        >
            <Menu.Label>Options</Menu.Label>

            <Menu.Item className='text-sm' icon={<Home size={14} />} component={NextLink} href="/">
                Back to Home
            </Menu.Item>


            <Menu.Item icon={<Profile size={14} />} component={NextLink} href="/profile">
                Profile
            </Menu.Item>

            <Menu.Item icon={<Cart size={14} />}>
                Cart
            </Menu.Item>

            <Menu.Item className='text-sm' icon={<List size={14} />} onClick={handleOnClickMyList}>
                Wish List
            </Menu.Item>

            <Divider />

            <Menu.Item icon={<Account size={14} />} >
                Account
            </Menu.Item>
            {isLoggedIn ?
                (
                    <Menu.Item icon={<Logout size={14} />} component={NextLink} href="signout">
                        Sign Out
                    </Menu.Item>
                ) : (
                    <Menu.Item icon={<Login size={14} />} component={NextLink} href="/signin">
                        Sign In
                    </Menu.Item>
                )

            }

        </Menu>
    );
}


export default CustomMenu
