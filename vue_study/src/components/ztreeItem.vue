<template>
  <div class='ztreeItem'>
       <ul class="ztree">
           <li :class="liClassVal">
				<span :class="spanClassVal" @click='open(model)'></span>
				<a  @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)'  @contextmenu.prevent='cxtmenufunc(model)'>
				    <!-- <span :class="{loadSyncNode:model.loadNode==1}" v-if='model.loadNode==1'></span>
				    <span :class='model.iconClass' v-show='model.iconClass' v-else></span> -->
				    <span v-show='isCheck' id="treeDemo_5_check" class="button chk" :class='{"checkbox_false_full":!model.ckbool,"checkbox_true_full":model.ckbool}' @click='ckFunc(model)' treenode_check=""></span>
					<span class="node_name" :class='aClassVal' @click='Func(model),open(model)' >{{model.name}}</span>
					<!--新增-->
					<!-- <span  v-show='model.hover' title='新增' class="button add" @click="addNode(model)"></span> -->
					<!--删除-->
				    <!-- <span v-show='model.hover' title='删除' class="button remove" @click="delNode(model)"></span> -->
				    <!--上移-->
				    <!-- <span v-show='model.hover' title='上移' class="button up" @click="upNode(model)"></span> -->
				    <!--下移-->
				    <!-- <span v-show='model.hover' title='下移' class="button down" @click="downNode(model)"></span> -->
				</a>
				<ul :class="ulClassVal" v-show='model.isFolder'>
					<ztreeItem v-for="(item,i) in model.children" 
                    :key='i' 
                    :model.sync="item" 
                    :num.sync='i' 
                    :isCheck='isCheck' 
                    ></ztreeItem>
				</ul>
                <!-- <ul :class="ulClassVal" v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" 
                    :key='i' 
                    :callback='callback' 
                    :expandfunc='expandfunc' 
                    :cxtmenufunc='cxtmenufunc' 
                    :model.sync="item" 
                    :num.sync='i' 
                    root='1' 
                    :nodes.sync='model.children.length' 
                    :ischeck='ischeck' 
                    :trees.sync='trees'
                    ></ztree-item>
				</ul> -->
			</li>
           
       </ul>
  </div>
</template>

<script>
import ztreeItem from '../components/'
export default {
  data () {
    return {
     
    }
  },
  components:{
      ztreeItem
  },
  props: {
      // 传递过来的每个对象
      model: {
          type: Object
      },
      num: {
          type: Number
      },
      // 是否展示复选框
      isCheck: {
          type: Boolean,
          default: false
      }
  },
  computed: {
      ulClassVal(){
          return ''
      },
      aClassVal(){
          return ''
      },
      spanClassVal(){
          return ''
      },
      liClassVal(){
          return ''
      }
  },
  methods:{
    ckFunc(){
        console.log(2)
    },
    Func(){
        console.log(1)
    },
    open(){
        console.log(3)
    },
    enterFunc(){
        console.log(1)
    },
    leaveFunc(){
        console.log(2)
    },
    cxtmenufunc(){
        console.log(4)
    }
  },
  mounted (){
     
  }
}
</script>

<style>

</style>
