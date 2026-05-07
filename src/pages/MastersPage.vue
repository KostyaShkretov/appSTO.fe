<template>
  <base-main />
  <div class="header">
    <div class="header__container">
      <h1>Наши Мастера</h1>
    </div>
  </div>
  <div class="masters">
    <div class="masters__container">
      <base-cart-master
        v-for="master in masters"
        :key="master.id"
        :master="master"
      >
      </base-cart-master>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import BaseMain from "@/components/BaseMain.vue";
import BaseCartMaster from "@/components/BaseCartMaster.vue";

export default {
  components: { BaseMain, BaseCartMaster },
  data() {
    return {
      masters: [],
    };
  },
  methods: {
    async loadMasters() {
      const response = await api.get("masters");
      this.masters = response.data;
    },
  },
  mounted() {
    this.loadMasters();
  }, 
};
</script>

<style scoped>
p {
  font-size: 20px;
}
.header__container {
  display: flex;
  justify-content: center;
  text-align: center;
}
.masters {
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}
.masters__container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>