const { src, dest, watch } = require("gulp"); //multiples valores desde la APIs
const sass = require("gulp-sass")(require("dart-sass")); //retorna solo una función y llama a sass

function css(done) {
  src("src/scss/app.scss") //identificar el archivo .Scss a compilar
    .pipe(sass()) //compilarlo
    .pipe(dest("build/css")); //almacenar

  done(); //callback
}

function watchSass(done) {
  watch("src/scss/app.scss", css); //  dos parámetros - qué archivo y qué función se manda a llamar

  done();
}

exports.css = css;
exports.watchSass = watchSass;
