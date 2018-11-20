# Chameleon
Framework front-end projetado para a padronização das interfaces de produtos Nexaas.
___

## Rodando localmente


### Dependências

- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [Gulp](https://gulpjs.com/)

### Instalando as dependências da aplicação
Instale as dependências do projeto utilizando esse comando:

```
$ npm install
```

### Rodando a aplicação
Seu ambiente está configurado. Para rodar a aplicação:

```
$ gulp
```

#### Tudo pronto

Sua aplicação está rodando no `localhost:3000`

### Gerando arquivos HTML

Para geração dos arquivos HTML estamos utilizando o [PugJs](https://pugjs.org/api/getting-started.html). Os templates estão na seguinte pasta:

```
source/templates
```

### Use o Chameleon

O primeiro passo para utilizar o Chameleon é baixar os assets([CSS](dist/stylesheets) / [JS](dist/javascripts)) que se encontram na pasta dist. Para que funcione corretamente necessitamos incluir no nosso HTML o Font Awesome Pro([link aqui](https://s3-us-west-2.amazonaws.com/nexaas-chameleon/fontawesome/v5.3.1/css/all.min.css)), [Semantic UI](https://github.com/Semantic-Org/Semantic-UI) e [JQuery](https://jquery.com/download/). Veja no exemplo abaixo:

```html

<!-- CSS dependecies -->
<link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/nexaas-chameleon/fontawesome/v5.3.1/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css">

<!-- JS dependecies  -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.js"></script>

<!-- Insert Chameleon's CSS/JS below dependecies -->
<link rel="stylesheet" href="chameleon.min.css">
<script type="text/javascript" src="chameleon.min.js"></script>
``` 
Para saber mais sobre a estrutura principal do Chameleon, [clique aqui](docs/getting-started)
