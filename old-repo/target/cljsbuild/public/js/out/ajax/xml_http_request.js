// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49897,handler){
var map__49898 = p__49897;
var map__49898__$1 = ((((!((map__49898 == null)))?((((map__49898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49898):map__49898);
var uri = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__49898__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__49898,map__49898__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__49896_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__49896_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__49898,map__49898__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___49910 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___49910)){
var response_type_49911 = temp__4657__auto___49910;
this$__$1.responseType = cljs.core.name.call(null,response_type_49911);
} else {
}

var seq__49900_49912 = cljs.core.seq.call(null,headers);
var chunk__49901_49913 = null;
var count__49902_49914 = (0);
var i__49903_49915 = (0);
while(true){
if((i__49903_49915 < count__49902_49914)){
var vec__49904_49916 = cljs.core._nth.call(null,chunk__49901_49913,i__49903_49915);
var k_49917 = cljs.core.nth.call(null,vec__49904_49916,(0),null);
var v_49918 = cljs.core.nth.call(null,vec__49904_49916,(1),null);
this$__$1.setRequestHeader(k_49917,v_49918);

var G__49919 = seq__49900_49912;
var G__49920 = chunk__49901_49913;
var G__49921 = count__49902_49914;
var G__49922 = (i__49903_49915 + (1));
seq__49900_49912 = G__49919;
chunk__49901_49913 = G__49920;
count__49902_49914 = G__49921;
i__49903_49915 = G__49922;
continue;
} else {
var temp__4657__auto___49923 = cljs.core.seq.call(null,seq__49900_49912);
if(temp__4657__auto___49923){
var seq__49900_49924__$1 = temp__4657__auto___49923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49900_49924__$1)){
var c__43456__auto___49925 = cljs.core.chunk_first.call(null,seq__49900_49924__$1);
var G__49926 = cljs.core.chunk_rest.call(null,seq__49900_49924__$1);
var G__49927 = c__43456__auto___49925;
var G__49928 = cljs.core.count.call(null,c__43456__auto___49925);
var G__49929 = (0);
seq__49900_49912 = G__49926;
chunk__49901_49913 = G__49927;
count__49902_49914 = G__49928;
i__49903_49915 = G__49929;
continue;
} else {
var vec__49907_49930 = cljs.core.first.call(null,seq__49900_49924__$1);
var k_49931 = cljs.core.nth.call(null,vec__49907_49930,(0),null);
var v_49932 = cljs.core.nth.call(null,vec__49907_49930,(1),null);
this$__$1.setRequestHeader(k_49931,v_49932);

var G__49933 = cljs.core.next.call(null,seq__49900_49924__$1);
var G__49934 = null;
var G__49935 = (0);
var G__49936 = (0);
seq__49900_49912 = G__49933;
chunk__49901_49913 = G__49934;
count__49902_49914 = G__49935;
i__49903_49915 = G__49936;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__42645__auto__ = body;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
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