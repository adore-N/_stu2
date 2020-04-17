<template> 
      <button @click='handleClick' class="my-button" :class="{...buttonStyle,...buttonSize,...buttonRound,...buttonDisabled}">
        <!-- 外部数据插入 -->
        <slot></slot>
      </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    },
    round: {
      type: String,
      default: 'round'
    },
    disabled: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    buttonStyle() {
      return {
        'my-button-primary': this.type === 'primary',
        'my-button-danger': this.type === 'danger',
        'my-button-success': this.type === 'success'
      }
    },
    buttonSize() {
      return {
        'my-button-small': this.size === 'small',
        'my-button-large': this.size === 'large',
        'my-button-medium': this.size === 'medium'
      }
    },
    buttonRound() {
      return {
        'my-button-round': this.round === ''
      }
    },
    buttonDisabled() {
      return {
        'my-button-disabled': this.disabled === ''
      }
    }
  },
  methods: {
    handleClick(event){
        this.$emit('click',event)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-button{
  background-color: #fff;
  border: none;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #000;
  width: 98px;
  height: 40px;
  margin: 5px;
  display: inline-block;
  outline: none;
}
.my-button-primary{
  color: #fff;
  background-color: #409eff;
  border: 1px solid #409eff;
}
.my-button-danger{
  color: #fff;
  background: #f56c6c;
  border: 1px solid #f56c6c;
}
.my-button-success{
  color: #fff;
  background: #67c23a;
  border: 1px solid #67c23a;
}
.my-button-small{
  width: 50px;
  height: 25px;
}
.my-button-large{
  width: 150px;
  height: 75px;
}
.my-button-round{
  border-radius: 20px;
}
.my-button-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
</style>
