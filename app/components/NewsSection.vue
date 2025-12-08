<template>
  <section class="news-section py-16 bg-gray-50" data-component="news">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Новости
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400"></span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article 
          v-for="post in posts" 
          :key="post.path" 
          class="news-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
          :data-article="post.path"
        >
          <div class="h-48 bg-gradient-to-br from-cyan-500 to-cyan-700 relative overflow-hidden group">
            <!-- Placeholder for news image -->
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <svg class="w-12 h-12 opacity-30 group-hover:scale-110 transition duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center text-xs text-gray-500 mb-3">
              <span class="bg-green-100 text-green-800 py-1 px-2 rounded-full uppercase font-bold tracking-wide mr-2">
                {{ post.category || 'Новости' }}
              </span>
              <span>{{ formatDate(post.date) }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.readingTime || 1 }} мин. чтения</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-3 hover:text-green-700 transition leading-tight line-clamp-2">
              <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
            </h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
              {{ post.description }}
            </p>
            <div class="mt-auto pt-4 border-t border-gray-100">
              <NuxtLink :to="post.path" class="text-green-600 hover:text-green-800 text-sm font-semibold flex items-center">
                Читать далее
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="!posts?.length" class="text-center py-8">
        <p class="text-gray-500">Новости скоро появятся...</p>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/news" class="inline-block px-6 py-3 border border-green-600 text-green-600 font-semibold rounded hover:bg-green-600 hover:text-white transition duration-300 uppercase text-sm tracking-wider">
          Все новости
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fetch latest 3 posts from the 'post' collection
const { data: posts } = await useAsyncData('home-posts', () => 
  queryCollection('post').order('date', 'DESC').limit(3).all()
)

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
