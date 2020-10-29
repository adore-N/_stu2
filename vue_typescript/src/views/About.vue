<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CompA></CompA>
    <button @click="open">按钮</button>
    <p>111</p>
    <CompB></CompB>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompA from '@/components/compA.vue';
import CompB from '@/components/compB.vue';
@Component({
  components: { 
    CompA
  }
})
export default class About extends Vue{
  public age: number = 0;
  open(){
    this.age = 4444;
    alert(111);
    console.log(CompA)
  }
}
</script>
