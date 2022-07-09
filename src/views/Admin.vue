<template>
  <div class="main-container">
    <h1>Gerenciar reservas:</h1>
    <Dashboard />
    
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
    name: "Admin",
    components :{
      Dashboard
    }
}
</script>