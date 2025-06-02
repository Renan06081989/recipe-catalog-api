# Recipe Catalog API

API de catálogo de receitas em NestJS com Clean Architecture

## 🚀 Funcionalidades
- Criar/listar/buscar receitas
- Repositório em memória

## 💻 Tecnologias
- Node.js
- NestJS
- TypeScript

## ⚙️ Instalação
```bash
npm install
npm run start:dev
```

## 📝 Endpoints
| Método | Rota         | Descrição          |
|--------|--------------|--------------------|
| POST   | /recipes     | Cria nova receita  |
| GET    | /recipes     | Lista todas        |
| GET    | /recipes/:id | Busca por ID       |