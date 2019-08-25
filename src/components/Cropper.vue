<template>
  <div>
    <h1>Vue Croppa</h1>
    <croppa
      v-model="model"
      :height="150"
      :width="300"
      placeholder="Escolha uma imagem"
      placeholder-color="#777777"
    ></croppa>
    <button @click="uploadCroppedImage">Generate blob</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {}
  }),
  methods: {
    uploadCroppedImage() {
      const b64 = this.model.generateDataUrl('image/jpeg', 0.8)
      const newtab = window.open('', '_blank')
      newtab.document.write(`<img src="${b64}" />`)
    }
  }
};
</script> 