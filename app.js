const looks = [
  {
    id: "paris",
    city: "PARIS",
    label: "Париж",
    meta: "ОБРАЗ 01 · WOMEN'S CITY CASUAL · PARIS",
    title: "Тихая классика",
    subtitle: "с парижским характером.",
    summary:
      "Тёмно-синий меринос, прямой деним и лаконичные кожаные ботинки — спокойная база от французского дома A.P.C.",
    currency: "EUR",
    countLabel: "КОМПЛЕКТ · 3 ВЕЩИ",
    items: [
      {
        category: "MERINO WOOL",
        brand: "A.P.C.",
        name: "Navy blue high-neck sweater",
        shade: "Dark navy",
        tone: "#26354a",
        shape: "silhouette-knit",
        image:
          "https://www.apcstore.com/cdn/shop/files/WVAXU-F23533IAK_00.jpg?v=1784640134&width=1000",
        price: 290,
        url: "https://www.apcstore.com/products/navy-blue-high-neck-sweater-iak-wvaxu-f23533",
      },
      {
        category: "DENIM",
        brand: "A.P.C.",
        name: "Jean Elisabeth",
        shade: "Indigo",
        tone: "#52647b",
        shape: "silhouette-trousers",
        image:
          "https://www.apcstore.com/cdn/shop/files/COZZI-F09181IAI_001.jpg?v=1770893333&width=1000",
        price: 250,
        url: "https://www.apcstore.com/products/elisabeth-jeans-iai-cozzi-f09181",
      },
      {
        category: "LEATHER SHOES",
        brand: "A.P.C.",
        name: "Leather boots",
        shade: "Noir · smooth calfskin",
        tone: "#282624",
        shape: "silhouette-boots",
        image:
          "https://www.apcstore.com/cdn/shop/files/PXCCY-F55053LZZ_01.jpg?v=1784641644&width=1000",
        price: 650,
        url: "https://www.apcstore.com/products/leather-boots-lzz-pxccy-f55053",
      },
    ],
    note:
      "Источник: публичные карточки товаров A.P.C. Цены показаны в EUR и проверены 14.11.2026; размеры и наличие уточняйте у продавца.",
  },
  {
    id: "london",
    city: "LONDON",
    label: "Лондон",
    meta: "ОБРАЗ 02 · MEN'S CITY CASUAL · LONDON",
    title: "Спокойная классика",
    subtitle: "на каждый день.",
    summary:
      "Приглушённо-зелёное поло, песочные chinos и светлые кеды — природная палитра, собранная в цельный городской образ.",
    currency: "GBP",
    countLabel: "КОМПЛЕКТ · 3 ВЕЩИ",
    items: [
      {
        category: "COTTON PIQUÉ",
        brand: "Burberry",
        name: "Long-sleeve Cotton Polo Shirt",
        shade: "Marsh green",
        tone: "#66745e",
        shape: "silhouette-polo",
        image:
          "https://assets.burberry.com/is/image/Burberryltd/F620C0BF-AE69-4CDA-ADCB-C2E2909B0076?$BBY_V3_SL_1$&wid=1000&hei=1000",
        price: 355,
        url: "https://uk.burberry.com/long-sleeve-cotton-polo-shirt-p81324301",
      },
      {
        category: "COTTON TWILL",
        brand: "Burberry",
        name: "Cotton Chinos",
        shade: "Dune beige",
        tone: "#bca987",
        shape: "silhouette-trousers",
        image:
          "https://assets.burberry.com/is/image/Burberryltd/576C5CA0-7071-46CE-9C72-8A9756A2D6FD?$BBY_V3_SL_1$&wid=1000&hei=1000",
        price: 495,
        url: "https://uk.burberry.com/cotton-chinos-p81279021",
      },
      {
        category: "LEATHER SNEAKERS",
        brand: "Burberry",
        name: "Leather and Check Terrace Sneakers",
        shade: "White / sand beige",
        tone: "#e5e0d5",
        shape: "silhouette-sneakers",
        image:
          "https://assets.burberry.com/is/image/Burberryltd/DAEBBD3D-4BB7-4E59-AF1B-257E03B3A07F?$BBY_V3_SL_1$&wid=1000&hei=1000",
        price: 555,
        url: "https://uk.burberry.com/leather-and-check-terrace-sneakers-p81086491",
      },
    ],
    note:
      "Источник: публичные карточки Burberry UK. Цены показаны в GBP и проверены 14.11.2026; доставка, налоги, размеры и наличие не включены.",
  },
  {
    id: "dubai",
    city: "DUBAI",
    label: "Дубай",
    meta: "ОБРАЗ 03 · MEN'S OFF-DUTY · DUBAI",
    title: "Мягкий городской",
    subtitle: "ритм Дубая.",
    summary:
      "Тактильный трикотаж, свободный силуэт, замшевые кроссовки и графичные очки — расслабленный комплект в нейтральной гамме.",
    currency: "AED",
    countLabel: "КОМПЛЕКТ · 4 ВЕЩИ",
    items: [
      {
        category: "CORE FLEECE",
        brand: "Fear of God Essentials",
        name: "Signature lounge half-zip hoodie",
        shade: "Core fleece",
        tone: "#a99e8f",
        shape: "silhouette-polo",
        price: 825,
        url: "https://www.ounass.ae/shop-fear-of-god-essentials-signature-lounge-half-zip-hoodie-in-core-fleece-for-men-220102905_200.html",
      },
      {
        category: "CORE FLEECE",
        brand: "Fear of God Essentials",
        name: "Signature classic fit flare sweatpants",
        shade: "Core fleece",
        tone: "#6d6964",
        shape: "silhouette-trousers",
        price: 625,
        url: "https://www.ounass.ae/shop-fear-of-god-essentials-signature-classic-fit-flare-sweatpants-in-core-fleece-for-men-220102903_197.html",
      },
      {
        category: "SUEDE SNEAKERS",
        brand: "New Balance",
        name: "983 Sneakers",
        shade: "Suede",
        tone: "#927b63",
        shape: "silhouette-sneakers",
        price: 799,
        url: "https://www.ounass.ae/shop-new-balance-983-sneakers-in-suede-for-men-219768418_15.html",
      },
      {
        category: "ACETATE EYEWEAR",
        brand: "Prada Linea Rossa",
        name: "Rectangular sunglasses",
        shade: "Black acetate",
        tone: "#272522",
        shape: "silhouette-sunglasses",
        price: 1320,
        url: "https://www.ounass.ae/shop-prada-linea-rossa-rectangular-sunglasses-in-acetate-for-men-220224307_13.html",
      },
    ],
    note:
      "Источник: публичные листинги Ounass UAE. Цены в AED проверены 14.11.2026; часть карточек товара ограничивала просмотр, поэтому размер и наличие не подтверждены.",
  },
];

