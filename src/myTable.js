// Class Table diimport dari table.js
import Table from './table';

// Membuat object table dengan data berupa columns dan data yang telah dibuat dari Class Table
const table = new Table({
    // Header Table
    columns: ["Name", "Address" , "Email" ,"Telp"],
    // Row Table
    data: [
        ["JonathanWK" ,"Manado", "jonathankarongkong97@gmail.com", "081212345"],
        ["Yudi H", "Jakarta", "yudiH_official@gmail.com", "081312432"],
    ]
});
// Menangkap Element HTML dengan id app
const app = document.getElementById('app');

// tabel yang sudah dibuat kemudian ditampilkan
table.render(app);