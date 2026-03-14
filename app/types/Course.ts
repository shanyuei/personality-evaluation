export interface CourseSummary {
  id: number | string
  title: string
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

export interface CourseDetailData {
  course: CourseSummary
  chapters?: CourseChapter[]
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

