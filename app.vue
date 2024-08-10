<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css';

const router = useRouter()

onMounted(async() => {
  definePageMeta({
    layout: false,
  })
})
</script>


