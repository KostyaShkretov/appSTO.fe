<template>
  <base-main />
  <div class="profile">
    <div>
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
              <li>🎯 Специализация {{ master.specialization }}</li>
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
      <div></div>
      <div></div>
    </div>

    <div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import BaseMain from "@/components/BaseMain.vue";
import axios from "axios";
export default {
  components: { BaseMain },
  data() {
    return {
      master: " ",
    };
  },
  methods: {
    getPhoto(photo) {
      return `http://localhost/storage/${photo}`;
    },
    formatExperience(years) {
      const lastDigit = years % 10;
      const lastTwoDigits = years % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${years} лет`;
      }

      if (lastDigit === 1) {
        return `${years} год`;
      }

      if (lastDigit >= 2 && lastDigit <= 4) {
        return `${years} года`;
      }

      return `${years} лет`;
    },
    async loadMasters() {
      const id = this.$route.params.master;
      const response = await axios.get(`http://localhost/api/masters/${id}`);
      this.master = response.data;
    },
  },
  mounted() {
    this.loadMasters();
  },
  computed: {
    startYear() {
      return this.master
        ? new Date().getFullYear() - this.master.experience
        : " ";
    },
  },
};
</script >

<style scoped>
.profile__name p {
  color: #2563eb;
}
.profile {
  background: #f3f4f6;
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
.profile {
  display: flex;
  padding: 40px 100px;
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