<template>
<div>
    <Header />
    <h1 class="error">Error 404, could not resolve your request!</h1>
    <Footer />
    
</div>
    

</template>

<script>
import Header from '../Header';
import Footer from '../Footer';
export default {
    components:{
        Header,
        Footer,
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.error{
    color: red;
    
}
</style>