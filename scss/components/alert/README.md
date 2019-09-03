# Alert

## Introdução

O componente `Alert` é responsável em fornecer mensagens de feedback para ações dos usuários.
Essas mensagens podem ser do tipo: INFO, WARNING, NEGATIVE, POSITIVE.

Nesse componente a borda lateral esquerda é preenchida com a cor referente ao tipo da ação sofrida. Ex: Se for uma ação de WARNING a borda será preenchida de amarelo, POSITIVE de verde, NEGATIVE de vermelho e INFO de azul.

## Exemplo

No exemplo abaixo temos uma markup HTML do tipo INFO. O markup é constituído de um wrapper que engloba header, content e footer.

A classe do elemento pai (wrapper) deve ser passada como ch-alert(nome do componente) + o seu modificador, que no exemplo é ch-alert--info. E assim sucessivamente para qualquer outro tipo de ação. O modificador é passado da forma --modificador.

Exemplos: ch-alert--info, ch-alert--warning, ch-alert--positive, ch-alert--negative.

HTML:

```HTML
  <div class="ch-alert ch-alert--info">
    <header class="ch-alert-header">
      <h5>Importe o certificado digital A1 da empresa</h5>
    </header>

    <div class="ch-alert-content">
      O certificado digital é um mecanismo de assinatura digital de documentos e
      transações eletrônicas, que garante a validade jurídica e, consequentemente,
      segurança e integridade das relações e dos próprios documentos. O certificado
      digital válido é indispensável para emissão e recuperação de documentos
      fiscais eletrônicos.
    </div>

    <div class="ch-alert-footer ch-spaceInlineGroup--right">
      <button class="ch-button ch-button--primary">This is a button</button>
      <button class="ch-button ch-button--secondary">This is a button</button>
    </div>
  </div>
```

## Sass:

No código Sass usamos placeholders extendendo da classe card.

### `Base`

```CSS
  @extend %ch-card;
  @include ch-card-support;
 ```

### `Header`

```CSS
  #{&}-header {
    @extend %ch-card-header;
  }
 ```

### `Content`

```CSS
  #{&}-content {
    @extend %ch-card-content;
  }
 ```

### `Variations`

```CSS
  @each $variation in (info, warning, positive, negative) {
    &--#{$variation} {
      @include ch-card-support(left, ch-get-color($variation));
    }
  }
 ```
