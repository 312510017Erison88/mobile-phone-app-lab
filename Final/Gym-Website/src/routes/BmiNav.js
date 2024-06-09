import React from 'react'
import PageHeader from "../components/PageHeader";
import BMI from '../components/BMI';

export default function BmiNav() {
    return (
        <>
            <PageHeader title="Calculate your BMI" readOnly />
            <BMI/>

        </>
    )
}