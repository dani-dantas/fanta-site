# 🟠 Fanta Animated Landing Page

Este projeto é uma **landing page animada** inspirada em campanhas de refrigerantes, com foco em design chamativo, animações fluidas e experiência visual imersiva.  
Utilizando **GSAP + ScrollTrigger**, o site cria movimentos dinâmicos conforme o usuário rola a página, trazendo uma sensação de vida e profundidade aos elementos.

---

## 🎯 Objetivo do Projeto

Criar uma interface moderna e visualmente impactante que demonstre:

- domínio de **HTML, CSS e JavaScript**
- habilidade com **animações avançadas (GSAP)**
- criação de **layouts responsivos**
- manipulação de elementos via **timeline de scroll**

O projeto funciona como uma vitrine de habilidades front-end e de criatividade na composição visual.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura da página  
- **CSS3** – Estilização, layout e responsividade  
- **JavaScript (ES6)** – Lógica das animações  
- **GSAP (GreenSock Animation Platform)**  
- **GSAP ScrollTrigger** – Para animações baseadas na rolagem  
- **Product Sans** – Tipografia personalizada  
- Imagens e ilustrações (Fanta, Coca-Cola, Pepsi, folhas, frutas etc.)

---

## 🧩 Funcionalidades

### ✨ Hero Animado  
A primeira dobra apresenta:

- Logo “FANTA” gigante em `vw`
- Laranjas e folhas com posições absolutas
- Animação de deslocamento e rotação via GSAP

### ✨ Seção 2 – Conteúdo com Blob SVG  
- SVG decorativo animado  
- Texto explicativo com visual limpo  
- Transições suaves ao rolar a página  

### ✨ Seção 3 – Cards interativos  
Três cards:

- **Coca-Cola**
- **Fanta**
- **Pepsi**

Todos animados com entrada dinâmica dos elementos (latas e limões).

---

## 💫 Animações

As animações são controladas por duas timelines principais:

### ✔ `timeline`  
Ativada ao chegar na segunda seção, animando:

- garrafa de Fanta  
- laranja cortada  
- laranja inteira  
- folhas decorativas  

### ✔ `timeline2`  
Ativada ao chegar na terceira seção:

- limões girando e deslizando  
- latas de Coca e Pepsi entrando  
- elementos da Fanta ajustando posição e tamanho  
- animações com *scrub*, seguindo o scroll

---

## 🖥️ Layout Responsivo

O projeto cobre:

- Desktop (100vh fixos por seção)
- Ajustes de imagem e posições absolutas
- Uso de unidades relativas (`vw`, `%`)

A página é otimizada para telas grandes com foco visual.
