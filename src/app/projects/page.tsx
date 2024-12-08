import { projects } from './../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#13131f] py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Meus Projetos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#102E4A]">{project.title}</h3>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-[#715AFF] hover:text-[#5887FF]">Ver no GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
