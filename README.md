# projecttools

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


# Build starten
Das Argument --modern ist eine optionale Funktion, die zwei Versionen der Anwendung erzeugt, von denen eine nur für moderne Browser ist, die die neuesten JavaScript-Funktionen unterstützen, und eine für ältere Browser, die zusätzlichen Code und Bibliotheken benötigen, um diese Funktionen zu verarbeiten.
```
npm run build --modern
```

### Adding Packages for the Production Build
```
npm install --save-dev express@4.16.3
npm install --save-dev connect-history-api-fallback@1.5.0
```

### server.js
```
const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(history());
app.use("/", express.static("./dist"));

app.listen(80, function () {
    console.log("HTTP Server running on port 80");
});
```

### Starten des HTTP-Servers mit Hilfe der server.js
```
node server.js
```
Die Seite ist dann über http://localhost erreichbar, also unter dem Port 80
