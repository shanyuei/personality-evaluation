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
  CourseStartRequest,
  CourseStartResult,
} from '~/types/Course'

/**
 * 获取课程列表
 * - Method: GET
 * - Path: /course/list
 * - Header: token
 * - 返回: { code, message, data: { list } }
 */
export const getCourseList = () => {
  return useGetFetch<ApiResponse<CourseListData>>(`/course/list`)
}

/**
 * 获取课程详情
 * - Method: GET
 * - Path: /course/detail
 * - Query: { id }
 * - 返回: { code, message, data: { course, chapters? } }
 */
export const getCourseDetail = (data: { id: string | number }) => {
  return useGetFetch<ApiResponse<CourseDetailData>>(`/course/detail`, data)
}

/**
 * 获取课程章节列表
 * - Method: GET
 * - Path: /course/chapters
 * - Query: { course_id }
 * - 返回: { code, message, data: { list } }
 */
export const getCourseChapters = (data: { course_id: string | number }) => {
  return useGetFetch<ApiResponse<CourseChapterListData>>(`/course/chapters`, data)
}

/**
 * 获取课程课时列表
 * - Method: GET
 * - Path: /course/lessons
 * - Query: { course_id, chapter_id? }
 * - 返回: { code, message, data: { list } }
 */
export const getCourseLessons = (data: { course_id: string | number, chapter_id?: string | number }) => {
  return useGetFetch<ApiResponse<CourseLessonListData>>(`/course/lessons`, data)
}


/**
 * 标记课时完成
 * - Method: POST
 * - Path: /course/lesson/complete
 * - Body: { course_id, lesson_id }
 * - 返回: { code, message, data: { success, progress? } }
 */
export const markCourseLessonCompleted = (data: CourseMarkLessonRequest) => {
  return usePostFetch<ApiResponse<CourseMarkLessonResult>>(`/course/lesson/complete`, data)
}

/**
 * 开始课程学习
 * - Method: POST
 * - Path: /course/start
 * - Body: { course_id }
 * - 返回: { code, message, data: { success } }
 */
export const startCourse = (data: { course_id: number }) => {
  return usePostFetch<ApiResponse<CourseStartResult>>(`/course/start`, data)
}
