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
}
.btn:hover  {
    background-color: #1e40af;
}
</style>