// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28080,handler){
var map__28081 = p__28080;
var map__28081__$1 = ((((!((map__28081 == null)))?((((map__28081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28081):map__28081);
var uri = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28081,map__28081__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28079_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28079_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28081,map__28081__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___28089 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___28089)){
var response_type_28090 = temp__4657__auto___28089;
this$__$1.responseType = cljs.core.name.call(null,response_type_28090);
} else {
}

var seq__28083_28091 = cljs.core.seq.call(null,headers);
var chunk__28084_28092 = null;
var count__28085_28093 = (0);
var i__28086_28094 = (0);
while(true){
if((i__28086_28094 < count__28085_28093)){
var vec__28087_28095 = cljs.core._nth.call(null,chunk__28084_28092,i__28086_28094);
var k_28096 = cljs.core.nth.call(null,vec__28087_28095,(0),null);
var v_28097 = cljs.core.nth.call(null,vec__28087_28095,(1),null);
this$__$1.setRequestHeader(k_28096,v_28097);

var G__28098 = seq__28083_28091;
var G__28099 = chunk__28084_28092;
var G__28100 = count__28085_28093;
var G__28101 = (i__28086_28094 + (1));
seq__28083_28091 = G__28098;
chunk__28084_28092 = G__28099;
count__28085_28093 = G__28100;
i__28086_28094 = G__28101;
continue;
} else {
var temp__4657__auto___28102 = cljs.core.seq.call(null,seq__28083_28091);
if(temp__4657__auto___28102){
var seq__28083_28103__$1 = temp__4657__auto___28102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28083_28103__$1)){
var c__26807__auto___28104 = cljs.core.chunk_first.call(null,seq__28083_28103__$1);
var G__28105 = cljs.core.chunk_rest.call(null,seq__28083_28103__$1);
var G__28106 = c__26807__auto___28104;
var G__28107 = cljs.core.count.call(null,c__26807__auto___28104);
var G__28108 = (0);
seq__28083_28091 = G__28105;
chunk__28084_28092 = G__28106;
count__28085_28093 = G__28107;
i__28086_28094 = G__28108;
continue;
} else {
var vec__28088_28109 = cljs.core.first.call(null,seq__28083_28103__$1);
var k_28110 = cljs.core.nth.call(null,vec__28088_28109,(0),null);
var v_28111 = cljs.core.nth.call(null,vec__28088_28109,(1),null);
this$__$1.setRequestHeader(k_28110,v_28111);

var G__28112 = cljs.core.next.call(null,seq__28083_28103__$1);
var G__28113 = null;
var G__28114 = (0);
var G__28115 = (0);
seq__28083_28091 = G__28112;
chunk__28084_28092 = G__28113;
count__28085_28093 = G__28114;
i__28086_28094 = G__28115;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__26004__auto__ = body;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map