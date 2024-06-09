import React from 'react'
import PageHeader from "../components/PageHeader";
import About from '../components/About';

export default function AboutNav() {
    return (
        <>
            <PageHeader title="About Us" readOnly />
            <About />
        </>
    )
}
