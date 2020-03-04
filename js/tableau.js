export default function tableau() {
    const table = document.getElementById("carte");
    for( let i = 0; i < 10; i++ ){
        const row = document.createElement("tr");
        for( let j = 0; j < 10; j++ ){
            const col = document.createElement("td");
            col.id = (i*10)+j + 1;
            row.appendChild(col);

        }
        table.appendChild(row);
    }
};
