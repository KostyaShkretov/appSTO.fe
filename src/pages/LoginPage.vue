<template>
  <div class="login">
    <div class="login__container">
      <div class="login__head">
        <router-link :to="{ name: 'main' }">
        <img src="@/assets/icons/2.png" class="img__logo" />
        </router-link>
        <div class="login__hello">
          <h2>Вход в систему</h2>
          <p>Введите свои данные для входа</p>
        </div> 
      </div>
      <div class="login__form">
        <div class="login__log">
          <p>Логин</p>
          <input type="text" />
        </div>
        <div class="login__pass">
          <p>Пароль</p>
          <input type="text" name="" id="" />
        </div>
        <base-button class="login__btn">Войти</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
      components: { BaseButton },
};
</script>

<style scoped>
input {
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  outline: none;
  background: #f8fafc;
  transition: 0.3s;
  width: 300px;
  margin-top: 8px;
}
input:focus {
  background-color: #2563eb;
  background-color: white;
}
.login {
  background: linear-gradient(135deg, #3b82f6 10%, #2563eb 45%, #1e3a8a 100%);
  min-height: 100vh;
  padding-block: 50px; 
}
.login__container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  height: 620px;
}
.login__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}
.img__logo {
  width: 48px;
  height: 48px;
  object-fit: cover;
}

.login__hello {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
.login__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}  
.login__btn{
    width: 300px;
}
</style>