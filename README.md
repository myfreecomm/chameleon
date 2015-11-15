# Chameleon
Framework de interface para os projetos da Nexaas
___

## Conceito
O Framework é baseado em uma estrutura totalmente modular, com todos os seus atributos armazenados no CSS, tornando o HTML mais enxuto e semântico.
___
## Grid
A grid segue um padrão que deve ser seguido para evitar conflitos e manter a lógica do conceito.

A composição das classes para construção da grid é:

`<div class="nome-da-view nome-do-bloco nome-do-objeto">`

##### Nome da View
A primeira classe é o nome da view onde o código está sendo inserido. Serve para referência no CSS apenas, não deve conter estilos.

##### Nome do Bloco (Opcional)
Blocos são classes com estilos visuais para o encapsulador. Há alguns tipos de blocos que podem ser utilizados, que são:

`column`
`block`

##### Nome do Objeto
Objeto é o que representa aquele bloco de código que está sendo encapsulado, para o que ele serve. Pode ser um `form`, o nome de uma `label` (em ingês) ou `for`, um help sobre aquela view, etc. 

Essa classe recebe os estilos dimencionais (valores da grid).

#### Exemplo
Segue um exemplo da composição correta:

```
<form class="accounts column form">
  <div class="accounts name">
    <label id="name">Nome</label>
    <input for="name">
  </div>  
</form>
```

##### Mixins da Grid
O Chameleon utiliza uma lib de mixins que atribui os valores dimencionais à classe, chamada __Neat__. [Clique aqui](http://thoughtbot.github.io/neat-docs/latest/) para visualizar a documentação completa. 
___

## Header
___
## Navegação
___

## Componentes
___


## Cores
___

## Tipografia
___