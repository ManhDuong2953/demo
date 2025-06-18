<template>
  <main>
    <NavBar />
    <SectionHero />
    <SectionDesign />
    <SectionLocation />
    <SectionAmenities />
   <SectionExperience />
     <!--<SectionTestimonial />
    <SectionGallery />
    <SectionRegister />
    <SectionFooter /> -->
  </main>
</template>

<script setup>
import NavBar from "./components/navbar/index.vue";
import SectionHero from "./components/sections/SectionHero.vue";
import SectionDesign from "./components/sections/SectionDesign.vue";
import SectionLocation from "./components/sections/SectionLocation.vue";
import SectionAmenities from "./components/sections/SectionAmenities.vue";
import SectionExperience from "./components/sections/SectionExperience.vue";
import SectionTestimonial from "./components/sections/SectionTestimonial.vue";
import SectionGallery from "./components/sections/SectionGallery.vue";
import SectionRegister from "./components/sections/SectionRegister.vue";
import SectionFooter from "./components/sections/SectionFooter.vue";
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: black;
}
</style>
