const RESPONSE_ERROR_SIGN_UP = 'این کاربر از قبل وجود دارد لطفا وارد صفحه ورود بشوید'
const RESPONSE_ACCEPT_SIGN_UP = 'شما اجازه ثبت نام دارید و کاربری با این ایمیل وجود ندارد'
const RESPONSE_ACCEPT_LOGIN = 'وارد شدید'
const RESPONSE_ACCEPT_INSERT_ROW = 'ثبت نام با موفقیت انجام شد'
const RESPONSE_ERROR_INSERT_ROW = 'ثبت نام انجام نشد'
const RESPONSE_ACCEPT_CHANGE_PASSWORD = 'پسورد با موفقیت تغییر کرد'
const RESPONSE_ACCEPT_LOGOUT = 'با موفقیت خارج شدید'
const RESPONSE_ACCEPT_CHANNEL_CREATE = 'کانال با موفقیت ساخته شد'
const RESPONSE_ERROR_CHANNEL_CREATE = 'ساختن کانال با خطا مواجه شد'
const RESPONSE_ACCEPT_VIDEO_CREATE = 'ویدیو با موفقیت ساخته شد'
const RESPONSE_ERROR_VIDEO_CREATE = 'ساختن ویدیو با خطا مواجه شد خطا مورد نظر دسترسی نداشتن و یا خطا در فرایند می باشد'
const USER_NOT_FOUND = 'کاربر مورد نظر پیدا نشد'
const USER_FOUND = 'وارد شدید'
const RESPONSE_ERROR_GET_ALL_QUESTIONNAIRE = 'دریافت پرسشنامه ها با خطا مواجه شد'
const RESPONSE_ERROR_FILTER_QUESTIONNAIRE = 'فیلتر کردن پرسشنامه ها با خطا مواجه شد'
const RESPONSE_ERROR_GET_ALL_QUESTIONS = 'دریافت سوال ها با خطا مواجه شد'
const RESPONSE_ACCEPT_ADD_OPERATIONS = 'متد اضافه شد'
const RESPONSE_ERROR_ADD_OPERATIONS = 'متد اضافه نشد'
const RESPONSE_ACCEPT_ADD_RESOURCE = 'ریسورس اضافه شد'
const RESPONSE_ERROR_ADD_RESOURCE = 'ریسورس اضافه نشد'
const RESPONSE_ACCEPT_ADD_ROLES = 'نقش اضافه شد'
const RESPONSE_ERROR_ADD_ROLES = 'نقش اضافه نشد'
const RESPONSE_ERROR_ACCESS_CONTROL = 'شما مجاز به صدا زدن این دامنه نیستید'
const RESPONSE_ACCEPT_ACCESS_CONTROL = 'دسترسی دارد'
const RESPONSE_ERROR_ASSIGN_CONTROL = 'دسترسی داده نشد'
const RESPONSE_ACCEPT_ASSIGN_CONTROL = 'دسترسی داده شد'
const RESPONSE_ACCEPT_SEND_EMAIL = 'ایمیل ارسال شد'
const RESPONSE_ERROR_SEND_EMAIL = 'ایمیل ارسال نشد'
const RESPONSE_ERROR_SEND_PARAMS = "داده های ارسال شده معتبر نمی باشد"
const RESPONSE_ACCEPT_SEND_NAME = "نام با موفقیت فرستاده شد"
const RESPONSE_ERROR_SUBMIT_QUESTIONNAIRE = 'اتمام پرسشنامه با شکست مواجه شد'
const RESPONSE_ERROR_SAVE_QUESTION = 'ذخیره پاسخ شما با شکست مواجه شد'
const RESPONSE_ERROR_GET_ANSWERS = 'در دریافت پاسخ های پرسشنامه ناموفق بودیم'
const TOKEN_NOT_FOUND = 'توکن وجود ندارد'
const RESPONSE_ACCEPT_CHANNEL_SUBSCRIBE = 'با موفقیت عضو کانال شدید'
const RESPONSE_ERROR_CHANNEL_SUBSCRIBE = 'عضویت کانال با مشکل مواجه شد'
const UN_AUTHORIZE = 'دسترسی به این دامنه ندارید'
const RESPONSE_ERROR_AVATAR = 'در گرفتن عکس ناموفق بودیم'
const RESPONSE_ACCEPT_DELETE_CHANNEL = 'کانال با موفقیت حذف شد'
const RESPONSE_ERROR_DELETE_CHANNEL = 'حذف کانال با شکست مواجه شد'
const RESPONSE_ERROR_SEARCH = 'سرچ با شکست مواجه شد'
const RESPONSE_ACCEPT_VIDEO_DELETE = 'ویدیو با موفقیت پاک شد'
const RESPONSE_ERROR_VIDEO_DELETE = 'پاک کردن ویدیو با مشکل مواجه شد'
const RESPONSE_ACCEPT_VIDEO_SEE = 'این ویدیو را مشاهده کردید'
const RESPONSE_ERROR_VIDEO_SEE = 'سین کردن این ویدیو با شکست مواجه شد'
const RESPONSE_ACCEPT_VIDEO_LIKE = 'پست مورد پسند شما قرار گرفت'
const RESPONSE_ACCEPT_VIDEO_DISLIKE = 'پست مورد پسند شما نبود'
const RESPONSE_ERROR_VIDEO_LIKE = 'فرایند لایک کردن به مشکل خورد'
const RESPONSE_ERROR_VIDEO_DISLIKE = 'فرایند دیس لایک کردن به مشکل خورد'
const RESPONSE_ACCEPT_VIDEO_COMMENT = 'کامنت اضافه شد'
const RESPONSE_ERROR_VIDEO_COMMENT = 'کامنت اضافه نشد'
const RESPONSE_ACCEPT_VIDEO_COMMENT_DISLIKE = 'شما این کامنت را دیس لایک کردید'
const RESPONSE_ACCEPT_VIDEO_COMMENT_LIKE = 'شما این کامنت را لایک کردید'
const RESPONSE_ACCEPT_PLAYLIST_ADD = 'ویدیو به پلی لیست اضافه شد'
const RESPONSE_ERROR_PLAYLIST_ADD = 'اضافه کردن ویدیو به پلی لیست با مشکل مواجه شده است'
const RESPONSE_ACCEPT_PLAYLIST_DELETE = 'پلی لیست حذف شد'
const RESPONSE_ERROR_PLAYLIST_DELETE = 'حذف پلی لیست با مشکل مواجه شد'
const IDENTIFICATION_KEY = 'email'
const USER = 'USER'
const ADMIN = 'ADMIN'
const GMAIL = 'gmail'
const SCHEMA = 'Schema'
const TOKEN = 'token'
const GET = 'GET'
const DATA = 'data'
const END = 'end'
const BASE_URL = "127.0.0.1"
const PORT = '8585'
module.exports = {
    IDENTIFICATION_KEY,
    RESPONSE_ERROR_SIGN_UP,
    RESPONSE_ACCEPT_SIGN_UP,
    RESPONSE_ACCEPT_LOGIN,
    RESPONSE_ACCEPT_INSERT_ROW,
    RESPONSE_ERROR_INSERT_ROW,
    RESPONSE_ACCEPT_CHANGE_PASSWORD,
    USER_NOT_FOUND,
    RESPONSE_ERROR_GET_ALL_QUESTIONNAIRE,
    RESPONSE_ERROR_FILTER_QUESTIONNAIRE,
    RESPONSE_ERROR_GET_ALL_QUESTIONS,
    RESPONSE_ACCEPT_ADD_OPERATIONS,
    RESPONSE_ERROR_ADD_OPERATIONS,
    RESPONSE_ACCEPT_ADD_RESOURCE,
    RESPONSE_ERROR_ADD_RESOURCE,
    RESPONSE_ACCEPT_ADD_ROLES,
    RESPONSE_ERROR_ADD_ROLES,
    RESPONSE_ACCEPT_ACCESS_CONTROL,
    RESPONSE_ERROR_ACCESS_CONTROL,
    RESPONSE_ACCEPT_SEND_EMAIL,
    RESPONSE_ERROR_SEND_EMAIL,
    RESPONSE_ERROR_SEND_PARAMS,
    RESPONSE_ACCEPT_SEND_NAME,
    RESPONSE_ERROR_SUBMIT_QUESTIONNAIRE,
    RESPONSE_ERROR_SAVE_QUESTION,
    RESPONSE_ERROR_GET_ANSWERS,
    USER,
    ADMIN,
    GMAIL,
    SCHEMA,
    TOKEN,
    GET,
    DATA,
    END,
    BASE_URL,
    PORT,
    USER_FOUND,
    TOKEN_NOT_FOUND,
    UN_AUTHORIZE,
    RESPONSE_ACCEPT_CHANNEL_CREATE,
    RESPONSE_ERROR_CHANNEL_CREATE,
    RESPONSE_ERROR_ASSIGN_CONTROL,
    RESPONSE_ACCEPT_ASSIGN_CONTROL,
    RESPONSE_ACCEPT_VIDEO_CREATE,
    RESPONSE_ERROR_VIDEO_CREATE,
    RESPONSE_ACCEPT_LOGOUT,
    RESPONSE_ACCEPT_CHANNEL_SUBSCRIBE,
    RESPONSE_ERROR_CHANNEL_SUBSCRIBE,
    RESPONSE_ERROR_AVATAR,
    RESPONSE_ACCEPT_DELETE_CHANNEL,
    RESPONSE_ERROR_DELETE_CHANNEL,
    RESPONSE_ERROR_SEARCH,
    RESPONSE_ACCEPT_VIDEO_DELETE,
    RESPONSE_ERROR_VIDEO_DELETE,
    RESPONSE_ACCEPT_VIDEO_SEE,
    RESPONSE_ERROR_VIDEO_SEE,
    RESPONSE_ACCEPT_VIDEO_LIKE,
    RESPONSE_ACCEPT_VIDEO_DISLIKE,
    RESPONSE_ERROR_VIDEO_LIKE,
    RESPONSE_ERROR_VIDEO_DISLIKE,
    RESPONSE_ACCEPT_VIDEO_COMMENT,
    RESPONSE_ERROR_VIDEO_COMMENT,
    RESPONSE_ACCEPT_VIDEO_COMMENT_DISLIKE,
    RESPONSE_ACCEPT_VIDEO_COMMENT_LIKE,
    RESPONSE_ACCEPT_PLAYLIST_ADD,
    RESPONSE_ERROR_PLAYLIST_ADD,
    RESPONSE_ACCEPT_PLAYLIST_DELETE,
    RESPONSE_ERROR_PLAYLIST_DELETE
}