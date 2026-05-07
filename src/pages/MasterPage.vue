<template>
  <base-main />
  <div class="profile">
    <div>
      <base-cart-profile
        :master="master"
        :get-photo="getPhoto"
        :format-experience="formatExperience"
        :start-year="startYear"
      >
      </base-cart-profile>
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
import nophoto from '@/assets/icons/nofoto.png'
import BaseMain from "@/components/BaseMain.vue";
import BaseCartProfile from "@/components/BaseCartProfile.vue";
import api from "@/api";
export default {
  components: { BaseMain, BaseCartProfile },
  data() {
    return {
      master: {},
    };
  },
  methods: {
    getPhoto(photo) {
        if(!photo) {
            return nophoto
        }
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
      const response = await api.get(`masters/${id}`);
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
  display: flex;
  padding: 40px 100px;
}

.profile__about {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
</style>