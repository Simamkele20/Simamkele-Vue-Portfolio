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
      try {
        let res = await fetch(dataUrl);
        let jobTittle = await res.json();
        context.commit("setJobTittle", jobTittle.jobTitle[0].title);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAbout(context) {
      try {
        let res = await fetch(dataUrl);
        let about = await res.json();
        context.commit("setAbout", about.about);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let education = await res.json();
        context.commit("setEducation", education.education);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let skills = await res.json();
        context.commit("setSkills", skills.skills);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let projects = await res.json();
        context.commit("setProjects", projects.projects);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let testimonials = await res.json();
        context.commit("setTestimonials", testimonials.testimonials);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
    