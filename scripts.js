function anoParaExtenso(data) {
    data = data.split('-');
    var mes = data[1];
    var retorno = "";
    var auxiliar = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];
    retorno = data[2] + " DE " + auxiliar[mes - 1] + " DE " + data[0];
    return retorno;
}

function carregarNota() {
    var nota = '';
    var nomeCredor = document.getElementById('nomeDoCredor').value;
    var cpfCnpjCredor = document.getElementById('cpfCredor').value != '' ? document.getElementById('cpfCredor').value : document.getElementById('cnpjCredor').value;
    var valorNota = document.getElementById('valorNota').value;
    var primeiroVencimento = anoParaExtenso(document.getElementById('primeiroVencimento').value);
    var emissao = anoParaExtenso(document.getElementById('dataEmissao').value);
    var nomeDevedor = document.getElementById('nomeDevedor').value;
    var cpfCnpjDevedor = document.getElementById('cpfDevedor').value != '' ? document.getElementById('cpfDevedor').value : document.getElementById('cnpjDevedor').value;
    var cep = document.getElementById('cep').value;
    var rua = document.getElementById('rua').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var referencia = document.getElementById('referencia').value;
    var quantidadeNotas = document.getElementById('quantidade').value != ''? document.getElementById('quantidade').value:1;
    for(var i = 1; i<=quantidadeNotas; i++){
        nota += ' <div class="borda">\
        <p style="text-align: center;">\
            <b>NOTA PROMISSÓRIA (Nº'+i+' de '+quantidadeNotas+')</b>\
        </p>\
        <p>Vencimento: <b>'+ primeiroVencimento + '</b>.</p>\
        <p><b>R$ '+ extenso(valorNota) + '</b></p>\
        <p>No dia <b >'+ primeiroVencimento + '</b> pagarei por esta única via de NOTA PROMISSÓRIA a <b class="background">' + nomeCredor + '</b>, CPF (ou CNPJ) nº ' + cpfCnpjCredor + ' ou a sua ordem a quantia de '+extenso(valorNota)+' reais.</p>\
        <p>Pagável na Rua '+rua+', nº '+numero+' - '+bairro+' na cidade de '+cidade+' - '+estado+'.</p>\
        <p>Emitente: '+ nomeDevedor + ', CPF (ou CNPJ) nº ' + cpfCnpjDevedor + ', com endereço à Rua '+rua+', nº '+numero+' - '+bairro+' na cidade de '+cidade+' - '+estado+' - CEP '+cep+'.</p>\
        <p>'+cidade+' - '+estado+', '+emissao+'.</p>\
        <p>Referência: '+referencia+'</p>\
        <hr style="margin-left: 10%; margin-right: 10%; margin-top: 10%;">\
        <p style="text-align: center;">'+nomeDevedor+'</p>\
    </div>\
    <br>';
    }

    // document.getElementById('nota').appendChild(nota);
    document.querySelector("#nota").innerHTML = nota;
}


