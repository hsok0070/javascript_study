document.querySelector('#exec').addEventListener('click', () => {
    let hor = parseInt(document.querySelector('#hor').value);
    let ver = parseInt(document.querySelector('#ver').value);
    let mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine)
    
    let dataset = [];

    let tbody = document.querySelector('#table tbody');
    for(let i = 0; i < ver; i += 1) {
        let arr = [];
        let tr = document.createElement('tr');
        dataset.push(arr);
        for(let j = 0; j < hor; j += 1) {
            arr.push(1);
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = 1;
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);
});