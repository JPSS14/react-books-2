import {
  addCommaArray,
  currencyConverter,
  dateConverter,
} from "helpers/utils/utils";
import { BookItemResponse, ResponseBooks } from "./types";

export const responseBookMapper = (item: BookItemResponse) => {
  return {
    favorite: false,
    kind: item.kind,
    id: item.id,
    etag: item.etag,
    selfLink: item.selfLink,
    volumeInfo: {
      title: item.volumeInfo.title,
      authors: addCommaArray(item.volumeInfo.authors),
      publisher: item.volumeInfo.publisher,
      publishedDate: dateConverter(item.volumeInfo.publishedDate),
      description: item.volumeInfo.description,
      industryIdentifiers: item.volumeInfo.industryIdentifiers,
      readingModes: item.volumeInfo.readingModes,
      pageCount: item.volumeInfo.pageCount,
      printType: item.volumeInfo.printType,
      categories: item.volumeInfo.categories,
      maturityRating: item.volumeInfo.maturityRating,
      allowAnonLogging: item.volumeInfo.allowAnonLogging,
      contentVersion: item.volumeInfo.contentVersion,
      panelizationSummary: item.volumeInfo.panelizationSummary,
      imageLinks: item.volumeInfo.imageLinks,
      language: item.volumeInfo.language,
      previewLink: item.volumeInfo.previewLink,
      infoLink: item.volumeInfo.infoLink,
      canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
    },
    saleInfo: {
      country: item.saleInfo.country,
      saleability: item.saleInfo.saleability,
      isEbook: item.saleInfo.isEbook,
      listPrice: {
        amount: item.saleInfo.listPrice?.amount
          ? currencyConverter(item.saleInfo.listPrice?.amount)
          : undefined,
        currencyCode: item.saleInfo.listPrice?.currencyCode,
      },
      retailPrice: {
        amount: item.saleInfo.retailPrice?.amount,
        currencyCode: item.saleInfo.retailPrice?.currencyCode,
      },
      buyLink: item.saleInfo.buyLink,
      offers: item.saleInfo.offers?.map((item) => ({
        finskyOfferType: item.finskyOfferType,
        listPrice: {
          amountInMicros: item.listPrice.amountInMicros,
          currencyCode: item.listPrice.currencyCode,
        },
        retailPrice: {
          amountInMicros: item.retailPrice.amountInMicros,
          currencyCode: item.retailPrice.currencyCode,
        },
        giftable: item.giftable,
      })),
    },
    accessInfo: {
      country: item.accessInfo.country,
      viewability: item.accessInfo.viewability,
      embeddable: item.accessInfo.embeddable,
      publicDomain: item.accessInfo.publicDomain,
      textToSpeechPermission: item.accessInfo.textToSpeechPermission,
      epub: {
        isAvailable: item.accessInfo.epub.isAvailable,
        acsTokenLink: item.accessInfo.epub.acsTokenLink,
      },
      pdf: {
        isAvailable: item.accessInfo.pdf.isAvailable,
      },
      webReaderLink: item.accessInfo.webReaderLink,
      accessViewStatus: item.accessInfo.accessViewStatus,
      quoteSharingAllowed: item.accessInfo.quoteSharingAllowed,
    },
    searchInfo: {
      textSnippet: item.searchInfo?.textSnippet,
    },
  };
};

export const responseBooksMapper = (data: ResponseBooks) => {
  const { items, kind, totalItems } = data;
  return {
    kind: kind,
    totalItems: totalItems,
    items: items.map((item) => ({
      favorite: false,
      kind: item.kind,
      id: item.id,
      etag: item.etag,
      selfLink: item.selfLink,
      volumeInfo: {
        title: item.volumeInfo.title,
        authors: addCommaArray(item.volumeInfo.authors),
        publisher: item.volumeInfo.publisher,
        publishedDate: dateConverter(item.volumeInfo.publishedDate),
        description: item.volumeInfo.description,
        industryIdentifiers: item.volumeInfo.industryIdentifiers,
        readingModes: item.volumeInfo.readingModes,
        pageCount: item.volumeInfo.pageCount,
        printType: item.volumeInfo.printType,
        categories: item.volumeInfo.categories,
        maturityRating: item.volumeInfo.maturityRating,
        allowAnonLogging: item.volumeInfo.allowAnonLogging,
        contentVersion: item.volumeInfo.contentVersion,
        panelizationSummary: item.volumeInfo.panelizationSummary,
        imageLinks: item.volumeInfo.imageLinks,
        language: item.volumeInfo.language,
        previewLink: item.volumeInfo.previewLink,
        infoLink: item.volumeInfo.infoLink,
        canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
      },
      saleInfo: {
        country: item.saleInfo.country,
        saleability: item.saleInfo.saleability,
        isEbook: item.saleInfo.isEbook,
        listPrice: {
          amount: item.saleInfo.listPrice?.amount
            ? currencyConverter(item.saleInfo.listPrice?.amount)
            : undefined,
          currencyCode: item.saleInfo.listPrice?.currencyCode,
        },
        retailPrice: {
          amount: item.saleInfo.retailPrice?.amount,
          currencyCode: item.saleInfo.retailPrice?.currencyCode,
        },
        buyLink: item.saleInfo.buyLink,
        offers: item.saleInfo.offers?.map((item) => ({
          finskyOfferType: item.finskyOfferType,
          listPrice: {
            amountInMicros: item.listPrice.amountInMicros,
            currencyCode: item.listPrice.currencyCode,
          },
          retailPrice: {
            amountInMicros: item.retailPrice.amountInMicros,
            currencyCode: item.retailPrice.currencyCode,
          },
          giftable: item.giftable,
        })),
      },
      accessInfo: {
        country: item.accessInfo.country,
        viewability: item.accessInfo.viewability,
        embeddable: item.accessInfo.embeddable,
        publicDomain: item.accessInfo.publicDomain,
        textToSpeechPermission: item.accessInfo.textToSpeechPermission,
        epub: {
          isAvailable: item.accessInfo.epub.isAvailable,
          acsTokenLink: item.accessInfo.epub.acsTokenLink,
        },
        pdf: {
          isAvailable: item.accessInfo.pdf.isAvailable,
        },
        webReaderLink: item.accessInfo.webReaderLink,
        accessViewStatus: item.accessInfo.accessViewStatus,
        quoteSharingAllowed: item.accessInfo.quoteSharingAllowed,
      },
      searchInfo: {
        textSnippet: item.searchInfo?.textSnippet,
      },
    })),
  };
};
