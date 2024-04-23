<template>
  <div class="container  pb-5">
    <H1 class=" mb-0 text-danger   p-5">Profile</H1>
    <div class="col d-block d-md-flex">
      <img src="https://i.ibb.co/dg3pmsj/AGXqz-Dm1-PCZQku-Zfro9-Khe2-AXFk-Pxc-I6od-H0j8-JVE6-Hydsx-BGNo-Fmon-R2-Pb-N-5el-Dv-Mv-Xk1-f-N1-IUPZV.png" alt="Google Drive Image"    class="home1  mb-5 img-fluid rounded-bottom-circle bg-white" loading="lazy" /> 
     <div class="abts text-start d-block  ">
      <h3 class=" text-white  mt-3"><span class="text-danger"> FullName  </span>:   Simamkele Tancu </h3>
      <h3 class=" text-white  mt-3 "><span class="text-danger">Date Of Birth  </span>: 02 March 2004 </h3>
      <h3 class=" text-white mt-3"> <span class="text-danger">Gender  </span>  : Male </h3>
      <h3 class=" text-white mt-3"><span class="text-danger">Languange   </span>: English & Xhosa </h3>
      <h3 class=" text-white mt-3"><span class="text-danger">Hobbies   </span>: Reading Books  </h3>
      <h3 class=" text-white mt-3"> <span class="text-danger">Cell Number </span>: 0656013640 </h3>
      <h3 class=" text-white mt-3"> <span class="text-danger">Email  </span>: princetancu06@gmail.com </h3>

     </div>

    </div>
    <H1 class=" mb-0 text-danger   p-5"> About Me</H1>
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