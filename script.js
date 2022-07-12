const tableData = [
  { from: 'Epiloog', to: '', km: 10, section: 'Noord' },
  { from: 'Pieterburen', to: 'Winsum', km: 12, section: 'Noord' },
  { from: 'Winsum', to: 'Groningen', km: 22, section: 'Noord' },
  { from: 'Groningen', to: 'Zuidlaren', km: 21, section: 'Noord' },
  { from: 'Zuidlaren', to: 'Rolde', km: 17, section: 'Noord' },
  { from: 'Rolde', to: 'Schoonloo', km: 18, section: 'Noord' },
  { from: 'Schoonloo', to: 'Sleen', km: 23, section: 'Noord' },
  { from: 'Sleen', to: 'Coevorden', km: 21, section: 'Noord' },
  { from: 'Coevorden', to: 'Hardenberg', km: 19, section: 'Noord' },
  { from: 'Hardenberg', to: 'Ommen', km: 21, section: 'Noord' },
  { from: 'Ommen', to: 'Hellendoorn', km: 21, section: 'Noord' },
  { from: 'Hellendoorn', to: 'Holten', km: 15, section: 'Noord' },
  { from: 'Holten', to: 'Laren', km: 15, section: 'Noord' },
  { from: 'Laren', to: 'Vorden', km: 14, section: 'Noord' },
  { from: 'Vorden', to: 'Zelhem', km: 17, section: 'Zuid' },
  { from: 'Zelhem', to: 'Braamt', km: 17, section: 'Zuid' },
  {
    from: 'Braamt',
    to: 'Millingen a/d Rijn',
    km: 24,
    section: 'Zuid',
  },
  {
    from: 'Millingen a/d Rijn',
    to: 'Groesbeek',
    km: 20,
    section: 'Zuid',
  },
  { from: 'Groesbeek', to: 'Gennep', km: 14, section: 'Zuid' },
  { from: 'Gennep', to: 'Vierlingsbeek', km: 18, section: 'Zuid' },
  { from: 'Vierlingsbeek', to: 'Swolgen', km: 23, section: 'Zuid' },
  { from: 'Swolgen', to: 'Venlo', km: 21, section: 'Zuid' },
  { from: 'Venlo', to: 'Swalmen', km: 23, section: 'Zuid' },
  { from: 'Swalmen', to: 'Montfort', km: 21, section: 'Zuid' },
  { from: 'Montfort', to: 'Sittard', km: 23, section: 'Zuid' },
  { from: 'Sittard', to: 'Strabeek', km: 22, section: 'Zuid' },
  {
    from: 'Strabeek',
    to: 'Sint Pietersberg',
    km: 17,
    section: 'Zuid',
  },
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('container').appendChild(table);

const headerRow = document.createElement('tr');

const headerStage = document.createElement('th');
headerStage.innerText = 'etappe';
headerStage.classList.add('stage');

const headerFrom = document.createElement('th');
headerFrom.innerText = 'van';
headerFrom.classList.add('from');

const headerTo = document.createElement('th');
headerTo.innerText = 'naar';
headerTo.classList.add('to');

const headerKM = document.createElement('th');
headerKM.innerText = 'km';
headerKM.classList.add('km');

headerRow.appendChild(headerStage);
headerRow.appendChild(headerFrom);
headerRow.appendChild(headerTo);
headerRow.appendChild(headerKM);
thead.appendChild(headerRow);

tableData.forEach((data, i) => {
  const row = document.createElement('tr');

  const stage = document.createElement('td');
  stage.innerText = i;
  stage.classList.add('stage');

  const from = document.createElement('td');
  from.innerText = data.from;
  from.classList.add('from');

  const to = document.createElement('td');
  to.innerText = data.to;
  to.classList.add('to');

  const km = document.createElement('td');
  km.innerText = data.km;
  km.classList.add('km');

  row.appendChild(stage);
  row.appendChild(from);
  row.appendChild(to);
  row.appendChild(km);
  tbody.appendChild(row);
});