const elements = {
  meta: document.querySelector("#look-meta"),
  title: document.querySelector("#look-title"),
  summary: document.querySelector("#look-summary"),
  tabs: document.querySelector("#look-tabs"),
  count: document.querySelector("#look-count"),
  total: document.querySelector("#look-total"),
  priceNote: document.querySelector("#look-price-note"),
  items: document.querySelector("#look-items"),
  note: document.querySelector("#lookbook-note"),
};

const formatPrice = (amount, currency) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

function createProductCard(item, index) {
  const card = document.createElement("article");
  card.className = "look-card";

  const artwork = document.createElement("div");
  artwork.className = "look-art";
  artwork.style.setProperty("--item-tone", item.tone);

  const number = document.createElement("span");
  number.className = "look-number";
  number.textContent = String(index + 1).padStart(2, "0");

  const silhouette = document.createElement("span");
  silhouette.className = `look-silhouette ${item.shape}`;
  silhouette.setAttribute("aria-hidden", "true");
  artwork.append(number, silhouette);

  if (item.image) {
    artwork.classList.add("has-product-image");
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = item.image;
    image.alt = `${item.brand} ${item.name}, ${item.shade}`;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      artwork.classList.remove("has-product-image");
      image.remove();
    });
    artwork.append(image);
  } else {
    const illustrationLabel = document.createElement("span");
    illustrationLabel.className = "illustration-label";
    illustrationLabel.textContent = "Иллюстрация";
    artwork.append(illustrationLabel);
  }

  const info = document.createElement("div");
  info.className = "look-info";

  const category = document.createElement("span");
  category.className = "look-category";
  category.textContent = item.category;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const shade = document.createElement("p");
  shade.className = "look-shade";
  const swatch = document.createElement("span");
  swatch.className = "look-swatch";
  swatch.style.backgroundColor = item.tone;
  swatch.setAttribute("aria-hidden", "true");
  shade.append(swatch, document.createTextNode(item.shade));

  const purchaseLink = document.createElement("a");
  purchaseLink.className = "look-purchase";
  purchaseLink.href = item.url;
  purchaseLink.target = "_blank";
  purchaseLink.rel = "noreferrer";

  const price = document.createElement("span");
  price.textContent = formatPrice(item.price, currentLook.currency);
  const seller = document.createElement("span");
  seller.className = "look-seller";
  seller.textContent = `${item.brand} ↗`;
  purchaseLink.append(price, seller);

  info.append(category, title, shade, purchaseLink);
  card.append(artwork, info);
  return card;
}

function renderLook(look) {
  currentLook = look;
  elements.meta.textContent = look.meta;
  elements.title.replaceChildren(
    document.createTextNode(`${look.title} `),
    document.createElement("br"),
  );
  const subtitle = document.createElement("span");
  subtitle.textContent = look.subtitle;
  elements.title.append(subtitle);
  elements.summary.textContent = look.summary;
  elements.count.textContent = look.countLabel;
  elements.total.textContent = formatPrice(
    look.items.reduce((sum, item) => sum + item.price, 0),
    look.currency,
  );
  elements.priceNote.textContent = `${look.currency} · цены проверены 14.11.2026`;
  elements.note.textContent = look.note;
  elements.items.replaceChildren(
    ...look.items.map((item, index) => createProductCard(item, index)),
  );

  for (const button of elements.tabs.querySelectorAll("button")) {
    const active = button.dataset.look === look.id;
    button.setAttribute("aria-pressed", String(active));
  }
}

let currentLook = looks[0];

for (const look of looks) {
  const button = document.createElement("button");
  button.className = "look-tab";
  button.type = "button";
  button.dataset.look = look.id;
  button.textContent = look.label;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => renderLook(look));
  elements.tabs.append(button);
}

renderLook(currentLook);
