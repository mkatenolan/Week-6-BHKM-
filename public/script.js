const bugBearTable = document.querySelector(".bugbear-table-section");
const bugBearForm = document.querySelector(".bugbear-form-section");

let body = document.querySelector("body");

window.onload = () => {
  console.log("hi");
  let xhr = new XMLHttpRequest();
  let getUrl = "/get-info";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log("This is response:", response);
    }
  };
  xhr.open("GET", getUrl, true);
  xhr.send();
};
