import React from 'react'
import PageHeader from "../components/PageHeader";
import Register from '../components/Register';

export default function RegisterNav() {
    return (
        <>
            <PageHeader title="Register" readOnly />
            <Register/>
        </>
    )
}