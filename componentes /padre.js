Vue.component('padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white m-5">
        <h2>componente padre: {{numeroPadre}}</h2>
        <hijo numero="5"></hijo>
        
    </div>    
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})