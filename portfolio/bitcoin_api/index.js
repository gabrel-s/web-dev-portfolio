async function valueBitcoin(coin, curr, prefix) {
    const getCoinUrl = url = 'https://api.coinstats.app/public/v1/coins/${coin}?currency=${curr}'
    resp = await fetch(url);
    coinObj = await resp.json();
    value = coinObj.coin.price;
    $("form[name='post'] tbody").append(`<tr><td><img src="https://bitcoin.org/img/icons/opengraph.png" style="width: 60px; float: right; margin: 20px"></td><td><h1 style="float: left"><span class='rainbow'>Bitcoin: ${prefix}${(value).toLocaleString('pt-BR')}</td></tr>`)
}

// O primeiro e o segundo valor pode ser qualquer moeda de mentirinha como bitcoin, monero, usd, ou brl
// O terceiro vai ser a unidade que vai aparecer antes do valor. Pode ser R$ ou $ por exemplo
valueBitcoin('bitcoin', 'BRL', 'R$');
