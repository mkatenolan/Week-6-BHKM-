const bugBearTable = document.querySelector(".bugbear-table-section");
const bugBearForm = document.querySelector(".bugbear-form-section");
const bugBearList = document.querySelector(".list");
const guestButton = document.querySelector(".guestButton");
// const logoutButton = document.querySelector(".logout-button");

const body = document.querySelector("body");

window.onload = () => {
  console.log("hi");
  const xhr = new XMLHttpRequest();
  const getUrl = "/get-info";

  const createDom = response => {
    response.forEach(function(obj) {
      let listitem = document.createElement("tr");


      let category = document.createElement("td");

      category.textContent = obj.category;




      let name = document.createElement("td");
      name.textContent = obj.name;





      let rageLevel = document.createElement("td");
      rageLevel.textContent = obj.rage_level;

      let description = document.createElement("td");
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

guestButton.addEventListener('click', (e) => {
  document.cookie = "logged_in= 'false'";
})
//
// const description = document.querySelector('.description');
// // // const rage = document.querySelector(".rage");
// // // const category = document.querySelector(".category");
// // //
// description.addEventListener('focus', (e) => {
//   if(document.cookie.includes('false')){
//     alert('Please login to leave a rant')
//   });
// }, true);
