webpackJsonp([32],{1699:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,s=r(2),c=a(s),o=r(54),i=a(o),f=r(5),p=a(f),d=r(10),l=a(d),h=r(7),m=a(h),v=r(8),k=a(v),w=r(0),x=(a(w),r(247)),b=r(606),g=a(b),P=(n=(0,x.wrapper)(g.default))(u=function(e){function t(){return(0,p.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),t}(w.Component))||u;t.default=P,e.exports=t.default},1700:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=new w.action(e),r=new P((0,o.default)({},e,{metaAction:t})),a=(0,o.default)({},t,r);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var u=r(17),s=a(u),c=r(2),o=a(c),i=r(81),f=a(i),p=r(555),d=a(p),l=r(556),h=a(l),m=r(5),v=a(m);t.default=n;var k=r(0),w=(a(k),r(247)),x=(r(71),r(9)),b=(a(x),r(564)),g=a(b),P=function e(t){var r=this;(0,v.default)(this,e),this.onInit=function(e){var t=e.component,a=e.injections;r.component=t,r.injections=a,r.component.props.setOkListener&&r.component.props.setOkListener(r.onOk),a.reduce("init")},this.onOk=(0,h.default)(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)})),this.next=(0,h.default)(d.default.mark(function e(){var t,a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.mobile",value:t.mobile},{path:"data.form.captcha",value:t.captcha}]);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,r.webapi.captcha.validate(t.captcha);case 8:r.metaAction.sf("data.other.step",2);case 9:case"end":return e.stop()}},e,r)})),this.prev=(0,h.default)(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.metaAction.sf("data.other.step",1);case 1:case"end":return e.stop()}},e,r)})),this.modify=(0,h.default)(d.default.mark(function e(){var t,a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.password",value:t.password},{path:"data.form.confirmPassword",value:t.confirmPassword}]);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,r.webapi.user.resetPassword({mobile:t.mobile,password:t.password});case 8:r.metaAction.toast("success","重设密码成功"),r.goLogin();case 10:case"end":return e.stop()}},e,r)})),this.getLogo=function(){return r.config.logo},this.getCaptcha=(0,h.default)(d.default.mark(function e(){var t;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.webapi.captcha.fetch();case 2:t=e.sent,r.metaAction.toast("success","验证码已经发送到您的手机，请输入[模拟先输入：123456]");case 4:case"end":return e.stop()}},e,r)})),this.fieldChange=function(){var e=(0,h.default)(d.default.mark(function e(t,a){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.check([{path:t,value:a}]);case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.goLogin=function(){if(!r.config.apps["mk-app-login"])throw"请将这个应用加入到带mk-app-root和mk-app-login的网站中，跳转功能才能正常使用";r.component.props.onRedirect&&r.config.goLogin&&r.component.props.onRedirect(r.config.goLogin)},this.check=function(){var e=(0,h.default)(d.default.mark(function e(t){var a,n,u,c,i,p,l,h,m,v,k;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:a=[],n=!0,u=!1,c=void 0,e.prev=6,i=(0,f.default)(t);case 8:if(n=(p=i.next()).done){e.next=56;break}if(l=p.value,h=(0,o.default)({},l),"data.form.mobile"!=l.path){e.next=20;break}return e.t0=s.default,e.t1=h,e.next=16,r.checkMobile(l.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=52;break;case 20:if("data.form.captcha"!=l.path){e.next=29;break}return e.t3=s.default,e.t4=h,e.next=25,r.checkCaptcha(l.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=52;break;case 29:if("data.form.password"!=l.path){e.next=45;break}return e.t6=s.default,e.t7=h,e.next=34,r.checkPassword(l.value);case 34:if(e.t8=e.sent,(0,e.t6)(e.t7,e.t8),!(m=r.metaAction.gf("data.form.confirmPassword"))){e.next=43;break}return e.t9=a,e.next=41,r.checkConfirmPassword(m,l.value);case 41:e.t10=e.sent,e.t9.push.call(e.t9,e.t10);case 43:e.next=52;break;case 45:if("data.form.confirmPassword"!=l.path){e.next=52;break}return e.t11=s.default,e.t12=h,e.next=50,r.checkConfirmPassword(l.value,r.metaAction.gf("data.form.password"));case 50:e.t13=e.sent,(0,e.t11)(e.t12,e.t13);case 52:a.push(h);case 53:n=!0,e.next=8;break;case 56:e.next=62;break;case 58:e.prev=58,e.t14=e.catch(6),u=!0,c=e.t14;case 62:e.prev=62,e.prev=63,!n&&i.return&&i.return();case 65:if(e.prev=65,!u){e.next=68;break}throw c;case 68:return e.finish(65);case 69:return e.finish(62);case 70:return v={},k=!0,a.forEach(function(e){v[e.path]=e.value,v[e.errorPath]=e.message,e.message&&(k=!1)}),r.metaAction.sfs(v),e.abrupt("return",k);case 75:case"end":return e.stop()}},e,r,[[6,58,62,70],[63,,65,69]])}));return function(t){return e.apply(this,arguments)}}(),this.checkMobile=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}a="请录入手机号",e.next=13;break;case 4:if(/^1[3|4|5|8][0-9]\d{8}$/.test(t)){e.next=8;break}a="请录入有效的手机号",e.next=13;break;case 8:return e.next=10,r.webapi.user.existsMobile(t);case 10:if(e.t0=e.sent,0!=e.t0){e.next=13;break}a="该手机号未注册";case 13:return e.abrupt("return",{errorPath:"data.other.error.mobile",message:a});case 14:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkCaptcha=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请录入验证码"),e.abrupt("return",{errorPath:"data.other.error.captcha",message:a});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkPassword=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请录入密码"),e.abrupt("return",{errorPath:"data.other.error.password",message:a});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkConfirmPassword=function(){var e=(0,h.default)(d.default.mark(function e(t,a){var n;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?a!=t&&(n="两次密码输入不一致，请确认"):n="请录入确认密码",e.abrupt("return",{errorPath:"data.other.error.confirmPassword",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.metaAction=t.metaAction,this.config=g.default.current,this.webapi=this.config.webapi};e.exports=t.default},1701:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=new d.reducer(e),r=new v((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,r)}Object.defineProperty(t,"__esModule",{value:!0});var u,s,c,o=r(2),i=a(o),f=r(5),p=a(f);t.default=n;var d=(r(71),r(247)),l=r(564),h=(a(l),r(9)),m=(a(h),r(607)),v=(s=u=function e(t){(0,p.default)(this,e),c.call(this),this.metaReducer=t.metaReducer},c=function(){var e=this;this.init=function(t,r){return e.metaReducer.init(t,(0,m.getInitState)(r))}},s);e.exports=t.default}});