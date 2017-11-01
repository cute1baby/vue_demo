<template>
    <div>
        <el-radio v-model="radio" label="1">第一项</el-radio>
        <el-radio v-model="radio" label="2">第二项</el-radio>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                radio: '1'
            };
        },
        mounted(){
            this.radio = '2'
        }
    }
</script>
<style>

</style>