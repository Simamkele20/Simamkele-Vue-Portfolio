<template>
  <div>
    <div class="row   vh-100 justify-content-center align-items-center">
      <div class="col ">
        <img src="https://drive.google.com/uc?id=1OhqOSovjtR5aU_PcLzbd3LKFhtfwXfn9" alt="Google Drive Image"
          class=" img-fluid rounded-bottom-circle float-md-start" loading="lazy" />
      </div>

      <div class="col-8">
        <div >
          <h1>
            Hello I`m Simamkele Tancu
          </h1>
          <h1 class="text-danger">
            {{ jobTittle }}
          </h1>
        </div>
      </div>
    </div>



   
  </div>

</template>

<script>


export default {
  computed: {
    jobTittle(){
      return this.$store.state.jobTitle
    }

  },
  mounted(){
    this.$store.dispatch("fetchJobTittle")
  }
}
</script>

<style></style>