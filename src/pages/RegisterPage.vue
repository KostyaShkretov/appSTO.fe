<template>
  <div class="login">
    <div class="login__container">
      <div class="login__head">
        <router-link :to="{ name: 'main' }">
          <img src="@/assets/icons/2.png" class="img__logo" />
        </router-link>
        <div class="login__hello">
          <h2>Регистрация</h2>
          <p>Введите свои данные для регистрации</p>
        </div>
      </div>
      <div class="login__form">
         <div class="login-form__controll">
          <label for="name">Имя</label>
          <input type="text" id="name"/>
        </div>
        <div class="login-form__controll">
          <label for="email">Почта</label>
          <input type="email" id="email"/>
        </div>
        <div class="login-form__controll">
          <label for="password">Пароль</label>
          <input type="text" id="password" />
        </div>
         <div class="login-form__controll">
          <label for="password_confirmation">Повторите пароль</label>
          <input type="text"  id="password_confirmation" />
        </div>
        <base-button class="register__btn">Зарегистрироваться</base-button>
      </div>
      <div class="login__footer"> 
        <router-link :to="{ name: 'login' }" class="login__footer-link">Войти</router-link>
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
  margin-top: 4px;
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
  padding: 20px;
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
.login-form__controll{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.register__btn {
  width: 300px;
}
.login__footer{
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}
.login__footer-link{
  color: #2563eb;
}
.login__footer:hover{
  color: #1e40af;
}
 
</style>