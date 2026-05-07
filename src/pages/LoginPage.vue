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
        <div class="alert__error" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="login-form__controll">
          <label for="email">Почта</label>
          <input v-model="email" type="email" id="email" />
        </div>
        <div class="login-form__controll">
          <label for="password">Пароль</label>
          <input v-model="password" type="password" id="password" />
        </div>
        <base-button @click="onSubmit" class="login__btn">Войти</base-button>
      </div>
      <div class="login__footer">
        <p>Нет аккаунта?</p>
        <router-link :to="{ name: 'register' }" class="login__footer-link"
          >Зарегистрируйтесь</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import api from "@/api";
export default {
  components: { BaseButton },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await api.post("login", {
          email: this.email,
          password: this.password,
        });
        alert(response.data.message);
      } catch (error) {
        this.errorMessage = "";
        if (error.response) {
          this.errorMessage = error.response.data.message; 
        }
      }
    },
  },
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
.login-form__controll {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.login__btn {
  width: 300px;
}
.login__footer {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}
.login__footer-link {
  color: #2563eb;
}
.login__footer-link:hover {
  color: #1e40af;
}
.alert__error {
  width: 300px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  font-size: 16px;
  font-weight: 500;
}
</style>