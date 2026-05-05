<template>
  <div class="masters__cart">
    <img
      :src="getPhoto(master.photo)"
      :alt="master.photo"
      class="masters__photo"
    />
    <router-link :to="{ name: 'master', params: { master: master.id } }">
      <h2>{{ master.name }}</h2>
    </router-link>
    <p>Стаж: {{ master.experience }}</p>
    <p>Специализация: {{ master.specialization }}</p>
  </div>
</template>

<script>
import nophoto from "@/assets/icons/nofoto.png";
import MasterPage from "@/pages/MasterPage.vue";
export default {
  components: { MasterPage },
  props: {
    master: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPhoto(photo) {
      if (!photo) {
        return nophoto;
      }
      return `http://localhost/storage/${photo}`;
    },
  },
};
</script>

<style scoped>
.masters__cart {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.masters__photo {
  width: 240px;
  height: 180px;
  object-fit: cover;
  margin-bottom: 12px;
}
</style>