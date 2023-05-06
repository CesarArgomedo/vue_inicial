const frases = [
    {frase:'Buenos dias',autor:'Pamo'},
    {frase:'Buenas Tardes',autor:'Carlos'},
    {frase:'Buenas Noches',autor:'Angeles'},
]

const app = Vue.createApp({

    data() {
        return {
            frases,
            nuevaFrase:'Hola Mundo',
        }
    },
    methods: {
        agregarFrase(){
            this.frases.unshift({
                frase : this.nuevaFrase
        })
           console.log(this.frases) 
        }
    },

})

app.mount('#miApp')