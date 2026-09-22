# Calha Pro Design

Atue como um Web Designer Sênior e Especialista em Conversão (CRO).

Seu objetivo é criar a estrutura, o design system (em CSS/Tailwind) e o copywriting completo para um site institucional e de portfólio focado na venda e instalação de calhas e telhados. O principal objetivo da página é a conversão de visitantes para o WhatsApp, além de transmitir forte credibilidade profissional.

Baseie-se nas seguintes diretrizes de estilo e arquitetura de informação:

1. Identidade Visual e Estilo:

Cores Principais: Utilize um fundo escuro (preto ou azul noturno) com forte contraste em botões de ação usando cores vibrantes como vermelho ou laranja.

Tipografia: Fontes modernas, sem serifa, fáceis de ler e que transmitam solidez.

Botão Flutuante: Adicione um botão do WhatsApp flutuante, visível em todas as telas, posicionado no canto inferior esquerdo.

2. Estrutura da Página (One-Page ou Landing Page longa):

Cabeçalho (Header):

Logo no lado esquerdo.

Menu de navegação simples (Início, Empresa, Serviços, Produtos, Atendimento, Contato).

Botão de destaque (CTA) vermelho/laranja "Orçamento" no lado direito.

Seção Hero (Primeira dobra):

Título (H1) de impacto: Ex: "Soluções em calhas com design moderno, proteção e durabilidade" ou "Calhas e Telhados Profissionais".

Subtítulo: Destaque a experiência (ex: "Projetos, instalação e manutenção" ou "Mais de 25 anos protegendo seu patrimônio").

Botões Duplos (CTAs): Um botão principal chamativo "Solicitar orçamento" (ou "WhatsApp Agora") e um botão secundário "Ver serviços".

Imagem/Fundo: Uma foto de alta qualidade de uma casa moderna com calhas bem acabadas.

Seção de Prova Social Rápida (Barra de métricas):

Inclua uma faixa com números que geram confiança: "Mais de 10 anos de experiência", "+1.000 projetos concluídos", "+800 clientes satisfeitos" e "Garantia de qualidade".

Seção de Serviços (Soluções):

Título: "Soluções Completas em Calhas e Telhados".

Mostre cards divididos por especialidade: Instalação de Calhas, Manutenção de Telhados, Rufos e Acabamentos, Telhados Metálicos.

Cada card deve ter uma lista de benefícios (ex: "Proteção fundamental contra umidade", "Materiais de alta durabilidade") e um botão "Orçamento" direto.

Seção de Portfólio (Projetos Realizados):

Título: "Soluções para cada tipo de projeto" ou "Resultados que você sente".

Crie um carrossel ou grade de imagens divididas por categoria: Residências, Comércios, Indústrias e Condomínios.

Seção "Como Funciona" (Passo a Passo):

Título: "Seu projeto em 4 etapas simples".

Liste o processo para tranquilizar o cliente: 1. Contato inicial, 2. Visita ou avaliação, 3. Orçamento sob medida, 4. Instalação profissional.

Seção de Depoimentos e Materiais:

Bloco "O que nossos clientes dizem", com 3 cards de depoimentos mostrando estrelas e o nome do cliente.

Ao lado ou abaixo, liste as marcas/materiais de alta qualidade utilizados (ex: Galvalume, Metform, Brasilit) para agregar valor.

Seção de Contato e Rodapé:

Título: "Solicite seu orçamento com atendimento rápido e especializado".

Lado esquerdo: Informações diretas em lista (Telefone fixo, WhatsApp, E-mail, Endereço físico e Horário de atendimento).

Lado direito: Um formulário de contato limpo (Nome, Telefone/WhatsApp, Bairro/Cidade, Mensagem) com um grande botão "Enviar pedido de orçamento".

Inclua uma área destacando os bairros e a região metropolitana atendida (ex: Água Verde, Batel, Centro, São José dos Pinhais, etc.).

3. Comportamento e Responsividade:

O site deve ser "Mobile-First", já que a maioria dos usuários que clicam para o WhatsApp vêm do celular.

Todos os botões de orçamento devem conter links parametrizados que abrem diretamente o aplicativo do WhatsApp com uma mensagem pré-pronta (ex: "Olá, vim pelo site e gostaria de um orçamento").

Entregáveis esperados:

Por favor, gere o código HTML semântico com as classes do Tailwind CSS e forneça os textos (copywriting) exatos para preencher cada uma dessas seções.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8fa13125-765d-4187-9500-02e641212a42).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Publicação no GitHub Pages

O projeto já está configurado para publicação no GitHub Pages de forma estática pré-renderizada:

### Método 1: Automático via GitHub Actions (Recomendado)

1. Vá até o seu repositório no GitHub em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. Ao fazer `push` para a branch `main`, o fluxo `.github/workflows/deploy.yml` fará o build e a publicação automaticamente.

### Método 2: Manual via terminal

Se preferir publicar manualmente para a branch `gh-pages`:

```sh
npm run deploy
```
