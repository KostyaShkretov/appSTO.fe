<template>
  <div class="profile__attributes">
    <div class="profile__stats">
      <div>
        <img
          :src="getPhoto(master.photo)"
          :alt="master.photo"
          class="masters__photo"
        />
      </div>
      <div class="profile__head">
        <div class="profile__name">
          <h2>{{ master.name }}</h2>
          <p>{{ master.specialization }}</p>
        </div>
        <ul class="profile__ul">
          <li>🧰 Опыт работы: {{ formatExperience(master.experience) }}</li>
          <li>🎯 Специализация: {{ master.specialization }}</li>
          <li>📅 Работает в СТО с {{ startYear }} года</li>
          <li>⭐ 4.9 (155 отзывов (в разработке))</li>
        </ul>
      </div>
    </div>
    <div class="profile__about">
      <h3>О мастере</h3>
      <span>
        {{ master.about }}
      </span>
    </div>
  </div>
</template>

<script>
 
export default {
  props: {
    master: {
      type: Object,
      required: true,
    },
    getPhoto: Function,
    formatExperience: Function,
    startYear: { type: [String, Number] },
  }, 
};
</script>

<style>
.profile__name p{
  color: #2563eb;
}
.profile__attributes {
  max-width: 600px;
  padding: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
}
.masters__photo {
  width: 240px;
  height: 180px;
  object-fit: cover;
}
.profile__stats {
  display: flex;
  gap: 24px;
}
.profile__head {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.profile__name {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.profile__ul {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.profile__about {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>