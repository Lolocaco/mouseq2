import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const TicketDetails = ({ ticketId }) => {
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [claimedBy, setClaimedBy] = useState('');

    useEffect(() => {
        const fetchTicketDetails = async () => {
            const { data, error } = await supabase
                .from('tickets')
                .select('*')
                .eq('id', ticketId)
                .single();

            if (error) {
                console.error('Error fetching ticket details:', error);
            } else {
                setTicket(data);
                setClaimedBy(data.claimed_by || '');
            }
            setLoading(false);
        };

        fetchTicketDetails();
    }, [ticketId]);

    const handleClaimTicket = async () => {
        const { error } = await supabase
            .from('tickets')
            .update({ claimed_by: 'Support Team Member' }) // Replace with actual user
            .eq('id', ticketId);

        if (error) {
            console.error('Error claiming ticket:', error);
        } else {
            setClaimedBy('Support Team Member'); // Replace with actual user
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Ticket Details</h2>
            {ticket ? (
                <div>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                    <p>Status: {ticket.status}</p>
                    <p>Claimed By: {claimedBy}</p>
                    <button onClick={handleClaimTicket}>Claim Ticket</button>
                </div>
            ) : (
                <p>No ticket found.</p>
            )}
        </div>
    );
};

export default TicketDetails;