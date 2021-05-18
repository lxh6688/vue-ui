<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'starsToast',
}
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    border: 1px solid red;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: white;
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
  }
</style>