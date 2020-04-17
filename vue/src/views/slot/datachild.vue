<template>
    <div>
        <h3>作用域插槽</h3>
        <div>
            <slot :data='data'></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'datachild',
    data() {
        return {
            data: ['zhangsan','lisi','wanger']
        }
        
    }
}
</script>