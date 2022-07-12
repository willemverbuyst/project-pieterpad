const tableData = [
  { ettape: 'Epiloog', km: 10 },
  { ettape: 'Pieterburen - Winsum', km: 12 },
  { ettape: 'Winsum - Groningen', km: 22 },
  { ettape: 'Groningen - Zuidlaren', km: 21 },
  { ettape: 'Zuidlaren - Rolde', km: 17 },
  { ettape: 'Rolde - Schoonloo', km: 18 },
  { ettape: 'Schoonloo - Sleen', km: 23 },
  { ettape: 'Sleen - Coevorden', km: 21 },
  { ettape: 'Coevorden - Hardenberg', km: 19 },
  { ettape: 'Hardenberg - Ommen', km: 21 },
  { ettape: 'Ommen - Hellendoorn', km: 21 },
  { ettape: 'Hellendoorn - Holten', km: 15 },
  { ettape: 'Holten - Laren', km: 15 },
  { ettape: 'Laren - Vorden', km: 14 },
  { ettape: 'Vorden - Zelhem', km: 17 },
  { ettape: 'Zelhem - Braamt', km: 17 },
  { ettape: 'Braamt - Millingen a/d Rijn', km: 24 },
  { ettape: 'Millingen a/d Rijn - Groesbeek', km: 20 },
  { ettape: 'Groesbeek - Gennep', km: 14 },
  { ettape: 'Gennep - Vierlingsbeek', km: 18 },
  { ettape: 'Vierlingsbeek - Swolgen', km: 23 },
  { ettape: 'Swolgen - Venlo', km: 21 },
  { ettape: 'Venlo - Swalmen', km: 23 },
  { ettape: 'Swalmen - Montfort', km: 21 },
  { ettape: 'Montfort - Sittard', km: 23 },
  { ettape: 'Sittard - Strabeek', km: 22 },
  { ettape: 'Strabeek - Sint Pietersberg', km: 17 },
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('container').appendChild(table);

const headerRow = document.createElement('tr');
const headerStage = document.createElement('th');
headerStage.innerText = 'Etappes';
const headerKM = document.createElement('th');
headerKM.classList.add('km');
headerKM.innerText = 'km';

headerRow.appendChild(headerStage);
headerRow.appendChild(headerKM);
thead.appendChild(headerRow);

tableData.forEach((data) => {
  const row = document.createElement('tr');
  const etappe = document.createElement('td');
  etappe.innerText = data.ettape;
  const km = document.createElement('td');
  km.classList.add('km');
  km.innerText = data.km;

  row.appendChild(etappe);
  row.appendChild(km);
  tbody.appendChild(row);
});
