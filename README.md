<h1 align='center'>
    <img width='300px' height='150px' src='./src/assets/logo.svg'/>
</h1>

  <p align="center">
  <a href="#-keepalive"> Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Tecnologias"> Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Requisitos-funcionais">  Requisitos  </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Como-rodar-a-aplicação">  Como rodar  </a>&nbsp;&nbsp;
</p>

<h1 align='center'>
    <img src='./.github/shopware.png'/>
</h1>



## 🛍 Shopware Coral

**Shopware Coral** é uma aplicação ecommerce com documentação usando Storybook e também o desafio final do projeto de bolsas da Compass.uol. 

### 🎉 Deploy
O Deploy da aplicação foi feito na Vercel, e pode ser consultado através desse [link](https://shopware-front-3pxz.vercel.app/). O Back-End não foi feito o deploy ainda, então alguns componentes que necessitam da API estarão em branco.

## ✒ **Layout**
Todos os créditos do Layout são dados para o [Webkul Design](https://www.figma.com/@webkuldesign). Para mais informações sobre o Layout acesse o Storybook da aplicação.

[![Figma](https://img.shields.io/badge/acessar%20layout%20no%20figma-222222?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1154649549752855805)

## ⚙ Tecnologias

![React](https://img.shields.io/badge/React-222?style=for-the-badge&logo=react&logoColor=blue)![Typescript](https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)![StyledComponents](https://img.shields.io/badge/styled%20components-121212?style=for-the-badge&logo=styled-components&logoColor=pink)![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![Storybook](https://img.shields.io/badge/storybook-ff528c?style=for-the-badge&logo=storybook&logoColor=white)


### 📔 Bibliotecas

| lib   | desc.       |
| :---------- | :--------- |
| [Storybook](https://storybook.js.org/) | Documentação do Design System do projeto e criação de componentes | 
| [React-Router-DOM](https://v5.reactrouter.com/web/guides/quick-start) |  Navegação entre as páginas | 
| [Radix](https://www.radix-ui.com/) | Para componentes acessíveis dentro do React| 
| [Axios](https://axios-http.com/) | Para o consumo da API de produtos e CEP | 
| [SwiperJS](https://swiperjs.com/react#styles) | Componente de Carrousel e Slider | 

## 📝 Requisitos funcionais

### ✔ Requisitos

- [X] **Telas**
  - [X] Login
  - [X] SignUp -> Telefone ou Email e Senha
  - [X] Home
  - [X] Category
  - [X] Products
  - [X] Product 
  - [X] Checkout
  - [X] Cart
  - [X] Order
  - [X] User
  - [X] Wishlist
  - [X] About
  - [X] 404

- [X] **Funcionalidades**
  - [X] Conventional Commits
  - [X] Botões levando para páginas corretas  
  - [X] Storybook com todos os componentes
  - [X] Contexto de Cart
  - [X] Contexto de Usuário
  - [X] Autenticação do usuário com:
    - [X] Email e Senha
    - [X] Telefone e OTP
  - [X] Máscara nos inputs
  - [X] Páginas vazias retornando mensagens respectivas
  - [X] Funcionalidades de perfil de usuário
  - [X] Paginação
  - [X] Consumo da API
  - [X] Deploy na Vercel
  
  
## 📚 Como rodar o Storybook

```bash
# Clone o projeto
$ git clone https://github.com/pedrovinhas/shopware-ecommerce.git

# Baixe as dependências
$ npm install

# Para rodar a aplicação
$ npm run dev

# Para rodar a documentação do Storybook
$ npm run storybook
```

---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>
