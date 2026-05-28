export default function Home() {
  const produtos = [
    {
      nome: "Banheira de Imersão Mavie",
      preco: "R$ 3.990",
      imagem: "/mav.jpg",
    },
    {
      nome: "Banheira Cristal Dupla",
      preco: "R$ 3.990",
      imagem: "/cri.jpg",
    },
    {
      nome: "Eco Spa 5 Lugares",
      preco: "R$ 4.990",
      imagem: "/eco.jpg",
    },
    {
      nome: "Floratta 6 Lugares",
      preco: "R$ 6.990",
      imagem: "/floratta.jpg",
    },
    {
      nome: "Kanthocril 2",
      preco: "R$ 2.990",
      imagem: "/kanto.jpg",
    },
    {
      nome: "Vitoriacril 1.50",
      preco: "R$ 4.290",
      imagem: "/vi.jpg",
    },
    {
      nome: "Heatiro 1.41 Duplo",
      preco: "R$ 3.990",
      imagem: "/tiro.jpg",
    },
    {
      nome: "Motor Lepono",
      preco: "R$ 499",
      imagem: "/moto.jpg",
    },
    {
      nome: "Trocador de Calor Inverter via Wi-Fi",
      preco: "R$ 6.900",
      imagem: "/trocar.jpg",
    },
  ];

  return (
    <main className="bg-[#F7F5F2] text-slate-900 min-h-screen">

      {/* NAVBAR */}

      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-bold tracking-tight">
            CasaUp
          </h1>

          <nav className="hidden md:flex gap-8 text-lg font-medium">

            <a href="#inicio" className="hover:text-slate-500 transition">
              Início
            </a>

            <a href="#sobre" className="hover:text-slate-500 transition">
              Sobre
            </a>

            <a href="#produtos" className="hover:text-slate-500 transition">
              Produtos
            </a>

            <a href="#contato" className="hover:text-slate-500 transition">
              Contato
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section
        id="inicio"
        className="pt-48 pb-32 px-6 text-center"
      >

        {/* LOGO */}

        <img
          src="/logo.png"
          alt="CasaUp"
          className="mx-auto w-80 mb-12"
        />

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">

          Banheiras
          <br />
          & Spas Premium

        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-10 leading-relaxed">

          Conforto, sofisticação e tecnologia premium para transformar
          seu ambiente durante o verão e o inverno.

        </p>

        <a
          href="https://wa.me/5561999448193"
          target="_blank"
          className="inline-block mt-10 bg-slate-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-700 transition"
        >
          Falar no WhatsApp
        </a>

      </section>

      {/* SOBRE */}

      <section
        id="sobre"
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >

        <h2 className="text-5xl font-bold mb-12">
          Sobre a CasaUp
        </h2>

        <p className="text-xl leading-relaxed text-slate-600">

          Somos uma empresa amigável e familiar.
          Prezamos pela felicidade dos nossos clientes
          e estamos aqui para ajudar no seu conforto
          durante o verão e o inverno.

          <br />
          <br />

          Estamos localizados no centro de Taguatinga
          e temos uma variedade de opções adicionais
          disponíveis pelo WhatsApp.

        </p>

      </section>

      {/* PRODUTOS */}

      <section
        id="produtos"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <h2 className="text-5xl font-bold text-center mb-20">
          Produtos Premium
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {produtos.map((produto, index) => (

            <div
              key={index}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {produto.nome}
                </h3>

                <p className="text-3xl font-bold">
                  {produto.preco}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CONTATO */}

      <section
        id="contato"
        className="bg-slate-900 text-white py-32 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-12">
            Contato & Localização
          </h2>
<p className="text-xl text-slate-300 leading-relaxed">

  Lote 17, CEP 72010100
  <br />
  C 10, Loja 03
  <br />
  Centro de Taguatinga

</p>

<p className="mt-6 text-lg text-slate-400">
  Digite no Maps:
  <span className="font-bold text-white">
    {" "}CasaUp Taguatinga
  </span>
</p>
          

          <a
            href="https://wa.me/5561999448193"
            target="_blank"
            className="inline-block mt-10 bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-200 transition"
          >
            WhatsApp: (61) 99944-8193
          </a>

          <div className="mt-16 rounded-[30px] overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=Taguatinga&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0 w-full"
            ></iframe>

          </div>

        </div>

      </section>

    </main>
  );
}
