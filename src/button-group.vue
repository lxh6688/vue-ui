<template>
  <div class="s-button-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'StarsButtonGroup',
  mounted(){
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if(name !== 'button') {
        console.warn(`s-button-group 的子元素应该全是 s-button,但是你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .s-button-group{ 
    display: inline-flex; 
    vertical-align: middle;
    > .s-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>