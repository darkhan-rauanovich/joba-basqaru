<template>
  <form @submit.prevent="onSubmit">
    <label for="title">Title:</label>
    <input id="title" type="text" v-model="project.title" required />
    <label for="detailsInput">Details:</label>
    <textarea id="detailsInput" required v-model="project.details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
import { addProject } from "@/firebase";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    let project = reactive({
      title: "",
      details: "",
      complete: false,
    });
    const onSubmit = async () => {
      await addProject(project);
      router.push("/");
    };
    return { project, onSubmit };
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
