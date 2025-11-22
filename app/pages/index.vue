<template>
  <div class="space-y-12">
    <!-- 英雄区域 -->
    <section class="py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="space-y-2">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              发现你的<br>
              <span class="text-primary">真实性格</span>
            </h1>
            <p class="text-xl text-gray-600">
              通过科学的测评，了解你的性格特质、优势和发展潜力
            </p>
          </div>
          <p class="text-gray-600">
            我们的测评基于现代心理学理论，帮助你获得对自己更深入的理解，
            从而在工作、学习和人际关系中发挥你的最大潜能。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <UButton class="text-base px-8 py-6">开始测评</UButton>
            <UButton variant="secondary" class="text-base px-8 py-6">了解更多</UButton>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          <div class="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-white shadow-xl">
            <div class="grid grid-cols-2 gap-4">
              <div class="aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center">
                <UIcon name="i-heroicons-brain" class="h-12 w-12 text-primary mb-3" />
                <h3 class="font-semibold">MBTI测评</h3>
                <p class="text-sm text-gray-600">了解你的性格类型</p>
              </div>
              <div class="aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center">
                <UIcon name="i-heroicons-heart" class="h-12 w-12 text-secondary mb-3" />
                <h3 class="font-semibold">性格优势</h3>
                <p class="text-sm text-gray-600">发现你的核心优势</p>
              </div>
              <div class="aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center">
                <UIcon name="i-heroicons-chart-bar" class="h-12 w-12 text-success mb-3" />
                <h3 class="font-semibold">职业匹配</h3>
                <p class="text-sm text-gray-600">寻找理想职业方向</p>
              </div>
              <div class="aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center">
                <UIcon name="i-heroicons-users" class="h-12 w-12 text-warning mb-3" />
                <h3 class="font-semibold">人际关系</h3>
                <p class="text-sm text-gray-600">提升沟通能力</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特点区域 -->
    <section class="py-16">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-bold mb-4">为什么选择我们的性格测评</h2>
        <p class="text-gray-600">我们的测评系统基于最新的心理学研究，提供准确、深入且实用的分析结果</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-shield-check" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">科学可靠</h3>
          <p class="text-gray-600">基于大五人格理论和MBTI模型，经过严格的信效度检验</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-clock" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">便捷高效</h3>
          <p class="text-gray-600">15分钟即可完成测评，即时获得详细分析报告</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-hand-thumb-up" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3">实用建议</h3>
          <p class="text-gray-600">提供个性化的发展建议，帮助你在各方面取得进步</p>
        </div>
      </div>
    </section>

    <!-- 用户反馈 -->
    <section class="py-16 bg-gray-50">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-bold mb-4">用户的真实反馈</h2>
        <p class="text-gray-600">看看其他人通过我们的测评获得了什么样的收获</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="https://picsum.photos/id/1005/200/200" alt="用户头像" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-semibold">李明</h4>
              <p class="text-sm text-gray-500">市场经理</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "通过这个测评，我对自己的沟通风格有了更清晰的认识，
            这帮助我在团队管理中取得了显著的进步。非常推荐！"
          </p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="https://picsum.photos/id/1006/200/200" alt="用户头像" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-semibold">张华</h4>
              <p class="text-sm text-gray-500">软件工程师</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "测评结果让我对自己的职业规划有了新的思考，
            现在我更清楚自己适合什么样的工作环境和团队。"
          </p>
        </div>
      </div>
    </section>

    <!-- 行动召唤 -->
    <section class="py-16 text-center">
      <div class="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10 border border-white shadow-xl">
        <h2 class="text-3xl font-bold mb-4">准备好了解真实的自己了吗？</h2>
        <p class="text-gray-600 mb-8">
          立即开始你的性格探索之旅，发现无限可能
        </p>
        <UButton class="text-base px-8 py-6">
          开始免费测评
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 首页组件逻辑
</script>

<style scoped>
/* 首页特定样式 */
</style>