<template>
  <div class="main-container">
    <h1>PRATOS</h1>
     

   </div>
  
 

</template>

<script>

export default{
    name: "Pratos",
    data(){
      return{
      cardapio :null,
      cardapios:null,
      ingrediente:null,
      ingredientes:null,
      }
    },
}

</script>
<style scoped>
#cardapio-container{
  border: 2px solid red;
   max-width: 500px;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
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
    display: flex;
    align-items: flex-end;
}
 .submit-btn:hover{
    background: transparent;
    color: #222;
 }
    
    .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    }
    
</style>