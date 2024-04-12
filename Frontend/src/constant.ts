export interface admin_type {
  email: string;
  password: string;
}

export interface comment_type {
  course_id: string;
  student_id: string;
  comment_text: string;
}

export interface course_type {
  title: string;
  description: string;
  image_url: string;
  admin_id: string;
  _id:string;
}

export interface enrollment_type {
  user_id: string;
  course_id: string;
  completion_status: boolean;
  points: number;
}

export interface lesson_type {
  lesson_num: number;
  title: string;
  _id: string;
  content: string;
  course_id: string;
}

export interface question_type {
  question_text: string;
  correct_answer: number;
  options: string[];
  course_id: string;
  concept: string;
  _id: string;
}

export interface rating_type {
  course_id: string;
  user_id: string;
  rating: number;
}

export interface student_type {
  username: string;
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  profile_picture: string;
}

export interface SignUpData {
  email: string;
  password: string;
  fullName?: string;
  username?: string;
  age?: number;
  gender?: string;
}

export const GoldMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652796/vuyzjib3oka1lpbh2ne5.svg";
export const SilverMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652859/ynmptmehr25iptbkqzbo.svg";
export const BronzeMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652918/eo1gkjmn5ymoyerfmkov.svg";


// export const getAllCoursesAPI: string = "http://localhost:5001/api/course";
// export const getEditableCoursesAPI: string = "http://localhost:5001/api/course/editable";
// export const getCourseAllInfoAPI: string = "http://localhost:5001/api/course/get-all-info";
// export const getCourseAnalyticsAPI: string = "http://localhost:5001/api/course/get-course-analytics";
// export const updateCourseDetailsAPI: string = "http://localhost:5001/api/course/update-details";
// export const updateLessonAPI: string = "http://localhost:5001/api/course/lessons/update";
// export const updateQuestionAPI: string = "http://localhost:5001/api/course/quiz/update";
// export const updateCourseImageAPI: string = "http://localhost:5001/api/course/image-update";

// export const getTotalPointsAPI: string =
//   "http://localhost:5001/api/enrollment/get-total-points";
// export const GiveRatingAPI: string =
//   "http://localhost:5001/api/course/ratings/give-rating";
// export const SetPointsAPI: string =
//   "http://localhost:5001/api/enrollment/set-points";
// export const getEnrollmentAPI: string =
//   "http://localhost:5001/api/enrollment/get-enrollment";
// export const getQuizbyCourseIdAPI: string =
//   "http://localhost:5001/api/course/quiz/get-by-id";

// export const SearchCourseAPI: string =
//   "http://localhost:5001/api/course/search";

// export const FetchStudentDataAPI: string =
//   "http://localhost:5001/api/student/?id=";

// export const UpdateStudentAPI: string =
//   "http://localhost:5001/api/student/update";

// export const CloudinaryUploadAPI: string =
//   "https://api.cloudinary.com/v1_1/do2hqf8du/image/upload";

// export const FetchCourseAPI: string =
//   "http://localhost:5001/api/enrollment/courses";

// export const GetCourseInfo: string =
//   "http://localhost:5001/api/course/get-info";

// export const GetLessonsById: string =
//   "http://localhost:5001/api/course/lessons/get-by-id";

// export const AddCommentAPI: string =
//   "http://localhost:5001/api/course/comments/add-comment";

// export const GetCommentById: string =
//   "http://localhost:5001/api/course/comments/get-by-id";

// export const EnrollStudentAPI: string =
//   "http://localhost:5001/api/enrollment/enroll";

// export const GetAvgCourseRatingAPI: string =
//   "http://localhost:5001/api/course/ratings/get-by-id";

// export const BaseAPI: string = "http://localhost:5001/api/";

// export const CreateNewCourse: string = "http://localhost:5001/api/course/create";

// Define the base URL
export const base_URL = "https://yourdeploymenturl.com/api"; 

// Course-related APIs
export const getAllCoursesAPI = `${base_URL}/course`;
export const getEditableCoursesAPI = `${base_URL}/course/editable`;
export const getCourseAllInfoAPI = `${base_URL}/course/get-all-info`;
export const getCourseAnalyticsAPI = `${base_URL}/course/get-course-analytics`;
export const updateCourseDetailsAPI = `${base_URL}/course/update-details`;
export const updateLessonAPI = `${base_URL}/course/lessons/update`;
export const updateQuestionAPI = `${base_URL}/course/quiz/update`;
export const updateCourseImageAPI = `${base_URL}/course/image-update`;

// Enrollment-related APIs
export const getTotalPointsAPI = `${base_URL}/enrollment/get-total-points`;
export const GiveRatingAPI = `${base_URL}/course/ratings/give-rating`;
export const SetPointsAPI = `${base_URL}/enrollment/set-points`;
export const getEnrollmentAPI = `${base_URL}/enrollment/get-enrollment`;
export const FetchCourseAPI = `${base_URL}/enrollment/courses`;
export const EnrollStudentAPI = `${base_URL}/enrollment/enroll`;

// Quiz-related APIs
export const getQuizbyCourseIdAPI = `${base_URL}/course/quiz/get-by-id`;

// Search API
export const SearchCourseAPI = `${base_URL}/course/search`;

// Student-related APIs
export const FetchStudentDataAPI = `${base_URL}/student/?id=`; 
export const UpdateStudentAPI = `${base_URL}/student/update`;

// Comments APIs
export const AddCommentAPI = `${base_URL}/course/comments/add-comment`;
export const GetCommentById = `${base_URL}/course/comments/get-by-id`;

// Rating API
export const GetAvgCourseRatingAPI = `${base_URL}/course/ratings/get-by-id`;

// Course creation API
export const CreateNewCourse = `${base_URL}/course/create`;

// Cloudinary API
export const CloudinaryUploadAPI = "https://api.cloudinary.com/v1_1/do2hqf8du/image/upload";
