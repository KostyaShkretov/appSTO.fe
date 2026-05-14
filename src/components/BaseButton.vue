<template>
  <button class="btn">
    <slot> 
    </slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    padding: 12px;
    background-color: #2563eb;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer; 
    font-size: 12px;
    transition: 0.3s ease;
}
.btn:hover  {
    background-color: #1e40af;
      transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
}
</style>