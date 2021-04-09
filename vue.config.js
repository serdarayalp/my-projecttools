// Konfigurationsänderungen werden durch Hinzufügen einer Datei namens .vue.config.js im Projektordner
// oder durch Hinzufügen eines vue-Abschnitts zur package.json-Datei definiert.

/*
baseUrl:
Diese Option wird verwendet, um ein URL-Präfix anzugeben, mit dem die Anwendung erreicht wird,
wenn sie als Teil einer größeren Site bereitgestellt wird. Die Standard-URL ist /.

outputDir:
Mit dieser Option wird das Verzeichnis angegeben, das für die Erstellung der Produktionsversion der
Anwendung verwendet wird. Das Standardverzeichnis ist dist.

devServer:
Diese Option wird verwendet, um den Entwicklungs-HTTP-Server mit den unter
https://webpack.js.org/configuration/dev-server beschriebenen Optionen zu konfigurieren.

runtimeCompiler:
Diese Option aktiviert den Runtime-Compiler, der es den Komponenten ermöglicht,
ihre Vorlagen bzw. Templates über die Vorlageneigenschaft (Template) zu definieren. Das erhöht aber die Menge
des an den Browser gesendeten Codes.

chainWebpack:
Diese Option wird verwendet, um Webpack zu konfigurieren.

*/

module.exports = {
    runtimeCompiler: true
}