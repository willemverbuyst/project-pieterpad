window.addEventListener('load', async () => {
  fetch('http://localhost:4000/v1/pieterpad')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      const tableData = json.data;
      console.log('tableData', tableData);
      if (tableData) {
        const epiloog = tableData[0];
        const tableDataNorth = tableData.filter(
          (data) => data.section === 'North'
        );
        const tableDataSouth = tableData.filter(
          (data) => data.section === 'South'
        );

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
      }
    })
    .catch((error) => console.error(`Fetch problem: ${error.message}`));
});
