<template>
  <div class="container bg-white mb-3 pb-3">
    <H1 class="mb-0 text-danger mt-3 pt-2"> About Me</H1>
    <img src="https://drive.google.com/uc?id=1jS45Jq1LDA1ddBO4u2pVwDgkbokxy0Hv" alt="Google Drive Image"    class=" mb-5 img-fluid rounded-bottom-circle" loading="lazy" /> 
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