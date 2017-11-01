<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <Rate></Rate>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                <Switch1></Switch1>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理
                <Radio></Radio>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Radio from './radio.vue'
import Rate from './rate.vue'
import Switch1 from './switch.vue'
export default{
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    components:{
        Radio,
        Rate,
        Switch1
    }
}
</script>
<style>

</style>