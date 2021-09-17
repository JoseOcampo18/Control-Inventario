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
        let producto = new Producto(codigo, nombre, cantidad, costo); 

        let resultado = this._inventario.crear(producto);

        if(resultado == false){
            Swal.fire("Error", "Este código ya está registrado o su inventario está lleno", "error");
            return;
        }

        this._addToTable(producto);
    }

    _deleteProduct = () => {
        let codigo = document.getElementById('codigo').value;

        let resultado = this._inventario.eliminar(codigo);

        if(resultado == false){
            Swal.fire("Error", "Este producto no existe", "error");
            return;
        }

        Swal.fire("Correcto", "Producto eliminado", "success");
        this._listProduct();
    }

    _findProduct = () => {
        let codigo = document.getElementById('codigo').value;

        this._resetTable();
        
        let resultado = this._inventario.buscar(codigo);

        if(resultado == null){
            Swal.fire("Error", "Este producto no existe", "error");
            return;
        }

        this._addToTable(this._inventario.buscar(codigo));
    }

    _listProduct = () => {   
        this._resetTable();

        this._inventario.lista().forEach((p) => {
            this._addToTable(p);
        });
    }

    _invertProduct = () => {
        this._resetTable();
        
        this._inventario.listaInvertida().forEach((p) => {
            this._addToTable(p);
        });
    }

    _positionProduct = () => {
        let codigo = document.getElementById('codigo').value; 
        let nombre = document.getElementById('nombre').value; 
        let cantidad = document.getElementById('cantidad').value; 
        let costo = document.getElementById('costo').value; 
        let posicion = document.getElementById('posicion').value; 
        let producto = new Producto(codigo, nombre, cantidad, costo); 

        let resultado = this._inventario.insertarPosicion(producto, posicion);

        if(resultado == null){
            Swal.fire("Error", "Este producto ya existe o la posición es incorrecta", "error");
            return;
        }

        this._listProduct();
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

    _resetTable(){
        while( this._tabla.rows.length > 2){
            this._tabla.deleteRow(-1);
        }                
        
    }


}

new App();