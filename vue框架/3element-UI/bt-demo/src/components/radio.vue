<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <el-radio>控制开关1</el-radio>
                </template>
                <el-radio v-model="radio1" label="1">第一项</el-radio>
                <el-radio v-model="radio1" label="2">第二项</el-radio>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
                <template slot="title">
                    <el-switch v-model="valueSwitch"></el-switch>
                </template>
                <el-checkbox v-model="checked1" :disabled="diStatus">多选框1</el-checkbox>
                <el-checkbox v-model="checked2" :disabled="diStatus">多选框2</el-checkbox>
            </el-collapse-item>
        </el-collapse>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                radio1: '1',
                checked1:false,
                checked2:false
            };
        },
        computed:{
            valueSwitch:{
                get(){
                    return this.checked1 || this.checked2
                },
                set(val){
                    this.checked1 = this.checked2 =val
                }
            },
            diStatus(){
                return !this.valueSwitch;  //两种方式都可以

            }
        },
        mounted(){
            this.radio1 = '2'
        }
    }
</script>
<style>

</style>