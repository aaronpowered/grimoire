// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('ajax.protocols');
goog.require('goog.net.ErrorCode');
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12930,handler){
var map__12931 = p__12930;
var map__12931__$1 = ((((!((map__12931 == null)))?((((map__12931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12931):map__12931);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12931__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12931__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12931__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12931__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12931__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12931__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12931__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
var temp__4657__auto___12938 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___12938)){
var response_type_12939 = temp__4657__auto___12938;
this$__$1.setResponseType(cljs.core.name(response_type_12939));
} else {
}

var G__12933 = this$__$1;
var G__12934_12940 = G__12933;
var G__12935_12941 = goog.net.EventType.COMPLETE;
var G__12936_12942 = ((function (G__12934_12940,G__12935_12941,G__12933,this$__$1,map__12931,map__12931__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12929_SHARP_){
var G__12937 = p1__12929_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12937) : handler.call(null,G__12937));
});})(G__12934_12940,G__12935_12941,G__12933,this$__$1,map__12931,map__12931__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;
goog.events.listen(G__12934_12940,G__12935_12941,G__12936_12942);

G__12933.setTimeoutInterval(timeout);

G__12933.setWithCredentials(with_credentials);

G__12933.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__12933;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12943,handler){
var map__12944 = p__12943;
var map__12944__$1 = ((((!((map__12944 == null)))?((((map__12944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12944):map__12944);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$headers);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12944__$1,cljs.core.cst$kw$timeout,(0));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12944__$1,cljs.core.cst$kw$max_DASH_retries);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
