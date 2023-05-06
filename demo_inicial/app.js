
const app = Vue.createApp({
   /*  template: `
        <h1>Hola Mundo</h1>
        <p>Desde app.js</p>
    ` */

    data() {
        return {
            frase: "Quemare Hasta el Ultimo Cartucho",
            autor:"Francisco Bolognesi",
            contador:1
        }
    },methods: {
        cambiartexto(){
            this.autor = "Alfonso Ugarte"
            
            this.convertirAMayMin()
        },
        convertirAMayMin(){
            
            if(this.contador == 1){
                this.frase = this.frase.toUpperCase();
                this.contador = this.contador + 1
            }else{
                this.frase = this.frase.toLowerCase();
                this.contador=1
            }
           
        }
    },
})

app.mount('#miApp')