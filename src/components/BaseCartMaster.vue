<template>
  <div class="masters__cart">
    <img
      :src="getPhoto(master.photo)"
      :alt="master.photo"
      class="masters__photo"
    />
    <h2>{{ master.name }}</h2>
    <p>Стаж: {{ master.experience }}</p>
    <p>Специализация: {{ master.specialization }}</p>
  </div>
</template>

<script>
export default {
  props: {
    master: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPhoto(photo) {
      return `http://localhost/storage/${photo}`;
    },
  },
};
</script>

<style>
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