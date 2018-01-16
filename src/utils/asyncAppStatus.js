import {
    AsyncStorage,
} from 'react-native';


//用于判断当前登录状态
export function asyncAppStatus(){
    AsyncStorage.getItem('user')
        .then((data) => {
            let user
            let newState = {}

            if(data){
                user = JSON.parse(data)
            }

            if(user && user.accessToken){
                newState.user = user
                newState.logined = true
            }else{
                newState.logined = false
            }
            this.setState(newState)
        })
}

//清除当前登录状态
export function removeAsyncAppStatus(){

    AsyncStorage.removeItem('user')

}