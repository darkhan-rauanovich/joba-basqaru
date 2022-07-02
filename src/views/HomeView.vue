<template>
  <div class="home">
    <div v-if="loadingProjects.length">
      <FilterNav
        @filterChange="current = $event"
        :current="current"
      ></FilterNav>
      <div v-for="(project, key) in filterProjects" :key="key">
        <SingleProject :project="project"></SingleProject>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";
import { LoadProjects } from "@/firebase";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { FilterNav, SingleProject },
  setup() {
    let current = ref("all");

    const loadingProjects = reactive(LoadProjects());

    const filterProjects = computed(() => {
      if (current.value === "completed") {
        return loadingProjects.value.filter((project) => project.complete);
      }
      if (current.value === "ongoing") {
        return loadingProjects.value.filter((project) => !project.complete);
      }
      return loadingProjects.value;
    });

    return { loadingProjects, current, filterProjects };
  },
};
</script>
