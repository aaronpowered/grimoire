// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13104,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13106 = (((k13104 instanceof cljs.core.Keyword))?k13104.fqn:null);
switch (G__13106) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13104,else__7039__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__13107,opts){
var self__ = this;
var map__13108 = p__13107;
var map__13108__$1 = ((((!((map__13108 == null)))?((((map__13108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13108):map__13108);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13108__$1,cljs.core.cst$kw$request);
var map__13110 = this;
var map__13110__$1 = ((((!((map__13110 == null)))?((((map__13110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13110):map__13110);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__13112,xhrio){
var self__ = this;
var map__13113 = p__13112;
var map__13113__$1 = ((((!((map__13113 == null)))?((((map__13113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13113):map__13113);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13113__$1,cljs.core.cst$kw$response);
var map__13115 = this;
var map__13115__$1 = ((((!((map__13115 == null)))?((((map__13115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13115):map__13115);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13115__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13103){
var self__ = this;
var G__13103__$1 = this;
return (new cljs.core.RecordIter((0),G__13103__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13103){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13117 = cljs.core.keyword_identical_QMARK_;
var expr__13118 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__13120 = cljs.core.cst$kw$name;
var G__13121 = expr__13118;
return (pred__13117.cljs$core$IFn$_invoke$arity$2 ? pred__13117.cljs$core$IFn$_invoke$arity$2(G__13120,G__13121) : pred__13117.call(null,G__13120,G__13121));
})())){
return (new ajax.core.StandardInterceptor(G__13103,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13122 = cljs.core.cst$kw$request;
var G__13123 = expr__13118;
return (pred__13117.cljs$core$IFn$_invoke$arity$2 ? pred__13117.cljs$core$IFn$_invoke$arity$2(G__13122,G__13123) : pred__13117.call(null,G__13122,G__13123));
})())){
return (new ajax.core.StandardInterceptor(self__.name,G__13103,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13124 = cljs.core.cst$kw$response;
var G__13125 = expr__13118;
return (pred__13117.cljs$core$IFn$_invoke$arity$2 ? pred__13117.cljs$core$IFn$_invoke$arity$2(G__13124,G__13125) : pred__13117.call(null,G__13124,G__13125));
})())){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__13103,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13103),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13103){
var self__ = this;
var this__7035__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__13103,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__13105){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__13105),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__13105),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__13105),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13105,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__6414__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__13127,xhrio){
var map__13130 = p__13127;
var map__13130__$1 = ((((!((map__13130 == null)))?((((map__13130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13130):map__13130);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13130__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.core.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13136 = arguments.length;
var i__7490__auto___13137 = (0);
while(true){
if((i__7490__auto___13137 < len__7489__auto___13136)){
args__7496__auto__.push((arguments[i__7490__auto___13137]));

var G__13138 = (i__7490__auto___13137 + (1));
i__7490__auto___13137 = G__13138;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((3) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7497__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq13132){
var G__13133 = cljs.core.first(seq13132);
var seq13132__$1 = cljs.core.next(seq13132);
var G__13134 = cljs.core.first(seq13132__$1);
var seq13132__$2 = cljs.core.next(seq13132__$1);
var G__13135 = cljs.core.first(seq13132__$2);
var seq13132__$3 = cljs.core.next(seq13132__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__13133,G__13134,G__13135,seq13132__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13141,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13143 = (((k13141 instanceof cljs.core.Keyword))?k13141.fqn:null);
switch (G__13143) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13141,else__7039__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__13144,request){
var self__ = this;
var map__13145 = p__13144;
var map__13145__$1 = ((((!((map__13145 == null)))?((((map__13145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13145):map__13145);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13145__$1,cljs.core.cst$kw$content_DASH_type);
var map__13147 = this;
var map__13147__$1 = ((((!((map__13147 == null)))?((((map__13147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13147):map__13147);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13147__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__13147,map__13147__$1,content_type__$2,map__13145,map__13145__$1,content_type__$1){
return (function (p1__13139_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__6414__auto__ = p1__13139_SHARP_;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__13147,map__13147__$1,content_type__$2,map__13145,map__13145__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__13149,xhrio){
var self__ = this;
var map__13150 = p__13149;
var map__13150__$1 = ((((!((map__13150 == null)))?((((map__13150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13150):map__13150);
var format = map__13150__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,cljs.core.cst$kw$read);
var map__13152 = this;
var map__13152__$1 = ((((!((map__13152 == null)))?((((map__13152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13152):map__13152);
var format__$1 = map__13152__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13152__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__13155 = status;
switch (G__13155) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__13156 = "Request failed.";
var G__13157 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13156,G__13157) : fail.call(null,G__13156,G__13157));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__13158 = "Request aborted by client.";
var G__13159 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13158,G__13159) : fail.call(null,G__13158,G__13159));
} else {
var G__13160 = "Request timed out.";
var G__13161 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__13160,G__13161) : fail.call(null,G__13160,G__13161));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__13163 = ajax.protocols._status_text(xhrio);
var G__13164 = cljs.core.cst$kw$error;
var G__13165 = cljs.core.cst$kw$response;
var G__13166 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__13163,G__13164,G__13165,G__13166) : fail.call(null,G__13163,G__13164,G__13165,G__13166));
}
}catch (e13162){if((e13162 instanceof Object)){
var e = e13162;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e13162;

}
}
}
}catch (e13154){if((e13154 instanceof Object)){
var e = e13154;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e13154;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13140){
var self__ = this;
var G__13140__$1 = this;
return (new cljs.core.RecordIter((0),G__13140__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13140){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13167 = cljs.core.keyword_identical_QMARK_;
var expr__13168 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__13170 = cljs.core.cst$kw$read;
var G__13171 = expr__13168;
return (pred__13167.cljs$core$IFn$_invoke$arity$2 ? pred__13167.cljs$core$IFn$_invoke$arity$2(G__13170,G__13171) : pred__13167.call(null,G__13170,G__13171));
})())){
return (new ajax.core.ResponseFormat(G__13140,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13172 = cljs.core.cst$kw$description;
var G__13173 = expr__13168;
return (pred__13167.cljs$core$IFn$_invoke$arity$2 ? pred__13167.cljs$core$IFn$_invoke$arity$2(G__13172,G__13173) : pred__13167.call(null,G__13172,G__13173));
})())){
return (new ajax.core.ResponseFormat(self__.read,G__13140,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13174 = cljs.core.cst$kw$content_DASH_type;
var G__13175 = expr__13168;
return (pred__13167.cljs$core$IFn$_invoke$arity$2 ? pred__13167.cljs$core$IFn$_invoke$arity$2(G__13174,G__13175) : pred__13167.call(null,G__13174,G__13175));
})())){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__13140,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13140),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13140){
var self__ = this;
var this__7035__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__13140,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__13142){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__13142),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__13142),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__13142),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13142,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return (function (){var G__13179 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__13179);
})().toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args13180 = [];
var len__7489__auto___13189 = arguments.length;
var i__7490__auto___13190 = (0);
while(true){
if((i__7490__auto___13190 < len__7489__auto___13189)){
args13180.push((arguments[i__7490__auto___13190]));

var G__13191 = (i__7490__auto___13190 + (1));
i__7490__auto___13190 = G__13191;
continue;
} else {
}
break;
}

var G__13182 = args13180.length;
switch (G__13182) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13180.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__13183 = prefix;
var G__13184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__13183,G__13184) : ajax.core.param_to_str.call(null,G__13183,G__13184));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__13185 = prefix;
var G__13186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__13185,G__13186) : ajax.core.param_to_str.call(null,G__13185,G__13186));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__13187 = prefix;
var G__13188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__13187,G__13188) : ajax.core.param_to_str.call(null,G__13187,G__13188));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args13193 = [];
var len__7489__auto___13204 = arguments.length;
var i__7490__auto___13205 = (0);
while(true){
if((i__7490__auto___13205 < len__7489__auto___13204)){
args13193.push((arguments[i__7490__auto___13205]));

var G__13206 = (i__7490__auto___13205 + (1));
i__7490__auto___13205 = G__13206;
continue;
} else {
}
break;
}

var G__13195 = args13193.length;
switch (G__13195) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13193.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__13196){
var vec__13197 = p__13196;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13197,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13197,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__13200){
var vec__13201 = p__13200;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13201,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13201,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13212){
var vec__13213 = p__13212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args13216 = [];
var len__7489__auto___13219 = arguments.length;
var i__7490__auto___13220 = (0);
while(true){
if((i__7490__auto___13220 < len__7489__auto___13219)){
args13216.push((arguments[i__7490__auto___13220]));

var G__13221 = (i__7490__auto___13220 + (1));
i__7490__auto___13220 = G__13221;
continue;
} else {
}
break;
}

var G__13218 = args13216.length;
switch (G__13218) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13216.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13224,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13226 = (((k13224 instanceof cljs.core.Keyword))?k13224.fqn:null);
switch (G__13226) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13224,else__7039__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13227){
var self__ = this;
var map__13228 = p__13227;
var map__13228__$1 = ((((!((map__13228 == null)))?((((map__13228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13228):map__13228);
var request = map__13228__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13228__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#ajax.core.ProcessGet{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13223){
var self__ = this;
var G__13223__$1 = this;
return (new cljs.core.RecordIter((0),G__13223__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_to_DASH_str], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params_DASH_to_DASH_str,null], null), null),k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13223){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13230 = cljs.core.keyword_identical_QMARK_;
var expr__13231 = k__7044__auto__;
if(cljs.core.truth_((function (){var G__13233 = cljs.core.cst$kw$params_DASH_to_DASH_str;
var G__13234 = expr__13231;
return (pred__13230.cljs$core$IFn$_invoke$arity$2 ? pred__13230.cljs$core$IFn$_invoke$arity$2(G__13233,G__13234) : pred__13230.call(null,G__13233,G__13234));
})())){
return (new ajax.core.ProcessGet(G__13223,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13223),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13223){
var self__ = this;
var this__7035__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__13223,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_to_DASH_str], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__13225){
return (new ajax.core.ProcessGet(cljs.core.cst$kw$params_DASH_to_DASH_str.cljs$core$IFn$_invoke$arity$1(G__13225),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__13225,cljs.core.cst$kw$params_DASH_to_DASH_str),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13237,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13239 = k13237;
switch (G__13239) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13237,else__7039__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13240){
var self__ = this;
var map__13241 = p__13240;
var map__13241__$1 = ((((!((map__13241 == null)))?((((map__13241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13241):map__13241);
var request = map__13241__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13241__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13241__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13236){
var self__ = this;
var G__13236__$1 = this;
return (new cljs.core.RecordIter((0),G__13236__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13236){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13243 = cljs.core.keyword_identical_QMARK_;
var expr__13244 = k__7044__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13236),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13236){
var self__ = this;
var this__7035__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__13236,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__13238){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13238),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7036__auto__,k__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7036__auto____$1,k__7037__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7038__auto__,k13248,else__7039__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
var G__13250 = k13248;
switch (G__13250) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13248,else__7039__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__13251){
var self__ = this;
var map__13252 = p__13251;
var map__13252__$1 = ((((!((map__13252 == null)))?((((map__13252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13252):map__13252);
var request = map__13252__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13252__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13252__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13252__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13252__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13252__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__13254 = ajax.core.get_request_format(format);
var map__13254__$1 = ((((!((map__13254 == null)))?((((map__13254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13254):map__13254);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13254__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13254__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6414__auto__ = headers;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7050__auto__,writer__7051__auto__,opts__7052__auto__){
var self__ = this;
var this__7050__auto____$1 = this;
var pr_pair__7053__auto__ = ((function (this__7050__auto____$1){
return (function (keyval__7054__auto__){
return cljs.core.pr_sequential_writer(writer__7051__auto__,cljs.core.pr_writer,""," ","",opts__7052__auto__,keyval__7054__auto__);
});})(this__7050__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7051__auto__,pr_pair__7053__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__7052__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13247){
var self__ = this;
var G__13247__$1 = this;
return (new cljs.core.RecordIter((0),G__13247__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7040__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7031__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
var h__6849__auto__ = self__.__hash;
if(!((h__6849__auto__ == null))){
return h__6849__auto__;
} else {
var h__6849__auto____$1 = cljs.core.hash_imap(this__7031__auto____$1);
self__.__hash = h__6849__auto____$1;

return h__6849__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7032__auto__,other__7033__auto__){
var self__ = this;
var this__7032__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6402__auto__ = other__7033__auto__;
if(cljs.core.truth_(and__6402__auto__)){
var and__6402__auto____$1 = (this__7032__auto____$1.constructor === other__7033__auto__.constructor);
if(and__6402__auto____$1){
return cljs.core.equiv_map(this__7032__auto____$1,other__7033__auto__);
} else {
return and__6402__auto____$1;
}
} else {
return and__6402__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7045__auto__,k__7046__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__7046__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7045__auto____$1),self__.__meta),k__7046__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7046__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7043__auto__,k__7044__auto__,G__13247){
var self__ = this;
var this__7043__auto____$1 = this;
var pred__13256 = cljs.core.keyword_identical_QMARK_;
var expr__13257 = k__7044__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7044__auto__,G__13247),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7048__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7035__auto__,G__13247){
var self__ = this;
var this__7035__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__13247,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7041__auto__,entry__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7042__auto__)){
return cljs.core._assoc(this__7041__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7042__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7041__auto____$1,entry__7042__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7070__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7070__auto__,writer__7071__auto__){
return cljs.core._write(writer__7071__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__13249){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13249),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__13260){
var map__13263 = p__13260;
var map__13263__$1 = ((((!((map__13263 == null)))?((((map__13263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13263):map__13263);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13263__$1,cljs.core.cst$kw$type);
var or__6414__auto__ = type;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__6414__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args13265 = [];
var len__7489__auto___13268 = arguments.length;
var i__7490__auto___13269 = (0);
while(true){
if((i__7490__auto___13269 < len__7489__auto___13268)){
args13265.push((arguments[i__7490__auto___13269]));

var G__13270 = (i__7490__auto___13269 + (1));
i__7490__auto___13269 = G__13270;
continue;
} else {
}
break;
}

var G__13267 = args13265.length;
switch (G__13267) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13265.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__6414__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read(reader,ajax.protocols._body(response));
if(cljs.core.truth_(cljs.core.cst$kw$raw.cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args13272 = [];
var len__7489__auto___13275 = arguments.length;
var i__7490__auto___13276 = (0);
while(true){
if((i__7490__auto___13276 < len__7489__auto___13275)){
args13272.push((arguments[i__7490__auto___13276]));

var G__13277 = (i__7490__auto___13276 + (1));
i__7490__auto___13276 = G__13277;
continue;
} else {
}
break;
}

var G__13274 = args13272.length;
switch (G__13274) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13272.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args13279 = [];
var len__7489__auto___13282 = arguments.length;
var i__7490__auto___13283 = (0);
while(true){
if((i__7490__auto___13283 < len__7489__auto___13282)){
args13279.push((arguments[i__7490__auto___13283]));

var G__13284 = (i__7490__auto___13283 + (1));
i__7490__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var G__13281 = args13279.length;
switch (G__13281) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13279.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__6402__auto__ = prefix;
if(cljs.core.truth_(and__6402__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__6402__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args13286 = [];
var len__7489__auto___13289 = arguments.length;
var i__7490__auto___13290 = (0);
while(true){
if((i__7490__auto___13290 < len__7489__auto___13289)){
args13286.push((arguments[i__7490__auto___13290]));

var G__13291 = (i__7490__auto___13290 + (1));
i__7490__auto___13290 = G__13291;
continue;
} else {
}
break;
}

var G__13288 = args13286.length;
switch (G__13288) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13286.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args13293 = [];
var len__7489__auto___13299 = arguments.length;
var i__7490__auto___13300 = (0);
while(true){
if((i__7490__auto___13300 < len__7489__auto___13299)){
args13293.push((arguments[i__7490__auto___13300]));

var G__13301 = (i__7490__auto___13300 + (1));
i__7490__auto___13300 = G__13301;
continue;
} else {
}
break;
}

var G__13295 = args13293.length;
switch (G__13295) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13293.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__13296){
var map__13297 = p__13296;
var map__13297__$1 = ((((!((map__13297 == null)))?((((map__13297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13297):map__13297);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13297__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13297__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13297__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args13303 = [];
var len__7489__auto___13306 = arguments.length;
var i__7490__auto___13307 = (0);
while(true){
if((i__7490__auto___13307 < len__7489__auto___13306)){
args13303.push((arguments[i__7490__auto___13307]));

var G__13308 = (i__7490__auto___13307 + (1));
i__7490__auto___13307 = G__13308;
continue;
} else {
}
break;
}

var G__13305 = args13303.length;
switch (G__13305) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13303.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args13310 = [];
var len__7489__auto___13313 = arguments.length;
var i__7490__auto___13314 = (0);
while(true){
if((i__7490__auto___13314 < len__7489__auto___13313)){
args13310.push((arguments[i__7490__auto___13314]));

var G__13315 = (i__7490__auto___13314 + (1));
i__7490__auto___13314 = G__13315;
continue;
} else {
}
break;
}

var G__13312 = args13310.length;
switch (G__13312) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13310.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args13317 = [];
var len__7489__auto___13320 = arguments.length;
var i__7490__auto___13321 = (0);
while(true){
if((i__7490__auto___13321 < len__7489__auto___13320)){
args13317.push((arguments[i__7490__auto___13321]));

var G__13322 = (i__7490__auto___13321 + (1));
i__7490__auto___13321 = G__13322;
continue;
} else {
}
break;
}

var G__13319 = args13317.length;
switch (G__13319) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13317.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args13324 = [];
var len__7489__auto___13327 = arguments.length;
var i__7490__auto___13328 = (0);
while(true){
if((i__7490__auto___13328 < len__7489__auto___13327)){
args13324.push((arguments[i__7490__auto___13328]));

var G__13329 = (i__7490__auto___13328 + (1));
i__7490__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var G__13326 = args13324.length;
switch (G__13326) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13324.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__13331){
var map__13334 = p__13331;
var map__13334__$1 = ((((!((map__13334 == null)))?((((map__13334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13334):map__13334);
var request = map__13334__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13334__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args13336 = [];
var len__7489__auto___13339 = arguments.length;
var i__7490__auto___13340 = (0);
while(true){
if((i__7490__auto___13340 < len__7489__auto___13339)){
args13336.push((arguments[i__7490__auto___13340]));

var G__13341 = (i__7490__auto___13340 + (1));
i__7490__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var G__13338 = args13336.length;
switch (G__13338) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13336.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__13343){
var map__13346 = p__13343;
var map__13346__$1 = ((((!((map__13346 == null)))?((((map__13346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13346):map__13346);
var request = map__13346__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13346__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args13348 = [];
var len__7489__auto___13351 = arguments.length;
var i__7490__auto___13352 = (0);
while(true){
if((i__7490__auto___13352 < len__7489__auto___13351)){
args13348.push((arguments[i__7490__auto___13352]));

var G__13353 = (i__7490__auto___13352 + (1));
i__7490__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__13355){
var map__13358 = p__13355;
var map__13358__$1 = ((((!((map__13358 == null)))?((((map__13358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13358):map__13358);
var opts = map__13358__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13358__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args13360 = [];
var len__7489__auto___13363 = arguments.length;
var i__7490__auto___13364 = (0);
while(true){
if((i__7490__auto___13364 < len__7489__auto___13363)){
args13360.push((arguments[i__7490__auto___13364]));

var G__13365 = (i__7490__auto___13364 + (1));
i__7490__auto___13364 = G__13365;
continue;
} else {
}
break;
}

var G__13362 = args13360.length;
switch (G__13362) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13360.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__13367){
var map__13370 = p__13367;
var map__13370__$1 = ((((!((map__13370 == null)))?((((map__13370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13370):map__13370);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13370__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__13372 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13372) : cljs.core.atom.call(null,G__13372));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__13373_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6414__auto__ = p1__13373_SHARP_;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_interceptors) : cljs.core.deref.call(null,ajax.core.default_interceptors));
}
})(),cljs.core.array_seq([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__13374){
var map__13377 = p__13374;
var map__13377__$1 = ((((!((map__13377 == null)))?((((map__13377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13377):map__13377);
var request = map__13377__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13377__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__6414__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__13380 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13380) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_element(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__13385 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13385) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13387_SHARP_){
return ajax.core.keyword_response_format_element(p1__13387_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["CLJS-AJAX response:",response], 0));
});
ajax.core.default_handler = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_response) : cljs.core.atom.call(null,ajax.core.print_response));
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["CLJS-AJAX ERROR:",response], 0));

}
}
});
ajax.core.default_error_handler = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_error_response) : cljs.core.atom.call(null,ajax.core.print_error_response));
ajax.core.transform_handler = (function ajax$core$transform_handler(p__13388){
var map__13398 = p__13388;
var map__13398__$1 = ((((!((map__13398 == null)))?((((map__13398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13398):map__13398);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13398__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13398__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13398__$1,cljs.core.cst$kw$finally);
var h = (function (){var or__6414__auto__ = handler;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_handler) : cljs.core.deref.call(null,ajax.core.default_handler));
}
})();
var e = (function (){var or__6414__auto__ = error_handler;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_error_handler) : cljs.core.deref.call(null,ajax.core.default_error_handler));
}
})();
return ((function (h,e,map__13398,map__13398__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__13400){
var vec__13404 = p__13400;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13404,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13404,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(h,e,map__13398,map__13398__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__13407){
var map__13410 = p__13407;
var map__13410__$1 = ((((!((map__13410 == null)))?((((map__13410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13410):map__13410);
var opts = map__13410__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__6414__auto__ = format;
if(cljs.core.truth_(or__6414__auto__)){
return or__6414__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13414 = arguments.length;
var i__7490__auto___13415 = (0);
while(true){
if((i__7490__auto___13415 < len__7489__auto___13414)){
args__7496__auto__.push((arguments[i__7490__auto___13415]));

var G__13416 = (i__7490__auto___13415 + (1));
i__7490__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq13412){
var G__13413 = cljs.core.first(seq13412);
var seq13412__$1 = cljs.core.next(seq13412);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__13413,seq13412__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13419 = arguments.length;
var i__7490__auto___13420 = (0);
while(true){
if((i__7490__auto___13420 < len__7489__auto___13419)){
args__7496__auto__.push((arguments[i__7490__auto___13420]));

var G__13421 = (i__7490__auto___13420 + (1));
i__7490__auto___13420 = G__13421;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq13417){
var G__13418 = cljs.core.first(seq13417);
var seq13417__$1 = cljs.core.next(seq13417);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__13418,seq13417__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13424 = arguments.length;
var i__7490__auto___13425 = (0);
while(true){
if((i__7490__auto___13425 < len__7489__auto___13424)){
args__7496__auto__.push((arguments[i__7490__auto___13425]));

var G__13426 = (i__7490__auto___13425 + (1));
i__7490__auto___13425 = G__13426;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq13422){
var G__13423 = cljs.core.first(seq13422);
var seq13422__$1 = cljs.core.next(seq13422);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__13423,seq13422__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13429 = arguments.length;
var i__7490__auto___13430 = (0);
while(true){
if((i__7490__auto___13430 < len__7489__auto___13429)){
args__7496__auto__.push((arguments[i__7490__auto___13430]));

var G__13431 = (i__7490__auto___13430 + (1));
i__7490__auto___13430 = G__13431;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq13427){
var G__13428 = cljs.core.first(seq13427);
var seq13427__$1 = cljs.core.next(seq13427);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__13428,seq13427__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13434 = arguments.length;
var i__7490__auto___13435 = (0);
while(true){
if((i__7490__auto___13435 < len__7489__auto___13434)){
args__7496__auto__.push((arguments[i__7490__auto___13435]));

var G__13436 = (i__7490__auto___13435 + (1));
i__7490__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq13432){
var G__13433 = cljs.core.first(seq13432);
var seq13432__$1 = cljs.core.next(seq13432);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__13433,seq13432__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13439 = arguments.length;
var i__7490__auto___13440 = (0);
while(true){
if((i__7490__auto___13440 < len__7489__auto___13439)){
args__7496__auto__.push((arguments[i__7490__auto___13440]));

var G__13441 = (i__7490__auto___13440 + (1));
i__7490__auto___13440 = G__13441;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq13437){
var G__13438 = cljs.core.first(seq13437);
var seq13437__$1 = cljs.core.next(seq13437);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__13438,seq13437__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13444 = arguments.length;
var i__7490__auto___13445 = (0);
while(true){
if((i__7490__auto___13445 < len__7489__auto___13444)){
args__7496__auto__.push((arguments[i__7490__auto___13445]));

var G__13446 = (i__7490__auto___13445 + (1));
i__7490__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq13442){
var G__13443 = cljs.core.first(seq13442);
var seq13442__$1 = cljs.core.next(seq13442);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__13443,seq13442__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__7496__auto__ = [];
var len__7489__auto___13449 = arguments.length;
var i__7490__auto___13450 = (0);
while(true){
if((i__7490__auto___13450 < len__7489__auto___13449)){
args__7496__auto__.push((arguments[i__7490__auto___13450]));

var G__13451 = (i__7490__auto___13450 + (1));
i__7490__auto___13450 = G__13451;
continue;
} else {
}
break;
}

var argseq__7497__auto__ = ((((1) < args__7496__auto__.length))?(new cljs.core.IndexedSeq(args__7496__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7497__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__12968__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__12968__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__12968__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq13447){
var G__13448 = cljs.core.first(seq13447);
var seq13447__$1 = cljs.core.next(seq13447);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__13448,seq13447__$1);
});