function extenso(vlr) {

    var Num = parseFloat(vlr);
    if (vlr == 0) {
        document.getElementById('teste').value = "zero";
    } else {
        var inteiro = parseInt(vlr); // parte inteira do valor
        if (inteiro < 1000000000000000) {

            var resto = Num.toFixed(2) - inteiro.toFixed(2);       // parte fracionária do valor
            resto = resto.toFixed(2)
            var vlrS = inteiro.toString();

            var cont = vlrS.length;
            var extenso = "";
            var auxnumero;
            var auxnumero2;
            var auxnumero3;

            var unidade = ["", "UM", "DOIS", "TRÊS", "QUATRO", "CINCO",
                "SEIS", "SETE", "OITO", "NOVE", "DEZ", "ONZE",
                "DOZE", "TREZE", "QUATORZE", "QUINZE", "DEZESSEIS",
                "DEZESSETE", "DEZOITO", "DEZENOVE"];

            var centena = ["", "CENTO", "DUZENTOS", "TREZENTOS",
                "QUATROCENTOS", "QUINHENTOS", "SEISCENTOS",
                "SETECENTOS", "OITOCENTOS", "NOVECENTOS"];

            var dezena = ["", "", "VINTE", "TRINTA", "QUANRENTA", "CINQUENTA",
                "SESSENTA", "SETENTA", "OITENTA", "NOVENTA"];

            var qualificaS = ["REAIS", "MIL", "MILHÃO", "BILHÃO", "TRILHÃO"];
            var qualificaP = ["REAIS", "MIL", "MILHÕES", "BILHÕES", "TRILHÕES"];

            for (var i = cont; i > 0; i--) {
                var verifica1 = "";
                var verifica2 = 0;
                var verifica3 = 0;
                auxnumero2 = "";
                auxnumero3 = "";
                auxnumero = 0;
                auxnumero2 = vlrS.substr(cont - i, 1);
                auxnumero = parseInt(auxnumero2);


                if ((i == 14) || (i == 11) || (i == 8) || (i == 5) || (i == 2)) {
                    auxnumero2 = vlrS.substr(cont - i, 2);
                    auxnumero = parseInt(auxnumero2);
                }

                if ((i == 15) || (i == 12) || (i == 9) || (i == 6) || (i == 3)) {
                    extenso = extenso + centena[auxnumero];
                    auxnumero2 = vlrS.substr(cont - i + 1, 1)
                    auxnumero3 = vlrS.substr(cont - i + 2, 1)

                    if ((auxnumero2 != "0") || (auxnumero3 != "0"))
                        extenso += " e ";

                } else

                    if (auxnumero > 19) {
                        auxnumero2 = vlrS.substr(cont - i, 1);
                        auxnumero = parseInt(auxnumero2);
                        extenso = extenso + dezena[auxnumero];
                        auxnumero3 = vlrS.substr(cont - i + 1, 1)

                        if ((auxnumero3 != "0") && (auxnumero2 != "1"))
                            extenso += " e ";
                    } else if ((auxnumero <= 19) && (auxnumero > 9) && ((i == 14) || (i == 11) || (i == 8) || (i == 5) || (i == 2))) {
                        extenso = extenso + unidade[auxnumero];
                    } else if ((auxnumero < 10) && ((i == 13) || (i == 10) || (i == 7) || (i == 4) || (i == 1))) {
                        auxnumero3 = vlrS.substr(cont - i - 1, 1);
                        if ((auxnumero3 != "1") && (auxnumero3 != ""))
                            extenso = extenso + unidade[auxnumero];
                    }

                if (i % 3 == 1) {
                    verifica3 = cont - i;
                    if (verifica3 == 0)
                        verifica1 = vlrS.substr(cont - i, 1);

                    if (verifica3 == 1)
                        verifica1 = vlrS.substr(cont - i - 1, 2);

                    if (verifica3 > 1)
                        verifica1 = vlrS.substr(cont - i - 2, 3);

                    verifica2 = parseInt(verifica1);

                    if (i == 13) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[4] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[4] + " "; }
                    }
                    if (i == 10) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[3] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[3] + " "; }
                    }
                    if (i == 7) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[2] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[2] + " "; }
                    }
                    if (i == 4) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[1] + " ";
                        } else if (verifica2 != 0) { extenso = extenso + " " + qualificaP[1] + " "; }
                    }
                    if (i == 1) {
                        if (verifica2 == 1) {
                            extenso = extenso + " " + qualificaS[0] + " ";
                        } else { extenso = extenso + " " + qualificaP[0] + " "; }
                    }
                }
            }
            resto = resto * 100;
            var aexCent = 0;
            if (resto <= 19 && resto > 0)
                extenso += " e " + unidade[resto] + " Centavos";
            if (resto > 19) {
                aexCent = parseInt(resto / 10);

                extenso += " e " + dezena[aexCent]
                resto = resto - (aexCent * 10);

                if (resto != 0)
                    extenso += " e " + unidade[resto] + " Centavos";
                else extenso += " Centavos";
            }

            return extenso
        }

    }
}

function mascaras(i, t) {

    var v = i.value;
    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    if (t == "data") {
        i.setAttribute("maxlength", "10");
        if (v.length == 2 || v.length == 5) i.value += "/";
    }

    if (t == "cep") {
        i.setAttribute("maxlength", "9");
        if (v.length == 5) i.value += "-";
    }

    if (t == "cpf") {
        i.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) i.value += ".";
        if (v.length == 11) i.value += "-";
    }

    if (t == "cnpj") {
        i.setAttribute("maxlength", "18");
        if (v.length == 2 || v.length == 6) i.value += ".";
        if (v.length == 10) i.value += "/";
        if (v.length == 15) i.value += "-";
    }

    if (t == "tel") {
        if (v[0] == 9) {
            i.setAttribute("maxlength", "10");
            if (v.length == 5) i.value += "-";
        } else {
            i.setAttribute("maxlength", "9");
            if (v.length == 4) i.value += "-";
        }
    }
}