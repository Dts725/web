                                                                <template>
    <div class="warp h100 w100 pr" >
        
            <img src="../assets/login.jpg" alt="" >
        
        <div class="x-y-center register">
            <h1>注册</h1>
            <ul class="uls  flex-column-between white">
                <li class="flex-between"><span>姓名</span><input v-model="name" placeholder="请输入姓名" type="text"></li>
                <li class="flex-between"><span>密码</span><input v-model="pwd" placeholder="密码" type="number"></li>
                <li  @click="login()"  class="submit">登陆</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name : 'login',
    data () {
        return {
            name : null,
            pwd : null
        }
    },
    created () {
    },
    methods : {
        submits () {
            let data = {
                    name : this.name ,
                    pwd : this.pwd,
                };
            // data = JSON.stringify(data);
            // console.log(data);
            this.$http({
               
                method : 'post',
                url : '/register',
                data : data
            }).then(res=> {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        },

        //登陆函数
                login () {

            let data = {
                    name : this.name ,
                    pwd : this.pwd,
                };
            // data = JSON.stringify(data);
            // console.log(data);
            this.$http({
               
                method : 'post',
                url : '/login',
                data : data
            }).then(res=> {

               if (res.data.status ==='1') {
                   window.location.href = 'http://www.tiantianjia.store';
               } else {
                  

                   Toast(res.data.msg);
               }
            }).catch(err => {
                console.log(err);
            })
        },
    }
}
</script>
<style scoped>

    .warp  img   {
        height: 100%;
        width: 100%;
    }
    .uls {
     
        line-height: 100px;
    }
    .register {
        width: 55%;
    }
    .submit {

        background-color: orange;
        border-radius: 10px;
    }
    input {
        outline: none;
        height: 80px;;
        border-radius: 2px;
        text-indent: 10px;
    }
</style>
