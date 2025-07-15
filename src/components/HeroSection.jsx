export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-white flex flex-col md:flex-row items-center justify-center p-8">
      <div className="text-4xl px-4  md:text-6xl font-extrabold text-left md:w-1/2 space-y-4 font-serif">
        <div>Tanzanite</div>
        <div>Skills</div>
        <div>Academy</div>
      </div>
      <div className="text-lg md:text-2xl md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <p className="italic font-light">"Jifunze leo, Badilisha kesho yako"</p>
      </div>
    </section>
  );
}
