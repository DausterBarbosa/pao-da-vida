# 🍞 Pão da Vida - Delivery & Cardápio PWA

Progressive Web App (PWA) de delivery moderno, responsivo (focado em mobile) e totalmente funcional para o restaurante **Pão da Vida**, localizado na Praça General Tibúrcio, 594, Centro, Viçosa do Ceará.

---

## 🌟 Funcionalidades e Requisitos Atendidos

1. **Configuração PWA Instalável**:
   - `manifest.webmanifest` e `sw.js` (Service Worker) para funcionamento em modo `standalone` e suporte a offline.
   - Banner inteligente e botão "Instalar Aplicativo" para salvar na tela inicial do celular Android ou iOS.

2. **Splash Screen Institucional (2s)**:
   - Apresentação em tons vinho (`#8B0000`) e dourado (`#D4AF37`) com mensagem institucional das obras humanitárias.

3. **Identidade Visual & Header**:
   - Status de atendimento em tempo real (`🟢 Aberto`), endereço completo e detalhes da casa.

4. **Cardápio Completo & Busca Rápida**:
   - **Pratos Executivos**: Códigos oficiais (ex: `COD 831 - Filé Tornedor`), Bacalhau, Salmão, Galinha Caipira, Massas e Adicionais.
   - **Pizzas**: Sabores variados com tamanhos **Grande com Borda Recheada**, **Média sem Borda** e **Calzone**, com destaque para a *"Quarta da Pizza"*.
   - **Sanduíches & Burguers**: Pão Árabe (Padrão vs SUPER), Burguers artesanais e Linha Gourmet (Filé Mignon Cheddar, BBQ, Sertanejo, Croque Madame).
   - **Sopas & Caldos**: Disponíveis das 16h às 21:30h nos tamanhos Média e Grande.
   - **Cafés, Tapiocas, Cuscuz & Sucos**: Cafés especiais, tapiocas e cuscuz recheados, sucos naturais e detox.
   - **Busca por código ou nome**: Filtro em tempo real (ex: `831`, `Calabresa`, `Tapioca`).

5. **Modal de Produto & Carrinho Flutuante**:
   - Seleção obrigatória de tamanhos/variações.
   - Campo para informações adicionais opcionais (*"Sem cebola", "Ponto da carne"*).
   - Contador de quantidade e cálculo em tempo real.

6. **Integração WhatsApp Direct**:
   - Formulário de cadastro com Nome, WhatsApp, opção de **Entrega em Domicílio** ou **Retirada no Local**.
   - Pagamento via **PIX** ou **Dinheiro** (com cálculo de troco).
   - Envio da mensagem formatada diretamente para o WhatsApp oficial do restaurante (`558836321444`).

---

## 📱 Como Instalar no Android

O Android é a plataforma nativa perfeita para PWAs:

1. Abra o navegador **Google Chrome** no smartphone Android.
2. Acesse o link da aplicação (ex: `http://192.168.0.110:5173/` na rede local ou a URL de produção).
3. Você verá o banner **"Instalar Aplicativo"** no topo da tela. Basta clicar em **"Instalar"**.
4. Caso o banner não apareça, toque no menu de três pontos **⋮** do Chrome no canto superior direito e selecione **"Adicionar à tela de início"** ou **"Instalar aplicativo"**.
5. O aplicativo será adicionado como um app nativo na tela inicial e na gaveta de aplicativos do seu Android!

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** (Bundler ultrarrápido)
- **Tailwind CSS v4** (Design System com paleta customizada)
- **Lucide React** (Ícones modernos)
- **PWA Service Worker & Web Manifest**

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento local
npm run dev

# Executar com acesso para dispositivos na mesma rede Wi-Fi
npm run dev -- --host

# Gerar build de produção
npm run build
```
# pao-da-vida
