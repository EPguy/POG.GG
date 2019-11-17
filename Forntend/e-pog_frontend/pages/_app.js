import React, { Component } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout/AppLayout';
import './app.scss';
const EPogg = ({ Component }) => {
    console.log("hi")
    return (
        <>
            <Head>
                <title>e-pog.gg</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css' />
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
            <style jsx global>
                {`
                `}
            </style>
        </>
    )
}

export default EPogg;