const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo de vue',
        frutas: [
            {nombre:'pera', cantidad:10},
            {nombre:'manzana',cantidad:0},
            {nombre:'uva', cantidad:0},
            {nombre:'naranja',cantidad:10}
        ],
        message: 'cargaste esta pagina en'   + new Date().toLocaleString()        
    }
});











