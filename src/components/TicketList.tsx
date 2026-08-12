import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const { data, error } = await supabase
                .from('tickets')
                .select('*');

            if (error) {
                console.error('Error fetching tickets:', error);
            } else {
                setTickets(data);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div>
            <h2>Reported Tickets</h2>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>
                        <span>{ticket.issue}</span>
                        <span> - Checked by: {ticket.checked_by || 'Not checked'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;