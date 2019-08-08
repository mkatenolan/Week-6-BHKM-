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
      //   bugBearList.setAttribute("style", "display:flex;");
      let paragraph = document.createElement("p");
      paragraph.textContent = obj.category;
      listitem.appendChild(paragraph);

      bugBearList.appendChild(listitem);
      //   console.log("responsechildnode:", response.childNodes);
      //   console.log("obj:", PObj);
      //   console.log("objchildnode:", obj.childNodes);
      //   let pObj = {};
      //   pObj = obj;
      //   pObj.forEach(function(key) {
      //     if (!key.startsWith(id)) {
      //       let paragraph = document.createElement("p");
      //       listitem.appendChild(paragraph);
      //     }
      //   });
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
