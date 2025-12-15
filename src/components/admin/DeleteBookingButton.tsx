'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { deleteBooking } from '@/app/actions/delete-booking';

interface DeleteBookingButtonProps {
  id: string;
}

export default function DeleteBookingButton({ id }: DeleteBookingButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const result = await deleteBooking(id);
      if (!result.success) {
        alert(result.error || 'Failed to delete');
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-1 rounded hover:bg-red-50 text-stone-400 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      title="Cancel Booking"
    >
      {isDeleting ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Trash2 className="w-4 h-4" />
      )}
    </button>
  );
}


