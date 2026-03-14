import { useGetFetch, usePostFetch } from '~/composables/useApi'
import type { ApiResponse } from '~/types/Api'
import type {
  CourseChapterListData,
  CourseDetailData,
  CourseLessonListData,
  CourseListData,
  CourseMarkLessonRequest,
  CourseMarkLessonResult,
  CourseProgressData,
} from '~/types/Course'

/**
 * 获取课程列表
 * - Method: GET
 * - Path: /courses/list
 * - 返回: { code, message, data: { list } }
 */
export const getCourseList = () => {
  return useGetFetch<ApiResponse<CourseListData>>(`/courses/list`)
}

/**
 * 获取课程详情
 * - Method: GET
 * - Path: /courses/detail
 * - Query: { course_id }
 * - 返回: { code, message, data: { course, chapters? } }
 */
export const getCourseDetail = (data: { course_id: string | number }) => {
  return useGetFetch<ApiResponse<CourseDetailData>>(`/courses/detail`, data)
}

/**
 * 获取课程章节列表
 * - Method: GET
 * - Path: /courses/chapters
 * - Query: { course_id }
 * - 返回: { code, message, data: { list } }
 */
export const getCourseChapters = (data: { course_id: string | number }) => {
  return useGetFetch<ApiResponse<CourseChapterListData>>(`/courses/chapters`, data)
}

/**
 * 获取课程课时列表
 * - Method: GET
 * - Path: /courses/lessons
 * - Query: { course_id, chapter_id? }
 * - 返回: { code, message, data: { list } }
 */
export const getCourseLessons = (data: { course_id: string | number, chapter_id?: string | number }) => {
  return useGetFetch<ApiResponse<CourseLessonListData>>(`/courses/lessons`, data)
}

/**
 * 获取课程学习进度
 * - Method: GET
 * - Path: /courses/progress
 * - Query: { course_id }
 * - 返回: { code, message, data: CourseProgressData }
 */
export const getCourseProgress = (data: { course_id: string | number }) => {
  return useGetFetch<ApiResponse<CourseProgressData>>(`/courses/progress`, data)
}

/**
 * 标记课时完成
 * - Method: POST
 * - Path: /courses/lesson/complete
 * - Body: { course_id, lesson_id }
 * - 返回: { code, message, data: { success, progress? } }
 */
export const markCourseLessonCompleted = (data: CourseMarkLessonRequest) => {
  return usePostFetch<ApiResponse<CourseMarkLessonResult>>(`/courses/lesson/complete`, data)
}
