import Table from './table';

const table = new Table({
    columns: ["Name", "Address" , "Email" ,"Telp"],
    data: [
        ["JonathanWK" ,"Manado", "jonathankarongkong97@gmail.com", "081212345"],
        ["Yudi H", "Jakarta", "yudiH_official@gmail.com", "081312432"],
    ]
});
const app = document.getElementById('app');
table.render(app);