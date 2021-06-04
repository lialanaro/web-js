/**
 * Arquivo responsável por formatar as mascaras  de input
 */

function masc_cpf(objeto) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 3)
	if (parte1.length > 0) {
		retorno = parte1;

	}
	parte2 = numero.substr(3, 3)
	if (parte2.length > 0) {
		retorno += "." + parte2;

	}
	parte3 = numero.substr(6, 3)
	if (parte3.length > 0) {
		retorno += "." + parte3;

	}

	parte4 = numero.substr(9, 2)
	if (parte4.length > 0) {
		retorno += "-" + parte4;

	}

	objeto.value = retorno;
	console.log(objeto.value)
}

function masc_cep(objeto1) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto1.value.replace(padrao, "");

	parte1 = numero.substr(0, 5)
	if (parte1.length > 0) {
		retorno = parte1;

	}
	parte2 = numero.substr(5, 3)
	if (parte2.length > 0) {
		retorno += "-" + parte2;

	}

	objeto1.value = retorno;
	console.log(objeto1.value)
}

function masc_data(objeto3) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto3.value.replace(padrao, "");

	parte1 = numero.substr(0, 2)
	if (parte1.length > 0) {
		retorno = parte1;

	}
	parte2 = numero.substr(2, 2)
	if (parte2.length > 0) {
		retorno += "/" + parte2;

	}

	parte3 = numero.substr(4, 4)
	if (parte3.length > 0) {
		retorno += "/" + parte3;

	}

	objeto3.value = retorno;
	console.log(objeto3.value)
}

function masc_celular(objeto3) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto3.value.replace(padrao, "");

	parte1 = numero.substr(0, 2)
	if (parte1.length > 0) {
		retorno += "(" + parte1;

	}
	parte2 = numero.substr(2, 5)
	if (parte2.length > 0) {
		retorno += ")" + parte2;

	}

	parte3 = numero.substr(7, 4)
	if (parte3.length > 0) {
		retorno += "-" + parte3;

	}

	objeto3.value = retorno;
	console.log(objeto3.value)
}

function masc_telefone(objeto3) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto3.value.replace(padrao, "");

	parte1 = numero.substr(0, 2)
	if (parte1.length > 0) {
		retorno += "(" + parte1;

	}
	parte2 = numero.substr(2, 4)
	if (parte2.length > 0) {
		retorno += ")" + parte2;

	}

	parte3 = numero.substr(6, 4)
	if (parte3.length > 0) {
		retorno += "-" + parte3;

	}

	objeto3.value = retorno;
	console.log(objeto3.value)
}

function masc_ie(objeto) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 3)
	if (parte1.length > 0) {
		retorno = parte1;

	}
	parte2 = numero.substr(3, 3)
	if (parte2.length > 0) {
		retorno += "." + parte2;

	}
	parte3 = numero.substr(6, 3)
	if (parte3.length > 0) {
		retorno += "." + parte3;

	}

	parte4 = numero.substr(9, 3)
	if (parte4.length > 0) {
		retorno += "." + parte4;

	}

	objeto.value = retorno;
	console.log(objeto.value)
}

function masc_cnpj(objeto) {
	var retorno = "";
	var padrao = /\D/g;
	var numero = "";


	numero = objeto.value.replace(padrao, "");

	parte1 = numero.substr(0, 2)
	if (parte1.length > 0) {
		retorno = parte1;

	}
	parte2 = numero.substr(2, 3)
	if (parte2.length > 0) {
		retorno += "." + parte2;

	}
	parte3 = numero.substr(5, 3)
	if (parte3.length > 0) {
		retorno += "." + parte3;

	}

	parte4 = numero.substr(8, 4)
	if (parte4.length > 0) {
		retorno += "/" + parte4;

	}

	parte5 = numero.substr(12, 2)
	if (parte5.length > 0) {
		retorno += "-" + parte5;

	}


	function masc_rg(objeto) {

		var retorno = "";
		var padrao = /\D/g;
		var numero;
		if (objeto.value.length < 8) {
			numero = objeto.value.replace(padrao, "");
		}
		else {
			padrao = /\W/g;
			numero = objeto.value.replace(padrao, "");
		}

		parte1 = numero.substr(0, 2);
		if (parte1.length > 0) {
			retorno = parte1;
		}

		parte2 = numero.substr(2, 3);
		if (parte2.length > 0) {
			retorno += "." + parte2;
		}

		parte3 = numero.substr(5, 3);
		if (parte3.length > 0) {
			retorno += "." + parte3;
		}

		parte4 = numero.substr(8, 1);
		if (parte4.length > 0) {
			retorno += "-" + parte4;
		}

		objeto.value = retorno;

	}


	objeto.value = retorno;
	console.log(objeto.value)
}

function masc_rg(objeto) {

	var retorno = "";
	var padrao = /\D/g;
	var padrao2 = /\W/g;
	var numero;
	var letraNumero;

	numero = objeto.value.replace(padrao, "");
	letraNumero = objeto.value.replace(padrao2, "");

	parte1 = numero.substr(0, 2);
	if (parte1.length > 0) {
		retorno = parte1;
	}

	parte2 = numero.substr(2, 3);
	if (parte2.length > 0) {
		retorno += "." + parte2;
	}

	parte3 = numero.substr(5, 3);
	if (parte3.length > 0) {
		retorno += "." + parte3;
	}

	parte4 = numero.substr(8, 1);
	if (parte4.length > 0) {
		retorno += "-" + parte4;
	} else {
		parte4 = letraNumero.substr(8, 1)
		if (parte4 == "X" || parte4 == "x") {
			retorno += "-" + parte4;
		}
	}

	objeto.value = retorno;

}


