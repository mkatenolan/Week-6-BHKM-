const bugBearTable = document.querySelector(".bugbear-table-section");
const bugBearForm = document.querySelector(".bugbear-form-section");
const bugBearList = document.querySelector(".list");

// const logoutButton = document.querySelector(".logout-button");

const body = document.querySelector("body");

window.onload = () => {
  console.log("hi");
  const xhr = new XMLHttpRequest();
  const getUrl = "/get-info";

  const createDom = response => {
    response.forEach(function(obj) {
      const listitem = document.createElement("li");

      // add category p

      const category = document.createElement("p");
      category.textContent = obj.category;

      // add name p

      const name = document.createElement("p");
      name.textContent = obj.name;

      // add rage_level p

      const rageLevel = document.createElement("p");
      rageLevel.textContent = obj.rage_level;

      // add description p

      const description = document.createElement("p");
      description.textContent = obj.description;

      // append children
      listitem.appendChild(category);
      listitem.appendChild(name);
      listitem.appendChild(rageLevel);
      listitem.appendChild(description);

      bugBearList.appendChild(listitem);
    });
  };

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      createDom(response);
      console.log("This is response:", response);
    }
  };
  xhr.open("GET", getUrl, true);
  xhr.send();
};

const description = document.querySelector(".description");
const rage = document.querySelector(".rage");
const category = document.querySelector(".category");
