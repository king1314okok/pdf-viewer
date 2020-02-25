<template>
  <div>
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            style="height: 800px;width:200px;"
            class="el-menu-vertical-demo"
            >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">文档</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <pdf-viewer />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PdfViewer from '@/components/PdfViewer'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    PdfViewer
  }
};
</script>
