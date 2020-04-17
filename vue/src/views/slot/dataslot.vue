<template>
    <div class="father">
        <h3>这里是父组件</h3>
        <Datachild>
            <div slot-scope="user">
                {{user.data}}
            </div>
        </Datachild>
    </div>
</template>

<script>
import Datachild from './datachild';
export default {
    name: 'dataslot',
    components: {
        Datachild
    },
    data() {
        return {

        }
    }
}
</script>