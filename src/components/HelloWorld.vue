<template>
  <div>Home Page</div>
  <VBtn :to="{ name: 'CompA', params: { pid: 'SomeValue' } }">VBtn Flaw</VBtn>
  <VBtn :to="{ name: 'CompC', params: { pid: 'SomeValue' } }">Router Link</VBtn>
</template>

<script lang="ts" setup>
  //
</script>
