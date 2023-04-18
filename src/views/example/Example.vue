<!-- Example
  Created by Matthew Ary on 2023-04-18.
  Email: matthew.ary@acquisitionsimplicity.com
         matthewj.c.ary@gmail.com
-->
<script setup lang="ts">

</script>

<template>
  <div>
    <div>Example</div>
    <VBtn :to="{ name: 'CompA' }">Comp A</VBtn>
    <VBtn :to="{ name: 'CompB' }" >Comp B</VBtn>
  </div>
  <RouterView />
</template>

<style scoped lang="scss"></style>
