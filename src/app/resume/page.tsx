export default function Resume() {
  return (
    <section id="resume" className="bg-[#13131f] py-16 text-white text-center">
      <h2 className="text-4xl font-bold">Currículo</h2>
      <div className="mt-8 flex justify-center gap-4">
        {/* Botão PT-BR */}
        <a
          href="/pdfs/CV-Gabriel-Lamas-PT-BR.pdf"
          className="border-2 border-[#9e1ae4] text-[#9e1ae4] py-2 px-6 rounded-full hover:bg-[#9e1ae4] hover:text-white transition"
          download
        >
          Baixar Currículo (PT-BR)
        </a>
        {/* Botão EN-US */}
        <a
          href="/pdfs/CV-Gabriel-Lamas-EN-US.pdf"
          className="border-2 border-[#9e1ae4] text-[#9e1ae4] py-2 px-6 rounded-full hover:bg-[#9e1ae4] hover:text-white transition"
          download
        >
          Download Resume (EN-US)
        </a>
      </div>
    </section>
  );
}
