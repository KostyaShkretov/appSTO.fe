<template>
  <div class="header">
    <div class="header__container">
      <div class="header__logo">
        <button><img src="@/assets/icons/2.png" class="img__logo" /></button>
        <h1>AutoService</h1>
      </div>
      <div>
        <ul class="header__nav">
          <li>
            <router-link :to="{ name: 'main' }">Главная</router-link>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <router-link :to="{ name: 'masters' }">Мастера</router-link>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="header__actions">
        <router-link :to="{ name: 'login' }">Войти</router-link>
        <base-button>Записаться</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  padding: 30px 40px;
}
.header__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  display: flex;
  align-items: center;
}
.img__logo {
  width: 48px;
  height: 48px;
  object-fit: cover;
}
.header__nav {
  display: flex;
  gap: 60px;
  align-items: center;
}
.header__actions {
  display: flex;
  gap: 40px;
  align-items: center;
}
</style>