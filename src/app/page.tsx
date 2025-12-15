import BookingForm from '../components/booking/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex justify-center items-start">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-stone-800">Sauna Reservation</h1>
        <BookingForm />
      </div>
    </main>
  );
}