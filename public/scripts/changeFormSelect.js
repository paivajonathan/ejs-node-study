function populate(idEstado, idCidade) {
    let selectEstado = document.getElementById(idEstado);
    let selectCidade = document.getElementById(idCidade);
    let optionArray = [];

    selectCidade.innerHTML = "";

    if (selectEstado.value === "MA") {
        optionArray = ["MagalhaesDeAlmeida|Magalhães de Almeida", "SaoBernardo|São Bernardo"];
    } else if (selectEstado.value === "PI") {
        optionArray = ["Parnaiba|Parnaíba"];
    }

    let disabledOption = document.createElement("option");
    disabledOption.innerHTML = "-- selecione --";
    disabledOption.disabled = true;
    disabledOption.selected = true;
    selectCidade.options.add(disabledOption);

    for (let option in optionArray) {
        let pair = optionArray[option].split("|"); 

        let newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        selectCidade.options.add(newOption);
    }
}