import React from 'react'
import PageHeader from "../components/PageHeader";
import FAQ from '../components/FAQ';

export default function FAQNav() {
    return (
        <>
            <PageHeader title="Question" readOnly />
            <FAQ/>

        </>
    )
}