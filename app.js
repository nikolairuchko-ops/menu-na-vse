const cities = [
  { id: "dubai", label: "Дубай" },
  { id: "paris", label: "Париж" },
  { id: "london", label: "Лондон" },
];

const types = [
  { id: "clothing", label: "Одежда" },
  { id: "bags", label: "Сумки" },
  { id: "shoes", label: "Обувь" },
  { id: "accessories", label: "Аксессуары" },
];

const stores = [
  { name: "The Dubai Mall", city: "dubai", url: "https://thedubaimall.com/en/shop", description: "Официальный каталог магазинов крупнейшего торгового центра Дубая.", mark: "DM", color: "#e9eee4", ink: "#536c4d", types: ["clothing", "bags", "shoes", "accessories"], tags: "молл торговый центр дубай одежда сумки обувь" },
  { name: "Louis Vuitton", city: "dubai", url: "https://ae.louisvuitton.com/eng-ae/homepage", description: "Коллекции одежды, сумок и аксессуаров в онлайн-магазине для ОАЭ.", mark: "LV", color: "#efe8df", ink: "#6d5947", types: ["clothing", "bags", "shoes", "accessories"], tags: "люкс дубай оаэ" },
  { name: "CHANEL", city: "dubai", url: "https://www.chanel.com/ae/", description: "Мода, сумки, обувь и аксессуары на официальном сайте региона.", mark: "C", color: "#f0e9e9", ink: "#625353", types: ["clothing", "bags", "shoes", "accessories"], tags: "шанель дубай оаэ" },
  { name: "Dior", city: "dubai", url: "https://www.dior.com/en_ae", description: "Женская мода и аксессуары из актуальных коллекций Dior.", mark: "D", color: "#e9edf0", ink: "#546473", types: ["clothing", "bags", "shoes", "accessories"], tags: "диор дубай оаэ" },
  { name: "Gucci", city: "dubai", url: "https://www.gucci.com/ae/en_gb/", description: "Официальный онлайн-магазин Gucci для покупателей в ОАЭ.", mark: "G", color: "#e8efe7", ink: "#50694d", types: ["clothing", "bags", "shoes", "accessories"], tags: "гуччи дубай оаэ" },
  { name: "Prada", city: "dubai", url: "https://www.prada.com/ae/en.html", description: "Одежда, сумки и обувь в официальном магазине Prada.", mark: "PR", color: "#ece9e2", ink: "#625b4b", types: ["clothing", "bags", "shoes", "accessories"], tags: "прада дубай оаэ" },

  { name: "Galeries Lafayette", city: "paris", url: "https://www.galerieslafayette.com/", description: "Французский универмаг: одежда, сумки, обувь и дизайнерские бренды.", mark: "GL", color: "#f0e7e7", ink: "#865656", types: ["clothing", "bags", "shoes", "accessories"], tags: "галери лафайет универмаг франция париж" },
  { name: "Printemps", city: "paris", url: "https://www.printemps.com/fr/fr", description: "Мода и дизайнерские марки в парижском универмаге Printemps.", mark: "P", color: "#eee8e2", ink: "#78644f", types: ["clothing", "bags", "shoes", "accessories"], tags: "прентан универмаг франция париж" },
  { name: "Le Bon Marché", city: "paris", url: "https://www.lebonmarche.com/", description: "Подборка моды, аксессуаров и французских дизайнеров.", mark: "LB", color: "#e8ede7", ink: "#566c55", types: ["clothing", "bags", "shoes", "accessories"], tags: "бон марше универмаг франция париж" },
  { name: "Sézane", city: "paris", url: "https://www.sezane.com/fr", description: "Французский бренд женской одежды, обуви и аксессуаров.", mark: "S", color: "#f1e9e1", ink: "#8a684d", types: ["clothing", "bags", "shoes", "accessories"], tags: "сезан франция париж" },
  { name: "24S", city: "paris", url: "https://www.24s.com/en-fr", description: "Парижская онлайн-платформа с подборкой модных брендов.", mark: "24", color: "#e7eaf0", ink: "#505c73", types: ["clothing", "bags", "shoes", "accessories"], tags: "24с люкс франция париж" },
  { name: "Saint Laurent", city: "paris", url: "https://www.ysl.com/fr-fr", description: "Официальный магазин Saint Laurent для французского региона.", mark: "SL", color: "#ece9e5", ink: "#5b554d", types: ["clothing", "bags", "shoes", "accessories"], tags: "ив сен лоран франция париж" },

  { name: "Harrods", city: "london", url: "https://www.harrods.com/en-gb/", description: "Лондонский универмаг с международными модными марками.", mark: "H", color: "#e9eee6", ink: "#53664b", types: ["clothing", "bags", "shoes", "accessories"], tags: "харродс универмаг великобритания лондон" },
  { name: "Selfridges", city: "london", url: "https://www.selfridges.com/GB/en/", description: "Дизайнерская одежда, обувь и аксессуары из Лондона.", mark: "SE", color: "#f0e9e5", ink: "#7a594c", types: ["clothing", "bags", "shoes", "accessories"], tags: "селфриджес универмаг великобритания лондон" },
  { name: "Burberry", city: "london", url: "https://uk.burberry.com/", description: "Британский модный дом: одежда, сумки и аксессуары.", mark: "B", color: "#eee9df", ink: "#786646", types: ["clothing", "bags", "shoes", "accessories"], tags: "берберри великобритания лондон" },
  { name: "Liberty", city: "london", url: "https://www.libertylondon.com/uk/", description: "Лондонский универмаг и подборка независимых дизайнеров.", mark: "L", color: "#e7eee8", ink: "#4b7255", types: ["clothing", "bags", "shoes", "accessories"], tags: "либёрти универмаг великобритания лондон" },
  { name: "Mulberry", city: "london", url: "https://www.mulberry.com/gb/shop/women", description: "Британский бренд сумок, аксессуаров и женской одежды.", mark: "M", color: "#f0e9e0", ink: "#806344", types: ["clothing", "bags", "shoes", "accessories"], tags: "малберри сумки великобритания лондон" },
];

