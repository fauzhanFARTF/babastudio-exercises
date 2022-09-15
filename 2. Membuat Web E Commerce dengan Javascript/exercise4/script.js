document.body.style.backgroundColor = "rgb(240,255,255)"
const row = document.querySelector('.row');
const row_colmd8 = document.querySelector('.row .col-md-8');

row_colmd8.classList.add('wrapper');

const wrapper = document.querySelector('.row .wrapper');

wrapper.style.backgroundColor = 'white';



const StorageCtrl = (function(){
    return {
        paketKursus : function(item){
            let items;
            if (localStorage.getItem('items')===null){
                items = [];

                items.push(item);

                localStorage.setItem('items',JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));
            }
        },

        getItemsFromStorage: function(){
            let items;

            if(localStorage.getItem('items')=== null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'))
            }
            return items;
        },

        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                };
            });
            localStorage.setItem('items', JSON.stringify(items));
        },

        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item,index){
                if(id === item.id){
                    items.splice(index,1);
                };
            });
            localStorage.setItem('items',JSON.stringify(items));
        }
    };
})();




const ItemCtrl = (function(){
    const Item = function(id, nama, harga, kategori){
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.kategori = kategori;
    };

    const data = {
        // items: [
        //     // {id: 0, namaProduk: 'Buku', hargaProduk: '10000', kategoriProduk: 'Alat Tulis'},
        //     // {id: 1, namaProduk: 'Pulpen', hargaProduk: '5000', kategoriProduk: 'Alat Tulis'},
        //     // {id: 2, namaProduk: 'Sarden', hargaProduk: '8000', kategoriProduk: 'Makanan Kaleng'}
        // ],
        items : StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalHarga: 0
    };

    return {
        getItems: function(){
            return data.items;
        },

        addItem: function(nama, harga, kategori){
            // console.log(nama, harga, kategori);
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length-1].id + 1;
            } else {
                ID = 0;
            }
            harga = parseInt(harga);

            newItem = new Item(ID, nama, harga, kategori);

            data.items.push(newItem);

            return newItem;
        },

        getItemById: function(id){
            // buat id
            let found = null;

            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                };
            });

            return found;
        },

        updateItem: function(nama, harga, kategori){
            harga = parseInt(harga);

            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.nama = nama;
                    item.harga = harga;
                    item.kategori = kategori;
                    found = item;
                }
            });

            return found;
        },

        deleteItem: function(id){
            // get id
            const ids = data.items.map(function(item){
                // console.log(item.id)
                return item.id;
            });

            const index = ids.indexOf(id);

            data.items.splice(index,1);

        },

        setCurrentItem: function(item){
            data.currentItem = item;
        },

        getCurrentItem: function(){
            // mengambil data berdasarkan item yang sudah dibuat/diclick
            // console.log(data.currentItem);
            return data.currentItem;

        },

        getTotalHarga: function(){
            let total = 0;

            // looping item dan tambah class
            data.items.forEach(function(item){
                total += item.harga;
            });

            // set total data
            data.totalHarga = total;

            // return total
            return data.totalHarga;

        },
        logData: function(){
            return data;
        }
    };
})();

const UICtrl = (function (){
    const UISelector = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        listItems: '#item-list tr',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-item',
        backBtn : '.back-btn',
        itemNamaProduk: '#nama',
        itemHargaProduk: '#harga',
        itemKategoriProduk: '#kategori',
        totalHarga: '.total-harga'
    };

    return {
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item) {
            html += 
                `<tr id="item-${item.id}">
                    <td>${item.id + 1}</td>
                    <td>${item.nama}</td>
                    <td>Rp. ${item.harga}</td>
                    <td>${item.kategori}</td>
                    <td>
                        <a href="#" class="secondary-content">
                            <i class="edit-item">edit</i>
                        </a>
                        <a href="#" class="secondary-content">
                            <i class="delete-item">delete</i>
                        </a>
                    </td>
                </tr> `;
            });
            document.querySelector(UISelector.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                nama: document.querySelector(UISelector.itemNamaProduk).value,
                harga: document.querySelector(UISelector.itemHargaProduk).value,
                kategori: document.querySelector(UISelector.itemKategoriProduk).value
            }
        },
        //menampilkan data yang di insert ke browser
        addListItem: function(item){
            document.querySelector(UISelector.itemList);
            const tr = document.createElement('tr');
            tr.className = `collection-item`;
            tr.id = `item-${item.id}`;
            tr.innerHTML = 
                `
                    <td>${item.id + 1}</td>
                    <td>${item.nama}</td>
                    <td>Rp. ${item.harga}</td>
                    <td>${item.kategori}</td>
                    <td>
                        <a href="#" class="secondary-content">
                            <i class="edit-item">edit</i>
                        </a>
                        <a href="#" class="secondary-content">
                            <i class="delete-item">delete</i>
                        </a>
                    </td>`;
            document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend',tr);
        },

        updatelistItem: function(item){
            let listItems = document.querySelectorAll(UISelector.listItems);

            listItems = Array.from(listItems)
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){

                    document.querySelector(`#${itemID}`).innerHTML = `<tr class="collection" id="item-${item.id}">
                                                                                <td>${item.id + 1}</td>
                                                                                <td>${item.nama}</td>
                                                                                <td>Rp. ${item.harga}</td>
                                                                                <td>${item.kategori}</td>
                                                                                <td>
                                                                                    <a href="#" class="secondary-content">
                                                                                        <i class="edit-item">edit</i>
                                                                                    </a>
                                                                                    <a href="#" class="secondary-content">
                                                                                        <i class="delete-item">delete</i>
                                                                                    </a>
                                                                                </td>
                                                                         </tr>`;
                };
            });
        },

        deleteListItem: function(id){

            const itemID = `#item-${id}`;
            
            const item = document.querySelector(itemID);
            item.remove();

        },
        

        clearInput: function(){
            document.querySelector(UISelector.itemNamaProduk).value = '',
            document.querySelector(UISelector.itemHargaProduk).value = '',
            document.querySelector(UISelector.itemKategoriProduk).value = ''
        },

        // ketika klik edit data masuk ke form
        addItemToForm: function(){
            document.querySelector(UISelector.itemNamaProduk).value = ItemCtrl.getCurrentItem().nama,
            document.querySelector(UISelector.itemHargaProduk).value = ItemCtrl.getCurrentItem().harga,
            document.querySelector(UISelector.itemKategoriProduk).value = ItemCtrl.getCurrentItem().kategori,

            // console.log(document.querySelector(UISelector.itemNamaProduk).value);

            UICtrl.showEditState();
        },

        hideList: function(){
            // document.querySelector(UISelector.itemList).style.display = 'none';
        },

        showTotalHarga: function(totalHarga){
            document.querySelector(UISelector.totalHarga).textContent = totalHarga;
        },

        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelector.updateBtn).style.display = 'none';
            // document.querySelector(UISelector.deleteBtn).style.display = 'none';
            // document.querySelector(UISelector.backBtn).style.display = 'none';
            document.querySelector(UISelector.addBtn).style.display = 'inline';
        },

        showEditState: function(){
            document.querySelector(UISelector.updateBtn).style.display = 'inline';
            // document.querySelector(UISelector.deleteBtn).style.display = 'inline';
            // document.querySelector(UISelector.backBtn).style.display = 'inline';
            document.querySelector(UISelector.addBtn).style.display = 'none';
        },

        getSelectors: function(){
            return UISelector;
        }
    }
})();

