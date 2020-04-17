<template>
    <div>
        <h3>这个是来展示具名组件</h3>
        <slot name='header'></slot>
        <div>
            <h4>body</h4>
        </div>
        <slot name='footer'></slot>
    </div>
</template>

<script>
export default {
    name: 'child',
    data() {
        return {

        }
    }
}
</script>