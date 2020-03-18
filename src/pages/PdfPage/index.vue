<template>
  <div>
    <h4>当前第：{{pageNum}}页&nbsp;&nbsp;总计:{{pageSize}}页</h4>
    <el-button size="mini" @click="previousPage">上一页</el-button>
    <el-button size="mini" @click="nextPage">下一页</el-button>
    <div style="display:flex;margin-top:10px;">
      转到第
      <div>
        <el-input v-model="toPageNum" style="width:50px;" size="mini"></el-input>
      </div>
      页
    </div>
    <div style="margin-top: 20px" >
      <canvas id="pdfViewer" v-if="isShow" class="pdf-canvas"/>
    </div>
  </div>
</template>

<script>
import pdfjs from 'pdfjs-dist'

export default {
  data () {
    return {
      id: 'pdfViewer',
      pageNum: 1,
      pageSize: 0,
      scale: 2,
      loadingTask: {},
      url: '',
      isShow: false,
      toPageNum: ''
    }
  },
  watch: {
    url (val) {
      this.pageNum = 1
      if (val) {
        this.isShow = true
        this.initPdf(val)
      } else {
        this.isShow = false
      }
    },
    toPageNum (val) {
      const toPageNum = Number(val)
      if (toPageNum < 0 || toPageNum > this.pageSize) {
        this.$message.error('跳转页超出范围')
        return
      }
      this.pageNum = Number(val)
      this.renderPage()
    }
  },
  methods: {
    refresh () {
      this.$forceUpdate()
    },
    setUrl (url) {
      this.url = url
    },
    initPdf(url) {
      this.loadingTask = pdfjs.getDocument(url)
      this.renderPage()
    },
    renderPage () {
      this.loadingTask.promise.then((pdf) => {
        this.pageSize = pdf.numPages
        pdf.getPage(this.pageNum).then((page) => {
          var viewport = page.getViewport({ scale: this.scale })
          var canvas = document.getElementById(this.id)
          var context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          }
          page.render(renderContext)
        })
      })
    },
    nextPage () {
      if (this.pageSize === this.pageNum) {
        return
      }
      this.toPageNum = this.pageNum + 1
      this.pageNum++
      this.renderPage()
    },
    previousPage () {
      if (this.pageNum === 1) {
        return
      }
      this.toPageNum = this.pageNum - 1
      this.pageNum--
      this.renderPage()
    }
  }
}

 
      


</script>

<style scoped>
.pdf-canvas {
  height: 1120px;
  width: 800px;
  border: 1px dashed black;
}
</style>