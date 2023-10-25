function putValue(myClass, value) {
    $(".xml-" + myClass).text(value);
}

const xmlUrl = 'base/nfe.xml';

function preencherTags(xmlDoc) {

    // Valores da nota
    putValue("numero-nfe", $(xmlDoc).find("ide > nNF").text());
    putValue("numero-serie", $(xmlDoc).find("ide > serie").text());
    putValue("tipo-de-operacao", $(xmlDoc).find("ide > tpNF").text());
    putValue("natureza-da-operacao", $(xmlDoc).find("ide > natOp").text());
    putValue("data-emissao", $(xmlDoc).find("ide > dEmi").text());

    // Valores do emitente
    putValue("emitente-nome", $(xmlDoc).find("emit > xNome").text());
    putValue("emitente-rua", $(xmlDoc).find("emit > enderEmit > xLgr").text());
    putValue("emitente-bairro", $(xmlDoc).find("emit > enderEmit > xBairro").text());
    putValue("emitente-cep", $(xmlDoc).find("emit > enderEmit > CEP").text());
    putValue("emitente-numero", $(xmlDoc).find("emit > enderEmit > nro").text());
    putValue("emitente-cidade", $(xmlDoc).find("emit > enderEmit > xMun").text());
    putValue("emitente-uf", $(xmlDoc).find("emit > enderEmit > UF").text());
    putValue("emitente-fone", $(xmlDoc).find("emit > enderEmit > fone").text());
    putValue("emitente-inscricao-estadual", $(xmlDoc).find("emit > IE").text());
    putValue("emitente-cnpj", $(xmlDoc).find("emit > CNPJ").text());

    // Valores do destinatario
    putValue("destinatario-nome", $(xmlDoc).find("dest > xNome").text());
    putValue("destinatario-rua", $(xmlDoc).find("dest > enderDest > xLgr").text());
    putValue("destinatario-bairro", $(xmlDoc).find("dest > enderDest > xBairro").text());
    putValue("destinatario-cep", $(xmlDoc).find("dest > enderDest > CEP").text());
    putValue("destinatario-numero", $(xmlDoc).find("dest > enderDest > nro").text());
    putValue("destinatario-cidade", $(xmlDoc).find("dest > enderDest > xMun").text());
    putValue("destinatario-uf", $(xmlDoc).find("dest > enderDest > UF").text());
    putValue("destinatario-fone", $(xmlDoc).find("dest > enderDest > fone").text());
    putValue("destinatario-cnpj", $(xmlDoc).find("dest > CNPJ").text());

    // Valores do ICMS
    putValue("imposto-icms-base", $(xmlDoc).find("total > ICMSTot > vBC").text());
    putValue("imposto-icms-valor", $(xmlDoc).find("total > ICMSTot > vICMS").text());
    putValue("imposto-icms-base-subst-trib", $(xmlDoc).find("total > ICMSTot > vBCST").text());
    putValue("imposto-icms-valor-subst-trib", $(xmlDoc).find("total > ICMSTot > vST").text());

    // Valores de outras despesas
    putValue("frete-valor", $(xmlDoc).find("total > ICMSTot > vFrete").text());
    putValue("produtos-valor-total", $(xmlDoc).find("total > ICMSTot > vProd").text());
    putValue("seguro-valor-total", $(xmlDoc).find("total > ICMSTot > vSeg").text());
    putValue("desconto-valor-total", $(xmlDoc).find("total > ICMSTot > vDesc").text());
    putValue("outras-despesas", $(xmlDoc).find("total > ICMSTot > vOutro").text());
    putValue("ipi-valor-total", $(xmlDoc).find("total > ICMSTot > vIPI").text());

    // Valor total da nota
    putValue("nota-valor-total", $(xmlDoc).find("total > ICMSTot > vNF").text());

    // Valores dos produtos
    putValue("produto-codigo", $(xmlDoc).find("det > prod > cProd")[0].innerHTML);
    putValue("produto-descricao", $(xmlDoc).find("det > prod > xProd")[0].innerHTML);
    putValue("produto-cst", $(xmlDoc).find("imposto > ICMS > ICMS00 > CST")[0].innerHTML);
    putValue("produto-cfop", $(xmlDoc).find("det > prod > CFOP")[0].innerHTML);
    putValue("produto-unidade", $(xmlDoc).find("det > prod > uCom")[0].innerHTML);
    putValue("produto-quantidade", $(xmlDoc).find("det > prod > qCom")[0].innerHTML);
    putValue("produto-valor-unidade", $(xmlDoc).find("det > prod > vUnCom")[0].innerHTML);
    putValue("produto-valor-total", $(xmlDoc).find("det > prod > vProd")[0].innerHTML);
    putValue("produto-icms-valor-base", $(xmlDoc).find("imposto > ICMS > ICMS00 > vBC")[0].innerHTML);
    putValue("produto-icms-valor-total", $(xmlDoc).find("imposto > ICMS > ICMS00 > vICMS")[0].innerHTML);
    putValue("produto-icms-aliquota", $(xmlDoc).find("imposto > ICMS > ICMS00 > pICMS")[0].innerHTML);
}

function carregarXML() {
    $.ajax({
        url: xmlUrl,
        dataType: 'xml',
        success: function (data) {
            preencherTags(data);
        },
        error: function (error) {
            console.error('Erro ao buscar o arquivo XML:', error);
        }
    });
}

carregarXML();