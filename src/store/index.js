import { createStore } from "vuex";
const dataUrl = "https://simamkele20.github.io/PortfolioDatas/data/";
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {},

  mutations: {
    setJobTittle(state, value) {
      state.jobTitle = value;
    },
    setAbout(state, value) {
      state.about = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
  },
  actions: {
    async fetchJobTittle(context) {
      let res = await fetch(dataUrl);
      let jobTittle = await res.json();
      console.log(jobTittle);
      context.commit("setJobTittle", jobTittle.jobTitle[0].title);
    },
    async fetchAbout(context) {
      let res = await fetch(dataUrl);
      let about = await res.json();
      context.commit("setAbout", about.about);
    },
  },
  modules: {},
});
