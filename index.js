function loadScript(url) {
    return new Promise(
        (resolve) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            document.body.appendChild(script);
        })
}

async function loadAllScripts(urls) {
    for(let url of urls){
        await loadScript(url);
    }
}


$(function () {
    const args = {};
    // ?以降の結果を取得する
    document.location.search.substring(1).split('&').forEach(
        (s) => {
            let [name, value] = s.split('=');
            // decode
            args[name] = decodeURIComponent(value);
        })
    const codelist = args['code'];
    console.log('codelist', codelist);

    if (codelist) {
        let urls = codelist.split(/,/);
        loadAllScripts(urls);
    }
}

)
