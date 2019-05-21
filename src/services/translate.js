export async function translate(translateTo, text, translateFrom = 'auto') {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${translateFrom}&tl=${translateTo}&dt=t&q=${encodeURIComponent(
        text
    )}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data[0][0][0];
}

// translate('en', 'hola').then(data => console.log(data));
