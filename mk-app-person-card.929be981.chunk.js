webpackJsonp([24],{1735:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,u=r(2),o=n(u),c=r(54),i=n(c),d=r(5),f=n(d),p=r(10),l=n(p),m=r(7),h=n(m),v=r(8),k=n(v),x=r(0),b=(n(x),r(247)),w=r(630),_=n(w),g=(a=(0,b.wrapper)(_.default))(s=function(e){function t(){return(0,f.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),t}(x.Component))||s;t.default=g,e.exports=t.default},1736:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new x.action(e),r=new y((0,c.default)({},e,{metaAction:t})),n=(0,c.default)({},t,r);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var s=r(17),u=n(s),o=r(2),c=n(o),i=r(81),d=n(i),f=r(555),p=n(f),l=r(556),m=n(l),h=r(5),v=n(h);t.default=a;var k=r(0),x=(n(k),r(247)),b=r(71),w=r(9),_=(n(w),r(576)),g=n(_),y=function e(t){var r=this;(0,v.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;r.component=t,r.injections=n,r.component.props.setOkListener&&r.component.props.setOkListener(r.onOk),n.reduce("init",{isPop:r.component.props.isPop}),r.load()},this.load=(0,m.default)(p.default.mark(function e(){var t,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,r.webapi.department.query();case 3:if(n=e.sent,t.departments=n,!r.component.props.personId&&0!=r.component.props.personId){e.next=10;break}return e.next=8,r.webapi.person.findById(r.component.props.personId);case 8:n=e.sent,t.person=n;case 10:r.injections.reduce("load",t);case 11:case"end":return e.stop()}},e,r)})),this.onOk=(0,m.default)(p.default.mark(function e(){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)})),this.save=(0,m.default)(p.default.mark(function e(){var t,n,a,s;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.name",value:t.name},{path:"data.form.mobile",value:t.mobile}]);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:if(!t.id&&0!=t.id){e.next=13;break}return e.next=9,r.webapi.person.update(t);case 9:a=e.sent,a&&(r.metaAction.toast("success","保存人员成功"),r.injections.reduce("setPerson",a)),e.next=17;break;case 13:return e.next=15,r.webapi.person.create(t);case 15:s=e.sent,s&&(r.metaAction.toast("success","保存人员成功"),r.injections.reduce("setPerson",s));case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}},e,r)})),this.add=function(){r.injections.reduce("setPerson",{id:void 0,name:"",sex:"0",birthday:"1980-01-01",mobile:"",dept:void 0,address:"北京海淀"})},this.prev=(0,m.default)(p.default.mark(function e(){var t,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form.id"),e.next=3,r.webapi.person.prev(t);case 3:n=e.sent,n&&r.injections.reduce("setPerson",n);case 5:case"end":return e.stop()}},e,r)})),this.next=(0,m.default)(p.default.mark(function e(){var t,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form.id"),e.next=3,r.webapi.person.next(t);case 3:n=e.sent,n&&r.injections.reduce("setPerson",n);case 5:case"end":return e.stop()}},e,r)})),this.fieldChange=function(){var e=(0,m.default)(p.default.mark(function e(t,n){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.check([{path:t,value:n}]);case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.check=function(){var e=(0,m.default)(p.default.mark(function e(t){var n,a,s,o,i,f,l,m,h,v;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:n=[],a=!0,s=!1,o=void 0,e.prev=6,i=(0,d.default)(t);case 8:if(a=(f=i.next()).done){e.next=31;break}if(l=f.value,m=(0,c.default)({},l),"data.form.name"!=l.path){e.next=20;break}return e.t0=u.default,e.t1=m,e.next=16,r.checkName(l.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if("data.form.mobile"!=l.path){e.next=27;break}return e.t3=u.default,e.t4=m,e.next=25,r.checkMobile(l.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:n.push(m);case 28:a=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e.catch(6),s=!0,o=e.t6;case 37:e.prev=37,e.prev=38,!a&&i.return&&i.return();case 40:if(e.prev=40,!s){e.next=43;break}throw o;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return h={},v=!0,n.forEach(function(e){h[e.path]=e.value,h[e.errorPath]=e.message,e.message&&(v=!1)}),r.metaAction.sfs(h),e.abrupt("return",v);case 50:case"end":return e.stop()}},e,r,[[6,33,37,45],[38,,40,44]])}));return function(t){return e.apply(this,arguments)}}(),this.checkName=function(){var e=(0,m.default)(p.default.mark(function e(t){var n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n="请录入姓名"),e.abrupt("return",{errorPath:"data.other.error.name",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkMobile=function(){var e=(0,m.default)(p.default.mark(function e(t){var n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?/^1[3|4|5|8][0-9]\d{8}$/.test(t)||(n="请录入有效的手机号"):n="请录入手机号",e.abrupt("return",{errorPath:"data.other.error.mobile",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.departmentFocus=(0,m.default)(p.default.mark(function e(){var t;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.webapi.department.query();case 2:t=e.sent,r.metaAction.sf("data.other.departments",(0,b.fromJS)(t));case 4:case"end":return e.stop()}},e,r)})),this.addDepartment=(0,m.default)(p.default.mark(function e(){var t;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.config.apps["mk-app-department-card"]){e.next=2;break}throw"依赖mk-app-department-card app,请使用mk clone mk-app-department-card命令添加";case 2:return e.next=4,r.metaAction.modal("show",{title:"新增部门",children:r.metaAction.loadApp("mk-app-department-card",{store:r.component.props.store})});case 4:t=e.sent,t&&r.injections.reduce("addDepartment",t);case 6:case"end":return e.stop()}},e,r)})),this.metaAction=t.metaAction,this.config=g.default.current,this.webapi=this.config.webapi};e.exports=t.default},1737:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new l.reducer(e),r=new k((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,r)}Object.defineProperty(t,"__esModule",{value:!0});var s,u,o,c=r(2),i=n(c),d=r(5),f=n(d);t.default=a;var p=r(71),l=r(247),m=r(576),h=(n(m),r(9)),v=(n(h),r(631)),k=(u=s=function e(t){(0,f.default)(this,e),o.call(this),this.metaReducer=t.metaReducer},o=function(){var e=this;this.init=function(t,r){return e.metaReducer.init(t,(0,v.getInitState)(r))},this.load=function(t,r){var n=r.person,a=r.departments;return n&&(t=e.metaReducer.sf(t,"data.form",(0,p.fromJS)(n))),e.metaReducer.sf(t,"data.other.departments",(0,p.fromJS)(a))},this.setPerson=function(t,r){return t=e.metaReducer.sf(t,"data.form",(0,p.fromJS)(r)),e.metaReducer.sf(t,"data.other.checkFields",(0,p.List)())},this.addDepartment=function(t,r){var n=(r.id,r.code);r.name;return e.metaReducer.sf(t,"data.form.department",n)}},u);e.exports=t.default}});