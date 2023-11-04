export class Cafe {
    private _id: number;
    private _nombre: string;
    private _tipo: string;
    private _region: string;
    private _sabor: string;
    private _altura: number;
    private _imagen: string;
  
    constructor(id: number, nombre: string, tipo: string, region: string, sabor: string, altura: number, imagen: string) {
      this._id = id;
      this._nombre = nombre;
      this._tipo = tipo;
      this._region = region;
      this._sabor = sabor;
      this._altura = altura;
      this._imagen = imagen;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(id: number) {
      this._id = id;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    get tipo(): string {
      return this._tipo;
    }
  
    set tipo(tipo: string) {
      this._tipo = tipo;
    }
  
    get region(): string {
      return this._region;
    }
  
    set region(region: string) {
      this._region = region;
    }
  
    get sabor(): string {
      return this._sabor;
    }
  
    set sabor(sabor: string) {
      this._sabor = sabor;
    }
  
    get altura(): number {
      return this._altura;
    }
  
    set altura(altura: number) {
      this._altura = altura;
    }
  
    get imagen(): string {
      return this._imagen;
    }
  
    set imagen(imagen: string) {
      this._imagen = imagen;
    }
  }
 