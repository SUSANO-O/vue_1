const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo de vue',
        message: 'cargaste esta pagina en'   + new Date().toLocaleString(),
        frutas: [
            {nombre:'pera', cantidad:0},
            {nombre:'manzana',cantidad:0},
            {nombre:'uva', cantidad:0},
            {nombre:'naranja',cantidad:0}
        ],
        
        nuevaFruta: '',
        total: 0   
    },
    methods:{
        agregarFruta () {
         this.frutas.push({
             nombre: this.nuevaFruta, cantidad:0,
         });
         this.nuevaFruta = '';
        }
    },
    computed:{
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas){
            this.total = this.total + fruta.cantidad
            }
            return this.total;
        }
    }
});











