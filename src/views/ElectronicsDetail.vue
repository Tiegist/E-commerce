<template>
    <NavBar />
<div class="mt-16">
   <SideBar />
</div>  
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import NavBar from "@/components/NavBar.vue"
export default {
components:{
    SideBar,
    NavBar
},
}
</script>

<style>

</style>