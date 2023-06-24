alert("bienvenidos")
alert("¡Hola mi nombre es José Luis!")
alert("¡Espero y disfruten las imágenes de diferentes lugares, tanto como yo!")

const environmet = async () => {
    const URL = "https://josejl777.github.io/JL07/"
const resultados = await fetch(URL)
.then((response) => response.json())

.then((data) => {
    console.log(data);
    const resultados = data.resultados;
    console.log(resultados);

})

    .catch((Error) => console.log(Error))
    .finally(() => console.log("finalizo la peticion"));

    return resultados;


};

environmet()

//encodeURIComponent//
//(url)//
