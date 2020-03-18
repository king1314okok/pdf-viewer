<template>
  <div>
    <h4>当前第：{{pageNum}}页</h4>
    <input type="button" value="previous" @click="previousPage"/>
    <input type="button" value="next" @click="nextPage"/>
    <pre>转到第 <input type=text id="pageJump"  style="width:20px"  @keyup.enter="jump"  oninput="value=value.replace(/[^\d]/g,'')"   /> 页</pre>
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
      isShow: false
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
      this.pageNum++
      this.renderPage()
    },
    previousPage () {
      if (this.pageNum === 1) {
        return
      }
      this.pageNum--
      this.renderPage()
    },
    jump () {

      var i = 12
      // console.log(i)
      // i = this.jumpPage
      console.log(i)
      i = event.currentTarget.value
      console.log(i)
      var k = parseInt(i)
      

      if (k <= this.pageSize && k>= 1) {
    
    
        this.pageNum = k
        this.renderPage()
      }
    
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