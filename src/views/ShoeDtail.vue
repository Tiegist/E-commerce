<template>
    <NavBar  class="fixed"/>
<div class="mt-16">
   <SideBar />
   <div class="ml-64 flex text-white">
    <div class="w-32 mt-20">
        <img src="/adi-2.jpg" alt="" class="w-20 mb-3 rounded-lg">
        <img src="/adi-3.jpg" alt="" class="w-20 mb-3 rounded-lg">
        <img src="/adi-4.jpg" alt="" class="w-20 mb-3 rounded-lg">
        <img src="/adi-5.jpg" alt="" class="w-20 mb-3 rounded-lg">
        <img src="/adi-6.jpg" alt="" class="w-20 mb-3 rounded-lg">
    </div>
    <div class="bg-white p-10 text-center mr-10  mt-16 ml-6">
    <img src="/adi-1.jpg" alt="" class="pt-20">
    </div>
    <div>
<div class=" mr-56 mt-5">
    <p class="text-xl">adidas Men's X_PLR Path Sneaker</p>
    <p>price: $32.48 - $49.99</p>
</div>
<div class=" mt-5 mr-40">
    <p class="text-lg">Product details:</p>
    <p class="ml-8">Origin: <span class="ml-40">Imported</span></p>
    <p class="ml-8">Sole: <span class="ml-40">materialRubber</span></p> 
    <p class="ml-8">Outer: <span class="ml-40">materialRubber</span></p> 
    <p class="ml-8">Closure: <span class="ml-40">typeLace-Up</span></p> 
</div>
<div class="mt-5 text-lg">
    <p>color option</p>
</div>
<div class="mt-10">
    <p class="text-lg">About this item</p>
    <li>Men's super comfortable sneakers designed for days in the city</li>
    <li>SNUG FIT: Adjustable laces provide a secure fit</li>
    <li>RUGGED CONSTRUCTION: Abrasion-resistant CORDURA nylon upper; Officially licensed CORDURA product</li>
    <li>HYBRID MIDSOLE: The midsole combines the incredible energy return of BOOST with the springy feel of Bounce</li>
    <li>HIGH TRACTION: The rubber outsole delivers great grip</li>
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
}
</script>

<style>

</style>