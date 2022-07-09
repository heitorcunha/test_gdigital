<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form id="reserva" @submit="createReserva">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="dia">Data da reserva:</label>
                    <input type="text" id="dia" name="dia" v-model="dia" placeholder="Data da Reserva">
                </div>
                    <div class="input-container">
                    <label for="cadeira">Quantidade de lugares:</label>
                    <select name="cadeira" id="cadeira" v-model="cadeira">
                    <option value="">Numero de lugares</option>
                    <option v-for="cadeira in cadeiras" :key="cadeira.id" :value="cadeira.tipo">{{cadeira.tipo}}</option>
                    </select>
                </div>
                 <div id="horario-container" class="input-container">
                     <label id="horario-title" for="horario">Selecione os opcionais:</label>
                     <div class="radio-container" v-for="horario in horarios" :key="horario.id">
                     <input type="radio" name="horarios" :v-model="horarios" :value="horario.tipo">
                     <span>{{ horario.tipo }}</span>
                </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Fazer Reserva">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';
export default {
    name: "Reserva",
    data(){
        return{
            dia: null,
            cadeiras: null,
            horarios: null,
            nome: null,
            cadeira: null,
            horario:null,
            msg: null,
        }
    },
    methods:{
        async getreserva(){
            const req = await fetch("http://localhost:3000/reserva");
            const data = await req.json();
             
            this.cadeiras = data.cadeiras;
            this.horarios = data.horarios; 
         
        },
        async createReserva (e){
            e.preventDefault();

            const data ={
                nome : this.nome,
                dia : this.dia,
                cadeira : this.cadeira,
                horario : this.horario,
                status:"Solicitado",
            }
            const datajson = JSON.stringify(data);
        
            const req = await fetch(" http://localhost:3000/reservas", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body:datajson,
            }); 
        const res = await req.json();
        
        this.msg = "Reserva Realizada, Muito Obrigado"
        
         setTimeout(() => this.msg = "", 3000); 

         this.nome = "";
         this.dia = "";
         this.horario = "";
         this.cadeira = "";
        
        }


    },
    mounted() {
        this.getreserva()
    },
    components:{
        Message
    }
}
</script>

<style scoped>
#reserva{
    max-width: 400px;
    margin: 0 auto;
}
.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
label{
    font-weight: bold;
    margin-bottom: 15px;
    color:#222;
    padding: 5px 10px;
    border-left: 4px solid #8d4a23;
}
input, select {
    padding: 5px 10px;
    width: 300px;
}
#horario-container{
    flex-direction: row;
    flex-wrap: wrap;
}
#horario-title{
    width: 100%;
}

.radio-container{
display: flex;
align-items: flex-start;
width:50%;
margin-bottom: 20px;
}

.radio-container span,
.radio-container input{
    width: auto;
}

.radio-container span{
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn {
    background:#222 ;
    color:#8d4a23;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
 .submit-btn:hover{
    background: transparent;
    color: #222;
 }


</style>