const lookItems = [
  {
    number: "01",
    category: "ВЕРХ",
    shape: "polo",
    color: "#526652",
    shade: "Marsh green",
    name: "Long-sleeve Cotton Polo Shirt",
    price: 355,
    url: "https://uk.burberry.com/long-sleeve-cotton-polo-shirt-p81324301",
  },
  {
    number: "02",
    category: "НИЗ",
    shape: "trousers",
    color: "#cdb895",
    shade: "Dune beige",
    name: "Cotton Chinos",
    price: 495,
    url: "https://uk.burberry.com/cotton-chinos-p81279021",
  },
  {
    number: "03",
    category: "ОБУВЬ",
    shape: "sneakers",
    color: "#e7dfd1",
    shade: "White / sand beige",
    name: "Leather and Check Terrace Sneakers",
    price: 555,
    url: "https://uk.burberry.com/leather-and-check-terrace-sneakers-p81086491",
  },
];

const cityContainer = document.querySelector("#cities");
const typeContainer = document.querySelector("#types");
const cardContainer = document.querySelector("#cards");
const lookItemsContainer = document.querySelector("#look-items");
const lookTotal = document.querySelector("#look-total");
const searchInput = document.querySelector("#search");
const resultsLabel = document.querySelector("#results-label");
const emptyState = document.querySelector("#empty-state");
const resetButton = document.querySelector("#reset");

let activeCity = "all";
let activeType = "all";

function formatPrice(price) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

function createLookItem(item) {
  const article = document.createElement("article");
  article.className = "look-card";

  const artwork = document.createElement("div");
  artwork.className = `look-art look-art-${item.shape}`;
  artwork.style.setProperty("--item-tone", item.color);
  artwork.setAttribute("aria-hidden", "true");

  const number = document.createElement("span");
  number.className = "look-number";
  number.textContent = item.number;
  const silhouette = document.createElement("span");
  silhouette.className = `look-silhouette silhouette-${item.shape}`;
  artwork.append(number, silhouette);

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
  swatch.style.backgroundColor = item.color;
  swatch.setAttribute("aria-hidden", "true");
  shade.append(swatch, document.createTextNode(item.shade));

  const purchase = document.createElement("a");
  purchase.className = "look-purchase";
  purchase.href = item.url;
  purchase.target = "_blank";
  purchase.rel = "noopener noreferrer";
  purchase.textContent = `Купить · ${formatPrice(item.price)}`;
  purchase.setAttribute("aria-label", `${item.name}, ${formatPrice(item.price)} — открыть на сайте Burberry`);

  info.append(category, title, shade, purchase);
  article.append(artwork, info);
  return article;
}

function renderLook() {
  lookItemsContainer.replaceChildren(...lookItems.map(createLookItem));
  const total = lookItems.reduce((sum, item) => sum + item.price, 0);
  lookTotal.textContent = formatPrice(total);
}

