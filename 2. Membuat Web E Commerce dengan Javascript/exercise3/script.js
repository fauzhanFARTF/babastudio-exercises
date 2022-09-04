document.body.style.backgroundColor = "rgb(240,255,255)"
const row = document.querySelector('.row');
const row_colmd8 = document.querySelector('.row .col-md-8');

row_colmd8.classList.add('wrapper');

const wrapper = document.querySelector('.row .wrapper');

wrapper.style.backgroundColor = 'white';

// const table =document.querySelector('.table');
const table = document.getElementsByTagName('table')[0];
table.style.color = 'white';
table.style.border = "";


class Produk{
    constructor (nama, harga, kategori ){
        this.nama = nama;
        this.harga = harga;
        this.kategori = kategori;
    };
    // constructor --> class yang perama kali dijalankan
};

// const length_table = document.getElementsByTagName('table').length;


class UI {
    simpanData(produk){
        const list = document.getElementById('data-produk');
        const row = document.createElement('tr');
        let table = document.getElementById('data-collection');
        let num = table.rows.length;

        row.innerHTML = `
            <td>${num}</td>
            <td>${produk.nama}</td>
            <td>Rp. ${produk.harga}</td>
            <td>${produk.kategori}</td>
            <td><a href="#" class="delete">X</a></td>
            `;
        list.appendChild(row);
    };
    clearFields(){
        document.getElementById('nama').value = "";
        document.getElementById('harga').value = "";
        document.getElementById('kategori').value = "";
    };
    deleteProduk(target){
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        };
    };
};


class paketProduk{
    static getPaket(){
        let produk_exercise;
        if (localStorage.getItem('produk_exercise') === null){
            produk_exercise = [];
        } else {
            produk_exercise = JSON.parse(localStorage.getItem('produk_exercise'));
        }
        return produk_exercise;
    };
    static tampilProduk(){
        const produk_exercise = paketProduk.getPaket();

        produk_exercise.forEach(function(produk){
            const ui = new UI;
            ui.simpanData(produk);
        });
    };

    // add data ke local storage
    static addPaket(produk){
        const produk_exercise = paketProduk.getPaket();

        produk_exercise.push(produk);

        localStorage.setItem('produk_exercise', JSON.stringify(produk_exercise));
    };

    // hapus data di local storage
    static deleteData(harga){  
        const produk_exercise = paketProduk.getPaket(); // mengapa pakai parameter harga karena di js tidak ada id 

        produk_exercise.forEach(function(produk,index){
            if(produk.harga === harga){
                produk_exercise.splice(index,1);
            };
        });
        localStorage.setItem('produk_exercise', JSON.stringify(produk_exercise));
    }; 
};

document.addEventListener('DOMContentLoaded', paketProduk.tampilProduk);

document.getElementById('paket-produk').addEventListener('submit', function(e){
    const   nama = document.getElementById('nama').value,
            harga = document.getElementById('harga').value,
            kategori = document.getElementById('kategori').value
            

    const produk = new Produk(nama, harga, kategori);

    const ui = new UI();

    if (nama === "" || kategori === "" || harga ==="") {
        alert("mohon isi data terlebih dahulu !")
    } else {
        ui.simpanData(produk);
        alert("terimakasih data telah disimpan");
        paketProduk.addPaket(produk);
        ui.clearFields();
    }

    e.preventDefault(); // mencegah terjadi reload DOM 
});

document.getElementById('data-produk').addEventListener('click', function(e){
    const ui = new UI();

    ui.deleteProduk(e.target);
    alert ("apakah benar data ingin dihapus");
    let str = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    // paketProduk.deleteData(e.target.parentElement.parentElement.previusElementSibling.textContent);
    paketProduk.deleteData(str.slice(4));
    // previusElementSibling --> mengembalikan element yang sebelumnya yang ditentukan
    e.preventDefault();
    location.reload();
});

