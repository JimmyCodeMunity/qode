import React from 'react'
import { navlinks } from '../constants'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'

const Menu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <a variant="" className="bg-black text-white border-none hover:bg-black">Account</a>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}



const Navbar = () => {
    return (
        <div className='w-full sm:px-16 px-6 sm:py-6 py-6 bg-black'>
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    <a href="">
                        <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-blue-600 via-lime-500 to-orange-500 bg-clip-text text-transparent">Qode</h1>
                    </a>
                </div>
                <div>
                    <ul className="flex flex-row items-center space-x-4">
                        {
                            navlinks.map((nav) => {
                                return (
                                    <li>
                                        <Link to={nav.path} className="text-white font-poppins">{nav.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="flex flex-row space-x-4 items-center">
                    <Link to="#" className="text-white font-poppins">Register</Link>
                    <Link to="/login" className="text-white font-poppins">Login</Link>
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Navbar
