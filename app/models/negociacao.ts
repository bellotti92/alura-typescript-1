export class Negociacao {

  constructor(
    private _data : Date, 
    public readonly quantidade : number, 
    public readonly valor: number) {
  }

  get data(): Date {

    const data = new Date(this._data.getTime())

    return data;

  }

  get volume() :number{
    return this.quantidade * this.valor;
  }
}

/* 
metodo get para data p/ evitar mutações no objeto Date. Dessa forma, é retornada uma copia da data inputada
*/

/* 
não é necessário setar os atributos da classe, isso pode ser feito direto no construtor.

atributo da classe com readonly não necessita dos getters. Atribuição de valores só via construtor
*/