<template>
    <NavBar  class="fixed"/>
<div class="lg:mt-16 lg:font-serif mt-20 font-serif">
   <SideBar class="lg:mt-5 mt-5"/>
   <div class="lg:ml-64 lg:flex lg:text-white lg:-mt-5 ml-5 text-white">
 <div class="flex bg-zinc-500 mr-4 p-3">
    <div class="lg:mt-10 -mt-2">
        <div v-for="(image, index) in images" :key="index" class="lg:w-32 w-32 lg:flex lg:flex-col">
        <img :src="image" @click="changeImage(index)" alt="" class="lg:w-20 lg:h-24 lg:mb-3 lg:rounded-lg w-20 h-20 mb-3 rounded-lg">
    </div>
    </div>
    <div class="lg:bg-white  lg:text-center lg:mr-32 lg:w-11/12 lg:mt-20 lg:ml-6 lg:h-96 bg-white text-center w-40 mt-5 h-40">
    <img v-if="images.length >0" :src="images[imageIndex]" alt="" class="lg:h-96 lg:w-72">
    <div class=" block md:hidden">
        <p class="text-md w-56 text-center -ml-10 mt-4">Women's Metallic Shiny Maxi Skirts Lightweight Silky Flowy Skirt for Summer Beach Holiday</p>
        <p class="mt-4">price: $11.49 - $24.99</p>
    </div>
    </div>
 </div>
    <div>
<div class="lg:mr-56 lg:mt-14 lg:ml-4 hidden sm:block">
    <p class="lg:text-xl">Women's Metallic Shiny Maxi Skirts Lightweight Silky Flowy Skirt for Summer Beach Holiday</p>
    <p>price: $11.49 - $24.99</p>
</div>
<div class=" lg:mt-5 lg:mr-40">
    <p class="lg:text-lg text-lg">Product details:</p>
    <div class="lg:flex flex">
        <p class="lg:ml-8 text-sm">Fabric type:</p>
        <p class="lg:ml-40 ml-20 text-center">99% Polyester, 1% Spandex</p>
    </div>
    <div class="lg:flex flex">
        <p class="lg:ml-8 text-sm">Care instructions:</p>
        <p class="lg:ml-40 ml-20 text-center">Hand Wash Only</p>
    </div>
    <div class="lg:flex flex">
        <p class="lg:ml-8 text-sm">Origin:</p>
        <p class="lg:ml-40 ml-24 text-center">Made in USA or Imported</p>
    </div>
    <div class="lg:flex flex">
        <p class="lg:ml-8 text-sm">Closure type:</p>
        <p class="lg:ml-40 ml-36 text-center">Elastic</p>
    </div>
</div>
<!-- <div class="lg:mt-5 lg:text-lg">
    <p>color option</p>
</div> -->
<div class="lg:mt-10 mt-10 lg:w-11/12 ">
    <p class="lg:text-lg text-lg">About this item</p>
    <li class="text-sm mb-5"><span class="text-md">Material:</span> High quality metallic shiny fabric, lightweight, comfortable lining</li>
    <li class="text-sm mb-5"><span class="text-md">Size:</span> Please refer to our size chart before purchasing. Waist S: 25-40 inches; M: 26.5-41 inches; ; L: 29-42 inches; XL: 31-43 inches; XXL: 33.5-44 inches; XXXL: 36-45 inches; Length approx 37 inches, Lining length approx 26 inches</li>
    <li class="text-sm mb-5"><span class="text-md">Features:</span> A-Line silhouette, Metallic shiny fabric, Pull on closure, Elastic high waist, Solid color, silky feeling, lightweight and flowing, suitable for</li>
    <li class="text-sm mb-5"><span class="text-md">Washing instructions:</span> Hand washing recommended, do not bleach, hang or dry. </li>
</div>
    </div>
   </div>
   <div class="lg:ml-64">
  <div class="lg:flex">  
    <img src="/yellow-dress-white.jpg" alt="" class="lg:mt-10 lg:mb-10 mb-4">
    <div class="flex lg:flex lg:flex-col">
    <img src="/yellow-skirt-black.jpg" alt="" class="lg:w-56 lg:h-72 lg:mt-10 lg:ml-5 w-40 mr-4 ml-2">
    <img src="/yellow-skirt-di-color.jpg" alt="" class="lg:w-56 lg:h-72 lg:mt-10 lg:ml-5">
</div>
</div>
    <p class="lg:text-white lg:mr-10 text-white text-sm ml-4 mt-4 mb-4 mr-4">This Women's Shiny Maxi Skirts Lightweight Silky Metallic Flowy Skirt for Summer Beach is a must-have for any fashion-forward woman. It is made of high-quality materials, is lightweight and silky, and is perfect for a day at the beach or a night out on the town. The metallic foil material gives it a shiny and glamorous look, while the flowy skirt allows you to move freely and comfortably. Whether you're looking for a casual or dressy outfit, this skirt is sure to impress.</p>
    <img src="/yellow-dress-many.jpg" alt="" class="lg:mt-10 lg:ml-28 lg:mb-10 mb-28">
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
        "/yellow-dress-1.jpg",
        "/yellow-dress-2.jpg",
        "/yellow-dress-3.jpg",
        "/yellow-dress-4.jpg",
        "/yellow-dress-5.jpg",
        "/yellow-dress-6.jpg",
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