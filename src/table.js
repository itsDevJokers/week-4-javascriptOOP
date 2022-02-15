class Table {
    constructor(init) {
        this.init = init;
    }

    header(data){
        let open = "<thead class='table-dark'><tr>";
        let close = "</tr></thead>";
        data.map(d => {
        open += `<th>${d}</th>`;
        });

        return open + close;
    }

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