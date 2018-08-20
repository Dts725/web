<template>
    <div class="flex-center div">
        <ul class="flex-column-start comment w100">
            <li class="text-l">小明说:</li>
            <li>
                <textarea  style="resize:none"  name="text" id="texarea" cols="30" rows="3" v-model="msg"></textarea>
            </li>
            <li class="flex-end">
                <p class='submit text-c' @click="submit()">发表评论</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'comment',
    data () {
        return {
            msg : ''            
        }
    },
    mounted () {

    },
    methods : {
        submit  () {
            this.$http({
                method : 'post',
                url : '/comment',
                data : {
                    msg : this.msg,
                    name : '小明'
                }
            }).then((result) => {
                console.log(result.data);
                if(result.data.status === 1) {
                    this.msg = '';
                }
            }).catch((err) => {
                
            });
        }
    }
}
</script>
<style scoped>
    #texarea {
        margin-top: 10px;
        width: 100%;
        /* height: 100px; */
        border-radius: 5px;
        outline: none;
    }
    .comment {
        width: 80%;
    }
    .div{
        padding-top: 10px;
    }
    .submit {
        width: 20%;
        background-color: orange;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
