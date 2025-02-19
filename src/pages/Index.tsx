
import { MessageSquare, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 fade-in">
          <h1 className="hero-title mb-6">
            ATENDIMENTO{" "}
            <span className="text-[#0095ff]">HUMANIZADO</span> E{" "}
            <span className="text-[#0095ff]">INTELIGENTE</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Use o seu agente exclusivo 24 horas atendendo de maneira humanizada respondendo em seu idioma toda complexidade da sua empresa!
          </p>
          <button className="primary-button">
            SAIBA MAIS
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src="/lovable-uploads/e54b0487-6f55-4437-8785-00c382ba9858.png"
            alt="Atendimento Humanizado"
            className="w-full h-auto rounded-lg shadow-2xl fade-in"
          />
        </div>
      </header>

      {/* Chat Experience Section */}
      <section className="bg-[#0095ff] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-8 fade-in">
            Tenha uma experiência com a Julia
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-lg fade-in">
            <div className="flex items-start gap-4 text-gray-700">
              <MessageSquare className="w-6 h-6 text-[#0095ff]" />
              <input
                type="text"
                placeholder="Como posso te ajudar hoje?"
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0095ff]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossos Principais Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Chevrolet", "Medpas", "Bamuba", "Diesel", "Webmotors", "Fcc"].map((client) => (
              <div key={client} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="h-20 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Startup",
                price: "R$449,00",
                features: ["500 interações/mês", "Suporte 24/7", "API WhatsApp"]
              },
              {
                name: "Premium",
                price: "R$899,00",
                features: ["1000 interações/mês", "Suporte prioritário", "API personalizada"]
              },
              {
                name: "Master",
                price: "R$1299,00",
                features: ["Interações ilimitadas", "Suporte VIP", "API dedicada"]
              }
            ].map((plan) => (
              <div key={plan.name} className="price-card fade-in">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-[#0095ff] mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#0095ff]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="primary-button w-full">
                  ASSINAR
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Agent Section */}
      <section className="bg-[#0095ff] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 fade-in">Agente Integrado</h2>
          <p className="max-w-2xl mx-auto text-lg mb-12">
            Crie seu agente e integre-o por meio do programa no WhatsApp, Instagram ou site com do seu próprio skype, apenas instale o aplicativo e comece a atender!
          </p>
          <div className="max-w-sm mx-auto aspect-[9/16] bg-black rounded-3xl shadow-2xl fade-in">
            {/* Placeholder for phone/video content */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
