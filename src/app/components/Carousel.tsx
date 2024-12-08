const Carousel = ({ recommendations }: { recommendations: Array<any> }) => {
    return (
      <div className="flex overflow-x-auto space-x-4">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="card p-4 w-64">
            <img src={recommendation.image} alt={recommendation.name} className="rounded-full w-16 h-16" />
            <h3 className="text-xl font-semibold mt-4">{recommendation.name}</h3>
            <p className="text-sm text-gray-600">{recommendation.role} - {recommendation.company}</p>
            <p className="mt-4">{recommendation.text}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Carousel;
  