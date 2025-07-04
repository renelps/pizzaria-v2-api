# 🍕 Pizzaria API

API desenvolvida para gerenciamento de uma pizzaria, com autenticação de usuários, cadastro de categorias e produtos, controle completo de pedidos e envio de imagens.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL** (banco de dados principal)
- **Multer** (upload de imagens)
- **JWT** (autenticação)
- **bcryptjs** (criptografia de senhas)

---

## 📦 Funcionalidades

- ✅ Cadastro e login de usuários
- ✅ Criação e listagem de categorias
- ✅ Cadastro e listagem de produtos (com imagem)
- ✅ Criação e gerenciamento de pedidos
- ✅ Adição e remoção de itens no pedido
- ✅ Envio e finalização do pedido
- ✅ Visualização de pedidos em andamento e detalhes

---

## 🧑‍💻 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/pizzaria-api.git

# Acesse o diretório
cd pizzaria-api

# Instale as dependências
npm install

# Configure o arquivo .env com sua URL do banco PostgreSQL
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

# Rode as migrations do Prisma
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

---

## 🔒 Autenticação

A API utiliza autenticação via **JWT**. Para acessar rotas protegidas, envie o token no cabeçalho:

```http
Authorization: Bearer seu_token
```

---

## 🖼️ Upload de imagem

Para cadastrar um produto com imagem:

- Utilize `multipart/form-data`
- Envie:
  - Campo `file`: imagem do produto (.jpg, .png, etc.)
  - Campos adicionais: `name`, `price`, `category_id`

---

## 🧪 Testes com Insomnia/Postman

Use o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar as rotas HTTP da API com headers, autenticação e corpo de requisições.

---

## 📁 Estrutura de pastas

```bash
src/
├── config/               # Configurações (ex: multer)
├── controllers/          # Controllers divididos por domínio
│   ├── category/
│   ├── order/
│   ├── product/
│   └── user/
├── services/             # Lógica de negócio (services)
├── routes.ts             # Rotas da aplicação
├── server.ts             # Entrada do servidor
prisma/
└── schema.prisma         # Esquema do banco de dados
```

---

## 🛠️ Comandos úteis

```bash
# Criar nova migration
npx prisma migrate dev --name nome_migration

# Visualizar modelo do banco
npx prisma studio
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
