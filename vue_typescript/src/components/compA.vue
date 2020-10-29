<template>
    <div> 
        <p>A1111</p>
        <!-- <p>{{age}}</p> -->
    </div>

</template>


<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class CompA extends Vue {
    // @Prop({type: Number, default: 233})
    // private age:number
}
</script>