# Chá de Casa Nova — versão fiel à imagem de referência

Esta versão recria a página completa da imagem: barra superior, cabeçalho centralizado com porta e ramos decorativos, data e endereço, categorias com ícones, cartões de presentes com fotos, botões de reserva e rodapé com links.

## Publicar no GitHub Pages
1. Extraia todos os arquivos deste ZIP.
2. Envie **todos** os arquivos para a raiz do repositório `cha-casa-nova`, substituindo o `index.html` antigo.
3. Não renomeie nem mova os JPGs: eles precisam ficar junto do HTML.
4. Faça commit e aguarde o GitHub Pages publicar.
5. Abra o site e pressione Ctrl+F5.

## Reservas
No `index.html`, preencha `API_URL` com a URL `/exec` do Apps Script para habilitar reservas compartilhadas entre visitantes. Sem essa configuração, a interface aparece, mas as reservas não serão registradas no backend.
Os preços e links são editados no array `PRODUCTS`. Preencha `amazonUrl` e/ou `mercadoLivreUrl` com links reais de cada produto.
