export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo-hanami-glamour.jpeg" alt="Hanami Glamour" />
            <div>
              <h1>Hanami Glamour</h1>
              <p>Cosméticos e acessórios femininos e infantis</p>
            </div>
          </div>
          <a className="btn" href="https://wa.me/5511954238243" target="_blank" rel="noreferrer">
            Atendimento no WhatsApp
          </a>
        </div>
      </header>

      <section className="section">
        <div className="container hero">
          <div className="hero-copy">
            <span className="badge">Visual delicado inspirado no seu logo</span>
            <h2>Catálogo fácil, atendimento rápido e pedidos pelo WhatsApp</h2>
            <p>
              Loja online da Hanami Glamour com foco em cosméticos, acessórios, promoções,
              brindes e atendimento simples para suas clientes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
              <a className="btn" href="#catalogo">Ver catálogo</a>
              <a className="btn secondary" href="https://wa.me/5511954238243" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img src="/logo-hanami-glamour.jpeg" alt="Hanami Glamour" />
          </div>
        </div>
      </section>

      <section className="section" id="catalogo">
        <div className="container">
          <div className="cards">
            <div className="card"><h3>Cosméticos Adultos</h3><p>Maquiagem, cuidados com a pele, perfumes e kits.</p></div>
            <div className="card"><h3>Cosméticos Infantis</h3><p>Itens delicados, coloridos e pensados para o público infantil.</p></div>
            <div className="card"><h3>Acessórios Femininos</h3><p>Bolsas, brincos, presilhas, necessaires e muito mais.</p></div>
            <div className="card"><h3>Acessórios Infantis</h3><p>Laços, tiaras, presilhas e kits para meninas.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container catalog-grid">
          <div className="card catalog-card">
            <h4>Setor 1</h4>
            <ul>
              <li>Produto 1</li>
              <li>Produto 2</li>
              <li>Produto 3</li>
            </ul>
          </div>
          <div className="card catalog-card">
            <h4>Setor 2</h4>
            <ul>
              <li>Produto 1</li>
              <li>Produto 2</li>
              <li>Produto 3</li>
            </ul>
          </div>
          <div className="card catalog-card">
            <h4>Promoções e brindes</h4>
            <ul>
              <li>Promoção da semana</li>
              <li>Brinde especial</li>
              <li>Flores de cerejeira para fidelidade</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="footer-card">
            <h3 style={{ margin: 0 }}>Hanami Glamour</h3>
            <p>Rua Mogi das Cruzes – Gopoúva</p>
            <p>Horário: 08:00 às 18:00</p>
            <p className="small">Dúvidas? Chame no WhatsApp: (11) 95423-8243</p>
          </div>
        </div>
      </section>
    </main>
  );
}
