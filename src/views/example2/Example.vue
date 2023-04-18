<!-- Example
  Created by Matthew Ary on 2023-04-18.
  Email: matthew.ary@acquisitionsimplicity.com
         matthewj.c.ary@gmail.com
-->
<script setup lang="ts">

</script>

<template>
  <div>
    <div>Example 2</div>
    <RouterLink :to="{ name: 'CompC' }">Comp C</RouterLink>
    <RouterLink :to="{ name: 'CompD' }" >Comp D</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped lang="scss"></style>
