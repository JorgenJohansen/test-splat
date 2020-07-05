<template>
<div>
    <Header />
    <h1 class="error">Error 404, could not resolve your request!</h1>
    
</div>
    

</template>

<script>
import Header from './Header';
export default {
    components:{
        Header,
    }
}
</script>

<style scoped>
.error{
    color: red;
    
}
</style>