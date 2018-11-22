// Input: Column (-1, if all), value to search for, document (2-dimensional Array)

export const fil = (spalte: string, expr: string, document: any[][]) => {
  let loop: boolean = false;
  let res: any[][] = new Array();
  if (parseInt(spalte) < 1) {
    loop = true;
  }
  switch (loop) {
    case false:
      res = document.filter(
        row => parseInt(row[parseInt(spalte) - 1]) == parseInt(expr)
      );
      break;
    case true:
      res = document.filter(
        row => row.includes(parseInt(expr)) || row.includes(expr)
      );
      break;
  }
  return res;
};
