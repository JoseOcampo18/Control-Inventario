export default class Inventario{

    constructor() {
        this._inventario = new Array();
    }

    crear(nuevo){
        if(this.buscar(nuevo._getCodigo()) == null && this._inventario.length < 20){
            this._inventario.push(nuevo);
        }
        else 
            return false;
    }

    eliminar(codigo){
        let cont = 0;
        
        for(let i = 0; i < this._inventario.length; i++){
            if(codigo == this._inventario[i]._getCodigo()){
                let cont2 = cont;
                for(let x = cont + 1; x <= this._inventario.length; x++){
                    this._inventario[cont2] = this._inventario[x];
                    cont2++;
                }
                this._inventario.pop();
            }
            cont ++;
        }
        
    }

    buscar(codigo){
        for(let i = 0; i < this._inventario.length; i++){
            if(codigo == this._inventario[i]._getCodigo()){
                return this._inventario[i];
            }
        }
        return null; 
    }

    lista(){
        return this._inventario;
    }

    listaInvertida(){
        let inventarioInvertido = this._inventario;
        for (let i = 0; i < this._inventario.length / 2; i++) {
            let temporal = inventarioInvertido[i];
            let invertido = this._inventario.length - i - 1;
            inventarioInvertido[i] = inventarioInvertido[invertido];
            inventarioInvertido[invertido] = temporal;
        }

        return inventarioInvertido;
    }

    insertarPosición(nuevo, pos){
        if(pos < this._inventario.length){
            this._inventario[pos] = nuevo;
        }

        return null;
    }

}