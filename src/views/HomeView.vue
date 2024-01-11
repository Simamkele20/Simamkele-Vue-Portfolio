<template>
  <div class="container fluid bg-white  ">
    <div class="row  d-block d-md-flex mb-5 pb-4
     mt-5 justify-content-center align-items-center">
      <div class="col ">
        <img src="https://lh3.google.com/u/0/d/1OhqOSovjtR5aU_PcLzbd3LKFhtfwXfn9=w2000-h1710-iv1" alt="Google Drive Image"
          class="home1 img-fluid rounded-bottom-circle float-md-start" loading="lazy" />
      </div>
      <div class="col-8">
        <div> 
          <h2 >
            Hello I`m Simamkele Tancu
          </h2>
          <h1 class="text-danger" >
            {{ jobTittle }}
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Spinner />
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

<style></style>