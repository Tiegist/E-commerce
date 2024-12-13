<template>
    <NavBar  class="fixed"/>
<div class="lg:mt-16 lg:font-serif mt-20 font-serif">
   <SideBar class="lg:mt-5"/>
   <div class="lg:ml-64 lg:flex lg:text-white text-white lg:-mt-5 ">

    <div class="lg:mt-20 hidden sm:block">
        <div v-for="(image, index) in images" :key="index" class="lg:w-32 lg:flex lg:flex-col">
        <img :src="image" @click="changeImage(index)" alt="" class="lg:w-20 lg:mb-3 lg:rounded-lg w-20 mb-3 rounded-lg">
    </div>
    </div>
    <div class="lg:text-center lg:mr-16 lg:-mt-16 lg:-ml-10 hidden sm:block">
    <img v-if="images.length >0" :src="images[imageIndex]" alt="" class="lg:pt-20 w-56 lg:w-full ml-10 mt-10 ">
    <div class="block md:hidden text-white">
        <p class="lg:text-xl text-lg text-center w-56 ml-10">Anne Klein Women's Premium Crystal Accented Bangle Watch and Bracelet Set</p>
        <p class="ml-16 mt-4">price: $53.40</p>
    </div>
    </div>



<div class="flex bg-zinc-500 p-3 block md:hidden">
    <div class="lg:mt-20">
        <div v-for="(image, index) in images" :key="index" class="lg:w-32 lg:flex lg:flex-col">
        <img :src="image" @click="changeImage(index)" alt="" class="lg:w-20 lg:mb-3 lg:rounded-lg w-20 mb-3 rounded-lg">
    </div>
    </div>
    <div class="lg:bg-white  lg:text-center lg:mr-10  lg:mt-10 lg:ml-6">
    <img v-if="images.length >0" :src="images[imageIndex]" alt="" class="lg:pt-20 w-56 ml-10 mt-10">
    <div class="block md:hidden text-white">
        <p class="lg:text-xl text-lg text-center w-56 ml-10">Anne Klein Women's Premium Crystal Accented Bangle Watch and Bracelet Set</p>
        <p class="ml-16 mt-4">price: $53.40</p>
    </div>
    </div>
</div>


    <div>
<div class="lg:mr-56 lg:mt-14 hidden sm:block">
    <p class="lg:text-xl">Anne Klein Women's Premium Crystal Accented Bangle Watch and Bracelet Set</p>
    <p>price: $53.40</p>
</div>
<div class=" lg:mt-5 lg:mr-40 ml-2 mt-4 mb-4">
    <p class="lg:text-lg text-lg">Product details:</p>
    <p class="lg:ml-8">material: <span class="lg:ml-40 ml-48 text-sm">Brass</span></p>
</div>
<!-- <div class="lg:mt-5 lg:text-lg">
    <p>color option</p>
</div> -->
<div class="lg:mt-10 ml-2 mb-32">
    <p class="lg:text-lg text-lg mb-4">About this item</p>
    <li class="text-sm mb-5">24mm case with mineral dial window</li>
    <li class="text-sm mb-5">Gold-tone bangle watch with mother-of-pearl dial and premium crystal accents</li>
    <li class="text-sm mb-5">Gold-tone bangle with jewelry clasp closure and extender link; inner circumference 7"</li>
    <li class="text-sm mb-5">Set includes two matching bracelets accented with clear premium crystals</li>
    <li class="text-sm mb-5">Splash-resistant</li>
</div>

    </div>
   </div>
   <div class="-mt-28 mb-40 text-white lg:ml-64 lg:mt-10 ">
    <p class="ml-4 mb-2 text-lg">From the brand</p>
    <!-- <video src="/fem-watch-promo1.jpg"></video> -->
    <img src="/fem-watch-promo1.jpg" alt="" class="mb-40 h-56 absolute lg:w-4/5 lg:h-4/5">
    <img src="/fem-promo-little2.jpg" alt="" class="relative w-40 h-56 pt-5 ml-48 p-2 lg:w-72 lg:ml-96 lg:h-96 ">
<div class="lg:ml-96 lg:-mt-64">    <img src="/fem-promo-little.jpg" alt="" class="w-20 relative -mt-32 ml-28 lg:w-1/3 lg:ml-96"></div>
<div class="lg:mt-32 lg:mr-10">
    <img src="/fem-anne-quote.jpg" alt="">
</div>
<div class="lg:mt-5 lg:mr-10">
    <img src="/fem-the-perfect.jpg" alt="">
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
    imageIndex:0,
    images:[
        "/fem-watch1.jpg",
        "/fem-watch2.jpg",
        "/fem-watch-3.jpg",
        "/fem-watch-4.jpg",
        "/fem-watch-5.jpg",
        // "/fem-watch-vedio.mp4",
    ]
}
},
methods:{
    changeImage(index){
        if(this.images && this.images.length > 0){
            this.imageIndex =index
            if(this.imageIndex >= this.images.length){
                this.imageIndex =0
            }else if(this.imageIndex < 0){
                this.imageIndex =this.images.length -1
            }
        }
    }
}
}
</script>

<style>

</style>