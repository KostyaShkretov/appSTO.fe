<template>
  <base-main />
  <section class="main">
    <div class="main__container">
      <div class="main__img">
        <img src="@/assets/icons/auto3.png" alt="" class="image" />
      </div>
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
      <div class="advantages">
        <div class="card" v-for="(item, index) in advantages" :key="index">
          <img :src="item.icon"  class="card__img">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
import BaseMain from "@/components/BaseMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import masters from "@/assets/icons/masters.png";
import diamond from "@/assets/icons/diamond.png";
import guard from "@/assets/icons/guard.png";
import calendar from "@/assets/icons/calendar.png";
export default {
  components: { BaseMain, BaseButton },
  data() {
    return {
      advantages: [
        {
          title: "Опытные мастера",
          description: "Профессионалы с многолетним опытом работы",
          icon: masters,
        },
        {
          title: "Современное оборудование",
          description: "Диагностика и ремонт на новом оборудовании",
          icon: diamond,
        },
        {
          title: "Гарантия качества",
          description: "Предоставляем гарантию на все виды работ",
          icon: guard,
        },
        {
          title: "Удобная запись",
          description: "Онлайн-запись в удобное для вас время",
          icon: calendar,
        },
      ],
    };
  },
};
</script>

<style scoped>
.main__head span {
  color: #3c65bd;
}
.main {
  padding-bottom: 40px;
}
.main__container {
  max-width: 1200px;
  margin: 0 auto;

  position: relative;
}
.main__img::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40%;

  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.85) 40%,
    rgba(255, 255, 255, 0.5) 65%,
    rgba(255, 255, 255, 0.2) 70%,
    rgba(255, 255, 255, 0) 100%
  );
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main__head {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 70%;
  height: 100%;
  padding: 60px 0;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.95) 30%,
    rgba(255, 255, 255, 0.8) 60%,
    rgba(255, 255, 255, 0.4) 70%,
    rgba(255, 255, 255, 0) 100%
  );
}
.main__h2 {
  max-width: 400px;
  font-size: 38px;
  font-weight: 700;
}
.main__p {
  max-width: 400px;
  font-size: 16px;
}

.advantages {
  max-width: 1150px;
  margin: auto 0;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  padding-right: 20px;
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  padding: 12px;
  border-radius: 18px;

  background: rgb(255, 255, 255); 

  border: 1px solid rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  width: 100%;
  margin: 0 auto;

  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgb(0, 0, 0);
}
.card__img {
  align-content: center;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.card h3 {
  font-size: 20px;
}

.card p {
  color: #6b7280;
  line-height: 1.5;
}
</style>