
//export const SERVER_ADDRESS = "http://192.168.1.45:8086"
export const SERVER_ADDRESS = "http://35.247.179.117:3000/api"

export default {
    LOGIN: SERVER_ADDRESS+'/login',
    VERIFY: SERVER_ADDRESS+'/confirm',
    UPDATE_USER: SERVER_ADDRESS+'/user/update',
    CREATE_REQUEST: SERVER_ADDRESS+'/createpost',
    UPDATEPOST: SERVER_ADDRESS+'/updatepost',
    DELETEPOST: SERVER_ADDRESS+'/deletepost',
    UPDATEIMAGE: SERVER_ADDRESS+'/updateimage',
    PROFILE_INFO: SERVER_ADDRESS+'/postuserid',
    BOOKING_INFO: SERVER_ADDRESS+'/booking',
    ARTIST_LIST: SERVER_ADDRESS+'/postcatid',
    REQUEST_WORK_SAMPLE: SERVER_ADDRESS+'/postimagevideo',
    BOOKARTIST: SERVER_ADDRESS+'/createbooking',
    FOLLOW: SERVER_ADDRESS+'/userfollow',
    UNFOLLOW: SERVER_ADDRESS+'/userunfollow',
    FOLLOW_CHECK: SERVER_ADDRESS+'/followcheck',
    GET_FOLLOWINGS_POST: SERVER_ADDRESS+'/getpostbyuser',
    UPDATE_PROFILE: SERVER_ADDRESS+'/updateprofile',
    UPDATE_BOOKING_STATUS: SERVER_ADDRESS+'/statuschange',
    REQUEST_BOOKING_INFO: SERVER_ADDRESS+'/bookbypost',
    GET_EVENTS: SERVER_ADDRESS+'/getevent',
    GET_TOP_USERS: SERVER_ADDRESS+'/gettopuser',
    SEND_OTP: SERVER_ADDRESS+'/sendotp',
    PAYTM_CHECKSUM: SERVER_ADDRESS+'/paytmss',
    VERIFY_TRANSACTION: SERVER_ADDRESS+'/verifypayment',
    FEATURE_ARTISTS: SERVER_ADDRESS+'/featurepost',
    FORGOT_PASSWORD: SERVER_ADDRESS+'/forgot',
    CONFIRM_PASSWORD: SERVER_ADDRESS+'/verifychange',
    LIKE_UNLIKE: SERVER_ADDRESS+'/likeunlike'


}