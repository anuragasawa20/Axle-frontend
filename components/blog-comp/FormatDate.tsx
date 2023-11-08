import { CalendarDays } from 'lucide-react';
import React from 'react';
function formatDate(date:any) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = months[date?.getMonth()];
  const day = date?.getDate();
  const year = date?.getFullYear();

  return `${monthName} ${day}, ${year}`;
}

function FormattedDate({ createdAt }:any) {
  const formattedDate = formatDate(createdAt);

  return <div className='format-date'>
    <span>{formattedDate}</span>
    <CalendarDays />
  </div>;
}

export default FormattedDate;
