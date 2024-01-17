## npm init -y

## npm i -D webpack webpack-cli

## npx webpack
dist -> main.js oluşturuk ve her defasında kodlarımızı çevirerek main.js içerisine aktardı taki css uzantıları gelene kadar

## npm i -D css-loader style-loader

## farklı dosya tiplerinide çevireceğimizden webpack.config.js ayarları yapacağzı

<p>
css ve scss ortak amaca hizmet etselerde farklı dosya tipleri olduğudnan dolayı farklı yükleyicilerle yüklenmeleri gerek
</p>

## npm i -D sass sass-loader

## mini css
npm i -D mini-css-extract-plugin

## devtool
kaynak haritaları kaynak kodun okunmasunda bize kolaylık sağlayacaktır
devtool:"source-map"

## postcss plugins tarayıcı desteğini artırır
npm i -D postcss postcss-loader postcss-preset-env

## browserslistrc tarayıcı desteği 
main.css dosyasına aşağıdaki gibi çıkıtlar eklenecektir<br/>
 display: -webkit-box;
  display: -ms-flexbox;


## tailwindcss
npm i -D tailwindcss