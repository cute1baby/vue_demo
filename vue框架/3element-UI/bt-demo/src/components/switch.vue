<template>
    <div>
        <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
        </el-switch>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value4: true
            }
        }
    };
</script>
<style>

</style>