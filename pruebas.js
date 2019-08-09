const pruebas = new Vue ({
    el: '#app',
    data: {
        title:'hoola',
        garajes:[
            {nombre:'klx 250 cc',cantidad:9},
            {nombre:'cbr 250 cc',cantidad:21},
            {nombre:'xt 250 cc',cantidad:11},
            {nombre:'ninja 250 cc',cantidad:0},

        ],
        nuevaMoto:''
    },
    methods:{
        agregarMoto () {
            this.garajes.push({
                nombre: this.nuevaMoto,cantidad:10,
            })
        }
    }
})