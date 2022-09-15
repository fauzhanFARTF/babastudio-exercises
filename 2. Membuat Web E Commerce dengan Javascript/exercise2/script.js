document.body.style.backgroundImage = "linear-gradient(to top right, rgb(217,66,119), rgb(121,65,118))";
const row = document.querySelector('.row');
const row_colmd8 = document.querySelector('.row .col-md-8');
row_colmd8.classList.add('wrapper');
const wrapper = document.querySelector('.row .wrapper');
wrapper.style.backgroundColor = 'white';

// const form = document.querySelector('#task-form');
// const namaInput = document.querySelector('#nama');
// const jenisInput = document.querySelector('#jenis');
// const hpInput = document.querySelector('#nohp');
// const alamatInput = document.querySelector('#alamat');
// const dataRegistrasi = document.querySelector('#data-registrasi');

// loadEventListener();

// function loadEventListener(){
//     // document.addEventListener('DOMContentLoaded', ambilTugas);
//     form.addEventListener('submit', addRegistrasi)
//     // taskList.addEventListener("click", removeTask); // Menghapus Hanya Beberapa Data
// }


// function addRegistrasi(e){
//     if (namaInput.value === "" || jenisInput.value === "" || hpInput.value === "" || alamatInput.value === "") {
//         alert("Data Inputan Tidak Boleh Kosong");
//     } else {
//         alert ("Data Berhasil Disimpan")
//         const list = document.getElementById('data-registrasi');
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${document.getElementsByTagName('tr').length}</td>
//             <td>${namaInput.value}</td>
//             <td>${jenisInput.value}</td>
//             <td>${hpInput.value}</td>
//             <td>${alamatInput.value}</td>
//             <td><a href="#" class="delete">X</a></td>
//         `;

//         list.appendChild(row);

//         namaInput.value = "";
//         jenisInput.value ="";
//         hpInput.value = "";
//         alamatInput.value = "";
//     };
//     e.preventDefault();


// };

// function removeTask(e) {
//     // Function Membuat Event Menghapus Beberapa Data Task
//     if (e.target.className === "delete") {
//         e.target.parentElement.parentElement.remove();
//     };
// };




const form            = document.querySelector('#register');
const regList         = document.querySelector('#regList');
const namaInput       = document.querySelector('#name');
const genderInput     = document.querySelector('#gender');
const noHpInput       = document.querySelector('#hp');
const addressInput    = document.querySelector('#address');

loadEventListeners();

function loadEventListeners() {
    
    document.addEventListener('DOMContentLoaded', ambilReg);

    form.addEventListener('submit', addReg);
    regList.addEventListener('click', removeReg);
}

// Fungsi untuk menampilkan data dari Localstorage
function ambilReg() {
    let regs;

    if(localStorage.getItem('regs') === null) {
        regs = [];
    }
    else {
        regs = JSON.parse(localStorage.getItem('regs'));
    }

    // Untuk menampilkan data dari Localstorage
    regs.forEach(function(reg) {

        let tr = document.createElement('tr');
        tr.innerHTML = reg;
        
        regList.appendChild(tr);
    });
}

function addReg(e) {
    if (namaInput.value =='' || genderInput.value=='' || noHpInput.value=='' || addressInput.value=='') {
        alert ('Semua data harus diisi')
    }

    
    alert ("Data Berhasil Disimpan");
        const list = document.getElementById('regList');
        const row = document.createElement('tr');
        // const table = document.getElementById('tabel-regList');
        // let num = table.rows.length;

        // row.innerHTML = `
        //     <td>${document.getElementsByTagName('tr').length}</td>
        //     <td>${namaInput.value}</td>
        //     <td>${genderInput.value}</td>
        //     <td>${noHpInput.value}</td>
        //     <td>${addressInput.value}</td>
        //     <td><a class='delete-item'><i class="btn btn-danger text-center">Hapus Data</i></a></td>
        // `;

        // list.appendChild(row);
        // simpanData(list.innerHTML);

    let trVar = document.getElementsByTagName('tr').length;
    let id = document.createTextNode(trVar);
    let nama = document.createTextNode(namaInput.value);
    let gender = document.createTextNode(genderInput.value);
    let noHp = document.createTextNode(noHpInput.value);
    let address = document.createTextNode(addressInput.value);

    let link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '<i class="btn btn-danger text-center">Hapus Data</i>';
    

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    td1.appendChild(id);
    td2.appendChild(nama);
    td3.appendChild(gender);
    td4.appendChild(noHp);
    td5.appendChild(address);
    td6.appendChild(link);

    let tr = document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    regList.appendChild(tr);


    // Untuk mengubah ke bentuk html untuk disimpan ke dalam Localstorage
    simpanData(tr.innerHTML);

    namaInput.value = '';
    genderInput.value = '';
    noHpInput.value = '';
    addressInput.value = '';

    e.preventDefault();

}

// Fungsi untuk menyimpan data ke dalam Localstorage
function simpanData(reg) {
    let regs;
    if(localStorage.getItem('regs') === null) {
        regs = [];
    }
    else {
        regs = JSON.parse(localStorage.getItem('regs'));
    }

    regs.push(reg);

    localStorage.setItem('regs', JSON.stringify(regs));
}

// Fungsi untuk menghapus data
function removeReg(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('apakah anda yakin ingin menghapus data ?')) {
            e.target.parentElement.parentElement.parentElement.remove();
        }
    }

    hapusDataLocal(e.target.parentElement.parentElement.parentElement);
}

// Fungsi Untuk menghapus data dari Localstorage
function hapusDataLocal(regItem) {
    let regs;
    if(localStorage.getItem('regs') === null) {
        regs = [];
    }
    else {
        regs = JSON.parse(localStorage.getItem('regs'));
    }

    regs.forEach(function(reg,index) {
        if(regItem.innerHTML === reg) {
            regs.splice(index, 1);
        }
    });

    localStorage.setItem('regs', JSON.stringify(regs));
}