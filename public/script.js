const bugBearTable = document.querySelector(".bugbear-table-section");
const bugBearForm = document.querySelector(".bugbear-form-section");
const bugBearList = document.querySelector(".list");

let body = document.querySelector("body");

window.onload = () => {
  console.log("hi");
  let xhr = new XMLHttpRequest();
  let getUrl = "/get-info";

  let createDom = response => {
    response.forEach(function(obj) {
      let listitem = document.createElement("li");

      // add category p

      let category = document.createElement("p");
      category.textContent = obj.category;

      // add name p

      let name = document.createElement("p");
      name.textContent = obj.name;

      // add rage_level p

      let rageLevel = document.createElement("p");
      rageLevel.textContent = obj.rage_level;

      // add description p

      let description = document.createElement("p");
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
