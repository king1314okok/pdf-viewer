<template>
    <div>
        <h1>我是模块2</h1>
        <el-select v-model="selectFile" placeholder="请选择" clearable style="margin-top:30px;">
            <el-option
                v-for="item in paper"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'Module2',
    data () {
        return {
            paper: this.$paper,
            selectFile: ''
        }
    }
}
</script>