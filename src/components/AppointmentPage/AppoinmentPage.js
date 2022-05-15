import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const AppoinmentPage = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div className='px-12'>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <AvailableAppointment selected={selected} />
        </div>
    );
};

export default AppoinmentPage;