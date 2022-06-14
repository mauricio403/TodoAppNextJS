import { Box } from "@mui/material"
import Head from "next/head"
import React from "react";
import { NavBar } from '../ui/NavBar';
import { SideBar } from "../ui/SideBar";

interface Props {
    title?: string
    children: React.ReactNode
}

export const Layout = ({ title = 'Todo App', children }: Props) => {
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <Head>
                <title>{title}</title>
            </Head>
            
            <NavBar></NavBar>
            <SideBar/>

            <Box sx={{
                padding: '10px 20px',
            }}>
                {children}
            </Box>

        </Box>
    )
}
