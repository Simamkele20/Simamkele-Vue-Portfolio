<template>
  <div class="container bg-white mb-3 pb-3">
    <H1 class="hea mb-0 text-danger  mt-3 pt-2"> About Me</H1>
      <img src="https://i.ibb.co/dg3pmsj/AGXqz-Dm1-PCZQku-Zfro9-Khe2-AXFk-Pxc-I6od-H0j8-JVE6-Hydsx-BGNo-Fmon-R2-Pb-N-5el-Dv-Mv-Xk1-f-N1-IUPZV.png" alt="Google Drive Image"    class="home1  mb-5 img-fluid rounded-bottom-circle" loading="lazy" /> 
    <h3 v-for="about in About" :key="about">
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