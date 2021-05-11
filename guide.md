1. npm i -g parcel-bundler 
2. mkdir client, cd client
https://parceljs.org/
3. install vue : npm install vue
https://vuejs.org/v2/guide/installation.html
4. bikin di route (client) -> file index.html dan folder src(file App.vue, main.js)
 https://wahyudiputra.com/blog/build-vue-app-with-parcel/

 - tambahkan folder views dan components di src
 - components: navbar 

 5. install bootstrap vue atau pake cdn juga tidak apa2
  - di main.js: import 'bootstrap/dist/css/bootstrap.css'
 6. import2 seperti bootstrap tarok di main.js
  - import 'bootstrap-vue/dist/bootstrap-vue.css'

7. Yang di load di App.vue yang berupa page aja, misal Login, Home

  Note: 
  - semua axios ada di App.vue
  - Kita tidak bisa merubah data parent secara langsung, yang merubah data harus pemiliknya, komunikasi data dilakukan melalui props
  - memanggil function; 
   1. via emit 
   2. via props
   
   # Shorthand
  - v-bind ---> :
  - v-on ----> @

  # running client : 
  ```
  parcel index.html
  ```