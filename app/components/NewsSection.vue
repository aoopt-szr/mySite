<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Новости
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400"></span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="news in newsItems" :key="news.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col">
          <div class="h-48 bg-gray-200 relative overflow-hidden group">
             <!-- Placeholder for news image -->
             <div class="absolute inset-0 bg-green-800 flex items-center justify-center text-white opacity-20 group-hover:scale-105 transition duration-500">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
             </div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center text-xs text-gray-500 mb-3">
              <span class="bg-green-100 text-green-800 py-1 px-2 rounded-full uppercase font-bold tracking-wide mr-2">Новости</span>
              <span>{{ news.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ news.readTime }}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-3 hover:text-green-700 transition leading-tight line-clamp-2">
              <a href="#">{{ news.title }}</a>
            </h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
              {{ news.summary }}
            </p>
            <div class="mt-auto pt-4 border-t border-gray-100">
              <a href="#" class="text-green-600 hover:text-green-800 text-sm font-semibold flex items-center">
                Читать далее
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        </article>
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
const newsItems = [
  {
    id: 1,
    title: 'Приглашение на семинар «Как писать научные статьи»',
    date: '8 февр. 2019 г.',
    readTime: '1 мин. чтения',
    summary: 'Приглашаем сотрудников ООПТ принять участие в обучающем семинаре по подготовке научных публикаций в рецензируемых журналах.'
  },
  {
    id: 2,
    title: 'Вебинар «Коммуникация или как привлечь сторонников»',
    date: '26 нояб. 2018 г.',
    readTime: '1 мин. чтения',
    summary: 'Обсудим стратегии эффективной коммуникации для привлечения волонтеров и партнеров в природоохранные проекты.'
  },
  {
    id: 3,
    title: 'Совет директоров Ассоциации в Печоро-Илычском заповеднике',
    date: '14 сент. 2018 г.',
    readTime: '2 мин. чтения',
    summary: 'Состоялось выездное заседание Совета директоров Ассоциации, где обсуждались итоги года и планы на будущий сезон.'
  }
]
</script>

