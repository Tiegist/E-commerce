<template>
  <NavBar />
  <div class="lg:font-serif font-serif lg:mt-16 mt-36"> 
    <div class=" lg:flex lg:p-2 flex p-2">
   <SideBar />
      <div class="lg:-ml-6 -ml-64">
        <div class="lg:flex lg:flex-col lg:ml-64 flex flex-col ml-56"> 
        <div class="hidden sm:block lg:relative relative lg:mt-20">
          <button @click="prevImage" class="pi pi-chevron-left lg:absolute absolute lg:top-1/4 top-1/4 lg:left-0 left-0 transform -translate-y-1/2 text-white text-xl"></button>
          <img v-if="item.gallery.length > 0" :src="item.gallery[currentIndex]" alt="" class="lg:w-screen lg:h-1/2 lg:mr-64 -mt-24">
          <button @click="nextImage" class="pi pi-chevron-right lg:absolute absolute lg:top-1/4 top-1/4 lg:right-0 transform -translate-y-1/2 text-white text-xl"></button>
        </div>
        <div class="lg:-mt-56 -mt-36 lg:-mr-2 -mr-2 lg:relative relative"> 
          <div v-for="(title, index) in item.titles" :key="index" class="lg:bg-zinc-400 bg-zinc-400 lg:backdrop-blur-md lg:py-4  lg:h-80 h-80 lg:mb-4 mb-4 lg:flex flex lg:mr-2 mr-2 lg:rounded-md rounded-md hidden sm:block">
            <p class="lg:text-balance text-balance lg:w-32 w-20">{{ title }}</p>
            <div v-for="(image, imgindex) in item.images.slice(index * 4, index * 4 + 4)" :key="imgindex" class="lg:mr-6 mr-6 lg:py-10 py-8 lg:rounded-md rounded-md">
              <div class="lg:bg-white bg-white lg:-mt-12 -mt-10">
                <img :src="image" alt="" class="lg:w-64 w-64 lg:h-64 lg:p-2 p-4">
                <div class="lg:flex flex lg:w-28 w-28  lg:pb-2 lg:ml-10">
                  <p class="lg:text-center lg:align-text-bottom text-center align-text-bottom">{{ item.prices[index * 4 + imgindex] }}</p>
                  <button @click="purchase" class=" lg:ml-10 lg:hover:scale-105 lg:w-20 lg:px-4 lg:bg-white lg:border lg:rounded-md lg:shadow-lg lg:text-black   ml-10 hover:scale-105 w-20 bg-white border rounded-md shadow-lg text-black">Detail</button>
                </div>
              </div>
            </div>
          </div> 
          <div class="mt-40 relative block md:hidden">
          <button @click="prevImage" class="pi pi-chevron-left absolute  top-1/4 left-0 transform -translate-y-1/2 text-white text-xl"></button>
          <img v-if="item.gallery.length > 0" :src="item.gallery[currentIndex]" alt="" class=" h-64   -mt-28">
          <button @click="nextImage" class="pi pi-chevron-right absolute  mt-32  transform -translate-y-1/2 text-white text-xl"></button>
        </div>
          <div v-for="(title, index) in item.titles" :key="index" class="mb-32 bg-zinc-400 -mt-28 ml-6 w-screen flex relative mr-2 rounded-md block md:hidden">
            <p class=" text-balance  w-64 text-center mt-4 ml-20">{{ title }}</p>
            <div v-for="(image, imgindex) in item.images.slice(index * 2, index * 2 + 2)" :key="imgindex" class=" mr-6 -ml-20  rounded-md">
              <div class="bg-white mt-16 -ml-8 mb-2 mr-20 w-40">
                <img :src="image" alt="" class=" w-40 h-40 p-4  ">
                <div class=" flex  w-28  pb-2 ml-6">
                  <p class="  text-center align-text-bottom">{{ item.prices[index * 2 + imgindex] }}</p>
                  <button @click="purchase" class=" ml- hover:scale-105 w-20 px-4 bg-white border rounded-md shadow-lg text-black ">Detail</button>
                </div>
              </div>
            </div>
          </div>


        </div>
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
  data() {
    return {
      currentIndex: 0,
      item: {
        titles: [
          "Adidas",
          "women's hills",
          "jordan",
          "flat shoes",
        ],
        images: [
          "/adidas-four.avif",
          "/adidas-one.webp",
          "/adidas-three.jpg",
          "/adidas-two.jpg",
          "/hill-four.jpg",
          "/hill-one.avif",
          "/hill-three.webp",
          "/hill-two.jpg",
          "/jordan-four.webp",
          "/jordan-one.webp",
          "/jordan-three.webp",
          "/jordan-two.webp",
          "/f-flat-four.jpg",
          "/f-flat-one.jpg",
          "/f-flat-three.avif",
          "/f-flat-two.jpg",
        ],
        prices: [
          "$200",
          "$180",
          "$450",
          "$299",
          "$900",
          "$950",
          "$750",
          "$890",
          "$670",
          "$1200",
          "$600",
          "$570",
          "$350",
          "$400",
          "$320",
          "$270",
        ],
        gallery: [
          "/home-navv-one.jpg",
          "/home-navv-five.jpg",
          "/home-navv-four.jpg",
          "/home-navv-six.jpg",
          "/home-navv-three.jpg",
          "/home-navv-two.jpg"
        ],
      },
    }
  },
  methods: {
    nextImage() {
      if (this.item.gallery && this.item.gallery.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.item.gallery.length;
        // this.currentIndex = this.currentIndex +1
      } else {
        console.error("Gallery is not defined or empty");
      }
    },
    prevImage() {
      if (this.item.gallery && this.item.gallery.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.item.gallery.length) % this.item.gallery.length;
      } else {
        console.error("Empty gallery");
      }
    },
    purchase(){

    }
  }
}
</script>

<style>
body {
  background-color: rgb(27, 27, 48);
}
</style>