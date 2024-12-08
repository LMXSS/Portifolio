import { recommendations } from './../data/recommendations';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Importa os estilos do Swiper

export default function Recommendations() {
  return (
    <section id="recommendations" className="bg-[#13131f] py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#102E4A]">Recomendações</h2>
        
        {/* Carrossel */}
        <Swiper
          spaceBetween={50} // Distância entre os slides
          slidesPerView={1} // Exibe um slide por vez
          loop={true} // Habilita a rotação infinita
          autoplay={{
            delay: 2500, // Tempo entre as transições
            disableOnInteraction: false,
          }}
        >
          {recommendations.map((recommendation, index) => (
            <SwiperSlide key={index}>
              <div className="bg-transparent border-2 border-[#9e1ae4] p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                  <img
                    src={recommendation.photo}
                    alt={recommendation.name}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="text-xl font-semibold text-[#102E4A]">{recommendation.name}</h3>
                    <p className="text-sm text-gray-700">{recommendation.company} | {recommendation.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-lg italic">
                  <span className="text-[#9e1ae4]">"</span>
                  {recommendation.text}
                  <span className="text-[#9e1ae4]">"</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
