import Producto from "./producto.js";
import Inventario from "./inventario.js";

class App {
    constructor(){
        this._inventario = new Inventario();
        this._tabla = document.querySelector("#table");

        let btnAdd = document.querySelector('#btnAdd');
        btnAdd.addEventListener('click',this._addProduct);

        let btnDelete = document.querySelector('#btnDelete');
        btnDelete.addEventListener('click',this._deleteProduct);

        let btnFind = document.querySelector('#btnFind');
        btnFind.addEventListener('click',this._findProduct);

        let btnList = document.querySelector('#btnList');
        btnList.addEventListener('click',this._listProduct);

        let btnInvert = document.querySelector('#btnInvert');
        btnInvert.addEventListener('click',this._invertProduct);

        let btnPosition = document.querySelector('#btnPosition');
        btnPosition.addEventListener('click',this._positionProduct);
    }

    _addProduct = () => {
        let codigo = document.getElementById('codigo').value; 
        let nombre = document.getElementById('nombre').value; 
        let cantidad = document.getElementById('cantidad').value; 
        let costo = document.getElementById('costo').value; 
        let posicion = document.getElementById('posicion').value; 
        let producto = new Producto(codigo, nombre, cantidad, costo, posicion); 

        if(this._inventario.crear(producto) == false){
            Swal.fire("Error", "Este código ya está registrado o su inventario está lleno", "error");
            return;
        }

        this._inventario.crear(producto);
        this._addToTable(producto);
    }

    _deleteProduct = () => {
        let codigo = document.getElementById('codigo').value;

        this._inventario.eliminar(producto);
        this._addToTable(producto);
    }

    
    _addToTable(producto){
        let row =this._tabla.insertRow(-1);

        let colCodigo = row.insertCell(0);
        let colNombre = row.insertCell(1);
        let colCantidad = row.insertCell(2);
        let colCosto = row.insertCell(3);
        let colCostoTotal = row.insertCell(4);

        colCodigo.innerHTML = producto._getCodigo();
        colNombre.innerHTML = producto._getNombre();
        colCantidad.innerHTML = producto._getCantidad();
        colCosto.innerHTML = producto._getCosto();
        colCostoTotal.innerHTML = producto._getCostoTotal();
    }


}

new App();