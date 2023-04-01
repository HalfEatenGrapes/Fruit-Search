const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const CL = console.log;

const fruit = [
  "Apple🍏",
  "Apricot🍑",
  "Avocado 🥑",
  "Banana🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry🫐",
  "Boysenberry",
  "Currant",
  "Cherry🍒",
  "Coconut🥥",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit🥝",
  "Kumquat",
  "Lemon🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon🥭",
  "Cantaloupe🍈",
  "Honeydew🍈",
  "Watermelon🍉",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange🍊",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach🍑",
  "Pear🍐",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple🍍",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  return results;
}
let currentSearchArr = [];
let currentSearchStr = "";
function searchHandler(e) {
  currentSearchArr.push(e.key);
  CL(currentSearchArr, "is currArr");
  currentSearchStr = currentSearchArr.join("");
  CL(currentSearchStr, "is CurrStr");
}

function showSuggestions(results, inputVal) {
  const lowerV = inputVal.toLowerCase();
  let lowerR = results.map((word) => word.toLowerCase());
  return lowerR.filter(function (search) {
    if (search.includes(lowerV)) {
      return results[lowerR.indexOf(lowerV)];
    }
  });
}

function useSuggestion(e) {}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
