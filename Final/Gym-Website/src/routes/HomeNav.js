import React from 'react'
import Banner from '../components/Banner';
import GymClass from '../components/GymClass';
import ChoseUs from '../components/ChoseUs';
import Team from '../components/Team';
import Subscribe from '../components/Subscribe';
import MonthlyPlan from '../components/MonthlyPlan';
import Testimonial from '../components/Testimonial';


export default function HomeNav() {
    return (
        <>
            <Banner />
            <GymClass />
            <ChoseUs />
            <Team />
            <Subscribe />
            <MonthlyPlan />
            <Testimonial />
        </>
    )
}
