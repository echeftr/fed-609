const unique = (items, item) => {
  if (!Array.isArray(items)) items = [];
  if (!items.includes(item)) items.push(item);
  return items;
};

const seeCountries = (personData) =>
  personData
    .map((person) => person.region)
    .reduce(unique)
    .sort();

const emptyResultList = () =>
  (document.querySelector(".results").innerHTML = "");

const addToResultList = (li) =>
  document.querySelector(".results").appendChild(li);

document.querySelectorAll("nav input").forEach((input) =>
  input.addEventListener("click", () => {
    emptyResultList();
  })
);

const generateCountryHTML = (country) => {
  const li = document.createElement("li");
  li.innerHTML = country;
  return li;
};

const displayCountries = () =>
  seeCountries(randomPersonData)
    .map(generateCountryHTML)
    .forEach(addToResultList);

document
  .querySelector(".countries")
  .addEventListener("click", displayCountries);
