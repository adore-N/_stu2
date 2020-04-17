<template>
    <div>
        <h3>222</h3>
        <Child>
            <div>这是插槽内容</div>
        </Child>

        <Child2>
            <template v-slot:header>
                <h4>头部</h4>
            </template>

            <template v-slot:footer>
                <h4>底部</h4>
            </template>
        </Child2>
        <Dataslot></Dataslot>

    </div>
</template>

<script>
import Child from './Child.vue';
import Child2 from './Child2.vue';
import Dataslot from './dataslot';
export default {
    name: 'father',
    components: {
        Child,Child2,Dataslot
    }, 
    data() {
        return {

        }
    },
    methods: {
        
    }
}

/**
 * 插槽： slot 简单理解为子组件提供了一个占位符给父组件，在父组件里面可以在这个占位符里面写html或者组件，
 *       填充之后会替换子组件的<slot></slot>标签
 * 具名插槽：
 *     子组件里面可以存放多个插槽，父类定义名字，子组件接受对应的映射，而且在父组件里的书写顺序可以任意，
 *     决定元素位置是在子组件里面影响的
 * v-slot只可以添加在template上
 * 
 */
</script>