const App = (function(ItemCtrl, StorageCtrl, UICtrl){

    const loadEventListeners = function(){
        const UISelector = UICtrl.getSelectors();

        document.querySelector(UISelector.addBtn).addEventListener('click',itemAddSubmit);
        document.querySelector(UISelector.itemList).addEventListener('click',itemEditClick);
        document.querySelector(UISelector.updateBtn).addEventListener('click',itemUpdateSubmit);
        document.querySelector(UISelector.deleteBtn).addEventListener('click',itemDeleteSubmit);
    };

    const itemAddSubmit = function(e){
        const input = UICtrl.getItemInput();

        if (input.nama !== '' && input.harga !== '' && input.kategori !== ''){

            const newItem = ItemCtrl.addItem(input.nama, input.harga, input.kategori);

            // Menambah list Item ke dalam browser
            UICtrl.addListItem(newItem);

            const totalHarga = ItemCtrl.getTotalHarga();

            // Menampilkan Total Harga di browser
            UICtrl.showTotalHarga(totalHarga);

            StorageCtrl.paketKursus(newItem);

            // Menghapus Input Ketika Sudah di Submit
            UICtrl.clearInput();

        } else {
            alert ('Data Tidak Boleh Kosong');
        }
        e.preventDefault();
    };


    const itemEditClick = function(e){
        if (e.target.classList.contains('edit-item')){

            // mengambil list item berdasarkan id
            const listId = e.target.parentNode.parentNode.parentNode.id;
            // masuk kedalam sebuah array
            const listIdArr = listId.split('-');
            // Ambil ID yang sebenarnya
            const id = parseInt(listIdArr[1]);
            // ambil item
            const itemToEdit= ItemCtrl.getItemById(id);

            ItemCtrl.setCurrentItem(itemToEdit);

            UICtrl.addItemToForm();
        };
        e.preventDefault;
    };

    const itemUpdateSubmit = function(e){

        // untuk mengambil nilai inputan
        const input = UICtrl.getItemInput();

        const updatedItem = ItemCtrl.updateItem(input.nama, input.harga, input.kategori);

        UICtrl.updatelistItem(updatedItem);

        const totalHarga = ItemCtrl.getTotalHarga();

        UICtrl.showTotalHarga(totalHarga);

        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault;
    };

    const itemDeleteSubmit= function(e){

        // untuk mengambil item yang akan kita hapus 
        const currentItem = ItemCtrl.getCurrentItem();
        console.log(currentItem)

        // Untuk menghapus struktur data berdasarkan ID
        ItemCtrl.deleteItem(currentItem.id);

        // Untuk Menghapus Form di UI
        UICtrl.deleteListItem(currentItem.id)

        const totalHarga = ItemCtrl.getTotalHarga();

        UICtrl.showTotalHarga(totalHarga);

        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();
        
        e.preventDefault();

    };
    return {
        init: function(){
            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();
            if(items.length === 0){
                UICtrl.hideList();
            } else {
                UICtrl.populateItemList(items);
            };

            const totalHarga = ItemCtrl.getTotalHarga();
            // Menampilkan Total Harga di browser
            UICtrl.showTotalHarga(totalHarga);

            loadEventListeners();

        }
    }
})(ItemCtrl, StorageCtrl, UICtrl)

App.init();


// cek di console
// ItemCtrl.logData()



