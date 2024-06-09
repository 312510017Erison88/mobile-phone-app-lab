import React from 'react'
import PageHeader from "../components/PageHeader";
import Venue from '../components/Venue';

export default function VenueNav() {
    return (
        <>
            <PageHeader title="Reserve" readOnly />
            <Venue/>
        </>
    )
}