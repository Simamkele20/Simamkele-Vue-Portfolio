<template>
  <div class="Home bg-white  mb-3 container-fluid    ">
    <div class=" row  d-block d-md-flex mb-5 pb-4
     mt-5 justify-content-center align-items-center">
      <div class="col " v-if="loading">
        <img src="https://i.ibb.co/CVQD72C/DSC-0279-removebg-preview-1.png" alt="Google Drive Image"
          class="home1 img-fluid rounded-bottom-circle float-md-start mt-5 bg-white" loading="lazy" />
      </div>
      <div v-else>
    <Spinner />
  </div>
      <div class="col-8">
        <div> 
          <h2  id="home2" class="text-black">
            Hello I`m Simamkele Tancu
          </h2>
          <h1 class="text-danger"  id="home1">
            {{ jobTittle }}
          </h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    jobTittle() {
      return this.$store.state.jobTitle
    }


  },
  mounted() {
    this.$store.dispatch("fetchJobTittle")

  }
}
</script>

<style src="../assets/css/style.css">
</style>