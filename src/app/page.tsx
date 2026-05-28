export default function EmpresaSite() {
  const produtos = [
    {
      nome: 'Banheira de Imersão Mavie 1.65',
      preco: 'R$ 3.990',
      descricao: 'Banheira moderna e confortável para relaxamento completo.',
      imagem: '/mavies.jpg'
    },
    {
      nome: 'Banheira Cristal Dupla',
      preco: 'R$ 3.990',
      descricao: 'Modelo sofisticado para duas pessoas.',
      imagem:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Eco Spa 5 Lugares',
      preco: 'R$ 4.990',
      descricao: 'Spa confortável ideal para famílias e áreas externas. Temos uma variedade de cores disponíveis.',
      imagem: '/ecospas.jpg'
    },
    {
      nome: 'Motor Lepono',
      preco: 'R$ 499',
      descricao: 'Motor eficiente e silencioso para banheiras e spas.',
      imagem: '/motores.jpg'
    },
    {
      nome: 'Trocador de Calor Inverter Wi-Fi Home',
      preco: 'R$ 6.900',
      descricao: 'Sistema inteligente de aquecimento com Wi-Fi.',
      imagem: '/trocadores.jpg'
    },
    {
      nome: 'Floratta (6 Lugares)',
      preco: 'R$ 6.990',
      descricao: 'Spa premium espaçoso para até 6 pessoas.',
      imagem: '/florrata.jpg'
    },
    {
      nome: 'Kanthocril 2',
      preco: 'R$ 2.990',
      descricao: 'Banheira compacta e elegante.',
      imagem: '/kanthokril.jpg'
    },
    {
      nome: 'Vitoriacril 1.50',
      preco: 'R$ 4.290',
      descricao: 'Modelo refinado com excelente acabamento.',
      imagem: '/vitoriacril.jpg'
    },
    {
      nome: 'Heatiro 1.41 Duplo',
      preco: 'R$ 3.990',
      descricao: 'Banheira dupla confortável e moderna.',
      imagem: '/heatiro.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
  CasaUp DF
</h1>
<p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
  Banheiras, spas e conforto premium para transformar seu ambiente.
</p>
          <img
  src="/logo.png"
  alt="CasaUp DF"
  className="mx-auto w-96 mb-8"
/>
          <nav className="flex gap-6 text-sm md:text-base flex-wrap">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#loja">Produtos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
       className="bg-[#F8F6F2] text-slate-900 py-32 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="CasaUp DF"
            className="mx-auto w-72 mb-6 drop-shadow-2xl"
          />

        <h1 className="text-7xl font-bold tracking-tight text-slate-900 leading-tight">
  <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none text-slate-900">
  Banheiras
  <br />
  & Spas Premium
</h1>
</h1>

<p className="text-xl text-slate-600 mt-6 max-w-2xl leading-relaxed">
  Sofisticação, conforto e tecnologia para transformar seu ambiente.
</p>  

          <p className="text-xl opacity-90">
            Sofisticação, conforto e tecnologia para seu ambiente.
          </p>
        </div>
      </section>

      <section id="sobre" className="py-32 px-6 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Sobre a CasaUp DF</h3>

          <p className="text-lg text-gray-600">
            Trabalhamos com banheiras, spas e acessórios premium para transformar
            seu espaço em um ambiente sofisticado e relaxante.
          </p>
        </div>
      </section>

      <section id="loja" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            Nossos Produtos
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {produtos.map((produto, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className={`w-full h-56 object-cover ${produto.imagem === '/trocadores.jpg' ? 'relative top-2' : ''}`}
                />

                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">
                    {produto.nome}
                  </h4>

                  <p className="text-4xl font-bold text-blue-600 mb-4">
                    {produto.preco}
                  </p>

                  <p className="text-gray-600 mb-6">
                    {produto.descricao}
                  </p>

                  <a
                    href="https://wa.me/5561999448193"
                    target="_blank"
                    className="block text-center bg-green-500 text-white py-3 rounded-2xl hover:bg-green-600 transition"
                  >
                    Comprar no WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Contato</h3>

          <p className="text-lg mb-4">
            WhatsApp Business: (61) 99944-8193
          </p>

          <a
            href="https://instagram.com/casaupdf"
            target="_blank"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Instagram @casaupdf
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Nossa Loja</h3>

          <p className="text-lg text-gray-700 mb-8">
            C 10 Loja 03 — Lote 17 — CEP 72010-100
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="Mapa CasaUp"
              src="https://www.google.com/maps?q=C%2010%20Loja%2003%20Lote%2017%20CEP%2072010100&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5561999448193"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl"
      >
        WhatsApp
      </a>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 CasaUp DF. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}