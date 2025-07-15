export default function ContactSection() {
  return (
    <section className="p-8 w-full center bg-white text-gray-800">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Mawasiliano</h2>
      <p className="mb-2">
        📱 WhatsApp:{" "}
        <a
          href="https://wa.me/255749722722"
          className="text-blue-600 hover:underline"
        >
          0749722722
        </a>
      </p>
      <p>
        📧 Email:{" "}
        <a
          href="mailto:info@tanzaniteskills.ac.tz"
          className="text-blue-600 hover:underline"
        >
          info@tanzaniteskills.ac.tz
        </a>
      </p>
    </section>
  );
}
