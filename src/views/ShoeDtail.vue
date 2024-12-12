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
        <p class="lg:text-xl text-lg text-center w-56 ml-10">adidas Men's X_PLR Path Sneaker</p>
        <p class="ml-16 mt-4">price: $32.48 - $49.99</p>
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
        <p class="lg:text-xl text-lg text-center w-56 ml-10">adidas Men's X_PLR Path Sneaker</p>
        <p class="ml-16 mt-4">price: $32.48 - $49.99</p>
    </div>
    </div>
</div>


    <div>
<div class="lg:mr-56 lg:mt-14 hidden sm:block">
    <p class="lg:text-xl">adidas Men's X_PLR Path Sneaker</p>
    <p>price: $32.48 - $49.99</p>
</div>
<div class=" lg:mt-5 lg:mr-40 ml-2 mt-4 mb-4">
    <p class="lg:text-lg text-lg">Product details:</p>
    <p class="lg:ml-8">Origin: <span class="lg:ml-40 ml-48 text-sm">Imported</span></p>
    <p class="lg:ml-8">Sole: <span class="lg:ml-40 ml-48 text-sm">materialRubber</span></p> 
    <p class="lg:ml-8">Outer: <span class="lg:ml-40 ml-48 text-sm">materialRubber</span></p> 
    <p class="lg:ml-8">Closure: <span class="lg:ml-40 ml-48 text-sm">typeLace-Up</span></p> 
</div>
<!-- <div class="lg:mt-5 lg:text-lg">
    <p>color option</p>
</div> -->
<div class="lg:mt-10 ml-2 mb-32">
    <p class="lg:text-lg text-lg mb-4">About this item</p>
    <li class="text-sm mb-5">Men's super comfortable sneakers designed for days in the city</li>
    <li class="text-sm mb-5">SNUG FIT: Adjustable laces provide a secure fit</li>
    <li class="text-sm mb-5">RUGGED CONSTRUCTION: Abrasion-resistant CORDURA nylon upper; Officially licensed CORDURA product</li>
    <li class="text-sm mb-5">HYBRID MIDSOLE: The midsole combines the incredible energy return of BOOST with the springy feel of Bounce</li>
    <li class="text-sm mb-5">HIGH TRACTION: The rubber outsole delivers great grip</li>
</div>
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
        "/adi-2.jpg",
        "/adi-1.jpg",
        "/adi-3.jpg",
        "/adi-4.jpg",
        "/adi-5.jpg",
        "/adi-6.jpg",
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