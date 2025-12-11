<template>
  <div class="text-center" :class="containerClass">
    <component 
      :is="tag"
      class="text-3xl md:text-6xl font-bold text-gray-400 uppercase relative inline-block"
      :class="[spacingClass, customClass]"
    >
      {{ title }}
      <span class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-cyan-400"></span>
    </component>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  spacing?: 'sm' | 'md' | 'lg'
  containerClass?: string
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h2',
  spacing: 'md',
  containerClass: '',
  customClass: ''
})

const spacingClass = computed(() => {
  const spacings = {
    sm: 'mb-4',
    md: 'mb-8',
    lg: 'mb-12'
  }
  return spacings[props.spacing]
})
</script>


