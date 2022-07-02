<template>
  <div v-if="project.title == '' && project.details == ''">loading ...</div>
  <form v-else @submit.prevent="update">
    <label for="title">Title:</label>
    <input id="title" type="text" v-model="project.title" required />
    <label for="detailsInput">Details:</label>
    <textarea id="detailsInput" required v-model="project.details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
import { getProject, updateProjects } from "@/firebase";
import { onMounted, reactive } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  props: {
    id: {},
  },
  setup(props) {
    const project = reactive({
      title: "",
      details: "",
    });
    const router = useRouter();

    onMounted(async () => {
      const projectLoad = await getProject(props.id);
      project.title = projectLoad.title;
      project.details = projectLoad.details;
    });

    const update = async () => {
      await updateProjects(props.id, project);
      router.push("/");
    };

    return { project, update };
  },
};
</script>

<style></style>
