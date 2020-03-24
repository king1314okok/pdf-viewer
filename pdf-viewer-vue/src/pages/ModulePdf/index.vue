<template>
    <el-container>
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
            <pdf ref="pdf"/>
        </el-main>
    </el-container>
</template>

<script>
import Pdf from '@/pages/Pdf'

export default {
  name: 'ModulePdf',
  data() {
    return {
      files: this.$files,
      selectFile: ''
    }
  },
  components: {
    Pdf
  },
  methods: {
    showPdf (val) {
      const prefix = 'pdf/' + val
      if (val) {
        this.$refs.pdf.setUrl(prefix + '.pdf')
      } else {
        this.$refs.pdf.setUrl(prefix)
      }
    }
  }
}
</script>