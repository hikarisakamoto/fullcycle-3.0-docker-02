# Desafio 02 - nginx - node

Projeto do desafio Full Cycle para usar nginx como proxy reverso para uma aplicacao Node.js que grava nomes no MySQL e retorna HTML.

## Instrucoes do desafio

> Nesse desafio voce colocar em pratica o que aprendemos em relacao a utilizacao do nginx como proxy reverso. A ideia principal e que quando um usuario acesse o nginx, o mesmo fara uma chamada em nossa aplicacao node.js. Essa aplicacao por sua vez adicionara um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
>
> O retorno da aplicacao node.js para o nginx devera ser:
>
> <h1>Full Cycle Rocks!</h1>
>
> - Lista de nomes cadastrada no banco de dados.
>
> Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo devera estar funcionando e disponivel na porta: 8080.
>
> Nao esqueca de colocar o volume na aplicacao para o ambiente de desenvolvimento.
>
> Suba tudo em um repositorio e faca a entrega.
>
> * A linguagem de programacao para este desafio e Node/JavaScript.

## Como usar

Pre-requisitos:
- Docker Desktop (ou Docker Engine) com Docker Compose.

Subir o ambiente:
```bash
docker-compose up -d --build
```

Acessar a aplicacao:
- Abra `http://localhost:8080`.
- O nginx encaminha a chamada para o Node, que grava um nome no MySQL e devolve o HTML com a lista de nomes.

Parar o ambiente:
```bash
docker-compose down
```

Limpar os dados do banco (opcional):
```bash
docker-compose down -v
```

## Estrutura

- `docker-compose.yml` - Orquestracao dos servicos (nginx, node, mysql).
- `nginx/` - Configuracao do proxy reverso.
- `node/` - Aplicacao Node.js.
- `mysql/` - Volume persistente do banco (criado em runtime).

## Dicas

- Se alterar arquivos de `node/` ou `nginx/`, rode `docker-compose up -d --build` para reconstruir as imagens.
