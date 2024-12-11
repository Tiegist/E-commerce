<template>
     <div class="hidden sm:block bg-zinc-700 text-white backdrop-blur-lg  shadow-lg w-56 h-screen fixed">
        <i class="pi pi-bars pl-6 pt-4 font-bold mb-4"></i>
        <div class="ml-8">
          <div class="flex cursor-pointer active:w-28 active:h-6 ">
            <i class="pi pi-home mt-1 mr-2"></i>
            <router-link to="/ECommerce" class="text-white mb-6 active:text-black active:text-center">Home</router-link>
          </div>
          <div class="flex cursor-pointer active:w-20 ">
            <i class="pi pi-shoe"></i>
            <router-link to="/ShoeDtail" class="text-white mb-6 active:text-black active:text-center">Shoes</router-link>
          </div>
          <div class="flex cursor-pointer active:w-20 ">
            <i class="pi pi-tshirt"></i>
            <router-link to="/ClothDetail" class="text-white mb-6 active:text-black active:text-center">Cloths</router-link>
          </div>
          <div class="flex cursor-pointer active:w-28 ">
            <i class="pi pi-gem"></i>
            <router-link to="/AccessoriesDetail" class="text-white mb-6 active:text-black active:text-center">Accessories</router-link>
          </div>
          <div class="flex cursor-pointer active:w-28 active:h-6 ">
            <i class="pi pi-desktop mt-1 mr-2"></i>
            <router-link to="/ElectronicsDetail" class="text-white mb-6 active:text-black active:text-center">Electronics</router-link>
          </div>
          <div class="flex cursor-pointer active:w-20 active:h-6 ">
            <i class="pi pi-book mt-1 mr-2"></i>
            <router-link to="/BooksDetail" class="text-white mb-6 active:text-black active:text-center">Books</router-link><br>
          </div>
          <div class="flex cursor-pointer active:w-20 active:h-6 ">
            <i class="pi pi-shopping-bag mt-1 mr-2"></i>
            <router-link to="/BagsDetail" class="text-white mb-6 active:text-black active:text-center">Bags</router-link>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>