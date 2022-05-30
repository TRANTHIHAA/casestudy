class Product {
    name;
    image;
    gia;

    constructor(name, image, gia) {
        this.name = name;
        this.image = image;
        this.gia=gia
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }
    getGia() {
        return this.gia;
    }


    setName(name) {
        this.name = name;
    }

    setImage(image) {
        this.image = image;
    }

    setGia(gia) {
        this.gia=gia;
    }

}

let mon1 = new Product("チャハン", "img/img_2.png",200000)
let mon2 = new Product("からあげ","img/img_3.png", 200000)
let mon3 = new Product("ファミリセット", "img/img_4.png", 200000)
let mon4 = new Product("さもん",  "img/img_9.png",200000)
let mon5 = new Product("刺身", "img/img_5.png",200000)
let mon6 = new Product("牛丼", "img/img_6.png",200000)
let arrayMon = [mon1, mon2, mon3, mon4, mon5, mon6];


//hàm tạo list
function showElement(array) {
    let content = "<table>";
    for (let i = 0; i < array.length; i++) {
        content += "<tr>";

        content += "<td>"
        content += "<img  alt='Lỗi' width='400px' height='300px' src=" + array[i].image + ">"
        content += "<h2>" + array[i].name + "</h2>"
        content += "<p>Giá: " + array[i].gia + " VND</p>"
        if (!checkAdmin()) {
            content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + ',\"' + array[i] + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
            content += "<button onclick='deleteProduct(" + array[i]  + ")'>&nbsp;Xóa&nbsp;</button>"
        }

        content += "</td>"

        content += "</tr>"
        content += "</table>"+"<br>"+"<br>"
        document.getElementById("displayElement").innerHTML = content;
    }
}
     showElement(arrayMon)

function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("poster").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='giaodiennhahang.html'>Đăng xuất</a></div>"
        document.getElementById("poster").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}

function renderEdit(text) {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='editForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("poster").innerHTML = data
}

function cancelEdit() {
    document.getElementById("poster").innerHTML = "";
}

function editForm() {
    let name = document.getElementById("name").value
    let gia = document.getElementById("price").value
    let image = document.getElementById("image").value
    let i = localStorage.getItem("indexI")
    arrayMon[i] = new Product(name, image, gia)
    showElement(arrayMon)
    cancelEdit()
}

function editProduct(i) {
    localStorage.setItem("indexI", i)
    {
        renderValueEdit(arrayMon[i])
    }
}

function renderValueEdit(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getGia()
    document.getElementById("image").value = product.getImage()

}
function reRender() {
    showElement(arrayMon)
}
function deleteProduct(n) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayMon.getName() + "?")) {
        arrayMon.splice(n, 1)
    }
    reRender()
}


