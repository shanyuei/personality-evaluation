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
          <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="40" height="40" />
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
        <div class="course-card__footer__badge course-card__footer__badge--percent"
          :style="{ '--pct': ((course.percent ?? 10) + '%') }">
          <span class="course-card__footer__badge--percent-percent">{{ (course.percent ?? 10) }}%</span>
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
        <NuxtImg src="/images/common/check-mark-1.png" alt="check-mark" width="66" height="66" />
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
          <div class="course-card__footer__spacer"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

interface Course {
  id: number
  title: string
  description: string
  image: string
  footerType?: 1 | 2 | 3 | 4
  progress?: string
  percent?: number
}

defineProps<{
  course: Course
}>()
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

    &__badge--percent {
      width: 44px;
      height: 44px;
      flex: 0 0 44px;
      position: relative;
      border-radius: 50%;
      background: conic-gradient(var(--ui-primary) var(--pct), var(--ui-input) 0);
      border: none;

      &::after {
        content: '';
        position: absolute;
        inset: 6px;
        border-radius: 50%;
        background: #fff;
      }

      &-percent {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--ui-muted-foreground);
        font-size: 12px;
        font-family: 'Outfit';
        font-weight: 600;
        line-height: 1;
      }
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
</style>
