<template >
<div id="main-banner" >
<h1>Restaurante Do Evaristo</h1>
</div>
    
</template>

<script>
export default {
 name: "Banner"   
}
</script>

<style scoped>

#main-banner{
    background-image: url("../assets/restaurante01.jpg"); 
    background-size: cover;
    background-position: 0px -250px;
    height: 820px;
    display: flex;
    align-items: flex-start;
    justify-content:flex-start;

}

#main-banner h1{
    font-family: 'Fugaz One', cursive;
    color: #f5e3cc;
    font-size: 40px;
    text-shadow: 6px 6px 7px black;
    text-align: center;
    padding: 20px 60px;
}
</style>