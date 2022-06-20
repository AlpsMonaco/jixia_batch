import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Loadable from 'react-loadable';

import Index from './pages/index';
import NotFound from './pages/404';

import {
    useEffect,
    useState
} from "react";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Main = () => {

    const [open, setOpen] = useState(false);
    var today = new Date().getDate();

    useEffect(() => {
        if (today.toString() !== localStorage.getItem('notice_do')) {
            setOpen(true);
        }
    }, [today]);

    const close = () => {
        setOpen(false);
        localStorage.setItem('notice_do', today)
        window.location.reload()
    }

    // Loading com
    const Loading = < div className = "mdui-spinner" > < /div>;

    // Pages
    const Home = Loadable({
        loader: () =>
            import ('./pages/home'),
        loading: () => Loading
    });

    const Jx = Loadable({
        loader: () =>
            import ('./pages/jx'),
        loading: () => Loading
    });

    const Useage = Loadable({
        loader: () =>
            import ('./pages/useage'),
        loading: () => Loading
    });

    const Help = Loadable({
        loader: () =>
            import ('./pages/help'),
        loading: () => Loading
    });

    const Protocol = Loadable({
        loader: () =>
            import ('./pages/protocol'),
        loading: () => Loading
    });

    const Statement = Loadable({
        loader: () =>
            import ('./pages/statement'),
        loading: () => Loading
    });

    const And = Loadable({
        loader: () =>
            import ('./pages/and'),
        loading: () => Loading
    });

    const Jxdo = Loadable({
        loader: () =>
            import ('./pages/jxdo'),
        loading: () => Loading
    });

    const Jxdod = Loadable({
        loader: () =>
            import ('./pages/jxdod'),
        loading: () => Loading
    });

    const Login = Loadable({
        loader: () =>
            import ('./pages/account/login'),
        loading: () => Loading
    });

    const Register = Loadable({
        loader: () =>
            import ('./pages/account/register'),
        loading: () => Loading
    });

    const About = Loadable({
        loader: () =>
            import ('./pages/about'),
        loading: () => Loading
    });

    const Jh = Loadable({
        loader: () =>
            import ('./pages/jh'),
        loading: () => Loading
    });

    const Rapid = Loadable({
        loader: () =>
            import ('./pages/rapid'),
        loading: () => Loading
    });

    const App = Loadable({
        loader: () =>
            import ('./pages/app'),
        loading: () => Loading
    })

    const Status = Loadable({
        loader: () =>
            import ('./pages/status'),
        loading: () => Loading
    })

    //Pages END

    return ( <
        >
        <
        Router > { /* 路由 */ } <
        Routes > { /* 基础路由 */ } <
        Route path = '/'
        element = { < Index / >
        } >
        <
        Route index element = { < Home / >
        }
        /> <
        Route path = '/jx'
        element = { < Jx / >
        }
        /> <
        Route path = '/useage'
        element = { < Useage / >
        }
        /> <
        Route path = '/help'
        element = { < Help / >
        }
        /> <
        Route path = '/protocol'
        element = { < Protocol / >
        }
        /> <
        Route path = '/statement'
        element = { < Statement / >
        }
        /> <
        Route path = '/and'
        element = { < And / >
        }
        /> <
        Route path = '/jxdo'
        element = { < Jxdo / >
        }
        /> <
        Route path = '/jxdod'
        element = { < Jxdod / >
        }
        /> <
        Route path = '/login'
        element = { < Login / >
        }
        /> <
        Route path = '/register'
        element = { < Register / >
        }
        /> <
        Route path = '/about'
        element = { < About / >
        }
        /> <
        Route path = '/jh'
        element = { < Jh / >
        }
        /> <
        Route path = '/rapid'
        element = { < Rapid / >
        }
        /> <
        Route path = '/app'
        element = { < App / >
        }
        /> <
        Route path = '/status'
        element = { < Status / >
        }
        /> <
        /Route> { /* 404 */ } <
        Route path = "*"
        element = { < NotFound / >
        }
        /> <
        /Routes> <
        /Router> <
        Dialog open = {
            open
        }
        aria - labelledby = "alert-dialog-title"
        aria - describedby = "alert-dialog-description"
        className = "insdaidbilaskjfalsbfjkasbfkljabslkjfd" >
        <
        DialogTitle id = "alert-dialog-title" >
        公告5 .24 <
        /DialogTitle> <
        DialogContent >
        <
        DialogContentText id = "alert-dialog-description" >
        <
        font color = "#FF1493" > 感谢大家使用极下 < br / > < /font><font color="#00BFFF">请大家保存好防失联站点 </font > < br / > < font color = "#FF1493" > 本站禁止使用去广告插件否则解析会出问题 < /font>

        <
        /DialogContentText> <
        /DialogContent> <
        DialogActions >

        <
        button className = "mdui-btn mdui-color-theme-accent mdui-ripple"
        style = {
            {
                borderRadius: '10px',
                backgroundColor: 'rgb(0, 137, 123)'
            }
        }
        onClick = {
            () => close()
        } >
        我明白了 <
        /button> <
        /DialogActions> <
        /Dialog> <
        />
    );
}

ReactDOM.render( <
    Main / > ,
    document.getElementById('root')
);