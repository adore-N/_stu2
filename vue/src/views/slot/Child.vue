<template>
    <div>
        <h3>这个是子组建</h3>
        <slot></slot>
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