export interface CourseSummary {
  id: number | string
  title: string
  cover_img?: string
  summary?: string
  status?: number
  lesson_count?: number
  lesson_progress?: number
  lesson_titles?: string[]

  description?: string
  cover?: string
  lessons?: number
  duration?: string
  certificate?: boolean
  [property: string]: any
}

export interface CourseListData {
  list: CourseSummary[]
}

export interface CourseChapter {
  id: number | string
  course_id?: number | string
  title: string
  order?: number
  [property: string]: any
}

export interface CourseChapterListData {
  list: CourseChapter[]
}

export interface CourseLesson {
  id: number | string
  course_id?: number | string
  chapter_id?: number | string
  title: string
  content?: string
  order?: number
  duration?: string
  [property: string]: any
}

export interface CourseLessonListData {
  list: CourseLesson[]
}

export interface CourseLessonsRequest {
  course_id: string
  position: string
}

export interface CourseDetailData {
  id: number | string
  title: string
  cover_img?: string
  summary?: string
  status?: number
  lesson_count?: number
  lesson_progress?: number
  lesson_titles?: string[]
  [property: string]: any
}

export interface CourseProgressData {
  course_id: number | string
  completed_lessons?: number
  total_lessons?: number
  percent?: number
  [property: string]: any
}

export interface CourseMarkLessonRequest {
  course_id: number | string
  lesson_id: number | string
}

export interface CourseMarkLessonResult {
  success: boolean
  progress?: CourseProgressData
  [property: string]: any
}

export interface CourseStartResult {
  success: boolean
  [property: string]: any
}

export interface CourseNextLessonRequest {
  course_id: number | string
  position: number
}

export interface CourseNextLessonResult {
  success: boolean
  [property: string]: any
}
