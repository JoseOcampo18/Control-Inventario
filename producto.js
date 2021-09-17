export default class Producto{

    constructor(codigo, nombre, cantidad, costo){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._costo = costo;
    }

    _getCodigo(){
        return this._codigo;
    }

    _getNombre(){
        return this._nombre;
    }

    _getCantidad(){
        return this._cantidad;
    }

    _getCosto(){
        return this._costo;
    }

    _getCostoTotal(){
        return this._costo * this._cantidad;
    }

}