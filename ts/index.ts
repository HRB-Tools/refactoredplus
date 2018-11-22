import { clicktouch } from "./clicktouch";
import { load } from "./fileio";
import { tm } from "./tm";
import { fil } from "./fil";

let csvDocument;
let globalArg;

async function main() {
  const csvText = await load();
  const rows: string[] = (<string>csvText).split("\n");
  const csv: any[] = [];
  rows.forEach(element => {
    let row: any[] = element.split(";");
    csv.push(row);
  });
  csvDocument = csv;
  globalArg = csvDocument;
}

function display() {
  let divEl = document.createElement("div");
  divEl.innerHTML = tm(globalArg);
  document.body.appendChild(divEl);
}

function filter() {
  let spalte = prompt("Spalte: ");
  let expression = prompt("Wert: ");
  globalArg = fil(spalte, expression, globalArg);
  display();
  globalArg = csvDocument;
}

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    clicktouch("#csv", main);
    clicktouch("#display", display);
    clicktouch("#filter", filter);
  }
};
