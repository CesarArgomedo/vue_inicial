const Lunes = []
const Martes = []
const Miercoles = []
const Jueves = []
const Viernes = []
const Sabado = []
const Domingo = []

const app = Vue.createApp({

    data() {
        return {
            Lunes,
            Martes,
            Miercoles,
            Jueves,
            Viernes,
            Sabado,
            Domingo,
            Rutina: {
                dia:'0',
                desde:'',
                hasta:'',
                actividad:''
            }
        }
    },
    methods: {
        agregarActividad(){

            switch(this.Rutina.dia){
                case '1' :
                    this.Lunes.push({
                        desde :this.Rutina.desde,
                        hasta:this.Rutina.hasta,
                        actividad:this.Rutina.actividad
                })
                    break;
                case '2' :
                    this.Martes.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                case '3' :
                    this.Miercoles.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                case '4' :
                    this.Jueves.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                case '5' :
                    this.Viernes.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                case '6' :
                    this.Sabado.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                case '7' :
                    this.Domingo.push({
                        desde : this.Rutina.desde,
                        hasta: this.Rutina.hasta,
                        actividad: this.Rutina.actividad
                })
                    break;
                
            }
            this.Rutina.dia ='0';
            this.Rutina.desde ='';
            this.Rutina.hasta ='';
            this.Rutina.actividad ='';
           console.log(this.Lunes,this.Rutina.dia) 
        }
    },

})

app.mount('#miApp')