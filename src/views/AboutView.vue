<template>
  <div class="container bg-black  pb-5">
    <H1 class=" mb-0 text-danger   p-5"> About Me</H1>
      <img src="https://i.ibb.co/dg3pmsj/AGXqz-Dm1-PCZQku-Zfro9-Khe2-AXFk-Pxc-I6od-H0j8-JVE6-Hydsx-BGNo-Fmon-R2-Pb-N-5el-Dv-Mv-Xk1-f-N1-IUPZV.png" alt="Google Drive Image"    class="home1  mb-5 img-fluid rounded-bottom-circle bg-white" loading="lazy" /> 
    <h3 class="text-white" v-for="about in About" :key="about">
     {{ about  }}
    </h3>
  </div>
</template>



<script>


export default {
  computed: {
    About(){
      return this.$store.state.about
    }

  },
  mounted(){
    this.$store.dispatch("fetchAbout")
  }
}
</script>

<style></style>