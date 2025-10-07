const fs = require("fs");
let path = "src/module-data.js"
if (fs.existsSync(path)) {
  console.log("module-data.js exists.");
  return;
}
const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = []; // tablica z obiektami

fs.readFile("data/names.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //podział łańcucha z imionami na wiersze.
  names = data
    .split("\n")
    .map((s) => s.trim())
    .filter((n) => n.length != 0);
  console.log(names);
  let content = "export const people = [";
  for (let i = 0; i < count; i++) {
    let name = names[~~((Math.random() * names.length) / 1)];
    let birthDate = 1995 + Math.floor(Math.random() * 10);
    let email = `${name.toLocaleLowerCase()}${i}@gmail.com`;
    let phone = `${Math.floor(Math.random() * 999)}-${Math.floor(
      Math.random() * 999
    )}-${Math.floor(Math.random() * 999)}`;
    //losowanie imienia z bilioteki imion
    let json = JSON.stringify({
      id: i,
      name: name,
      birthDate: birthDate,
      email: email,
      phone: phone,
    });
    content += json;
    content += ",";
    // content += `"$}",`;
  }
  content += "];";
  //zapis łańcucha do pliku
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  });
});
