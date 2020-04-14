# Chameleon
Framework CSS de interface para os projetos da Nexaas

## Tabela de conteúdo

- [Introdução](#introdução)
- [Dependências](#dependências)
- [Instalação](#instalação)
- [Usando Chameleon](#usando-chameleon)
- [Complementos](#complementos)
- [Rodando a aplicação localmente](#rodando-a-aplicação-localmente)

## Introdução

Chameleon é um framework para interface web projetado com o objetivo de padronizar e aperfeiçoar a experiência visual dos produtos Nexaas.

## Dependências

- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/getting-started/installing-node)

## Instalação

Em seu terminal rode `npm install @nexaas/chameleon` ou `yarn add @nexaas/chameleon`

## Usando Chameleon

### Inserindo no projeto

Após a instalação, o Chameleon deverá ser incluído no projeto, essa inclusão pode ocorrer de diversas maneiras. Segue abaixo alguns dos métodos:

- Dentro da tag `head`

```html
  <head>
    <link
      href="chameleon.min.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
```

- Com módulos ES6 `import "@nexaas/chameleon"`

- Com commonjs `require("@nexaas/chameleon")`

### Sobre variáveis CSS

Algumas variáveis CSS estão presentes no bundle do projeto, entretanto a alteração desses valores NÃO é recomendada, sendo exceção apenas a troca da cor predominante na marca.

#### Mudando cor da marca

Para trocar a cor da marca mude o valor da variável `--ch-color-brand`. Segue abaixo um exemplo:

```css
:root {
  --ch-color-brand: #f00
}
```

## Complementos


### Fontes

Mesmo não sendo uma dependência do projeto, em nossos templates utilizamos as fontes [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans?query=nunito+sans&selection.family=Nunito+Sans:wght@400;600;700&sidebar.open) e [Montserrat](https://fonts.google.com/specimen/Montserrat?query=Montse&sidebar.open&selection.family=Montserrat:wght@600&sidebar.open). Para incluí-las em seu projeto, utilize um dos métodos abaixo:

- No cabeçalho do documento

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
</head>
```

- Importe em seu CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito+Sans:wght@400;600;700&display=swap');
```

### Ícones

A biblioteca usada para utilizar ícones no Chameleon é a [Font Awesome](https://fontawesome.com/). Consultar equipe de design sobre a utilização do Font Awesome Pro.


## Rodando a aplicação localmente

### Instalando as dependências da aplicação
Instale as dependências do projeto utilizando esse comando:

```
$ npm install
```

### Levantando ambiente local
Seu ambiente está configurado. Para rodar a aplicação:

```
$ npm start
```

#### Tudo pronto

Sua aplicação está rodando no `localhost:9000`
