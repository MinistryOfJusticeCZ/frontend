# Instalace Frontendu Ministerstva spravedlnosti pomocí NPM

## Požadavky

Pro použítí Frontendu Ministerstva spravedlnosti pomocí NPM, musíte:

1. Nainstalujte long-term support (LTS) version of
   [Node.js](https://nodejs.org/en/), které obsahuje NPM. Minimální požadovaná verze Node je  4.2.0.

   (Pro správu verzí Node doporučujeme použít [`nvm`](https://github.com/creationix/nvm).)

2. Pokud ještě nemáte, vytvořte [soubor package.json](https://docs.npmjs.com/files/package.json). 
   Můžete vytvořit defaultní soubor `package.json` spuštěním `npm init` z rootu vaši aplikace.

3. Pokud chcete použít Nunjucks macra Frontendu Ministerstva spravedlnosti, nainstalujte Nunjucks -
   minimální požadovaná verze je 3.0.0.

```
npm install nunjucks --save
```

## Instalace

Pro nainstalovaní, spusťte:

```
npm install --save @msp/frontend
```

Potom co nainstalujete Frontend Ministerstva spravedlnosti, zobrazí se package `@msp/frontend` ve složce `node_modules`.

## Import stylů

Do vašeho projektu musíte naimportovat styly Frontendu Ministerstva spravedlnosti. Pokud chcete přepsat Frontend Ministerstva spravedlnosti vlastními styly, měli byste kód níže vložit před vaše vlastní Sass pravidla (nebo Sass importy) do vašeho projektu.

1. Pro import všech komponent, přidejte do vašeho Sass souboru následující:

  ```CSS
  @import "node_modules/@msp/frontend/all";
  ```

2. Pro import jednotlivých komponent (například tlačítko), přidejte do vašeho Sass souboru následující:

  ```CSS
  @import "node_modules/@msp/frontend/components/button/button";
  ```

### Nepovinné: Řešení SCSS import paths

Pokud si přejete ve vašem buildu vyřešit výše uvedené `@import` cesty (tak abyste se vyhli prefixování cest s `node_modules`), měli byste do vaši [Sass include paths](https://github.com/sass/node-sass#includepaths) přidat `node_modules`
(Ruby, by měly být přidány do [assets
paths](http://guides.rubyonrails.org/asset_pipeline.html#search-paths)).

Například, pokud váš projekt používá Gulp, přidali byste Sass include paths do vašeho Gulp konfiguračního souboru (například `gulpfile.js`) s
[gulp-sass](https://www.npmjs.com/package/gulp-sass). Níže je příklad:

```JS
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
     }))
    .pipe(gulp.dest('./css'));
});

```

Pokud ve vašem projektu kompilujete Sass do CSS, vaše build tasky budou už něco podobného vkládat do tasku uvedeného nahoře - v tom případě, stačí pouze vložit přidat `includePaths` .

Po vyřešení import paths můžete importovat Frontend Ministerstva spravedlnosti za použití:

```CSS
@import "@msp/frontend/components/button/button";
```

## Importování assetů

Pro import obrázků a fontů Frontendu Ministerstva spravedlnosti do vašeho projektu, měly byste nakonfigurovat vaši aplikace, aby referencovala nebo kopírovala relevantní assety Frontend Ministerstva spravedlnosti.

Řiďte se buď [Doporučeným řešením](#doporučené-řešení) nebo [Alternativním řešením](#alternativní-řešení).

### Doporučené řešení

Učiňte `/node_modules/@msp/frontend/assets` přístupnou vašemu projektu tím, že nastavíte routing requesty do vaši assety složky.

Například, pokud váš projekt používá [express.js](https://expressjs.com/), níže je ukázka kódu, který můžete přidat do vaši konfigurace:

```JS
app.use('/assets', express.static(path.join(__dirname, '/node_modules/@msp/frontend/assets')))
```
### Alternativní řešení

Ručně zkopírujte obrázky a fonty z `/node_modules/@msp/frontend/assets` do veřejné (public) složky ve vašem projektu. Ideálně by mělo být kopírování souborů ve vašem projektu automatizovaný task nebo součást build pipeliny. Zajístíte tak, že assety Frontendu Ministerstva spravedlnosti zůstanou aktuální.

Defaultní cesty použity pro assety jsou `assets/images` a `assets/fonts`. **Nemusíte dělat tyto kroky, pokud vaše asset složky následují tuto strukturu.**

Pro použití jiných asset paths, zároveň dokončete tyto kroky.

1. Ve projektu nastavte `$govuk-assets-path`, `$govuk-images-path` a `$govuk-fonts-path` Sass soubory, aby ukazoval na relevantní složky (directories) ve vašem projektu (dojde k přepsání default hodnot nastavených v `/node_modules/@msp/frontend/settings/_assets.scss`). Ujistěte se, že toto uděláte v Sassu než importujete`@msp/frontend` do vašeho projetku - viz [Import stylů](#import-stylů).

  Příklad 1:

  ``` SCSS
  // Include images from /application/assets/images and fonts from /application/assets/fonts
  $msp-assets-path: ‘/application/assets’;

  @import “@msp/frontend/all”;
  ```

  Příklad 2:

  ``` SCSS
  // Include images from /images/@msp/frontend and fonts from /fonts
  $msp-images-path: “/images/@msp/frontend/”;
  $msp-fonts-path: “/fonts/”;

  @import “@msp/frontend/all”;
  ```

2. Nepovinné: Můžete přepsat helpery používané pro vygenerování url assetu, například, pokud používáte funkcionalitu sass-rails asset-pipeline. Toho dosáhnete nastavením `$msp-image-url-function` jménu funkci, které chcete používat. Pro více informací a příkladů se podívejte do `src/settings/_assets.scss`.

## Include CSS a JavaScriptu

Do vaši HTML šablony vložte CSS a JavaScript kód:

```html
<!DOCTYPE html>
  <head>
    <title>Příklad</title>
    <link rel="stylesheet" href="assets/application.css">
  </head>
  <body>
    <!-- Zkopírujte a vložte HTML komponentu-->
    <button class="govuk-button">Toto je komponenta tlačítko</button>
    <script src="assets/application.js"></script>
  </body>
</html>
```

Pokud vaše služba podporuje Internet Explorer 8, potřebujete zároveň [vygenerovat a vložit separátní stylesheet](supporting-internet-explorer-8.md).