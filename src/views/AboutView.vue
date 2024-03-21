<template>
  <div class="container bg-white mb-3 pb-3">
    <H1 class="mb-0 text-danger  mt-3 pt-2"> About Me</H1>
      <img src="https://lh3.googleusercontent.com/fife/AGXqzDm1PCZQkuZfro9Khe2AXFkPxcI6odH0j8JVE6HydsxBGNoFmonR2PbN-5elDvMvXk1_fN1IUPZVuIwrdIJCM4aIIiaO3r_reh6MNJ7pWfTv14jYTb_ThGQCy6QEztcm0eihz1lX5OnK9WKozbZmuvul60MpqAwCIGmJ_QPzdbaGmgcNpgW_rEEuNlKFLv3s2kJnik_Ukb975ImKiG-dize-bYjLP-jcpqm9tqJtu9Lo9v_dhPTwzWvHYfniGx8eEonv-xVun8vGbjGAV68z2kjy6IP34crEsX3fzsIy8EqwMHFHt3Lv2fNo9gHQmzTTqi09kOZEvBDlj3tR_h3RjWq8mYZQDbC4u1e4cSoOZ4xrqmcvkSBPj7OLK7kdPodKeQJJP62mXrEIVJGCqzQo3jxEJKBglD1jkOMvP_2yj6LnYZQvw70QpQEz4epRSYFzGxIyLGpIOe3awr2wQJmYTdqis6oHEEXkSE-D8OqLfW4Y6zUh_K4H6nfya5vADbcJA98mWBp57sCFUclnDQlyqfQioUzr9Tzc2cr1gnKTJbxc94BjqkOUv6zPOsHVQ-4f0OIcACpnp5b7L8jJpwoYxJlCsU1MvBzWbgbiVbHrGTkCZCHTVmo7cuwz8sI75OQG6j9o_ryQUpPG2aoL7ssOFEHc1M8fYn_RPSD75xu7VIrWzT9LhDu8KU1blRCwEIRPaE_oLlWG0ksvRCbU3SYRCW2oR0LVoYE1QmBrUiYKgkGpM4iFbb7ueAaD68ghVMVQ4HR92QX1uqLMTNU3-BrHu0mt_hOoxIGjdpgx0fQ-2J0bwXU0fH-Fo8g63IpvZ_X9pAKopTysAdFnr1WYZDZKbQsoaWsSqz_QSuUMIoqUyv2ttUS7Zm5ZrJUTRVOHSSuC87_f-PtODN3q3D6B4DjpN8FV1mv-PGqNKLT-FVSYoezlGxGcHn4qq-d4HtOMGegloIBpgD3BGK38x9Q2fQ_sDIIUiHoooyewTtdYOb7EVj-qxPz4g1IRhszrQdmlaunbTg1EzTQ0ScJeRokZDtxnaK61ZSs3EGPZqUVPWdGextrqlREDG5ESEoouUCXbwzb6TjDOtKR08gs_5oyHuIQr2V2Ef6YdkJk0T_2ukyV_-rvBI15CWNCrctiWof53C8Wf85rXhKpHkBWVUOzcwvuUNsxayl0B7oZ5J_PvlKl4qCbuMrpZCMlkHE7nLA6k5KGd0EYmi_E2cqBLwXnkbV-3l-8KWv2nGhe-31hGRuhNhHz7eVqAkOdM9UnZhqeTnUG8WO_5U6EPK1hemvxkhcPAAHIY8cA4_ZeFBYDUnE7aGC7ULI1WCVQ-ZYSeDCg4ea1dDQQt5vxQ5SWU0Yg8A5R52-dJiJIviTAVbpoX7l0r9V0BXvGw6Vf_2FIbKee-rAamN8Ix4ojDnCXWUNSOuSvB_pd1fhNG21IeLcROSBWpZIezOxKoXzmhkN1pvJUt_3dRkyAGFM-mYG-yxtbfESHpt36ureExacEFrxdXoMm0mp0Yxvz9y429zwo=w10000-h10000" alt="Google Drive Image"    class="home1  mb-5 img-fluid rounded-bottom-circle" loading="lazy" /> 
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