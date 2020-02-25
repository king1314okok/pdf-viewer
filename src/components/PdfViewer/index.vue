<template>
  <div>
    <input type="file" ref="fileInput" @change="uploadFile" />
    <input type="button" value="previous" @click="previousPage"/>
    <input type="button" value="next" @click="nextPage"/>
    <div>
      <canvas id="pdfViewer" class="pdf-canvas"/>
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
      scale: 1,
      loadingTask: {},
      url: './a.pdf'
    }
  },
  mounted () {
    // this.initPdf(this.url)
  },
  methods: {
    uploadFile () {
      let inputDom = this.$refs.fileInput
      let file = inputDom.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const pdfBase64 = atob(reader.result.substring(reader.result.indexOf(',') + 1))
        this.initPdf(pdfBase64)
      }
    },
    initPdf(pdfBase64) {
      this.loadingTask = pdfjs.getDocument({data: pdfBase64})
      this.renderPage()
    },
    renderPage () {
      this.loadingTask.promise.then((pdf) => {
        this.pageSize = pdf.numPages
        pdf.getPage(this.pageNum).then((page) => {
          var viewport = page.getViewport({ scale: this.scale });
          var canvas = document.getElementById(this.id);
          console.log('canvas:', canvas)
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
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
      if (this.pageNum === 0) {
        return
      }
      this.pageNum--
      this.renderPage()
    }
  }
}
</script>

<style scoped>
.pdf-canvas {
  height: 800px;
  width: 800px;
  border: 1px dashed black;
}
</style>