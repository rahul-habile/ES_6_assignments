const BASE_URL = 'https://jsonplaceholder.typicode.com';

const comments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    const commentData = response.data;

    $(".container")[$(".container").length-1].innerHTML += '<table class="table table-light table-hover"></table>'
    let table = $("table")[$("table").length-1];
    generateTableHead(table,Object.keys(commentData[0]));
    generateTable(table,commentData);

  } catch (errors) {
    console.log(errors);
  }
};

function generateTableHead(table, data) {
  console.log(data);
  let thead = table.createTBody();
  let row = thead.insertRow();
  for (let key of data) {
    if (key != "body") {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th); 
    }
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      console.log(key);
      if (key != "body") {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text); 
      }
    }
  }
}

comments();