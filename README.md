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

## 🌐 Acesso à Aplicação
Após a execução bem-sucedida do projeto, acesse a aplicação no seu navegador preferido através do seguinte endereço: http://localhost:3000

## 📝 Endpoints
| Método | Rota         | Descrição          | curl                                       |
|--------|--------------|--------------------|------------------------------------------- |
| POST   | /recipes     | Cria nova receita  |                                            |
| GET    | /recipes     | Lista todas        | curl http://localhost:3000/recipes | jq    |
| GET    | /recipes/:id | Busca por ID       | curl http://localhost:3000/recipes/id | jq |

## 📹 Vídeo Demonstrativo

https://www.youtube.com/watch?v=31oeSjbWaDE
