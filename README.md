## O que é projeto Star Wars Search Planets?
É um projeto de `Frontend` com React Hoocks, componentes funcionais, é SPA (Single Page Application) que exibe uma tabela de planetas do universo de Star Wars onde é possível aplicar filtros a partir de formulario. 

Nesse projeto a API consumida foi `https://swapi.dev/api/planets`; para o gerencialmento de estado foi usado `Context API` e para o testes foi usado `React Testing Library`
## Quais desafios?
1. Fazer requisição para o endpoint `/planets`da API de Star Wars e preencher uma tabela com o dados retornados excluindo os dados da coluna `residents`
2. Implementar um filtro de texto para tabela, filtrando pelo nome do planeta que contem o texto inserido
3. Criar um filtro para valores numéricos
4. Implementar multiplus filtros númericos
5. Desenvolver 30% da cobertura total de testes
6. Implementar forma de impedir de aplicar filtros repetidos
7. Implementar funcionalidade de pagar um filtro no botão `X` e limpar todos os filtros em `Remover todas filtragens`
8. Desenvolver 60% da cobertura total de testes
9. Ordernar as colunas de forma ascendente e descendente
## Como iniciar?
1. Clonando o projeto `git clone https://github.com/livio-lopes/starwars-planets-search.git`
2. Acessando diretório `cd starwars-planets-search`
3. Instalando dependencias `npm install`
4. Iniciando projeto `npm start`
