import React from 'react'
import PageHeader from "../components/PageHeader";
import UserCount from '../components/usercount';

export default function UserNav() {
    return (
        <>
            <PageHeader title="User Count" readOnly />
            <UserCount/>
        </>
    )
}