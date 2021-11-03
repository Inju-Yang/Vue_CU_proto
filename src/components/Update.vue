<template>
  <div>
    <input v-model="writer" placeholder="글쓴이"/>
    <input v-model="title" placeholder="제목"/>
    <textarea v-model="content" placeholder="내용"/>
    <button @click="update()">수정</button>
  </div>
</template>
<script>
import data from '../data'
export default {
  name: 'Update',
  data() {
    const index = this.$route.params.contentId;
    return {
      data: data,
      index: index,
      writer: data[index].writer,
      title: data[index].title,
      content: data[index].content
    }
  },
  methods: {
    update() {
      data[this.index].writer = this.writer
      data[this.index].title = this.title
      data[this.index].content = this.content
      this.$router.push({
        path: '/read'
      })
    }
  }
}
</script>
