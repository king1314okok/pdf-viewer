<template>
  <div>
    <el-container>
      <el-header>
        <el-menu default-active="pdfPage" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="pdfPage">文档阅读器</el-menu-item>
        </el-menu>
      </el-header>
      <el-container style="height: 550px;">
        <el-aside>
          <el-select v-model="selectFile" placeholder="请选择" clearable @change="showPdf" style="margin-top:30px;">
            <el-option
              v-for="item in files"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-aside>
        <el-main>
          <pdf-page ref="pdfPage"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PdfPage from '@/pages/PdfPage'

export default {
  name: 'Home',
  data() {
    return {
      files: this.$files,
      selectFile: ''
    }
  },
  components: {
    PdfPage
  },
  created () {
  },
  methods: {
    showPdf (val) {
      if (val) {
        this.$refs.pdfPage.setUrl(val + '.pdf')
      }
    }
  }

};
</script>
