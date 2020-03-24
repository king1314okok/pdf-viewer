<template>
  <div>
    <el-container>
      <el-header>
        <el-menu default-active="pdfPage" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="modulePdf">思特威文档浏览系统</el-menu-item>
          <el-menu-item index="module2">模块2</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <router-view>
          <module-pdf />
        </router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ModulePdf from '@/pages/ModulePdf'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    ModulePdf
  }
}
</script>
