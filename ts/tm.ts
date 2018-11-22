// Unpacks two-dimensional array into html table

export const tm = (csv: any[][]) => {
  let htmlDoc = "";
  csv.forEach(element => {
    let row = "";
    element.forEach(innerElem => {
      row += `<td>${innerElem}</td>`;
    });
    htmlDoc += "<tr>" + row + "</tr>";
  });

  return `<table>${htmlDoc}</table>`;
};
