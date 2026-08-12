import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import TicketList from '../components/TicketList';

const DashboardPage = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            const { data, error } = await supabase
                .from('tickets')
                .select('*');

            if (error) {
                setError(error.message);
            } else {
                setTickets(data);
            }
            setLoading(false);
        };

        fetchTickets();
    }, []);

    const handleClaimTicket = async (ticketId) => {
        const { error } = await supabase
            .from('tickets')
            .update({ claimed_by: 'Support Team Member Name' }) // Replace with actual user name
            .eq('id', ticketId);

        if (error) {
            setError(error.message);
        } else {
            setTickets(tickets.map(ticket => 
                ticket.id === ticketId ? { ...ticket, claimed_by: 'Support Team Member Name' } : ticket
            ));
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: 'white' }}>
            <h1 style={{ color: 'navy' }}>Dashboard</h1>
            {loading && <p>Loading tickets...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <TicketList tickets={tickets} onClaimTicket={handleClaimTicket} />
        </div>
    );
};

export default DashboardPage;