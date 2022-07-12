const tableData = [
  { from: '', to: '', km: 10, section: 'Epilogue' },
  { from: 'Pieterburen', to: 'Winsum', km: 12, section: 'North' },
  { from: 'Winsum', to: 'Groningen', km: 22, section: 'North' },
  { from: 'Groningen', to: 'Southlaren', km: 21, section: 'North' },
  { from: 'Southlaren', to: 'Rolde', km: 17, section: 'North' },
  { from: 'Rolde', to: 'Schoonloo', km: 18, section: 'North' },
  { from: 'Schoonloo', to: 'Sleen', km: 23, section: 'North' },
  { from: 'Sleen', to: 'Coevorden', km: 21, section: 'North' },
  { from: 'Coevorden', to: 'Hardenberg', km: 19, section: 'North' },
  { from: 'Hardenberg', to: 'Ommen', km: 21, section: 'North' },
  { from: 'Ommen', to: 'Hellendoorn', km: 21, section: 'North' },
  { from: 'Hellendoorn', to: 'Holten', km: 15, section: 'North' },
  { from: 'Holten', to: 'Laren', km: 15, section: 'North' },
  { from: 'Laren', to: 'Vorden', km: 14, section: 'North' },
  { from: 'Vorden', to: 'Zelhem', km: 17, section: 'South' },
  { from: 'Zelhem', to: 'Braamt', km: 17, section: 'South' },
  {
    from: 'Braamt',
    to: 'Millingen a/d Rijn',
    km: 24,
    section: 'South',
  },
  {
    from: 'Millingen a/d Rijn',
    to: 'Groesbeek',
    km: 20,
    section: 'South',
  },
  { from: 'Groesbeek', to: 'Gennep', km: 14, section: 'South' },
  { from: 'Gennep', to: 'Vierlingsbeek', km: 18, section: 'South' },
  { from: 'Vierlingsbeek', to: 'Swolgen', km: 23, section: 'South' },
  { from: 'Swolgen', to: 'Venlo', km: 21, section: 'South' },
  { from: 'Venlo', to: 'Swalmen', km: 23, section: 'South' },
  { from: 'Swalmen', to: 'Montfort', km: 21, section: 'South' },
  { from: 'Montfort', to: 'Sittard', km: 23, section: 'South' },
  { from: 'Sittard', to: 'Strabeek', km: 22, section: 'South' },
  {
    from: 'Strabeek',
    to: 'Sint Pietersberg',
    km: 17,
    section: 'South',
  },
];

const epiloog = tableData[0];
const tableDataNorth = tableData.filter((data) => data.section === 'North');
const tableDataSouth = tableData.filter((data) => data.section === 'South');

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('tableContainer').appendChild(table);

function createTitles(titles) {
  const row = document.createElement('tr');

  titles.forEach((title) => {
    const header = document.createElement('th');
    header.innerText = title;
    header.classList.add(title);
    row.appendChild(header);
  });

  thead.appendChild(row);
}

let counter = 0;

function createTableRow(dataForTable) {
  const row = document.createElement('tr');
  const header = document.createElement('td');
  header.colSpan = 4;
  header.innerText = dataForTable[0].section;
  header.classList.add('header');
  row.appendChild(header);
  tbody.appendChild(row);

  dataForTable.forEach((data) => {
    const row = document.createElement('tr');

    const stage = document.createElement('td');
    stage.innerText = counter;
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

    counter += 1;
  });
}

createTitles(['stage', 'from', 'to', 'km']);
createTableRow([epiloog]);
createTableRow(tableDataNorth);
createTableRow(tableDataSouth);
