import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, Check, ChevronRight, CircleCheck, Clock3, Droplets, Factory, HardHat, House, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Star, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/hero-calhas.jpg";
import residencialImage from "@/assets/projeto-residencial.jpg";
import comercialImage from "@/assets/projeto-comercial.jpg";
import industrialImage from "@/assets/projeto-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Calhas e Telhados em São José dos Pinhais — Sua Empresa Aqui" },
    { name: "description", content: "Instalação, manutenção e acabamento de calhas, rufos e telhados em São José dos Pinhais. Peça seu orçamento pelo WhatsApp." },
    { property: "og:title", content: "Calhas e Telhados Profissionais — Sua Empresa Aqui" },
    { property: "og:description", content: "Proteção contra infiltrações com instalação precisa e acabamento profissional." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const whatsapp = (message: string) => `https://wa.me/5541987928174?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Droplets, title: "Instalação de calhas", text: "Escoamento planejado para proteger paredes, fundações e fachadas.", items: ["Peças sob medida", "Vedação e caimento precisos", "Acabamento discreto"] },
  { icon: Wrench, title: "Manutenção de telhados", text: "Correção de pontos vulneráveis antes que pequenos sinais virem grandes prejuízos.", items: ["Avaliação de infiltrações", "Troca de peças danificadas", "Manutenção preventiva"] },
  { icon: ShieldCheck, title: "Rufos e acabamentos", text: "Proteção reforçada nos encontros do telhado, muros, chaminés e platibandas.", items: ["Vedação contra umidade", "Dobras personalizadas", "Maior vida útil"] },
  { icon: Factory, title: "Telhados metálicos", text: "Coberturas resistentes e eficientes para projetos residenciais e comerciais.", items: ["Estrutura de alta durabilidade", "Instalação técnica", "Solução sob medida"] },
];

const projects = [
  { image: residencialImage, category: "Residências", title: "Proteção que valoriza a fachada" },
  { image: comercialImage, category: "Comércios", title: "Eficiência sem interromper a rotina" },
  { image: industrialImage, category: "Indústrias", title: "Cobertura preparada para grandes áreas" },
  { image: heroImage, category: "Condomínios", title: "Padronização e acabamento preciso" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  function submitBudget(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, vim pelo site e gostaria de um orçamento.\n\nNome: ${data.get("nome")}\nWhatsApp: ${data.get("telefone")}\nBairro/Cidade: ${data.get("local")}\nServiço: ${data.get("mensagem")}`;
    window.open(whatsapp(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="section-shell flex h-18 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Sua Empresa Aqui — início">
            <span className="grid size-10 place-items-center rounded-sm bg-primary"><House className="size-5 text-primary-foreground" /></span>
            <span className="font-display text-sm font-bold leading-tight sm:text-base">SUA EMPRESA<br/><span className="text-primary">AQUI</span></span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {[['Início','inicio'],['Empresa','empresa'],['Serviços','servicos'],['Projetos','projetos'],['Atendimento','atendimento'],['Contato','contato']].map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden h-11 bg-primary px-5 font-bold text-primary-foreground hover:bg-brand-red-hover sm:inline-flex"><a href={whatsapp("Olá, vim pelo site e gostaria de solicitar um orçamento.")} target="_blank" rel="noreferrer"><MessageCircle /> Orçamento</a></Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Navegação móvel">{[['Início','inicio'],['Empresa','empresa'],['Serviços','servicos'],['Projetos','projetos'],['Atendimento','atendimento'],['Contato','contato']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-semibold">{label}</a>)}</nav>}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[92svh] overflow-hidden pt-18">
          <img src={heroImage} alt="Casa moderna com calhas metálicas instaladas" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
          <div className="hero-shade absolute inset-0" />
          <div className="section-shell relative flex min-h-[calc(92svh-4.5rem)] items-end pb-12 pt-32 md:items-center md:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-xs font-bold uppercase text-metal">Calhas, rufos e coberturas</div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-7xl">Proteção que começa <span className="text-primary">no telhado.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-metal sm:text-lg">Projetos, instalação e manutenção com acabamento preciso para proteger seu patrimônio da chuva, umidade e infiltrações.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 bg-primary px-6 text-base font-bold text-primary-foreground hover:bg-brand-red-hover"><a href={whatsapp("Olá, vim pelo site e gostaria de solicitar um orçamento para calhas ou telhado.")} target="_blank" rel="noreferrer"><MessageCircle /> Solicitar orçamento</a></Button>
                <Button asChild size="lg" variant="outline" className="h-13 border-metal/40 bg-background/20 px-6 text-base font-bold text-foreground backdrop-blur-sm hover:bg-secondary"><a href="#servicos">Ver serviços <ArrowRight /></a></Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-metal"><span className="flex items-center gap-2"><CircleCheck className="size-4 text-primary" /> Avaliação cuidadosa</span><span className="flex items-center gap-2"><CircleCheck className="size-4 text-primary" /> Solução sob medida</span></div>
            </div>
          </div>
        </section>

        <section id="empresa" className="border-y border-border bg-surface">
          <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[['Atendimento','direto e ágil'],['Soluções','sob medida'],['Instalação','profissional'],['Compromisso','com a qualidade']].map(([strong,small]) => <div key={strong} className="px-4 py-7 text-center md:py-9"><strong className="font-display text-lg text-foreground md:text-xl">{strong}</strong><span className="mt-1 block text-xs text-muted-foreground md:text-sm">{small}</span></div>)}
          </div>
        </section>

        <section id="servicos" className="py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="O que fazemos" title="Soluções completas em calhas e telhados" text="Da avaliação ao acabamento final, cada detalhe é pensado para conduzir a água corretamente e preservar seu imóvel." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
              {services.map((service) => <article key={service.title} className="group bg-surface p-7 transition-colors hover:bg-surface-raised md:p-9">
                <service.icon className="size-9 text-primary" strokeWidth={1.7} />
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{service.text}</p>
                <ul className="mt-6 space-y-3">{service.items.map(item => <li key={item} className="flex items-center gap-3 text-sm"><Check className="size-4 text-primary" />{item}</li>)}</ul>
                <Button asChild variant="link" className="mt-6 h-auto p-0 font-bold"><a href={whatsapp(`Olá, vim pelo site e quero um orçamento para ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Pedir orçamento <ChevronRight /></a></Button>
              </article>)}
            </div>
          </div>
        </section>

        <section id="projetos" className="bg-surface py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Portfólio" title="Soluções para cada tipo de projeto" text="Estruturas diferentes exigem decisões precisas. Veja as aplicações que orientam nosso padrão de execução." />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => <figure key={project.category} className={`group relative min-h-80 overflow-hidden rounded-sm ${index === 0 ? 'md:row-span-2 md:min-h-[42rem]' : ''}`}>
                <img src={project.image} alt={`${project.category}: ${project.title}`} width={index === 0 ? 1200 : 1200} height={index === 0 ? 912 : 912} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8"><span className="text-xs font-bold uppercase text-primary">{project.category}</span><h3 className="mt-2 text-xl font-bold md:text-2xl">{project.title}</h3></figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <section id="atendimento" className="py-20 md:py-28"><div className="section-shell">
          <SectionHeading eyebrow="Processo transparente" title="Seu projeto em 4 etapas simples" text="Você entende cada fase e recebe uma solução compatível com a necessidade real do imóvel." />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">{[
            ['01','Contato inicial','Conte o que precisa e envie fotos pelo WhatsApp.'],['02','Avaliação','Analisamos o local e os pontos que exigem atenção.'],['03','Orçamento sob medida','Você recebe uma proposta clara para decidir com segurança.'],['04','Instalação profissional','Executamos o serviço com cuidado e conferência final.']
          ].map(([number,title,text]) => <li key={number} className="relative border-t border-border pt-6"><span className="font-display text-4xl font-extrabold text-primary">{number}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}</ol>
        </div></section>

        <section className="border-y border-border bg-surface py-20 md:py-28"><div className="section-shell grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div><SectionHeading eyebrow="Confiança" title="O que nossos clientes dizem" text="Espaço preparado para receber avaliações reais após a publicação do site." />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{[
              ['“Atendimento rápido e serviço muito bem acabado.”','Cliente residencial'],['“Explicaram a solução com clareza e cumpriram o combinado.”','Cliente comercial'],['“A calha ficou discreta e resolveu o problema da chuva.”','Cliente local']
            ].map(([quote,name]) => <blockquote key={name} className="rounded-sm border border-border bg-background p-6"><div className="flex gap-1 text-primary" aria-label="5 estrelas">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div><p className="mt-5 text-sm leading-relaxed">{quote}</p><footer className="mt-5 text-xs font-bold uppercase text-muted-foreground">{name} · Depoimento ilustrativo</footer></blockquote>)}</div>
          </div>
          <div><span className="text-xs font-bold uppercase text-primary">Materiais e aplicações</span><h2 className="mt-3 text-2xl font-bold">Qualidade escolhida para cada necessidade</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Selecionamos a especificação adequada conforme exposição, medida e tipo de cobertura.</p><ul className="mt-8 divide-y divide-border border-y border-border">{['Aço galvanizado','Galvalume','Telhas metálicas','Fibrocimento'].map(item => <li key={item} className="flex items-center justify-between py-4 font-semibold"><span>{item}</span><CircleCheck className="size-5 text-primary" /></li>)}</ul></div>
        </div></section>

        <section id="contato" className="py-20 md:py-28"><div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><span className="text-xs font-bold uppercase text-primary">Fale conosco</span><h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">Solicite seu orçamento com atendimento rápido e especializado.</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Envie os detalhes do seu projeto. Quanto mais informações, mais preciso será o primeiro atendimento.</p>
              <div className="mt-9 space-y-5 text-sm"><a href={whatsapp("Olá, vim pelo site e gostaria de conversar sobre um orçamento.")} target="_blank" rel="noreferrer" className="flex items-center gap-4 font-semibold hover:text-primary"><span className="grid size-10 place-items-center rounded-sm bg-secondary"><Phone className="size-5 text-primary" /></span>(41) 98792-8174</a><p className="flex items-center gap-4"><span className="grid size-10 place-items-center rounded-sm bg-secondary"><MapPin className="size-5 text-primary" /></span>São José dos Pinhais — PR</p><p className="flex items-center gap-4"><span className="grid size-10 place-items-center rounded-sm bg-secondary"><HardHat className="size-5 text-primary" /></span>Dionathan Boing — Desenvolvedor</p></div>
              <div className="mt-10 border-l-2 border-primary pl-5"><h3 className="font-bold">Região atendida</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Atendimento em São José dos Pinhais. Consulte a disponibilidade para o seu bairro diretamente pelo WhatsApp.</p></div>
            </div>
            <form onSubmit={submitBudget} className="rounded-sm border border-border bg-surface p-6 md:p-8"><h3 className="text-xl font-bold">Conte sobre seu projeto</h3><p className="mt-2 text-sm text-muted-foreground">Os dados serão enviados diretamente para o WhatsApp.</p><div className="mt-7 space-y-5"><label className="block text-sm font-semibold">Nome<Input required name="nome" placeholder="Como podemos chamar você?" className="mt-2 h-12 bg-background" /></label><label className="block text-sm font-semibold">Telefone / WhatsApp<Input required name="telefone" type="tel" placeholder="(41) 99999-9999" className="mt-2 h-12 bg-background" /></label><label className="block text-sm font-semibold">Bairro / Cidade<Input required name="local" placeholder="Onde será o serviço?" className="mt-2 h-12 bg-background" /></label><label className="block text-sm font-semibold">Mensagem<Textarea required name="mensagem" placeholder="Descreva o serviço que você precisa" className="mt-2 min-h-28 bg-background" /></label><Button type="submit" className="h-13 w-full bg-primary text-base font-bold text-primary-foreground hover:bg-brand-red-hover"><MessageCircle /> Enviar pedido de orçamento</Button></div></form>
          </div>
        </div></section>
      </main>

      <footer className="border-t border-border bg-surface py-10"><div className="section-shell flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-sm bg-primary"><House className="size-4 text-primary-foreground" /></span><strong className="font-display text-foreground">SUA EMPRESA AQUI</strong></div><p>Calhas e telhados em São José dos Pinhais.</p><p>© 2026. Todos os direitos reservados.</p></div></footer>

      <a href={whatsapp("Olá, vim pelo site e gostaria de solicitar um orçamento.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><MessageCircle className="size-7" /></a>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-2xl"><span className="text-xs font-bold uppercase text-primary">{eyebrow}</span><h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></div>;
}
