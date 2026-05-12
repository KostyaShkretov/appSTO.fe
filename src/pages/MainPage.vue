<template>
  <base-main />
  <section class="main">
    <div class="main__container">
      <div class="main__head">
        <h2 class="main__h2">
          Профессиональный сервис для вашего
          <span>автомобиля</span>
        </h2>

        <p class="main__p">
          Качественный ремонт, техническое обслуживание и забота о вашем авто от
          опытных мастеров.
        </p>

        <base-button> Записаться на сервис 📝 </base-button>
      </div>

      <div class="main__img">
        <img src="@/assets/icons/auto3.jpg" alt="" class="image" />
      </div>
    </div>

      <div class="advantages">
      <div class="card">
        <h3>Опытные мастера</h3>
        <p>Профессионалы с многолетним опытом работы</p>
      </div>

      <div class="card">
        <h3>Современное оборудование</h3>
        <p>Диагностика и ремонт на новом оборудовании</p>
      </div>

      <div class="card">
        <h3>Гарантия качества</h3>
        <p>Предоставляем гарантию на все виды работ</p>
      </div>

      <div class="card">
        <h3>Удобная запись</h3>
        <p>Онлайн-запись в удобное для вас время</p>
      </div>
    </div>  
  </section>
</template>

<script>
import BaseMain from "@/components/BaseMain.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseMain, BaseButton },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main__head h2 {
  font-size: 32px;
  font-weight: 700;
}
.main__head p {
  font-size: 16px;
}
.main__head span {
  color: #2563eb;
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
  padding: 40px 0px 20px 0px;
  width: 40%; 
}
.main__h2 {
  max-width: 300px;
}
.main__p {
  max-width: 400px;
}

.main__img {
  width: 60%;
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