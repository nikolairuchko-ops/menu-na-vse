const categories = [
  { id: "services", label: "Сервисы" },
  { id: "shops", label: "Магазины" },
  { id: "delivery", label: "Службы" },
];

const sites = [
  { name: "Яндекс", category: "services", url: "https://yandex.ru", description: "Поиск, карты, погода и другие полезные инструменты.", mark: "Я", color: "#fff0cc", ink: "#d18b16", tags: "поиск карты погода" },
  { name: "VK", category: "services", url: "https://vk.com", description: "Общение, музыка, видео и новости в одной ленте.", mark: "vk", color: "#e5edff", ink: "#3973df", tags: "общение соцсеть музыка" },
  { name: "Госуслуги", category: "services", url: "https://www.gosuslugi.ru", description: "Государственные услуги и документы онлайн.", mark: "г", color: "#e4edff", ink: "#3971bf", tags: "документы государство" },
  { name: "СберБанк Онлайн", category: "services", url: "https://online.sberbank.ru", description: "Банк, переводы и платежи — в личном кабинете.", mark: "с", color: "#e3f2e7", ink: "#24925b", tags: "банк деньги платежи" },
  { name: "Ozon", category: "shops", url: "https://www.ozon.ru", description: "Миллионы товаров с доставкой до двери.", mark: "oz", color: "#e6e9ff", ink: "#4354c7", tags: "покупки товары маркетплейс" },
  { name: "Wildberries", category: "shops", url: "https://www.wildberries.ru", description: "Одежда, дом, электроника и многое другое.", mark: "wb", color: "#f6e5f1", ink: "#a83285", tags: "покупки одежда маркетплейс" },
  { name: "Яндекс Маркет", category: "shops", url: "https://market.yandex.ru", description: "Сравнивайте товары, цены и отзывы.", mark: "м", color: "#fff0de", ink: "#d98529", tags: "покупки сравнить товары" },
  { name: "Мегамаркет", category: "shops", url: "https://megamarket.ru", description: "Покупки для дома, семьи и каждого дня.", mark: "м", color: "#e2f1e7", ink: "#288a54", tags: "покупки товары дом" },
  { name: "Самокат", category: "delivery", url: "https://samokat.ru", description: "Продукты и готовая еда с быстрой доставкой.", mark: "с", color: "#f7e7e7", ink: "#dc6262", tags: "еда продукты доставка" },
  { name: "Купер", category: "delivery", url: "https://kuper.ru", description: "Заказ продуктов и товаров из магазинов.", mark: "к", color: "#e5f0e2", ink: "#4b8a46", tags: "еда продукты доставка" },
  { name: "Яндекс Go", category: "delivery", url: "https://go.yandex", description: "Такси, доставка и поездки по городу.", mark: "go", color: "#fff1d9", ink: "#d88b13", tags: "такси транспорт доставка" },
  { name: "Почта России", category: "delivery", url: "https://www.pochta.ru", description: "Отслеживание посылок и почтовые услуги.", mark: "п", color: "#e9e9ff", ink: "#584fc0", tags: "посылки отправления почта" },
];

const categoryContainer = document.querySelector("#categories");
const cardContainer = document.querySelector("#cards");
const searchInput = document.querySelector("#search");
const resultsLabel = document.querySelector("#results-label");
const emptyState = document.querySelector("#empty-state");
const resetButton = document.querySelector("#reset");

let activeCategory = "all";

function renderCategories() {
  const allButton = createCategoryButton("all", "Все", sites.length);
  categoryContainer.replaceChildren(allButton);

  categories.forEach((category) => {
    const count = sites.filter((site) => site.category === category.id).length;
    categoryContainer.append(createCategoryButton(category.id, category.label, count));
  });
}

function createCategoryButton(id, label, count) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-button";
  button.setAttribute("aria-pressed", String(activeCategory === id));
  button.dataset.category = id;
  button.innerHTML = `${label}<span class="category-count">${count}</span>`;
  button.addEventListener("click", () => {
    activeCategory = id;
    renderCategories();
    renderSites();
  });
  return button;
}

function renderSites() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  const filteredSites = sites.filter((site) => {
    const matchesCategory = activeCategory === "all" || site.category === activeCategory;
    const categoryLabel = categories.find((category) => category.id === site.category).label;
    const searchableText = `${site.name} ${site.description} ${site.tags} ${categoryLabel}`.toLocaleLowerCase("ru");
    return matchesCategory && searchableText.includes(query);
  });

  cardContainer.replaceChildren(...filteredSites.map(createSiteCard));
  cardContainer.hidden = filteredSites.length === 0;
  emptyState.hidden = filteredSites.length > 0;
  const noun = filteredSites.length === 1 ? "сайт" : filteredSites.length > 1 && filteredSites.length < 5 ? "сайта" : "сайтов";
  resultsLabel.textContent = `Найдено ${filteredSites.length} ${noun}`;
  resetButton.hidden = !query && activeCategory === "all";
}

function createSiteCard(site) {
  const categoryLabel = categories.find((category) => category.id === site.category).label;
  const article = document.createElement("article");
  article.className = "site-card";

  const top = document.createElement("div");
  top.className = "card-top";
  const logo = document.createElement("span");
  logo.className = "site-logo";
  logo.textContent = site.mark;
  logo.style.backgroundColor = site.color;
  logo.style.color = site.ink;
  logo.setAttribute("aria-hidden", "true");
  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.textContent = "↗";
  arrow.setAttribute("aria-hidden", "true");
  top.append(logo, arrow);

  const title = document.createElement("h3");
  title.textContent = site.name;
  const description = document.createElement("p");
  description.textContent = site.description;
  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = categoryLabel;
  const link = document.createElement("a");
  link.className = "card-link";
  link.href = site.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${site.name} — открыть сайт в новой вкладке`);

  article.append(top, title, description, category, link);
  return article;
}

function resetFilters() {
  activeCategory = "all";
  searchInput.value = "";
  renderCategories();
  renderSites();
}

searchInput.addEventListener("input", renderSites);
resetButton.addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderSites();
    searchInput.blur();
  }
});

renderCategories();
renderSites();
