var res = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data1) => bar(data1));

var h1 = document.createElement("h1");
h1.className = "text-center";
h1.setAttribute("id", "title");
h1.innerHTML = "Weather Details from Rest Countries";

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function bar(data1) {
  console.log(data1);
  for (var i = 0; i < data1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
    <div class="card text-center">
    <div class="card-header">
    ${data1[i].name.common}
    </div>
    <div class="card-body">
      <img src="${data1[i].flags.png}" class="img-fluid" alt="...">
      <p class="card-text">Capital: ${data1[i].capital}</p>
      <p class="card-text">Region: ${data1[i].region}</p>
      <p class="card-text">Country code: ${data1[i].cioc}</p>
      <button type="button" class="btn btn-outline-secondary" onclick =
        "weather(${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click for Weather</button> 
    </div>
  </div>`;

    row.append(col);
    container.append(row);
    document.body.append(h1, container);
  }
}

function weather(lat, lon) {
  var result = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7078e6da30d728cb34b10f1a9655d21a`
  )
    .then((data2) => data2.json())
    .then((data3) => alert(`Temperature : ${data3.main.temp} Kelvin`));
}
