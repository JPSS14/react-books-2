import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "ui/components/Theme/theme-default";
import { CardCTA } from "./CardCTA";
import { FavoriteContextProvider } from "contexts/favorite-context/favorite-context";
import { SearchContextProvider } from "contexts/search-context/search-context";

// jest.mock("contexts/favorite-context/favorite-context", () => ({
//   useFavoriteContext: jest.fn().mockReturnValue({
//     ...jest.requireActual("contexts/favorite-context/favorite-context"),
//     handleSaveFavorite: jest.fn(),
//     handleDeleteFavorite: jest.fn(),
//   }),
// }));

describe("CardCTA", () => {
  test("a correct CardCTA render, isFavorite='false'", () => {
    const mockItem = {
      favorite: false,
      kind: "books#volume",
      id: "R7KuDwAAQBAJ",
      etag: "U4kPLzNoxNA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/R7KuDwAAQBAJ",
      volumeInfo: {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        authors: ["J.R.R. Tolkien"],
        publisher: "HARLEQUIN",
        publishedDate: "25/11/2019",
        description:
          "A Sociedade do Anel O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel. Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788595086333",
          },
          {
            type: "ISBN_10",
            identifier: "8595086338",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 584,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.11.12.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=R7KuDwAAQBAJ&printsec=frontcover&dq=Senhor+dos+Aneis&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: "R$ 49,90",
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 47.4,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&rdid=book-R7KuDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 49900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 47400000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_A_Sociedade_do_Anel-sample-epub.acsm?id=R7KuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=R7KuDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.",
      },
    };

    render(
      <SearchContextProvider>
        <FavoriteContextProvider>
          <ThemeProvider theme={theme}>
            <MemoryRouter>
              <CardCTA item={mockItem} />
            </MemoryRouter>
          </ThemeProvider>
        </FavoriteContextProvider>
      </SearchContextProvider>
    );

    expect(screen.getByText("Ver mais")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Ver mais"));

    const starIcon = screen.getByTestId("addFavoriteButton");
    expect(starIcon).toBeInTheDocument();
    fireEvent.click(starIcon);
  });

  test("a correct CardCTA render, isFavorite='true'", () => {
    const mockItem = {
      favorite: true,
      kind: "books#volume",
      id: "R7KuDwAAQBAJ",
      etag: "U4kPLzNoxNA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/R7KuDwAAQBAJ",
      volumeInfo: {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        authors: ["J.R.R. Tolkien"],
        publisher: "HARLEQUIN",
        publishedDate: "25/11/2019",
        description:
          "A Sociedade do Anel O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real. A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo. O mais importante legado de Bilbo é o anel mágico que costumava usar para se tornar invisível. No entanto, o mago Gandalf, companheiro de aventuras do velho hobbit, revela a Frodo que o objeto é o Um Anel, a raiz do poder demoníaco de Sauron, o Senhor Sombrio, que deseja escravizar todos os povos da Terra-média. A única maneira de eliminar a ameaça de Sauron é destruir o Um Anel nas entranhas da própria montanha de fogo onde foi forjado. A revelação faz com que Frodo e seus companheiros hobbits Sam, Merry e Pippin deixem a segurança do Condado e iniciem uma perigosa jornada rumo ao leste. Ao lado de representantes dos outros Povos Livres que resistem ao Senhor Sombrio, eles formam a Sociedade do Anel. Alguém uma vez disse que o mundo dos leitores de língua inglesa se divide entre os que já leram O Senhor dos Anéis e os que um dia lerão o livro. Com esta nova tradução da obra, o fascínio dessa aventura atemporal ficará ainda mais evidente para os leitores brasileiros, tanto os que já conhecem a saga como os que estão prestes a descobrir seu encanto.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9788595086333",
          },
          {
            type: "ISBN_10",
            identifier: "8595086338",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 584,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.11.12.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "pt-BR",
        previewLink:
          "http://books.google.com.br/books?id=R7KuDwAAQBAJ&printsec=frontcover&dq=Senhor+dos+Aneis&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ",
      },
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: "R$ 49,90",
          currencyCode: "BRL",
        },
        retailPrice: {
          amount: 47.4,
          currencyCode: "BRL",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&rdid=book-R7KuDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 49900000,
              currencyCode: "BRL",
            },
            retailPrice: {
              amountInMicros: 47400000,
              currencyCode: "BRL",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "BR",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_A_Sociedade_do_Anel-sample-epub.acsm?id=R7KuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=R7KuDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.",
      },
    };

    render(
      <SearchContextProvider>
        <FavoriteContextProvider>
          <ThemeProvider theme={theme}>
            <MemoryRouter>
              <CardCTA item={mockItem} />
            </MemoryRouter>
          </ThemeProvider>
        </FavoriteContextProvider>
      </SearchContextProvider>
    );

    expect(screen.getByText("Ver mais")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Ver mais"));

    const starIcon = screen.getByTestId("removeFavoriteButton");
    expect(starIcon).toBeInTheDocument();
    fireEvent.click(starIcon);
  });
});
