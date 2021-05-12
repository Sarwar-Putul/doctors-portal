import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

    return (
        <div className="col-md-4 text-center mb-5">
            <div className="card p-3">
                <div className="card-body">
                    <h5 style={{color:'#1CC7C1'}} className="card-title">{booking.subject}</h5>
                    <h6 style={{color:'#3A4256'}}>{booking.visitingHour}</h6>
                    <p className="text-secondary">{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase text-white">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>                    
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;