import { recommendations } from './../data/recommendations';

export default function Recommendations() {
  return (
    <section id="recommendations" className="bg-[#13131f] py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#102E4A]">Recomendações</h2>
        <div className="mt-8">
          {recommendations.map((recommendation) => (
            <div key={recommendation.name} className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <img src={recommendation.photo} alt={recommendation.name} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-[#102E4A] mt-4">{recommendation.name}</h3>
              <p className="text-gray-700">{recommendation.position} at {recommendation.company}</p>
              <p className="mt-4 text-gray-600">{recommendation.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
