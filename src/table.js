// Membuat Library Sederhana yang bisa melakukan generate tabel sesuai data yang diisi

class Table {
    // Membuat Constructor dengan parameter init
    // Dipanggil saat class table digunakan di file lain
    constructor(init) {
        this.init = init;
    }

    // Method Header dengan parameter berupa array 
    // Dipanggil pada file lain sebagai columns
    header(data){
        let open = "<thead class='table-dark'><tr>";
        let close = "</tr></thead>";
        data.map(d => {
        open += `<th>${d}</th>`;
        });

        return open + close;
    }

    // Method Body dengan parameter berupa array 
    // Dipanggil pada file lain sebagai data
    body(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.map(d => {
            return open += `
                <tr>
                ${d[0] ? `<td>${d[0]}</td>` : ``} 
                ${d[1] ? `<td>${d[1]}</td>` : ``} 
                ${d[2] ? `<td>${d[2]}</td>` : ``} 
                ${d[3] ? `<td>${d[3]}</td>` : ``}
                </tr>
            `;
        });

        return open + close;
    }

    // Method Render digunakan untuk merender atau menampilkan element di file lain yang menggunakan class Table
    // Header dan Body dipanggil di method render dan parameternya akan dikirim ke object yang menggunakan class Table
    render(el) {
        let table = 
            "<table class='table table-hover' >" +
            this.header(this.init.columns) +
            this.body(this.init.data) +
            "</table>";
        el.innerHTML = table;
    }
}

export default Table;