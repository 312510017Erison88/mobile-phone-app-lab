import React from 'react'
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import ChoseUs from '../components/ChoseUs';

export default function FeaturesNav() {
    return (
        <>
            <PageHeader title="Features" readOnly />
            <Services />
            <ChoseUs />
        </>
    )
}
