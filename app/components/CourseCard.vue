<template>
  <div class="course-card">
    <NuxtImg :src="course.image" :alt="course.title" width="564" height="270" class="course-card__img" />
    <h3 class="course-card__title">{{ course.title }}</h3>
    <p class="course-card__desc">{{ course.description }}</p>
    <!-- footer -->
    <template v-if="course.footerType === 1">
      <div class="course-card__footer">
        <div class="course-card__footer__status">
          You've completed this test.
        </div>
        <div class="course-card__footer__cta">
          <span class="course-card__footer__cta-text">
            Get Started
          </span>
          <span class="course-card__footer__cta-icon">
            <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="40" height="40" />
          </span>
        </div>
        <div class="course-card__footer__link">
          <span class="course-card__footer__link-text">
            View test results
          </span>
        </div>
        <div class="course-card__footer__badge course-card__footer__badge--points">
          <div class="course-card__footer__badge-wrap">
            <span class="course-card__footer__badge-value">
              20
            </span>
            <span class="course-card__footer__badge-label">
              points
            </span>
          </div>
        </div>
      </div>
    </template>


    <template v-if="course.footerType === 2">
      <div class="course-card__status">
        <span>1</span> of <span>10</span> lessons
      </div>
      <div class="course-card__footer">
        <button class="course-card__footer__cta is-green">
          <span class="course-card__footer__cta-text">
            {{ $t('common.getStarted') || 'Get Started' }}
          </span>
          <span class="course-card__footer__cta-icon">
            <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="40" height="40" />
          </span>
        </button>
        <div class="course-card__footer__progress" role="progressbar" :aria-valuenow="formatPercent(course.percent)" aria-valuemin="0" aria-valuemax="100">
          <svg viewBox="0 0 44 44" class="course-card__footer__progress-svg">
            <circle cx="22" cy="22" r="19" class="course-card__footer__progress-track" />
            <circle
              cx="22"
              cy="22"
              r="19"
              class="course-card__footer__progress-bar"
              :style="{ strokeDasharray: progressCircumference, strokeDashoffset: progressOffset }"
            />
            <text x="22" y="22" class="course-card__footer__progress-text" dominant-baseline="middle" text-anchor="middle">
              {{ formatPercent(course.percent) }}%
            </text>
          </svg>
        </div>
      </div>
    </template>
    <template v-if="course.footerType === 3">
      <div class="course-card__footer">
        <div class="course-card__footer__status">
          <span class="course-card__footer__status-text">
            You've completed this test.
          </span>
        </div>
        <button class="course-card__footer__cta is-dark">
          <span class="course-card__footer__cta-text">
            Get Started
          </span>
          <span class="course-card__footer__cta-icon">
            <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="40" height="40" />
          </span>
        </button>
        <div class="course-card__footer__link">
          <span class="course-card__footer__link-text">
            View test results
          </span>
        </div>
        <NuxtImg src="/images/common/check-mark-1.png" alt="check-mark" width="66" height="66"
          class="max-sm:hidden max-xs:hidden" />
        <NuxtImg src="/images/common/check-mark-1.png" alt="check-mark" width="24" height="24"
          class="hidden max-sm:block max-xs:block" />
      </div>
    </template>
    <template v-if="course.footerType === 4">
      <div class="course-card__footer__meta">
        <span class="course-card__footer__meta-item">10 lessons</span>
        <span class="course-card__footer__meta-item">2 weeks</span>
        <span class="course-card__footer__meta-item">Certificate</span>
      </div>
      <div class="course-card__footer">
        <div class="course-card__footer__row">
          <div class="course-card__footer__left">
            <div class="course-card__footer__actions">
              <button class="course-card__footer__cta is-green">
                <span class="course-card__footer__cta-text">Get Started</span>
                <span class="course-card__footer__cta-icon">
                  <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="40" height="40" />
                </span>
              </button>
              <div class="course-card__footer__people">
                <div class="course-card__footer__avatars">
                  <div class="course-card__footer__avatar">
                    <img
                      src="https://image-resource.mastergo.com/64427795427964/64427795427966/cbd4afe3876c389a4228a27675777330.png"
                      alt="avatar-1" />
                  </div>
                  <div class="course-card__footer__avatar">
                    <img
                      src="https://image-resource.mastergo.com/64427795427964/64427795427966/2cfa9e1b900d979eb23508b3951c207a.jpg"
                      alt="avatar-2" />
                  </div>
                  <div class="course-card__footer__avatar">
                    <img
                      src="https://image-resource.mastergo.com/64427795427964/64427795427966/a8944c428fea9d298029d86ace456ac3.jpg"
                      alt="avatar-3" />
                  </div>
                </div>
                <p class="course-card__footer__people-text">3067 people already finished it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Course {
  id: number
  title: string
  description: string
  image: string
  footerType?: 1 | 2 | 3 | 4
  progress?: string
  percent?: number
}

