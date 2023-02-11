import { responseBookMock } from "./responseBook.mock";
import { responseBookMapper } from "./search.mapper";

describe('Test responseBookMapper', () => {
  test('A correct test', () => {
    expect(responseBookMapper(responseBookMock)).toStrictEqual({
      "kind": "books#volumes",
      "totalItems": 1,
      "items": [
        {
          "kind": "books#volume",
          "id": "yodhDwAAQBAJ",
          "etag": "ntq5cJMz0Lk",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/yodhDwAAQBAJ",
          "volumeInfo": {
            "title": "J.R.R. Tolkien. Uma biografia",
            "authors": [
              "Humphrey Carpenter"
            ],
            "publisher": "HarperCollins Brasil",
            "publishedDate": "01/08/2018",
            "description": "\"A biografia autorizada do criador da Terra-média. Nas décadas posteriores ao falecimento de J.R.R. Tolkien, em setembro de 1973, milhões de pessoas leram O Hobbit, O Senhor dos Anéis e O Silmarillion e ficaram tão fascinadas quanto intrigadas com o homem muito reservado por trás dos livros. Nascido na África do Sul, em janeiro de 1892, John Ronald Reuel Tolkien ficou órfão durante a infância e cresceu quase na pobreza. Ele serviu na Primeira Guerra Mundial e sobreviveu à Batalha do Somme, onde perdeu quase todos os seus amigos mais íntimos. Após a guerra, retornou à vida acadêmica, conquistando uma grande reputação como estudioso e professor universitário, e tornando-se, por fim, Professor de Inglês em Oxford, onde fez amizade com C.S. Lewis e os outros escritores conhecidos, formando um grupo denominado Os Inklings. Então, de repente, sua vida mudou dramaticamente. Certo dia, enquanto corrigia provas, ele acabou escrevendo no verso de uma folha: \"Numa toca no chão vivia um hobbit\" – e a fama mundial o aguardava. Humphrey Carpenter recebeu acesso irrestrito a todos os documentos de Tolkien e entrevistou seus amigos e familiares. A partir dessas fontes ele segue o longo e doloroso processo de criação que produziu O Senhor dos Anéis e O Silmarillion e fornece uma vasta gama de informações sobre a vida e a obra de um dos mais estimados autores do século XX.\"",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9788595084001"
              },
              {
                "type": "ISBN_10",
                "identifier": "8595084009"
              }
            ],
            "readingModes": {
              "text": true,
              "image": false
            },
            "pageCount": 384,
            "printType": "BOOK",
            "categories": [
              "Biography & Autobiography"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.5.6.0.preview.2",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=yodhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=yodhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "pt-BR",
            "previewLink": "http://books.google.com.br/books?id=yodhDwAAQBAJ&printsec=frontcover&dq=Tolkien&hl=&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=yodhDwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=yodhDwAAQBAJ"
          },
          "saleInfo": {
            "country": "BR",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
              "amount": new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(39.9),
              "currencyCode": "BRL"
            },
            "retailPrice": {
              "amount": 37.9,
              "currencyCode": "BRL"
            },
            "buyLink": "https://play.google.com/store/books/details?id=yodhDwAAQBAJ&rdid=book-yodhDwAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
              {
                "finskyOfferType": 1,
                "listPrice": {
                  "amountInMicros": 39900000,
                  "currencyCode": "BRL"
                },
                "retailPrice": {
                  "amountInMicros": 37900000,
                  "currencyCode": "BRL"
                },
                "giftable": true
              }
            ]
          },
          "accessInfo": {
            "country": "BR",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.com.br/books/download/J_R_R_Tolkien_Uma_biografia-sample-epub.acsm?id=yodhDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
              "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=yodhDwAAQBAJ&hl=&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "Humphrey Carpenter recebeu acesso irrestrito a todos os documentos de Tolkien e entrevistou seus amigos e familiares."
          }
        },
      ]
    })
  });
});