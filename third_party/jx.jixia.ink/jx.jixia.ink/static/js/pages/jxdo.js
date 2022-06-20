import {
    useEffect,
    useState
} from "react";
import httpR from "../includes/request";
import copy from 'copy-to-clipboard';
import {
    Loading
} from 'notiflix/build/notiflix-loading-aio';
import {
    Notify
} from 'notiflix/build/notiflix-notify-aio';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home = () => {

    const [runStatus, setRunStatus] = useState({
        msg: '获取中',
        detail: "获取中"
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        'today_c': 'loading',
        'today_s': 'ladoing',
        'all_c': 'laoding',
        'all_s': 'loading',
    })

    const [data, setData] = useState(null)
    const [ll, setLl] = useState({
        'msg': '获取中',
        'all': 1,
        'remain': 1,
        'left': 'loading',
    })

    const [open, setOpen] = useState(false)


    let mdui = window.mdui;
    let $ = mdui.JQ;

    useEffect(() => {
        // get run status
        httpR.post('/api.php?m=free&act=status', {}).then((res) => {
            if (res.error === 0) {
                setRunStatus({
                    'msg': res.sviptips,
                    'detail': res.msg,
                })
                if (res.sviptips === '限速') setOpen(true)
            }
        }).catch((err) => {
            //console.log(err);
        })

        httpR.post('/api.php?m=free&act=counts', {}).then((res) => {
            if (res.error === 0) {
                //console.log(res);
                setStatus({
                    'today_c': res.today.count,
                    'today_s': res.today.size,
                    'all_c': res.all.count,
                    'all_s': res.all.size,
                })
            }
        }).catch((err) => {
            //console.log(err);
        })

        httpR.post('/api.php?m=free&act=getLl', {}).then((res) => {
            if (res.error === 0) {
                setLl({
                    'msg': formatFileSize(res.remain),
                    'all': res.all,
                    'remain': res.remain,
                    'left': res.left,
                })
                //console.log(formatFileSize(res.remain));
            }
        }).catch((err) => {
            //console.log(err);
        })
        /* get password
        if (localStorage.getItem('password')) {
            $('#Password').val(localStorage.getItem('password'));
            $('#Password').attr('hidden', true);
        }
        */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addUri = (link, User_Agent, filename, wsurl, token) => {
        //配置
        var uris = [link];

        var options = {
            "max-connection-per-server": "16",
            "user-agent": User_Agent
        };
        if (filename !== "") {
            options.out = filename;
        }

        var json = {
            "id": "baiduwp-php",
            "jsonrpc": '2.0',
            "method": 'aria2.addUri',
            "params": [uris, options],
        };

        if (token !== "") {
            json.params.unshift("token:" + token);
        }

        var patt = /^wss?:\/\/(((([A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9]+)|([A-Za-z0-9]+))(\.(([A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9]+)|([A-Za-z0-9]+)))*(\.[A-Za-z0-9]{2,10}))|(localhost)|((([01]?\d?\d)|(2[0-4]\d)|(25[0-5]))(\.([01]?\d?\d)|(2[0-4]\d)|(25[0-5])){3})|((\[[A-Za-z0-9:]{2,39}\])|([A-Za-z0-9:]{2,39})))(:\d{1,5})?(\/.*)?$/;
        if (!patt.test(wsurl)) {
            //console.log(wsurl);

            Notify.failure("WebSocket 地址不符合验证规则，请检查是否填写正确！", {
                position: 'right-top',
                zindex: 2147483647
            })
            return;
        }
        var ws = new WebSocket(wsurl)

        ws.onerror = event => {
            Notify.failure('Motrix，Aria2 连接错误，请检查软件！', {
                position: 'right-top',
                zindex: 2147483647
            })
        };
        ws.onopen = () => {
            ws.send(JSON.stringify(json));
        }

        ws.onmessage = event => {
            var received_msg = JSON.parse(event.data);
            if (received_msg.error !== undefined) {
                if (received_msg.error.code === 1) {
                    Notify.failure('通过RPC连接失败,请打开控制台查看详细错误信息，返回信息：' + received_msg.error.message, {
                        position: 'right-top',
                        zindex: 2147483647
                    })
                }
            }
            switch (received_msg.method) {
                case "aria2.onDownloadStart":
                    Notify.success('Aria2 发送成功,已经开始下载！' + filename, {
                        position: 'right-top',
                        zindex: 2147483647
                    })
                    localStorage.setItem('aria2wsurl', wsurl); // add aria2 config to SessionStorage
                    if (token !== "" && token != null) localStorage.setItem('aria2token', token);
                    break;

                case "aria2.onDownloadError":

                    Notify.failure('Aria2 Motrix下载错误！', {
                        position: 'right-top',
                        zindex: 2147483647
                    })
                    break;

                case "aria2.onDownloadComplete":

                    Notify.success('Aria2 Motrix下载完成！', {
                        position: 'right-top',
                        zindex: 2147483647
                    })
                    break;

                default:
                    break;
            }

            // version = received_msg.result.version;
        };
    }

    const getList = (dir) => {
        let _dirdata = { ...data.dirdata
        };
        let _urldata = { ...data.urldata
        };
        delete _dirdata['src']
        Loading.circle();
        httpR.post('/api.php?m=free&act=jx', {
            dir: dir,
            ..._dirdata,
            ..._urldata,
            ns: '1',
        }).then((res) => {
            //console.log(res);
            if (res.error !== 0) {

                Notify.failure(res.message, {
                    position: 'right-top',
                    zindex: 2147483647
                })
            } else {
                res.urldata = data.urldata
                setData(res);
                //console.log(res);
            }
        }).catch((err) => {
            //console.log(err);
        }).finally(() => {
            Loading.remove();
        });
    }

    const getLink = (d) => {
        Loading.circle();
        let _dirdata = { ...data.dirdata
        };
        let _urldata = { ...data.urldata
        };
        delete _dirdata['src']
        httpR.post('/api.php?m=free&act=getLink', {
            ...d,
            ..._dirdata,
            ..._urldata,
            ns: "1",
        }).then((res) => {
            //console.log(res);
            if (res.error !== 0) {
                let msg = res.msg ? res.msg : res.message ? ? '获取失败';
                Notify.failure(msg, {
                    position: 'right-top',
                    zindex: 2147483647
                })
            } else {
                //console.log(res.filedata);
                mdui.dialog({
                    title: res.filedata.filename,
                    content: `
                    文件名称: ${res.filedata.filename} <br />
                    文件大小: ${formatFileSize(res.filedata.size)} <br />
                    上传时间: ${new Date(res.filedata.uploadtime).toDateString()} <br />
                    用户代理: ${res.user_agent} <br />
                    如果您觉得本项目不错欢迎大家分享极下<br />
                    `,
                    buttons: [{
                            text: '复制用户代理',
                            onClick: () => {
                                Notify.success('用户代理已复制到剪贴板', {
                                    position: 'right-top',
                                    zindex: 2147483647
                                })
                                copy(res.user_agent);
                            },
                            close: false,
                        },
                        {
                            text: '复制下载链接',
                            onClick: () => {

                                Notify.success('下载链接已复制到剪贴板', {
                                    position: 'right-top',
                                    zindex: 2147483647
                                })
                                copy(res.directlink);
                            },
                            close: false,
                        },
                        {
                            text: '发送到 aria2',
                            onClick: () => {
                                addUri(res.directlink, res.user_agent, res.filedata.filename, 'ws://localhost:6800/jsonrpc', '');
                            },
                            close: false,
                        },
                        {
                            text: '发送到 motiox',
                            onClick: () => {
                                addUri(res.directlink, res.user_agent, res.filedata.filename, 'ws://localhost:16800/jsonrpc', '');
                            },
                            close: false,
                        },
                        {
                            text: '修复下载出错文件',
                            onClick: () => {
                                Loading.circle({
                                    zindex: 2147483647
                                })
                                httpR.post('/api.php?m=free&act=delete', {
                                    'md5': res.filedata.md5,
                                    'fs_id': res.filedata.fs_id,
                                    'size': res.filedata.size,
                                }).then((res) => {
                                    Notify.success(res.msg, {
                                        position: 'right-top',
                                        zindex: 2147483647
                                    })
                                    window.mdui.dialog.destroy()
                                }).finally(() => {
                                    Loading.remove();
                                });
                            },
                            // close: false,
                        },
                    ]
                })
            }
        }).catch((err) => {
            //console.log(err);
        }).finally(() => {
            Loading.remove()
        });
    }

    // submit to get list through api
    const submit = (event) => {
        if (localStorage.getItem('password') === null) {
            mdui.dialog({
                content: `
                <center>
                    <h2 STYLE='COLOR:RED'>公众号回复: <span STYLE='COLOR:green'>1</span> 获取验证码。</h2>
                    <img src="https://mdui.chenflxs.top/miyaohuoq.jpg" style="height:200px;width:200px"><br />
                    
                    <div style="width:60%" class="mdui-textfield mdui-textfield-floating-label"><br />
                        <label class="mdui-textfield-label">填入验证码</label>
                        <input id='pwdwdwd' class="mdui-textfield-input" />
                    </div>
                    <button
                        class="mdui-btn mdui-color-theme-accent mdui-ripple mxzl"
                        onclick="fucku()"
                    >验证</button>
                </div>
                </center>
                `,
                cssClass: 'dd-dd',
            })
            return;
        }
        var link = $("#surl").val();
        if (link == null || link === "") {
            Notify.failure('请填写分享链接', {
                position: 'right-top',
                zindex: 2147483647
            })
            return false;
        }

        // UK 不知道干什么的
        var uk = link.match(/uk=(\d+)/),
            shareid = link.match(/shareid=(\d+)/);
        if (uk != null && shareid != null) {
            //$("form").append(`<input type="hidden" name="uk" value="${uk[1]}"/><input type="hidden" name="sƒhareid" value="${shareid[1]}"/>`);
            // var uk = uk[1],
            //   shareid = shareid[1];
            //return true;
        }
        var surl = link.match(/surl=([A-Za-z0-9-_]+)/);
        if (surl == null) {
            surl = link.match(/\/1[A-Za-z0-9-_]+/);
            if (surl == null) {
                Notify.failure('分享链接填写有误，请检查', {
                    position: 'right-top',
                    zindex: 2147483647
                })
                return false;
            } else surl = surl[0];
        } else surl = "1" + surl[1];

        surl = surl.replace(/\//g, "");
        var url = surl;
        var pwd = $("#pwd").val();
        var password = $("#Password").val();

        setLoading(true);
        Loading.circle();
        httpR.post('/api.php?m=free&act=jx', {
            url: url,
            pwd: pwd,
            password: password,
            dir: '',
            ns: "1",
        }).then((res) => {
            //console.log(res);
            if (res.error !== 0) {
                if (res.error === -9) localStorage.removeItem('password');
                Notify.failure(res.msg ? ? res.message, {
                    position: 'right-top',
                    zindex: 2147483647
                })
            } else {
                localStorage.setItem('password', password);
                res.urldata = {
                    url: url,
                    pwd: pwd,
                    password: password,
                    surl: url,
                }
                setData(res);
            }
        }).catch((err) => {
            //console.log(err);
        }).finally(() => {
            Loading.remove()
            setLoading(false)
        });

        event.preventDefault(); // 阻止默认事件
    }

    // get pwd from sutl
    const Getpw = () => {
        var link = $("#surl").val();
        var pw = link.match(/提取码.? *(\w{4})/);
        var pw2 = link.match(/\?pwd=.? *(\w{4})/);
        if (pw != null) {
            $("#pwd").val(pw[1]);
            document.getElementById("pwd").focus();
        }
        if (pw2 != null) {
            $("#pwd").val(pw2[1]);
            document.getElementById("pwd").focus();
        }
    }

    const formatFileSize = (bytes, decimalPoint) => {
        if (bytes === 0) return '0 Bytes';
        var k = 1000,
            dm = decimalPoint || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    return < >
        <
        div className = "mdui-container-fluid" >
        <
        div className = "mdui-card"
    style = {
            {
                mariginBottom: '20px',
                paddingBottom: '20px'
            }
        } >
        <
        div className = "mdui-card-content" > {
            data ? < >
            <
            ul className = "mdui-list" > { <
                li
                className = "mdui-list-item" >
                <
                div className = "mdui-list-item-content" >
                <
                div className = "mdui-list-item-title" > {
                    data.isroot ? '/' : data.dirdata.src[data.dirdata.src.length - 1]['fullsrc']
                } <
                /div> <
                /div> <
                /li>
            } {
                data.isroot ? < li
                onClick = {
                    () => {
                        window.location.reload();
                    }
                }
                className = "mdui-list-item mdui-ripple"
                    // mdui-tooltip={'{content: "返回首页"}'}
                    >
                    <
                    i className = "mdui-list-item-icon mdui-icon material-icons" > home < /i> <
                    div className = "mdui-list-item-content" >
                    <
                    div className = "mdui-list-item-title" > 回到首页 < /div> <
                    /div></li >: < li
                onClick = {
                    () => {
                        var length = data.dirdata.src.length;
                        if (length > 1) {
                            getList(data.dirdata.src[length - 2]['fullsrc'])
                        } else {
                            getList('')
                        }
                    }
                }
                className = "mdui-list-item mdui-ripple" >
                    <
                    i className = "mdui-list-item-icon mdui-icon material-icons" > arrow_upward < /i> <
                    div className = "mdui-list-item-content" >
                    <
                    div className = "mdui-list-item-title" > 返回上一页 < /div> <
                    /div> <
                    /li>
            } {
                data.filedata.map((item, index) => {

                    var logo = 'file_downloader'
                    if (item.name.includes('mp')) logo = 'videocam'

                    return <li
                    onClick = {
                        () => {
                            item.isdir ? getList(item.path) : getLink(item)
                        }
                    }
                    className = "mdui-list-item mdui-ripple file-list-c"
                    // mdui-tooltip={'{content: "' + (item.isdir ? '点击进入文件夹' : '点击下载') + '"}'}
                    key = {
                            index
                        } >
                        {
                            item.isdir ?
                            <
                            i className = "mdui-list-item-icon mdui-icon material-icons" > folder < /i> :
                                <
                                i className = "mdui-list-item-icon mdui-icon material-icons" > {
                                    logo
                                } < /i>
                        } <
                        div className = "mdui-list-item-content" >
                        <
                        div className = "mdui-list-item-title" > {
                            item.name
                        } < /div> <
                        div className = "mdui-list-item-text" > {
                            item.isdir ? "" : `文件大小: ${formatFileSize(item.size)} /`
                        } {
                            new Date(item.uploadtime * 1000).toDateString()
                        } < /div> <
                        /div> <
                        /li>
                })
            } <
            /ul> <
            /> : <> <
            div className = "mdui-container mdui-p-t-3" >
            <
            div className = "mdui-progress"
            style = {
                {
                    height: '5px'
                }
            } >
            <
            div
            className = "mdui-progress-determinate"
            style = {
                {
                    height: '5px',
                    width: ll.remain / ll.all * 100 + '%'
                }
            } > < /div> <
            /div> <
            div className = "mdui-textfield mdui-textfield-floating-label" >
            <
            label className = "mdui-textfield-label" > 填入完整某度网盘分享链接（ 包括汉字） < /label> <
            input id = 'surl'
            onChange = {
                () => Getpw()
            }
            className = "mdui-textfield-input" / >
            <
            /div>  <
            div className = "mdui-textfield mdui-textfield-floating-label" >
            <
            label className = "mdui-textfield-label" > 提取码（ 无提取码则留空） < /label> <
            input id = "pwd"
            className = "mdui-textfield-input" / >
            <
            /div> {
                localStorage.getItem('password') ? < input id = "Password"
                value = {
                    localStorage.getItem('password')
                }
                onChange = {
                    () => null
                }
                hidden / >: null
            }

            <
            button
            className = "mdui-btn mdui-color-theme-accent mdui-ripple mxzl"
            disabled = {
                loading
            }
            onClick = {
                submit
            } >
            解析链接 <
            /button>

            &
            nbsp;

            <
            button
            className = "mdui-btn mdui-color-theme-accent mdui-ripple mxzl"
            onClick = {
                () => window.open('#/useage')
            } >
            使用帮助 <
            /button> &
            nbsp;

            {
                /*
                                                  <button
                                                    className="mdui-btn mdui-color-theme-accent mdui-ripple mxzl"
                                                    onClick={() => window.open('https://jixia.xiaodian.fit/')}
                                                >
                                                    极下PLUS版点我
                                                </button>
                                                &nbsp;
                                              
                                                <button
                                                    className="mdui-btn mdui-color-theme-accent mdui-ripple mxzl"
                                                    onClick={() => window.open('https://jixia.ink/quanxianduibi.png')}
                                                >
                                                    plus版权限对比图
                                                </button>
                                                &nbsp;
                */
            } <
            /div> <
            />
        } <
        /div> <
        /div> <
        /div> <
        br / > < br / >
        <
        div className = "mdui-container-fluid" >
        <
        div className = "mdui-card" >
        <
        div className = "mdui-card-content" >
        <
        div >
        <
        h2 > 系统使用统计 & nbsp; < /h2> <
    /div> <
    h3 style = {
            {
                color: 'grey'
            }
        } > {
            `累计解析:${status.all_c}个, 共 ${status.all_s}`
        } < /h3> <
        h3 style = {
            {
                color: 'grey'
            }
        } > {
            `今日解析:${status.today_c}个 ,共 ${status.today_s}`
        } < /h3> <
        h3 style = {
            {
                color: 'grey'
            }
        } > 今日可用流量: {
            ll.msg
        } < /h3> <
        h3 style = {
            {
                color: 'grey'
            }
        } > 今日可用次数: {
            ll.left
        }
    次 < /h3> <
        h3 style = {
            {
                color: 'grey'
            }
        } > {
            `SVIP状态:${runStatus.msg}`
        } < /h3>


        <
        /div> <
        /div> <
        /div> <
        Dialog
    open = {
        open
    }
    aria - labelledby = "alert-dialog-title"
    aria - describedby = "alert-dialog-description"
    className = "insdaidbilaskjfalsbfjkasbfkljabslkjfd" >
        <
        DialogTitle id = "alert-dialog-title" > {
            "当前已限速"
        } <
        /DialogTitle> <
        DialogContent >
        <
        DialogContentText id = "alert-dialog-description" >
        <
        font color = "#FF1493" > 您如果看到此页面 < br / > < /font><font color="#00BFFF">说明当前svip已全部限速</font > < br / > < font color = "#FF0000" > 请耐心等待站长在线并修复！ < /font>

        <
        /DialogContentText> <
        /DialogContent> <
        DialogActions >

        <
        button
    className = "mdui-btn mdui-color-theme-accent mdui-ripple"
    style = {
        {
            borderRadius: '10px',
            backgroundColor: 'rgb(0, 137, 123)'
        }
    }
    onClick = {
            () => setOpen(false)
        } >
        我明白了 <
        /button> <
        /DialogActions>


        <
        /Dialog> <
        footer
    style = {
            {
                textAlign: 'center',
                paddingTop: '1em',
                paddingBottom: '0em'
            }
        } >
        copyright 2021 - 2022 jixia All Right Reserved. <
        /footer>




        <
        />;
}

export default Home;