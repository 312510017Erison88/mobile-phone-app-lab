import React from 'react';
import PageHeader from "../components/PageHeader"; // Adjust path if needed
import Ticket from "../components/Ticket"; // Adjust path if needed

export default function TicketNav() {
  return (
    <>
      <PageHeader title="Reserve Your Ticket" readOnly />
      <Ticket />
    </>
  )
}



