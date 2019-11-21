import {get, post,deletes,put} from '@/utils/request' ;//导入axios实例文件中方法
//let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
let bsae_api = 'http://localhost:8080/gateway' //获取项目api请求地址
const api={
    //用户模块
    //1,登陆
    login:function(data){
        return  post(`${bsae_api}/login`,data);
    },
    //2,退出
    logout:function(){
        return  get(`${bsae_api}/logout`);
    },
    //验证码模块
    //1,获取验证码接口
    getKaptchaImage:function(session){
        return  get(`${bsae_api}/kaptcha/getKaptchaImage?session=`+session);
    },
    //2,验证码校验接口
    kaptchaCode:function(kaptchaCode){
        return  get(`${bsae_api}/kaptcha/kaptchaCode?kaptchaCode=`+kaptchaCode+'&time='+new Date().getTime());
    },
    //试题模块
    //1,生成考试信息
    startExam:function(data){
        return  post(`${bsae_api}/startExam`,data);
    },
    //2,根据考试编号生成题库信息
    getItembankByExamNo:function(data){
        return  post(`${bsae_api}/getItembankByExamNo`,data);
    },
    //3,查询考试信息接口
    getSubjectinfos:function(data){
        return  post(`${bsae_api}/getSubjectinfos`,data);
    },
    //4,提交考试结果信息
    submitAnswer:function(data){
        return  post(`${bsae_api}/submitAnswer`,data);
    }
}
export default api
