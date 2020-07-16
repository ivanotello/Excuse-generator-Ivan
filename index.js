window.onload = () => {

    //Declarar var arrays partes de la excusa
    let who = ['The dog','My grandma','His turtle','My bird'];
    let what = ['ate','peed','crushed','broke'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    //seleccionar random elements
    let randomWho = Math.floor(Math.random() * who.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    
    //concatenar partes
    let excuse = `${who[randomWho]} ${what[randomWhat]} my homework ${when[randomWhen]}.`
    
    //cambiar contenido de h1 con id excuse para incorporar excusa creada

    console.log(excuse);
    document.querySelector("#excuse").innerHTML = excuse;
}