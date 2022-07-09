<template>
    <div id="reserva-table">
    <Message :msg="msg" v-show="msg" />
     <div>
        <div id="reserva-table-heading">
            <div class="order-id">#:</div>
            <div>Cliente:</div>
            <div>Data Da Reserva </div>
            <div>Numero de Acentos</div>
            <div>Horario da Reserva</div>
            <div>Ações</div>
        </div>
     </div>
          <div id ="reserva-table-rows">
            <div class="reserva-table-row" v-for="reserva in reservas" :key="reserva.id">
                <div class="order-number">{{reserva.id}}</div>
                <div>{{reserva.nome}}</div>
                <div>{{reserva.dia}}</div>
                <div>{{reserva.cadeira}}</div>
                <div>{{reserva.horario}}</div>
                <div>
            <select name="status" class="status" @change="updateReserva($event, reserva.id)">
        
                <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="reserva.status == s.tipo" >
                 {{s.tipo}}
                </option>
            </select>
            <button class="delete-btn" @click="deleteReserva(reserva.id)">Cancelar</button>
          </div>
            </div>
          
          </div>
    </div>
</template>
<script>
import Message from './Message.vue';
export default {
    name:"Dashboard",
    data() {
        return {
        reservas: null,
        reserva_id: null,
        status:[],
         msg: null,
    }
    },
    components:{
        Message
    },
    methods: {
        async getReservas(){

            const req = await fetch(" http://localhost:3000/reservas");

            const data = await req.json();
            
            this.reservas =data;
            
            this.getStatus();
        },
          async getStatus(){
            const req =await fetch("http://localhost:3000/status");
           
            const data = await req.json();

            this.status = data;

          },
          async deleteReserva(id){
             const req = await fetch ("http://localhost:3000/reservas/ ", {
                method: "DELETE"
             });

              const res = await req.json();

          this.msg = "Reserva Cancelada Com Sucesso"
        
         setTimeout(() => this.msg = "", 3000); 


              this.getReservas();
          },
          async updateReserva(event, id){
            const option = event.target.value;

            const datajson = JSON.stringify ({status: option});

            const req = await fetch(' http://localhost:3000/reservas/',{
                method :  "PATCH",
                headers: {"Content-Type":"application/json" },
                body : datajson
            });
            const res = await req.json();
            

       
          } 


    },
    mounted(){
        this.getReservas();
    }

    
}
</script>

<style scoped>

#reserva-table{
    max-width: 1200px;
    margin: 0 auto;
}

#reserva-table-heading,
#reserva-table-rows,
.reserva-table-row{
    display: flex;
    flex-wrap: wrap;
}
#reserva-table-heading{
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}
#reserva-table-heading div,
.reserva-table-row div{
    width: 19%;
}

.reserva-table-row {
    width: 100%;
    padding: 12px;
    border-bottom:  1px solid #ccc
}
#reserva-table-heading .order-id,
.reserva-table-row .order-number{
    width: 5%;
}

select{
   padding:12px 6px;
   margin-right:12px; 
}

.delete-btn{
    background: #222;
    color: #8d4a23;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size:16px ;
    margin: 0 auto;
    cursor: pointer;
    transition: 0,5s;

}

.delete-btn:hover{
    background: transparent;
    color: #222;
}
</style>