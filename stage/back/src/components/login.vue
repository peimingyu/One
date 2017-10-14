<template>
    <div class="login">
        <div id="particles-js"></div>
        <div class="content">
            <h2>
                个人博客-后台管理系统
            </h2>
            <ul>
                <li v-focus:test="loginname">
                    <p>
                        <label>账号: </label>
                        <input type="text" placeholder="请输入账号" v-model.lazy="loginname.val" @blur="fn(loginname)" class="user">
                    </p>
                    <i style="color:red;display:block" v-if="loginname.state">{{loginname.msg}}</i>
                </li>
                <li v-focus:required="loginpw">
                    <p>
                        <label>密码: </label>
                        <input type="password" placeholder="请输入密码" v-model.lazy="loginpw.val" @blur="fn(loginpw)" class="pass">
                    </p>
                    <i style="color:red;display:block" v-if="loginpw.state">{{loginpw.msg}}</i>
                </li>
            </ul>

            <div>
                <button @click="login">
                    登录
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../static/move/js/particles.min.js"
    export default {
        // name: 'login',
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的姓名不符合中文格式",
                    msg: "您输入的姓名不符合中文格式",
                    test: /^[a-zA-z]+$/,
                    state: false
                },
                loginpw: {
                    val: "",
                    msgread: "您输入的密码格式不对",
                    blur: false,
                    msg: "您输入的密码格式不对",
                    test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                    state: false
                }
            }
        },
        methods: {
            login() {
                // 判断是否值是否正确
                var _this = this
                if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
                    this.axios.post("/api/back_class", {
                        loginname: this.loginname.val,
                        loginpw: this.loginpw.val
                    }).then(function (data) {
                        console.log(data)
                        _this.$message(data.data.msg);
                        if (data.data.code == "1001") {
                            sessionStorage.setItem("userId", data.data.userid);
                            sessionStorage.setItem("username", _this.loginname.val);
                            _this.$router.push("/main")
                        }
                    })
                } else {
                    alert("请正确填写用户名密码")
                }

            },
            // 必填项的验证
            fn(val) {
                val.blur = true
            }
        },
        mounted() {
            particlesJS.load("particles-js", "../../static/move/data/particles.json");
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var $testState = option.value.test.test(option.value.val)
                    if (option.value.val != "") {
                        if ($testState) {
                            option.value.state = false
                        } else {
                            option.value.state = true
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            option.value.state = true
                            option.value.msg = "不能为空"
                        } else {
                            option.value.state = false
                        }

                    }
                }

            }

        }
    }

</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    ul,
    li,
    a {
        list-style: none;
        text-decoration: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    input {
        outline: none;
    }

    canvas {
        display: block;
        vertical-align: bottom;
    }

    /* #particles-js {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("../../static/move/imgs/xing.jpg") no-repeat;
        background-size: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    } */

    .js-count-particles {
        font-size: 1.1em;
    }

    #stats,
    .count-particles {
        -webkit-user-select: none;
    }

    #stats {
        border-radius: 3px 3px 0 0;
        overflow: hidden;
    }

    .count-particles {
        border-radius: 0 0 3px 3px;
    }

    /*.count-particles {
        background: #000022;
        position: absolute;
        top: 48px;
        left: 0;
        width: 80px;
        color: #13E8E9;
        font-size: .8em;
        text-align: left;
        text-indent: 4px;
        line-height: 14px;
        padding-bottom: 2px;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: bold;
    }*/

    .box {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .user,.pass{
        outline: none;
        background: none;
        color: white;
    }
    .login {
        width: 100%;
        height: 600px;
    }

    .content {
        width: 400px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -200px;
        margin-left: -200px;
        /*background: rgba(40, 149, 188, 0.3);*/
        background: #ef5b00;
    }

    .content h2 {
        color:white;
        line-height: 85px;
        padding-left: 30px;
    }
    .content li{
        color: white;
    }
    .content li i {
        font-style: normal;
        font-size: 14px;
        padding: 0 50px;
    }

    .content p {
        border: 1px solid #ccc;
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 25px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 45px;
    }

    .content p input {
        border: none;
        outline: none;
        color: white!important
    }

    .content div {
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 35px;
        box-sizing: border-box;
        line-height: 45px;
    }

    .content div button {
        width: 300px;
        height: 45px;
        background: none;
        color: white;
    }
</style>