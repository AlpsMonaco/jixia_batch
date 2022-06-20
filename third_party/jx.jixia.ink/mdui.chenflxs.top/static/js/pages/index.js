/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Outlet
} from 'react-router-dom';

const Index = () => {

    const toTop = () => {
        window.scrollTo(0, 0)
    }
    //const navigate = useNavigate();

    const juToawskdjakjdnmklasd = () => {
        window.location.href = "/#/status";
        window.location.reload();
    }
    const juToawskdjakjdnmklasdw = (wewe) => {
        window.location.href = "/#/" + wewe;
        window.location.reload();
    }

    return < >
        <
        header className = "mdui-appbar mdui-appbar-fixed" >
        <
        div className = "mdui-toolbar" >
        <
        span className = "mdui-btn mdui-btn-icon mdui-ripple"
    mdui - drawer = "{target: '#main-drawer'}" >
        <
        i className = "mdui-icon material-icons" > menu < /i> <
        /span> <
        div className = "mdui-typo-title" > 极下解析 < /div> <
        div className = "mdui-toolbar-spacer" > < /div> <
        span className = "mdui-btn mdui-btn-icon mdui-ripple"
    onClick = {
            () => window.location.reload()
        } >
        <
        i className = "mdui-icon material-icons" > refresh < /i> <
        /span> <
        /div> <
        /header> <
        div className = "mdui-drawer "
    id = "main-drawer" >
        <
        div className = "mdui-list"
    mdui - collapse = "{accordion: true}"
    style = {
            {
                mariginBottom: '68px'
            }
        } >
        <
        div className = "mdui-list" >
        <
        a href = "/#/"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > home < /i> <
        div className = "mdui-list-item-content" > 主页公告 < /div> <
        /a>

        <
        a className = "mdui-list-item"
    onClick = {
            () => juToawskdjakjdnmklasdw('jxdo')
        } >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > cloud_queue < /i> <
        div className = "mdui-list-item-content" > 极下解析 < /div> <
        /a> <
        a className = "mdui-list-item"
    onClick = {
            () => juToawskdjakjdnmklasdw('jxdod')
        } >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > filter_drama < /i> <
        div className = "mdui-list-item-content" > 极下解析PLus < /div> <
        /a> {
            /*         <a className="mdui-list-item" onClick={() => juToawskdjakjdnmklasdw('rapid')}>
                                    <i className="mdui-list-item-icon mdui-icon material-icons">repeat</i>
                                    <div className="mdui-list-item-content">秒传解析</div>
                                </a>  
                               
                                <a className="mdui-list-item" onClick={() => window.open('https://tc.jixia.icu/#/')}>
                                    <i className="mdui-list-item-icon mdui-icon material-icons">cloud_queue</i>
                                    <div className="mdui-list-item-content">城通网盘</div>
                                </a> 
                                <a href="/#/app" className="mdui-list-item">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">laptop</i>
                                    <div className="mdui-list-item-content">应用程序</div>
                                </a> */
        }

        <
        a href = "/#/jh"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > credit_card < /i> <
        div className = "mdui-list-item-content" > 卡密兑换 < /div> <
        /a> <
        a href = "/#/useage"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > help_outline < /i> <
        div className = "mdui-list-item-content" > 使用帮助 < /div> <
        /a> {
            /* 
                                <a href="/#/and" className="mdui-list-item">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">tablet_android</i>
                                    <div className="mdui-list-item-content">安卓 iOS教程</div>
                                </a>

                              <a href="/#/help" className="mdui-list-item">
                                    <i className="mdui-list-item-icon mdui-icon material-icons">help_outline</i>
                                    <div className="mdui-list-item-content">常见问题</div>
                                </a>    */
        }

        <
        a href = "/#/jx"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > card_giftcard < /i> <
        div className = "mdui-list-item-content" > 组织 活动 < /div> <
        /a>

        <
        a href = "/#/statement"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > error_outline < /i> <
        div className = "mdui-list-item-content" > 运营事件 < /div> <
        /a> {
            /*
                                <a className="mdui-list-item" onClick={() => juToawskdjakjdnmklasd()}>
                                    <i className="mdui-list-item-icon mdui-icon material-icons">security</i>
                                    <div className="mdui-list-item-content">运行状态</div>
                                </a> */
        }

        <
        a href = "/#/about"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > mood < /i> <
        div className = "mdui-list-item-content" > 关于支持 < /div> <
        /a>                     <
        a href = "/#/protocol"
    className = "mdui-list-item" >
        <
        i className = "mdui-list-item-icon mdui-icon material-icons" > bookmark_border < /i> <
        div className = "mdui-list-item-content" > 免责声明 < /div> <
        /a> <
        /div> <
        /div> <
        /div> <
        div
    style = {
        {
            paddingTop: '15px',
            paddingBottom: '15px',
        }
    }
    className = "mdui-container" >
        <
        Outlet / >
        <
        /div>

    {
        /*
                <div className="mdui-fab-wrapper" onClick={() => toTop()}>
                    <button className="mdui-fab mdui-ripple mdui-color-theme-accent">
                        <i className="mdui-icon material-icons">vertical_align_top</i>
                    </button>
                </div>  */
    } <
    />;
}

export default Index;