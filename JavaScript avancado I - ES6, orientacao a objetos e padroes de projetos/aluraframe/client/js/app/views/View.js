class View{
	constructor(elemento){
		this._elemento = elemento;
	}

	//AVISO PARA O PROGRAMADOR TER QUE IMPLEMENTAR O MÉTODO _template()	
	template(){
		throw new Error('O método template deve ser implementado');
	}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}
}