<template>
  <div class="home">
    <Header />
    <Menu />
    <Container />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'home',
  components: {
    Menu,
    Header,
    Container
  }
}
</script>