const props = defineProps<{
  course: Course
}>()

const formatPercent = (p?: number) => {
  const v = Math.round(p ?? 10)
  if (v < 0) return 0
  if (v > 100) return 100
  return v
}

const progressRadius = 19
const progressCircumference = 2 * Math.PI * progressRadius
const progressOffset = computed(() => {
  const p = formatPercent(props.course?.percent)
  return progressCircumference - (p / 100) * progressCircumference
})
</script>

<style scoped lang="less">
.course-card {
  background: var(--ui-background, #fff);
  padding: 12px;
  border-radius: 12px;
  overflow: hidden;

  .course-card__img {
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  .course-card__title {
    color: var(--ui-foreground);
    font-family: 'Outfit';
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
    margin-top: 12px;
  }

  .course-card__desc {
    color: var(--ui-muted-foreground);
    font-family: 'Outfit';
    font-size: 14px;
    line-height: 1.5;
    margin-top: 8px;
  }

  .course-card__footer {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    gap: 4px;
    flex-wrap: wrap;

    &__left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }


    &__actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }


    &__status {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__status-text {
      color: var(--ui-muted-foreground);
      font-size: 14px;
      font-family: 'Outfit';
      font-weight: 500;
      line-height: 1.5;
    }

    &__cta {
      height: 48px;
      min-width: 158px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 4px 4px 20px;
      border-radius: 100px;
      background: var(--ui-primary);
      border: none;
      cursor: pointer;
      transition: background-color .2s ease;

      &.is-green {
        background: var(--ui-primary);
      }

      &.is-dark {
        background: var(--ui-foreground);
      }

      &:hover {
        background-color: var(--color-green-2);
      }
    }

    &__cta-text {
      color: #fff;
      font-family: 'Outfit';
      font-weight: 500;
      line-height: 1.5;
    }

    &__cta-icon {
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

    &__people {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 16px;
      background: #fff;
      box-shadow: 10px 30px 50px rgba(0, 157, 119, 0.08);
    }

    &__avatars {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__avatar {
      width: 24px;
      height: 24px;
      border-radius: 22px;
      overflow: hidden;
      border: 2px solid #fff;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &:not(:first-child) {
        margin-left: -8px;
      }

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__people-text {
      color: var(--ui-muted-foreground);
      font-size: 12px;
      font-family: 'Outfit';
      line-height: 1.5;
      text-align: center;
    }

    &__spacer {
      flex: 1 1 auto;
    }

    &__link {
      display: flex;
      align-items: center;
    }

    &__link-text {
      color: var(--ui-foreground);
      font-size: 14px;
      font-family: 'Outfit';
      line-height: 1.5;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    &__badge {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 145.45px;
      background: rgba(255, 211, 204, 0.5);
      border: 1px solid var(--color-pink-2);
      overflow: hidden;

      &-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      &-value {
        color: var(--color-pink-1);
        font-size: 20px;
        font-family: 'Outfit';
        font-weight: 600;
        line-height: 1.2;
      }

      &-label {
        color: var(--color-pink-1);
        font-size: 12px;
        font-family: 'Outfit';
        line-height: 1.2;
      }
    }

    &__progress {
      width: 64px;
      height: 64px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    &__progress-svg {
      width: 64px;
      height: 64px;
      display: block;
      overflow: visible;
    }
    &__progress-track {
      fill: none;
      stroke: var(--ui-input);
      stroke-width: 6;
    }
    &__progress-bar {
      fill: none;
      stroke: var(--ui-primary);
      stroke-width: 6;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    &__progress-text {
      fill: var(--ui-foreground);
      font-size: 12px;
      font-family: 'Outfit';
      font-weight: 600;
    }

    &__badge--percent {
      width: 64px;
      height: 64px;
      flex: 0 0 64px;
      position: relative;
      border-radius: 50%;
      background: conic-gradient(var(--ui-primary) var(--pct), var(--ui-input) 0);
    }
    &__badge--percent::after {
      content: '';
      position: absolute;
      inset: 12px;
      border-radius: 50%;
      background: #fff;
      z-index: 1;
    }
    &__badge--percent::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--ui-primary);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(var(--pct-angle)) translate(0, -24px);
      z-index: 3;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    &__badge--percent-percent {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ui-muted-foreground);
      font-size: 16px;
      font-family: 'Outfit';
      font-weight: 600;
      line-height: 1;
      z-index: 2;
    }
  }

  .course-card__status {
    color: var(--ui-muted-foreground);
    font-size: 14px;
    font-family: 'Outfit';
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .course-card__footer__meta {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 12px;
    color: var(--ui-foreground);
    font-size: 14px;
    font-family: 'Outfit';
    font-weight: 500;
    line-height: 1.5;
  }

  .course-card__footer__meta-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
}

@media (max-width: 767px) {
  .course-card {
    .course-card__footer {
      // flex-direction: column;
      // align-items: flex-start;
      // gap: 8px;
    }

    .course-card__footer__status {
      margin-bottom: 2px;
    }

    .course-card__footer__cta {
      height: 44px;
      padding-left: 14px;
      padding-right: 6px;
      min-width: 140px;
      gap: 8px;
      justify-content: space-between;
    }

    .course-card__footer__cta-text {
      font-size: 14px;
    }

    .course-card__footer__cta-icon {
      width: 32px;
      height: 32px;
    }

    .course-card__footer__link {
      margin-top: 2px;
    }

    .course-card__footer__badge {
      width: 40px;
      height: 40px;
    }

    .course-card__footer__badge-value {
      font-size: 14px;
    }

    .course-card__footer__badge-label {
      font-size: 10px;
    }
    .course-card__footer__people {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      width: 100%;
    }
    .course-card__footer__people-text {
      text-align: left;
    }
    .course-card__footer__avatar {
      width: 20px;
      height: 20px;
    }
    .course-card__footer__avatar:not(:first-child) {
      margin-left: -6px;
    }
    .course-card__footer__badge--percent {
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      position: relative;
      border-radius: 50%;
      background: conic-gradient(var(--ui-primary) var(--pct), var(--ui-input) 0);
    }
    .course-card__footer__badge--percent::after {
      content: '';
      position: absolute;
      inset: 6px;
      border-radius: 50%;
      background: #fff;
      z-index: 1;
    }
    .course-card__footer__badge--percent::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ui-primary);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(var(--pct-angle)) translate(0, -18px);
      z-index: 3;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .course-card__footer__badge--percent-percent { font-size: 11px; z-index: 2; }

    .course-card__footer__progress {
      width: 40px;
      height: 40px;
    }
    .course-card__footer__progress-svg {
      width: 40px;
      height: 40px;
    }
    .course-card__footer__progress-track {
      stroke-width: 5;
    }
    .course-card__footer__progress-bar {
      stroke-width: 5;
    }
    .course-card__footer__progress-text {
      font-size: 10px;
    }
  }
}
</style>
