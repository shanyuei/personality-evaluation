<template>
  <div class="course-card">
    <NuxtImg :src="course.image" :alt="course.title" class="course-card__img" />
    <div class="course-card__body">
      <h3 class="course-card__title">{{ course.title }}</h3>
      <p class="course-card__desc">{{ course.description }}</p>
      <div v-if="course.lessons || course.duration || course.certificate" class="course-card__meta">
        <span v-if="course.lessons" class="course-card__meta-item">
          <span class="course-card__meta-strong">{{ course.lessons }}</span>
          <span>{{ $t('pages.course.lessons') }}</span>
        </span>
        <span v-if="course.duration" class="course-card__meta-item">{{ course.duration }}</span>
        <span v-if="course.certificate" class="course-card__meta-item">{{ $t('pages.course.certificate') }}</span>
      </div>
      <div class="course-card__footer">
        <!-- 模板：已完成 + 积分 -->
        <template v-if="course.footerType === 'completed_with_points'">
          <div v-if="course.progress" class="course-card__status">
            <span class="course-card__progress">
              {{ course.progress }}
            </span>
          </div>
          <button class="course-card__cta" :class="course.ctaTheme === 'dark' ? 'is-dark' : 'is-green'">
            <span class="course-card__cta-text">{{ $t('common.getStarted') }}</span>
            <span class="course-card__cta-icon">
              <NuxtImg width="40" height="40" src="/images/common/go-arrow-1.png" />
            </span>
          </button>
          <div class="course-card__right">
            <a v-if="course.resultLabel" href="#" class="course-card__link">{{ course.resultLabel }}</a>
            <div v-if="course.points" class="course-card__badge course-card__badge--points">
              <div class="course-card__badge-wrap">
                <span class="course-card__badge-value">{{ course.points }}</span>
                <span class="course-card__badge-label">points</span>
              </div>
            </div>
          </div>
        </template>
        <!-- 模板：课程进度 + 百分比 -->
        <template v-else-if="course.footerType === 'lessons_with_percent'">
          <div v-if="course.progress" class="course-card__status">
            <span class="course-card__progress">{{ course.progress }}</span>
          </div>
          <button class="course-card__cta" :class="course.ctaTheme === 'dark' ? 'is-dark' : 'is-green'">
            <span class="course-card__cta-text">{{ $t('common.getStarted') }}</span>
            <span class="course-card__cta-icon">
              <NuxtImg width="40" height="40" src="/images/common/go-arrow-1.png" />
            </span>
          </button>
          <div class="course-card__right">
            <div v-if="course.percent !== undefined" class="course-card__badge course-card__badge--percent">
              <div class="course-card__badge-wrap">
                <span class="course-card__badge-percent">{{ course.percent }}%</span>
              </div>
            </div>
          </div>
        </template>
        <!-- 模板：已完成 + 结果链接 + 勾选徽章 -->
        <template v-else-if="course.footerType === 'completed_with_check'">
          <div v-if="course.progress" class="course-card__status">
            <span class="course-card__progress">{{ "You've completed this test." }}</span>
          </div>
          <button class="course-card__cta" :class="course.ctaTheme === 'dark' ? 'is-dark' : 'is-green'">
            <span class="course-card__cta-text">{{ $t('common.getStarted') }}</span>
            <span class="course-card__cta-icon">
              <NuxtImg width="40" height="40" src="/images/common/go-arrow-1.png" />
            </span>
          </button>
          <div class="course-card__right">
            <a v-if="course.resultLabel" href="#" class="course-card__link">{{ course.resultLabel }}</a>
            <div class="course-card__badge course-card__badge--check">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="var(--ui-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </template>
        <!-- 模板：CTA + 人群信息（紧挨按钮） -->
        <template v-else>
          <button class="course-card__cta" :class="course.ctaTheme === 'dark' ? 'is-dark' : 'is-green'">
            <span class="course-card__cta-text">{{ $t('common.getStarted') }}</span>
            <span class="course-card__cta-icon">
              <NuxtImg width="40" height="40" src="/images/common/go-arrow-1.png" />
            </span>
          </button>
          <div v-if="(course.avatars && course.avatars.length) || course.finishedText" class="course-card__people">
            <div class="course-card__avatars">
              <span v-for="(a, idx) in course.avatars" :key="idx" class="course-card__avatar">
                <NuxtImg :src="a" alt="avatar" />
              </span>
            </div>
            <p v-if="course.finishedText" class="course-card__finished">{{ course.finishedText }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Instructor {
  name: string
  avatar: string
}

interface Course {
  id: number
  title: string
  description: string
  image: string
  duration: string
  progress?: string
  resultLabel?: string
  points?: number
  percent?: number
  ctaTheme?: 'dark' | 'green'
  instructor: Instructor
  lessons?: number
  certificate?: boolean
  avatars?: string[]
  finishedText?: string
  footerType?: 'completed_with_points' | 'lessons_with_percent' | 'completed_with_check' | 'cta_with_people'
}

defineProps<{
  course: Course
}>()
</script>

<style scoped lang="less">
.course-card {
  background: var(--ui-background, #fff);
  border: 1px solid var(--ui-border);
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow .2s ease;
  overflow: hidden;
  padding: 12px;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 157, 119, 0.12);
  }

  &__img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  @media (min-width: 768px) {
    &__img {
      height: 200px;
    }
  }

  &__body {
    margin-top: 12px;
  }

  &__title {
    color: var(--ui-foreground);
    font-family: 'Outfit';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    margin: 0;
  }

  &__desc {
    color: var(--ui-muted-foreground);
    font-size: 14px;
    margin-top: 8px;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    color: var(--ui-muted-foreground);
    font-size: 14px;

    &-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    &-strong {
      color: var(--ui-foreground);
      font-weight: 600;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    position: relative;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__progress,
  &__result {
    color: var(--ui-foreground);
    font-size: 14px;
    font-family: 'Outfit';
    font-weight: 500;
  }

  &__cta {
    height: 48px;
    min-width: 158px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 4px 4px 20px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background-color .2s ease;

    &.is-green {
      background-color: var(--ui-primary);
    }

    &.is-dark {
      background-color: var(--ui-foreground);
    }

    &:hover {
      background-color: var(--color-green-2);
    }

    &-text {
      color: #fff;
      font-family: 'Outfit';
      font-weight: 500;
    }

    &-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background: #fff;
      color: var(--ui-foreground);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
  }

  &__link {
    margin-left: 12px;
    color: var(--ui-foreground);
    font-size: 14px;
    font-family: 'Outfit';
  }

  &__right {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__badge {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex: 0 0 64px;

    &--points {
      background: rgba(255, 211, 204, 0.5);
      border: 1px solid var(--color-pink-2);

      .course-card__badge-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .course-card__badge-value {
          color: var(--color-pink-1);
          font-size: 18px;
          font-family: 'Outfit';
          font-weight: 600;
          line-height: 1;
        }

        .course-card__badge-label {
          color: var(--color-pink-1);
          font-size: 12px;
          font-family: 'Outfit';
          line-height: 1;
        }
      }

    }

    &--percent {
      border: 4px solid var(--ui-border);

      .course-card__badge-percent {
        color: var(--ui-muted-foreground);
        font-size: 16px;
        font-family: 'Outfit';
        font-weight: 500;
        line-height: 1;
      }
    }
  }

  &__people {
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__avatars {
    display: inline-flex;
    align-items: center;
  }

  &__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
      margin-left: -8px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__finished {
    color: var(--ui-muted-foreground);
    font-size: 12px;
    font-family: 'Outfit';
  }
}
</style>
