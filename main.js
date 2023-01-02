const loadCountriesData = async () => {
  const url = `https://restcountries.com/v3.1/all`;
  const res = await fetch(url);
  const countriesData = await res.json();
  // console.log(countriesData);
  displayCountriesData(countriesData);
};
displayCountriesData = countries => {
  console.log(countries[0])
  console.table(countries[0])
  const countriesHTML = countries.map(country =>getCountryHTML(country))
  // console.log(countriesHTML)
  const container = document.getElementById("countries")
  container.innerHTML= countriesHTML.join(" ");
}
const getCountryHTML = country => {
  // console.table(country)
  // console.log(country)
  return `
  <div class="col">
            <div class="card min--100">
              <img src="${country.flags.png}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">Capital: ${country.capital}</p>
                <p class="card-text">continents: ${country.continents}</p>
                <p class="card-text">Population: ${country.population} km</p>
                <p class="card-text">Area: ${country.area} km</p>
                <p class="card-text">Time Zone: ${country.timezones}m</p>

              </div>
            </div>
          </div>

  `
}

loadCountriesData()