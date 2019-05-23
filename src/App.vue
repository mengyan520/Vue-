<<template>
    <div>
        <h1>这是App组件</h1>
        <router-link to="/account">账户</router-link>
        <router-link to="/goods">商户列表</router-link>
        <router-view></router-view>
        <br>
        <br>
        <mt-button type="danger" @click='show'>danger</mt-button>
        <mt-button type="primary">primary</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">
          紫色
        </button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    methods: {
        show(){
            Toast({
                message:"提示信息",
                position: 'bottom',
                duration: 4000,
                iconClass: 'glyphicon glyphicon-heart',
                className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
            })
        }
    },
}
</script>

