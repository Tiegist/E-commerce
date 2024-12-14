<template>
    <NavBar />
<div class="mt-16">
   <SideBar />
   <div class="font-serif mb-40 mt-5 lg:flex lg:ml-56 lg:">
    <div v-for="(img, index) in images" :key="index" class="bg-zinc-200 w-80 mt-4 h-4/5 ml-5 lg:w-72 lg:px-2 py-2">
        <img :src="img.src" alt="" class="w-56 ml-10 pt-2 shadow-lg">
        <p class="text-center text-lg">{{ img.title }}</p>
        <p class="text-center">{{ img.year }}</p>
        <p class="text-center">{{ img.auther }}</p>
        <p class="text-center">{{ img.type }}</p>
        <p class="text-center">{{ img.price }}</p>
    </div>
   </div>
   
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
data(){
    return{
        images: [
    {src: "/book-kid1.webp", title: "My First Library",year:"2018",auther:"by Wonder House Books (Author)",type:"Board book", price:"$16"},
    {src: "/book-kid2.webp", title: "My Magical Choices ",year:"October 30, 2019",auther:"by Becky Cummings (Author), Zuzana Svobodova (Illustrator)",type:"Hardcover", price:"$16"},
    {src: "/book-kid3.webp", title: "Be The One",year:"October 11, 2024",auther:"by Wonder House Books (Author)",type:"Hardcover", price:"$18"},
    {src: "/book-kid4.webp", title: "How Things Work ",year:"2018",auther:"by Jamie Thorne",type:"Paperback", price:"$11"},
    
]
    }
}
}
</script>

<style>

</style>