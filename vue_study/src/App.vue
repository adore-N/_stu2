<template>
  <div id="app">
    <my-button>默认按钮</my-button>
    <my-button type='primary'>正常</my-button>
    <my-button type='danger'>失败</my-button>
    <my-button type='success'>成功</my-button>
    <!-- <my-button type='失败' disabled>默认按钮</my-button>
    <hr>
    <my-button size='small' type='success'>成功</my-button>
    <my-button size='large' type='success'>成功</my-button>
    <my-button size='medium' type='success'>成功</my-button>
    <hr>
    <my-button round size='medium' type='success'>成功</my-button>
    <my-button disabled size='medium' type='success'>成功</my-button>
    <hr>
    <my-button @click="getData">成功</my-button> -->

      <!-- <div style='display:flex;flex:2'>
        <div style='flex:1'>
            <h1>Hello Ztree</h1>
            <div style='width:280px;' v-if='ztreeDataSource.length>0'>
                <vue-ztree :list.sync='ztreeDataSource'
                 :func='nodeClick' :is-open='true' :is-check='true'></vue-ztree>
            </div>
        </div>

        <div style="width:280px" v-if='ztreeDataSource.length > 0'>
          <my-tree
            :dataList.sync='ztreeDataSource' :func='nodeClick' :is-open='true' :is-check='true'
          ></my-tree>
        </div> -->
        
    <div>
      <my-page :pages="50" :jump="cb" :groups="5" class="laypage"></my-page>
      <input type="text" v-model="page">
      <!-- <my-page  :pages="50" :jump="cb" :groups="5" skip="skip" class="laypage"></my-page>
      <my-page  :pages="50" :jump="cb" :groups="5" :skin="skin" class="laypage"></my-page>
      <my-page  :pages="50" :jump="cb" :groups="5" :first="first" :last="last" class="laypage"></my-page>
      <my-page  :pages="50" :jump="cb" :groups="5" :prev="prev" :next="next" class="laypage"></my-page>
      <my-page  :pages="50" :jump="cb" :groups="0" class="laypage"></my-page> -->
  </div>

    <!-- </div> -->

    <!-- <hr> -->
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      ztreeDataSource:[],
      dataList:[],
      treeDeepCopy:[],
      parentNodeModel:[],//当前点击节点父亲对象
      nodeModel:null, // 当前点击节点对象,

        page: '1',
        skip: true,
        skin: '#4078c0',
        first: false,
        last: false,
        prev: false,
        next: false
    }
  },
  methods:{
    cb(page) {
        this.page = page
        console.log(this.page)
      },
    // 点击节点
    nodeClick:function(m, parent, trees){
       this.treeDeepCopy = trees;
       this.nodeModel = m;  // 当前点击节点对象
       this.parentNodeModel = parent; //当前点击节点父亲对象
       console.log(m);
       console.log(parent);
       
       // 导航菜单
       this.dataList=[]
       this.findById(this.ztreeDataSource,m.parentId)
       this.dataList= this.dataList.reverse();
       this.dataList.push(m);
    }
  },

  mounted (){
      // 异步获取数据操作
      setTimeout(()=>{ 
         this.ztreeDataSource = [{
            id:220,
            parentId:0,
            name:"游戏1",
            children:[{
              id:221,
              parentId:220,
              name:"游戏2",
              path:"",
              children:[{
                  id:222,
                  parentId:221,
                  name:"游戏3",
                  path:"",
                  children:[{
                      id:223,
                      parentId:222,
                      name:"游戏4",
                      path:"",
                      children:[{
                          id:224,
                          parentId:223,
                          name:"游戏5",
                          path:"",
                          children:[{
                              id:225,
                              parentId:224,
                              name:"游戏6",
                              path:"",
                              children:[{
                                  id:226,
                                  parentId:224,
                                  name:"游戏末节点",
                                  path:""
                              }],
                          }],
                      }],
                  }],
              }],
           }],
            path:"http://www.baidu.com"
         },{
            id:1,
            parentId:0,
            name:"音乐",
            children:[],
            path:"http://www.baidu.com"
         },{
            id:2,
            parentId:0,
            name:"视频",
            children:[{
               id:3,
               parentId:2,
               name:"电影",
               children:[{
                  id:4,
                  parentId:3,
                  name:"国产电影",
                  path:""
               },{
                  id:5,
                   parentId:3,
                  name:"好莱坞电影",
                  path:""
               },{
                  id:6,
                   parentId:3,
                  name:"小语种电影",
                  path:""
               }]
            },{
               id:7,
               parentId:2,
               name:"短片",
               children:[{
                  id:9,
                  parentId:7,
                  name:"电视剧",
                  path:""
               },{
                  id:10,
                   parentId:7,
                  name:"短片",
                  path:""
               }]
            }],
            path:""
         }]
      },1000);
  }
}
</script>

<style>
  .laypage {
    margin: 20px 0;
  }
</style>
