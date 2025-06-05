let a001 =
{
    nomeAutor: "Sabotage",
    capaAlbum: "001.png",
    nomeAlbum: "Rap é Compromisso",
    faixas: 13
}
let a002 =
{
    nomeAutor: "Linkin Park",
    capaAlbum: "002.jpg",
    nomeAlbum: "Meteora",
    faixas: 12
}

function fnAlbumAtual(albumSelec) {
    document.querySelector(".expo").innerHTML += `
    <div class="sei-la">
        <img src="img/${albumSelec.capaAlbum}">
        <h2>${albumSelec.nomeAlbum}</h2>
        <h3>${albumSelec.nomeAutor}</h3>
        <span>${albumSelec.faixas}<span>
    `
}

fnAlbumAtual(a001);
fnAlbumAtual(a002);
