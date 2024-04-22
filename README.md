# Teste Citel - Programador Java

## Descrição

Este repositório contém a parte back-end do desafio para a vaga de programador Java na empresa Citel Software. O objetivo deste desafio é avaliar suas habilidades de desenvolvimento e sua capacidade de resolver problemas no contexto de desenvolvimento front-end utilizando a linguagem Javascript.

## Tecnologias Utilizadas

- Angular 17.3.5

## Pré-requisitos

Antes de começar, as seguintes ferramentas devem estar instaladas em sua máquina:

- Docker Desktop

## Como Rodar o Aplicativo

Antes de executar o front-end, é necessário executar o [back-end](https://github.com/JoaaoM/citel-back-end). Siga estas etapas para executar o aplicativo em sua máquina local:

1. Clone este repositório: `git clone https://github.com/JoaaoM/citel-angular`
2. Certifique-se de que o Docker Desktop está instalado e em execução em sua máquina.
3. Navegue até o diretório do projeto: `cd citel-angular`
4. Execute o comando: `docker-compose up -d` para iniciar o aplicativo em um contêiner Docker.
5. Acesse o aplicativo através do link `http://localhost:4200/upload` em seu navegador.
6. Utilize o arquivo JSON fornecido pela empresa `data.json` para fazer a importação dos dados necessários, localizado na raíz do projeto.
7. Quando terminar, execute o comando `docker-compose down` para parar o contêiner Docker.

Certifique-se de seguir essas etapas na ordem correta para garantir o funcionamento correto do aplicativo.


## Autor

João Marques Oliveira
