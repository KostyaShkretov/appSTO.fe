<template>
  <div class="header">
    <div class="header__container">
      <div class="header__links">
        <div class="header__logo">
          <button>
            <img src="@/assets/icons/2.png" class="img__logo" />
          </button>

          <h1>AutoService</h1>
        </div>

        <div>
          <ul class="header__nav">
            <li>
              <router-link :to="{ name: 'main' }">Главная</router-link>
            </li>

            <li><a href="#">Услуги</a></li>

            <li>
              <router-link :to="{ name: 'masters' }">Мастера</router-link>
            </li>

            <li><a href="#">О нас</a></li>

            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
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
  components: {
    BaseButton,
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
  align-items: center;
  justify-content: space-between;
}

.header__links {
  display: flex;
  align-items: center;
  gap: 60px;
}

.header__logo {
  display: flex;
  align-items: center;
}
.img__logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 40px;
}
 

.main__container {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;  
}

.main__head { 
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  margin: 40px 0px 20px 0px;
  width: 50%;
}
 
.main__img {
  width: 50%;
}
.image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.advantages {
  max-width: 1200px;
  margin: 60px auto 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  padding: 30px;
  border-radius: 20px;
  background: #f9fafb;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card h3 {
  font-size: 20px;
}

.card p {
  color: #6b7280;
  line-height: 1.5;
}
</style>