function createFilterButton(id, label, selected, onSelect, count) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-button";
  button.setAttribute("aria-pressed", String(selected === id));
  button.dataset.filter = id;
  button.textContent = label;
  if (count !== undefined) {
    const countLabel = document.createElement("span");
    countLabel.className = "category-count";
    countLabel.textContent = String(count);
    button.append(countLabel);
  }
  button.addEventListener("click", () => {
    onSelect(id);
    renderFilters();
    renderStores();
  });
  return button;
}

function getStoresForCity(cityId) {
  return cityId === "all" ? stores : stores.filter((store) => store.city === cityId);
}

function renderFilters() {
  const cityFilters = [{ id: "all", label: "Все города" }, ...cities];
  cityContainer.replaceChildren(...cityFilters.map((city) => {
    const count = getStoresForCity(city.id).length;
    return createFilterButton(city.id, city.label, activeCity, (id) => { activeCity = id; }, count);
  }));

  const typeFilters = [{ id: "all", label: "Любая вещь" }, ...types];
  typeContainer.replaceChildren(...typeFilters.map((type) => {
    const count = getStoresForCity(activeCity).filter((store) => type.id === "all" || store.types.includes(type.id)).length;
    return createFilterButton(type.id, type.label, activeType, (id) => { activeType = id; }, count);
  }));
}

function getFilteredStores() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  return stores.filter((store) => {
    const matchesCity = activeCity === "all" || store.city === activeCity;
    const matchesType = activeType === "all" || store.types.includes(activeType);
    const cityName = cities.find((city) => city.id === store.city).label;
    const typeNames = store.types.map((typeId) => types.find((type) => type.id === typeId).label).join(" ");
    const searchableText = `${store.name} ${store.description} ${store.tags} ${cityName} ${typeNames}`.toLocaleLowerCase("ru");
    return matchesCity && matchesType && searchableText.includes(query);
  });
}

function getStoreNoun(count) {
  const remainder10 = count % 10;
  const remainder100 = count % 100;
  if (remainder10 === 1 && remainder100 !== 11) return "магазин";
  if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 12 || remainder100 > 14)) return "магазина";
  return "магазинов";
}

function createStoreCard(store) {
  const cityName = cities.find((city) => city.id === store.city).label;
  const typeNames = store.types.map((typeId) => types.find((type) => type.id === typeId).label).join(" · ");
  const article = document.createElement("article");
  article.className = "site-card store-card";

  const top = document.createElement("div");
  top.className = "card-top";
  const logo = document.createElement("span");
  logo.className = "site-logo";
  logo.textContent = store.mark;
  logo.style.backgroundColor = store.color;
  logo.style.color = store.ink;
  logo.setAttribute("aria-hidden", "true");

  const city = document.createElement("span");
  city.className = `store-city city-${store.city}`;
  city.textContent = cityName;
  top.append(logo, city);

  const title = document.createElement("h3");
  title.textContent = store.name;
  const description = document.createElement("p");
  description.textContent = store.description;
  const cardCategory = document.createElement("span");
  cardCategory.className = "card-category";
  cardCategory.textContent = typeNames;

  const link = document.createElement("a");
  link.className = "card-link";
  link.href = store.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${store.name} — открыть официальный онлайн-магазин в новой вкладке`);

  const arrow = document.createElement("span");
  arrow.className = "card-arrow store-arrow";
  arrow.textContent = "↗";
  arrow.setAttribute("aria-hidden", "true");
  top.append(arrow);

  const action = document.createElement("span");
  action.className = "store-action";
  action.textContent = "Перейти в магазин";
  article.append(top, title, description, cardCategory, action, link);
  return article;
}

function renderStores() {
  const filteredStores = getFilteredStores();
  cardContainer.replaceChildren(...filteredStores.map(createStoreCard));
  cardContainer.hidden = filteredStores.length === 0;
  emptyState.hidden = filteredStores.length > 0;
  resultsLabel.textContent = `Найдено ${filteredStores.length} ${getStoreNoun(filteredStores.length)}`;
  resetButton.hidden = !searchInput.value.trim() && activeCity === "all" && activeType === "all";
}

function resetFilters() {
  activeCity = "all";
  activeType = "all";
  searchInput.value = "";
  renderFilters();
  renderStores();
}

searchInput.addEventListener("input", renderStores);
resetButton.addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderStores();
    searchInput.blur();
  }
});

renderLook();
renderFilters();
renderStores();
