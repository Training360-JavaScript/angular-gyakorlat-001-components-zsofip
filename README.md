# AngBasicPractice001Components

## First steps
- `code . -r`
- `npm install`
- `npm start`

## Tasks  

### Include Bootstrap into this project
1. Download Bootstrap and Font Awesome with the npm:  
```shell
npm i bootstrap@4.6.1 font-awesome
```
1. Open the angular.json file
1. Place the bootstrap and font-awesome CSS paths in the styles array before styles.scss:  
```json
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
```
1. Delete the whole content from the app.component.html file.
1. Place a Bootstrap jumbotron and a container in the app.component.html file.
1. Restart the development server:  
ctrl + c
```shell
npm start
```

-------
Hungarian

## Első lépések
- `code . -r`
- `npm install`
- `npm start`

## Feladatok

### Alkalmazd a Bootstrap keretrendszert és a Font Awesome-ot
1. Töltsd le őket az npm segítségével:  
```shell
npm i bootstrap@4.6.1 font-awesome
```
1. Nyisd meg az angular.json fájlt.
1. Helyezd el a styles tömbben a bootstrap és font-awesome elérési útját a 
styles.scss elé:
```json
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
```
1. Töröld az app.component.html teljes tartalmát.
1. Helyezz el egy Bootstrap jumbotront és egy container-t az app.component.html 
fájlba.
1. Indítsd újra a devservert:  
ctrl + c
```shell
npm start
```
