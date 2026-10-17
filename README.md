# Chá de Casa Nova — Lucas e Leticia

Versão com identidade visual inspirada no convite: fundo off-white, tipografia serifada, detalhes vinho e composição romântica tradicional.

## Arquivos
- `index.html`: página responsiva, lista de presentes, preços manuais, links Amazon/Mercado Livre, reservas e botão de confirmação de presença pelo WhatsApp.
- `Code.gs`: backend Google Apps Script para armazenar reservas em uma planilha.
- A data/endereço do convite já estão preenchidos no cabeçalho.

## Configuração
1. Crie uma planilha em https://sheets.google.com.
2. Abra Extensões > Apps Script e cole o `Code.gs`.
3. Implante como Aplicativo da Web, executando como você e permitindo acesso de qualquer pessoa (se permitido pela conta). Copie a URL `/exec`.
4. No `index.html`, substitua `COLE_A_URL_DO_WEB_APP_AQUI` pela URL copiada.
5. Edite `PRODUCTS` no `index.html` para cadastrar presentes, preço e URLs reais de compra.
6. Publique `index.html` em GitHub Pages: crie um repositório, envie o arquivo e habilite Settings > Pages > Deploy from a branch > main > /(root).
7. Teste reserva em dois dispositivos antes de compartilhar.

## Confirmação de presença
O botão de presença abre o WhatsApp com uma mensagem pronta, mas não registra respostas automaticamente. Para receber as confirmações, configure o número do casal no link `https://wa.me/?text=...` substituindo por `https://wa.me/55DDDNUMERO?text=...` (somente números, com código do Brasil, DDD e telefone).

Os preços são indicativos e manuais. A compra ocorre diretamente na loja. A reserva sinaliza intenção, não confirma compra. A lista pública mostra o nome de quem reservou; contato opcional fica apenas na planilha.


## Versão visual 2
O cabeçalho agora segue mais de perto o convite enviado: sem barra de navegação no topo, título centralizado, lettering vinho, ilustração original da porta recortada do convite, nomes, data e endereço. O arquivo `porta-convite.jpg` precisa ficar na mesma pasta de `index.html` quando publicar, para a ilustração aparecer.
