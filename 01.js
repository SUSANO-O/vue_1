const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo de vue',
        frutas: [
            {nombre:'pera', cantidad:0},
            {nombre:'manzana',cantidad:0},
            {nombre:'uva', cantidad:0},
            {nombre:'naranja',cantidad:0}
        ],
        message: 'cargaste esta pagina en'   + new Date().toLocaleString()        
    }
});











