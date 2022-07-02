<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'edit-project', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
        <span class="material-icons" @click="deleteProject(project.id)">
          delete
        </span>
        <span class="material-icons tick" @click="update"> done </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import { updateProjects, deleteProject } from "@/firebase";
import { ref } from "@vue/reactivity";

export default {
  name: "SingleProject",
  props: {
    project: {
      type: Object,
    },
  },
  setup(props) {
    let showDetails = ref(false);

    const update = async () => {
      await updateProjects(props.project.id, {
        complete: !props.project.complete,
      });
    };
    return { update, deleteProject, showDetails };
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
