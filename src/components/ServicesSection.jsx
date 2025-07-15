import ImageSlider from "./ImageSlider";

export default function ServicesSection() {
  return (
    <section className="p-8 bg-gray-100 w-full flex flex-col md:flex-row gap-6 items-start">
      <div className="md:w-1/2 w-full">
        <ImageSlider />
      </div>
      <div className="md:w-1/2 w-full space-y-4">
        <h2 className="text-2xl font-bold text-indigo-700">Huduma Zetu</h2>
        <ul className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Maendeleo binafsi</li>
          <li>Usimamizi wa Fedha binafsi</li>
          <li>Maendeleo ya kitaaluma</li>
          <li>Maendeleo ya biashara</li>
          <li>Maendeleo ya teknolojia</li>
        </ul>
        <div className="pt-6">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Anza Masomo
          </button>
        </div>
      </div>
    </section>
  );
}