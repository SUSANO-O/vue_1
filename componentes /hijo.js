Vue.component('hijo',{
    template: //html
    `
    <div class="py-5 bg-success">
        <h2>
        componente hijo
        </h2>
        <h5>
        {{numero}}
        </h5>
    </div>    
    `,
    props: ['numero']
})