# Conecta Elas - Ionic App

Este é um aplicativo desenvolvido com **Ionic React** para conectar e compartilhar postagens informativas sobre Violência contra a mulher. O projeto inclui várias funcionalidades como feed de postagens, visualização de perfis e gerenciamento de conteúdo usando uma API backend.

## 📋 Índice

- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)

## 🚀 Introdução

O **Conecta Elas** é um aplicativo mobile criado com **Ionic React** que permite aos usuários visualizar e interagir com postagens. O projeto utiliza **Axios** para se conectar a uma API local (Strapi) e recuperar os dados das postagens.

## 🛠 Tecnologias Utilizadas

- [Ionic React](https://ionicframework.com/docs/react) - Framework para desenvolvimento de aplicativos híbridos.
- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript para tipagem estática.
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar requisições à API.
- [Strapi](https://strapi.io/) - CMS Headless para gerenciamento de conteúdo.
- [Tailwind CSS](https://tailwindcss.com/) (Opcional) - Biblioteca utilitária para estilização.

## 💻 Instalação e Configuração

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/conecta-elas.git
2. **Instale as dependências:**
   ```bash
   npm install
3. **Configure o Backend (Strapi):**
Certifique-se de que o Strapi está configurado e rodando em http://localhost:1337.
Ajuste as configurações da API no arquivo src/Services/api.js se necessário.
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   ionic serve
5. **Para rodar no emulador Android:**
Certifique-se de que você tem o Android Studio configurado corretamente.
   ```bash
   ionic cap run android -l --external

## 📜 Scripts Disponíveis

- **`npm start`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria a versão de produção do aplicativo.
- **`npm run test`**: Executa os testes configurados.
- **`ionic cap sync`**: Sincroniza as mudanças feitas com Capacitor para as plataformas nativas.

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:
src/
├── assets/           # Arquivos estáticos, como imagens e ícones
├── components/       # Componentes reutilizáveis como Feed, Post, etc.
├── pages/            # Páginas principais do aplicativo (Tab1, Tab2, Tab3)
├── Services/         # Serviços para chamadas à API e configuração do Axios
├── theme/            # Arquivos de tema e variáveis CSS
├── App.tsx           # Componente raiz do aplicativo
├── index.tsx         # Ponto de entrada da aplicação
└── theme/variables.css # Arquivo de variáveis globais do tema



## 📚 Funcionalidades

- **Feed de Postagens:** Exibe uma lista de postagens recuperadas da API.
- **Visualização de Perfil:** Mostra um avatar, nome e e-mail placeholders.
- **Integração com API:** Realiza chamadas para a API usando Axios para buscar dados em tempo real.
- **Tabs de Navegação:** Usa o sistema de tabs do Ionic para navegação entre páginas.





