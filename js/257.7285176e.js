"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[257],{2257:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var n=t(6768),i=t(4232);const d={key:0},o={key:0};function s(e,a,t,s,l,r){const c=(0,n.g2)("a-button"),u=(0,n.g2)("a-space"),p=(0,n.g2)("a-table");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("p",null,[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(c,{type:"primary",onClick:a[0]||(a[0]=a=>e.handleQuery())},{default:(0,n.k6)((()=>[(0,n.eW)("刷新")])),_:1})])),_:1})]),(0,n.bF)(p,{dataSource:e.tickets,columns:e.columns,pagination:e.pagination,onChange:e.handleTableChange,loading:e.loading},{bodyCell:(0,n.k6)((({column:a,record:t})=>["operation"===a.dataIndex?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[],64)):"col"===a.dataIndex?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:1},(0,n.pI)(e.SEAT_COL_ARRAY,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e.code},[e.code===t.col&&e.type===t.seatType?((0,n.uX)(),(0,n.CE)("span",d,(0,i.v_)(e.desc),1)):(0,n.Q3)("",!0)])))),128)):"seatType"===a.dataIndex?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:2},(0,n.pI)(e.SEAT_TYPE_ARRAY,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e.code},[e.code===t.seatType?((0,n.uX)(),(0,n.CE)("span",o,(0,i.v_)(e.desc),1)):(0,n.Q3)("",!0)])))),128)):(0,n.Q3)("",!0)])),_:1},8,["dataSource","columns","pagination","onChange","loading"])],64)}var l=t(144),r=t(5108),c=t(8355),u=(0,n.pM)({name:"ticket-view",setup(){const e=window.SEAT_COL_ARRAY,a=window.SEAT_TYPE_ARRAY,t=(0,l.KR)(!1);let i=(0,l.KR)({id:void 0,memberId:void 0,passengerId:void 0,passengerName:void 0,date:void 0,trainCode:void 0,carriageIndex:void 0,row:void 0,col:void 0,start:void 0,startTime:void 0,end:void 0,endTime:void 0,seatType:void 0,createTime:void 0,updateTime:void 0});const d=(0,l.KR)([]),o=(0,l.KR)({total:0,current:1,pageSize:10});let s=(0,l.KR)(!1);const u=[{title:"乘客姓名",dataIndex:"passengerName",key:"passengerName"},{title:"日期",dataIndex:"trainDate",key:"trainDate"},{title:"车次编号",dataIndex:"trainCode",key:"trainCode"},{title:"箱序",dataIndex:"carriageIndex",key:"carriageIndex"},{title:"排号",dataIndex:"seatRow",key:"seatRow"},{title:"列号",dataIndex:"seatCol",key:"seatCol"},{title:"出发站",dataIndex:"startStation",key:"startStation"},{title:"出发时间",dataIndex:"startTime",key:"startTime"},{title:"到达站",dataIndex:"endStation",key:"endStation"},{title:"到站时间",dataIndex:"endTime",key:"endTime"},{title:"座位类型",dataIndex:"seatType",key:"seatType"},{title:"出票时间",dataIndex:"createTime",key:"createTime"}],p=e=>{e||(e={page:1,size:o.value.pageSize}),s.value=!0,c.A.get("/member/ticket/query-list",{params:{page:e.page,size:e.size}}).then((a=>{s.value=!1;let t=a.data;t.success?(d.value=t.content.list,o.value.current=e.page,o.value.total=t.content.total):r.A.error({description:t.message})}))},g=e=>{o.value.pageSize=e.pageSize,p({page:e.current,size:e.pageSize})};return(0,n.sV)((()=>{p({page:1,size:o.value.pageSize})})),{SEAT_COL_ARRAY:e,SEAT_TYPE_ARRAY:a,ticket:i,visible:t,tickets:d,pagination:o,columns:u,handleTableChange:g,handleQuery:p,loading:s}}}),p=t(1241);const g=(0,p.A)(u,[["render",s]]);var k=g}}]);
//# sourceMappingURL=257.7285176e.js.map