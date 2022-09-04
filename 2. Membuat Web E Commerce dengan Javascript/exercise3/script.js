class Kursus{
    constructor (paket, jenis, harga){
        this.paket = paket;
        this.jenis = jenis;
        this.harga = harga;
    };
    // constructor --> class yang perama kali dijalankan
};

class UI {
    simpanData(kursus){
        const list = document.getElementById('data-paket');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${kursus.paket}</td>
            <td>${kursus.jenis}</td>
            <td>${kursus.harga}</td>
            <td><a href="#" class="delete">X</a></td>
            `;
        list.appendChild(row);
    }
    clearFields(){
        document.getElementById('paket').value = "";
        document.getElementById('jenis').value = "";
        document.getElementById('harga').value = "";
    }
    deleteKursus(target){
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
};

class paketKursus{
    static getPaket(){
        let belajar;
        if (localStorage.getItem('belajar') === null){
            belajar = [];
        } else {
            belajar = JSON.parse(localStorage.getItem('belajar'));
        }
        return belajar;
    };
    static tampilKursus(){
        const belajar = paketKursus.getPaket();

        belajar.forEach(function(kursus){
            const ui = new UI;
            ui.simpanData(kursus);
        });
    };

    // add data ke local storage
    static addPaket(kursus){
        const belajar = paketKursus.getPaket();

        belajar.push(kursus);

        localStorage.setItem('belajar', JSON.stringify(belajar));
    };

    // hapus data di local storage
    static deleteData(harga){  
        const belajar = paketKursus.getPaket(); // mengapa pakai parameter harga karena di js tidak ada id 

        belajar.forEach(function(kursus,index){
            if(kursus.harga === harga){
                belajar.splice(index,1);
            };
        });
        localStorage.setItem('belajar', JSON.stringify(belajar));
    }; 
};

document.addEventListener('DOMContentLoaded', paketKursus.tampilKursus);

document.getElementById('paket-kursus').addEventListener('submit', function(e){
    const   paket = document.getElementById('paket').value,
            jenis = document.getElementById('jenis').value,
            harga = document.getElementById('harga').value

    const kursus = new Kursus(paket, jenis, harga);

    const ui = new UI();

    if (paket === "" || jenis === "" || harga ==="") {
        alert("mohon isi data terlebih dahulu !")
    } else {
        ui.simpanData(kursus);
        alert("terimakasih data telah disimpan");
        paketKursus.addPaket(kursus);
        ui.clearFields();
    }

    e.preventDefault(); // mencegah terjadi reload DOM 
});

document.getElementById('data-paket').addEventListener('click', function(e){

    const ui = new UI();

    ui.deleteKursus(e.target);

    alert ("apakah benar data ingin dihapus");
    paketKursus.deleteData(e.target.parentElement.previusElementSibling.textContent);
    // previusElementSibling --> mengembalikan element yang sebelumnya yang ditentukan
    e.preventDefault();
});

