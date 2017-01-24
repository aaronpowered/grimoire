// Compiled by ClojureScript 1.9.229 {}
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

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
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
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50253,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50255 = (((k50253 instanceof cljs.core.Keyword))?k50253.fqn:null);
switch (G__50255) {
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
return cljs.core.get.call(null,self__.__extmap,k50253,else__43270__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__50256,opts){
var self__ = this;
var map__50257 = p__50256;
var map__50257__$1 = ((((!((map__50257 == null)))?((((map__50257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50257):map__50257);
var request__$1 = cljs.core.get.call(null,map__50257__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__50259 = this;
var map__50259__$1 = ((((!((map__50259 == null)))?((((map__50259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50259):map__50259);
var request__$2 = cljs.core.get.call(null,map__50259__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__50261,xhrio){
var self__ = this;
var map__50262 = p__50261;
var map__50262__$1 = ((((!((map__50262 == null)))?((((map__50262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50262):map__50262);
var response__$1 = cljs.core.get.call(null,map__50262__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__50264 = this;
var map__50264__$1 = ((((!((map__50264 == null)))?((((map__50264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50264):map__50264);
var response__$2 = cljs.core.get.call(null,map__50264__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50252){
var self__ = this;
var G__50252__$1 = this;
return (new cljs.core.RecordIter((0),G__50252__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50252){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50266 = cljs.core.keyword_identical_QMARK_;
var expr__50267 = k__43275__auto__;
if(cljs.core.truth_(pred__50266.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__50267))){
return (new ajax.core.StandardInterceptor(G__50252,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50266.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__50267))){
return (new ajax.core.StandardInterceptor(self__.name,G__50252,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50266.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__50267))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__50252,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50252),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50252){
var self__ = this;
var this__43266__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__50252,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__50254){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50254),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__50254),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__50254),null,cljs.core.dissoc.call(null,G__50254,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__42645__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__50270,xhrio){
var map__50273 = p__50270;
var map__50273__$1 = ((((!((map__50273 == null)))?((((map__50273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50273):map__50273);
var description = cljs.core.get.call(null,map__50273__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__43727__auto__ = [];
var len__43720__auto___50279 = arguments.length;
var i__43721__auto___50280 = (0);
while(true){
if((i__43721__auto___50280 < len__43720__auto___50279)){
args__43727__auto__.push((arguments[i__43721__auto___50280]));

var G__50281 = (i__43721__auto___50280 + (1));
i__43721__auto___50280 = G__50281;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((3) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43728__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq50275){
var G__50276 = cljs.core.first.call(null,seq50275);
var seq50275__$1 = cljs.core.next.call(null,seq50275);
var G__50277 = cljs.core.first.call(null,seq50275__$1);
var seq50275__$2 = cljs.core.next.call(null,seq50275__$1);
var G__50278 = cljs.core.first.call(null,seq50275__$2);
var seq50275__$3 = cljs.core.next.call(null,seq50275__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__50276,G__50277,G__50278,seq50275__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
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
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50284,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50286 = (((k50284 instanceof cljs.core.Keyword))?k50284.fqn:null);
switch (G__50286) {
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
return cljs.core.get.call(null,self__.__extmap,k50284,else__43270__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__50287,request){
var self__ = this;
var map__50288 = p__50287;
var map__50288__$1 = ((((!((map__50288 == null)))?((((map__50288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50288):map__50288);
var content_type__$1 = cljs.core.get.call(null,map__50288__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__50290 = this;
var map__50290__$1 = ((((!((map__50290 == null)))?((((map__50290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50290):map__50290);
var content_type__$2 = cljs.core.get.call(null,map__50290__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__50290,map__50290__$1,content_type__$2,map__50288,map__50288__$1,content_type__$1){
return (function (p1__50282_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__42645__auto__ = p1__50282_SHARP_;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__50290,map__50290__$1,content_type__$2,map__50288,map__50288__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__50292,xhrio){
var self__ = this;
var map__50293 = p__50292;
var map__50293__$1 = ((((!((map__50293 == null)))?((((map__50293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50293):map__50293);
var format = map__50293__$1;
var read__$1 = cljs.core.get.call(null,map__50293__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__50295 = this;
var map__50295__$1 = ((((!((map__50295 == null)))?((((map__50295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50295):map__50295);
var format__$1 = map__50295__$1;
var read__$2 = cljs.core.get.call(null,map__50295__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__50298 = status;
switch (G__50298) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e50299){if((e50299 instanceof Object)){
var e = e50299;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e50299;

}
}
}
}catch (e50297){if((e50297 instanceof Object)){
var e = e50297;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e50297;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50283){
var self__ = this;
var G__50283__$1 = this;
return (new cljs.core.RecordIter((0),G__50283__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50283){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50300 = cljs.core.keyword_identical_QMARK_;
var expr__50301 = k__43275__auto__;
if(cljs.core.truth_(pred__50300.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__50301))){
return (new ajax.core.ResponseFormat(G__50283,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50300.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__50301))){
return (new ajax.core.ResponseFormat(self__.read,G__50283,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50300.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__50301))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__50283,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50283),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50283){
var self__ = this;
var this__43266__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__50283,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__50285){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__50285),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__50285),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__50285),null,cljs.core.dissoc.call(null,G__50285,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args50305 = [];
var len__43720__auto___50308 = arguments.length;
var i__43721__auto___50309 = (0);
while(true){
if((i__43721__auto___50309 < len__43720__auto___50308)){
args50305.push((arguments[i__43721__auto___50309]));

var G__50310 = (i__43721__auto___50309 + (1));
i__43721__auto___50309 = G__50310;
continue;
} else {
}
break;
}

var G__50307 = args50305.length;
switch (G__50307) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50305.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args50312 = [];
var len__43720__auto___50323 = arguments.length;
var i__43721__auto___50324 = (0);
while(true){
if((i__43721__auto___50324 < len__43720__auto___50323)){
args50312.push((arguments[i__43721__auto___50324]));

var G__50325 = (i__43721__auto___50324 + (1));
i__43721__auto___50324 = G__50325;
continue;
} else {
}
break;
}

var G__50314 = args50312.length;
switch (G__50314) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50312.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__50315){
var vec__50316 = p__50315;
var key = cljs.core.nth.call(null,vec__50316,(0),null);
var value = cljs.core.nth.call(null,vec__50316,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__50319){
var vec__50320 = p__50319;
var key = cljs.core.nth.call(null,vec__50320,(0),null);
var value = cljs.core.nth.call(null,vec__50320,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__50331){
var vec__50332 = p__50331;
var k = cljs.core.nth.call(null,vec__50332,(0),null);
var v = cljs.core.nth.call(null,vec__50332,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args50335 = [];
var len__43720__auto___50338 = arguments.length;
var i__43721__auto___50339 = (0);
while(true){
if((i__43721__auto___50339 < len__43720__auto___50338)){
args50335.push((arguments[i__43721__auto___50339]));

var G__50340 = (i__43721__auto___50339 + (1));
i__43721__auto___50339 = G__50340;
continue;
} else {
}
break;
}

var G__50337 = args50335.length;
switch (G__50337) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50335.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
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
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50343,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50345 = (((k50343 instanceof cljs.core.Keyword))?k50343.fqn:null);
switch (G__50345) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50343,else__43270__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50346){
var self__ = this;
var map__50347 = p__50346;
var map__50347__$1 = ((((!((map__50347 == null)))?((((map__50347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50347):map__50347);
var request = map__50347__$1;
var method = cljs.core.get.call(null,map__50347__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#ajax.core.ProcessGet{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50342){
var self__ = this;
var G__50342__$1 = this;
return (new cljs.core.RecordIter((0),G__50342__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50342){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50349 = cljs.core.keyword_identical_QMARK_;
var expr__50350 = k__43275__auto__;
if(cljs.core.truth_(pred__50349.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__50350))){
return (new ajax.core.ProcessGet(G__50342,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50342),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50342){
var self__ = this;
var this__43266__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__50342,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__50344){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__50344),null,cljs.core.dissoc.call(null,G__50344,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
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
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50354,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50356 = k50354;
switch (G__50356) {
default:
return cljs.core.get.call(null,self__.__extmap,k50354,else__43270__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50357){
var self__ = this;
var map__50358 = p__50357;
var map__50358__$1 = ((((!((map__50358 == null)))?((((map__50358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50358):map__50358);
var request = map__50358__$1;
var body = cljs.core.get.call(null,map__50358__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__50358__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50353){
var self__ = this;
var G__50353__$1 = this;
return (new cljs.core.RecordIter((0),G__50353__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50353){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50360 = cljs.core.keyword_identical_QMARK_;
var expr__50361 = k__43275__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50353),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50353){
var self__ = this;
var this__43266__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__50353,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__50355){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__50355),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
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
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43267__auto__,k__43268__auto__){
var self__ = this;
var this__43267__auto____$1 = this;
return cljs.core._lookup.call(null,this__43267__auto____$1,k__43268__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43269__auto__,k50365,else__43270__auto__){
var self__ = this;
var this__43269__auto____$1 = this;
var G__50367 = k50365;
switch (G__50367) {
default:
return cljs.core.get.call(null,self__.__extmap,k50365,else__43270__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50368){
var self__ = this;
var map__50369 = p__50368;
var map__50369__$1 = ((((!((map__50369 == null)))?((((map__50369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50369):map__50369);
var request = map__50369__$1;
var uri = cljs.core.get.call(null,map__50369__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__50369__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__50369__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__50369__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__50369__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__50371 = ajax.core.get_request_format.call(null,format);
var map__50371__$1 = ((((!((map__50371 == null)))?((((map__50371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50371):map__50371);
var write = cljs.core.get.call(null,map__50371__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__50371__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__42645__auto__ = headers;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43281__auto__,writer__43282__auto__,opts__43283__auto__){
var self__ = this;
var this__43281__auto____$1 = this;
var pr_pair__43284__auto__ = ((function (this__43281__auto____$1){
return (function (keyval__43285__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,cljs.core.pr_writer,""," ","",opts__43283__auto__,keyval__43285__auto__);
});})(this__43281__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43282__auto__,pr_pair__43284__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__43283__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50364){
var self__ = this;
var G__50364__$1 = this;
return (new cljs.core.RecordIter((0),G__50364__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43265__auto__){
var self__ = this;
var this__43265__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43261__auto__){
var self__ = this;
var this__43261__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43271__auto__){
var self__ = this;
var this__43271__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43262__auto__){
var self__ = this;
var this__43262__auto____$1 = this;
var h__43080__auto__ = self__.__hash;
if(!((h__43080__auto__ == null))){
return h__43080__auto__;
} else {
var h__43080__auto____$1 = cljs.core.hash_imap.call(null,this__43262__auto____$1);
self__.__hash = h__43080__auto____$1;

return h__43080__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__43263__auto__,other__43264__auto__){
var self__ = this;
var this__43263__auto____$1 = this;
if(cljs.core.truth_((function (){var and__42633__auto__ = other__43264__auto__;
if(cljs.core.truth_(and__42633__auto__)){
var and__42633__auto____$1 = (this__43263__auto____$1.constructor === other__43264__auto__.constructor);
if(and__42633__auto____$1){
return cljs.core.equiv_map.call(null,this__43263__auto____$1,other__43264__auto__);
} else {
return and__42633__auto____$1;
}
} else {
return and__42633__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43276__auto__,k__43277__auto__){
var self__ = this;
var this__43276__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__43277__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43276__auto____$1),self__.__meta),k__43277__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43277__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43274__auto__,k__43275__auto__,G__50364){
var self__ = this;
var this__43274__auto____$1 = this;
var pred__50373 = cljs.core.keyword_identical_QMARK_;
var expr__50374 = k__43275__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43275__auto__,G__50364),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43279__auto__){
var self__ = this;
var this__43279__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43266__auto__,G__50364){
var self__ = this;
var this__43266__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__50364,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43272__auto__,entry__43273__auto__){
var self__ = this;
var this__43272__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43273__auto__)){
return cljs.core._assoc.call(null,this__43272__auto____$1,cljs.core._nth.call(null,entry__43273__auto__,(0)),cljs.core._nth.call(null,entry__43273__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43272__auto____$1,entry__43273__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__43301__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__43301__auto__,writer__43302__auto__){
return cljs.core._write.call(null,writer__43302__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__50366){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__50366),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__50377){
var map__50380 = p__50377;
var map__50380__$1 = ((((!((map__50380 == null)))?((((map__50380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50380):map__50380);
var type = cljs.core.get.call(null,map__50380__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__42645__auto__ = type;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__42645__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args50382 = [];
var len__43720__auto___50385 = arguments.length;
var i__43721__auto___50386 = (0);
while(true){
if((i__43721__auto___50386 < len__43720__auto___50385)){
args50382.push((arguments[i__43721__auto___50386]));

var G__50387 = (i__43721__auto___50386 + (1));
i__43721__auto___50386 = G__50387;
continue;
} else {
}
break;
}

var G__50384 = args50382.length;
switch (G__50384) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50382.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__42645__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args50389 = [];
var len__43720__auto___50392 = arguments.length;
var i__43721__auto___50393 = (0);
while(true){
if((i__43721__auto___50393 < len__43720__auto___50392)){
args50389.push((arguments[i__43721__auto___50393]));

var G__50394 = (i__43721__auto___50393 + (1));
i__43721__auto___50393 = G__50394;
continue;
} else {
}
break;
}

var G__50391 = args50389.length;
switch (G__50391) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50389.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args50396 = [];
var len__43720__auto___50399 = arguments.length;
var i__43721__auto___50400 = (0);
while(true){
if((i__43721__auto___50400 < len__43720__auto___50399)){
args50396.push((arguments[i__43721__auto___50400]));

var G__50401 = (i__43721__auto___50400 + (1));
i__43721__auto___50400 = G__50401;
continue;
} else {
}
break;
}

var G__50398 = args50396.length;
switch (G__50398) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50396.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__42633__auto__ = prefix;
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__42633__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args50403 = [];
var len__43720__auto___50406 = arguments.length;
var i__43721__auto___50407 = (0);
while(true){
if((i__43721__auto___50407 < len__43720__auto___50406)){
args50403.push((arguments[i__43721__auto___50407]));

var G__50408 = (i__43721__auto___50407 + (1));
i__43721__auto___50407 = G__50408;
continue;
} else {
}
break;
}

var G__50405 = args50403.length;
switch (G__50405) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50403.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
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
var args50410 = [];
var len__43720__auto___50416 = arguments.length;
var i__43721__auto___50417 = (0);
while(true){
if((i__43721__auto___50417 < len__43720__auto___50416)){
args50410.push((arguments[i__43721__auto___50417]));

var G__50418 = (i__43721__auto___50417 + (1));
i__43721__auto___50417 = G__50418;
continue;
} else {
}
break;
}

var G__50412 = args50410.length;
switch (G__50412) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50410.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__50413){
var map__50414 = p__50413;
var map__50414__$1 = ((((!((map__50414 == null)))?((((map__50414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50414):map__50414);
var prefix = cljs.core.get.call(null,map__50414__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__50414__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__50414__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args50420 = [];
var len__43720__auto___50423 = arguments.length;
var i__43721__auto___50424 = (0);
while(true){
if((i__43721__auto___50424 < len__43720__auto___50423)){
args50420.push((arguments[i__43721__auto___50424]));

var G__50425 = (i__43721__auto___50424 + (1));
i__43721__auto___50424 = G__50425;
continue;
} else {
}
break;
}

var G__50422 = args50420.length;
switch (G__50422) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50420.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args50427 = [];
var len__43720__auto___50430 = arguments.length;
var i__43721__auto___50431 = (0);
while(true){
if((i__43721__auto___50431 < len__43720__auto___50430)){
args50427.push((arguments[i__43721__auto___50431]));

var G__50432 = (i__43721__auto___50431 + (1));
i__43721__auto___50431 = G__50432;
continue;
} else {
}
break;
}

var G__50429 = args50427.length;
switch (G__50429) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50427.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
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
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
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
var args50434 = [];
var len__43720__auto___50437 = arguments.length;
var i__43721__auto___50438 = (0);
while(true){
if((i__43721__auto___50438 < len__43720__auto___50437)){
args50434.push((arguments[i__43721__auto___50438]));

var G__50439 = (i__43721__auto___50438 + (1));
i__43721__auto___50438 = G__50439;
continue;
} else {
}
break;
}

var G__50436 = args50434.length;
switch (G__50436) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50434.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args50441 = [];
var len__43720__auto___50444 = arguments.length;
var i__43721__auto___50445 = (0);
while(true){
if((i__43721__auto___50445 < len__43720__auto___50444)){
args50441.push((arguments[i__43721__auto___50445]));

var G__50446 = (i__43721__auto___50445 + (1));
i__43721__auto___50445 = G__50446;
continue;
} else {
}
break;
}

var G__50443 = args50441.length;
switch (G__50443) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50441.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__50448){
var map__50451 = p__50448;
var map__50451__$1 = ((((!((map__50451 == null)))?((((map__50451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50451):map__50451);
var request = map__50451__$1;
var response_format = cljs.core.get.call(null,map__50451__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args50453 = [];
var len__43720__auto___50456 = arguments.length;
var i__43721__auto___50457 = (0);
while(true){
if((i__43721__auto___50457 < len__43720__auto___50456)){
args50453.push((arguments[i__43721__auto___50457]));

var G__50458 = (i__43721__auto___50457 + (1));
i__43721__auto___50457 = G__50458;
continue;
} else {
}
break;
}

var G__50455 = args50453.length;
switch (G__50455) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50453.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__50460){
var map__50463 = p__50460;
var map__50463__$1 = ((((!((map__50463 == null)))?((((map__50463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50463):map__50463);
var request = map__50463__$1;
var response_format = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args50465 = [];
var len__43720__auto___50468 = arguments.length;
var i__43721__auto___50469 = (0);
while(true){
if((i__43721__auto___50469 < len__43720__auto___50468)){
args50465.push((arguments[i__43721__auto___50469]));

var G__50470 = (i__43721__auto___50469 + (1));
i__43721__auto___50469 = G__50470;
continue;
} else {
}
break;
}

var G__50467 = args50465.length;
switch (G__50467) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50465.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__50472){
var map__50475 = p__50472;
var map__50475__$1 = ((((!((map__50475 == null)))?((((map__50475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50475):map__50475);
var opts = map__50475__$1;
var response_format = cljs.core.get.call(null,map__50475__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args50477 = [];
var len__43720__auto___50480 = arguments.length;
var i__43721__auto___50481 = (0);
while(true){
if((i__43721__auto___50481 < len__43720__auto___50480)){
args50477.push((arguments[i__43721__auto___50481]));

var G__50482 = (i__43721__auto___50481 + (1));
i__43721__auto___50481 = G__50482;
continue;
} else {
}
break;
}

var G__50479 = args50477.length;
switch (G__50479) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50477.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__50484){
var map__50487 = p__50484;
var map__50487__$1 = ((((!((map__50487 == null)))?((((map__50487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50487):map__50487);
var handler = cljs.core.get.call(null,map__50487__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__50489_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__42645__auto__ = p1__50489_SHARP_;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__50490){
var map__50493 = p__50490;
var map__50493__$1 = ((((!((map__50493 == null)))?((((map__50493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50493):map__50493);
var request = map__50493__$1;
var interceptors = cljs.core.get.call(null,map__50493__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__42645__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__50496 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__50496) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__50499 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__50499) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

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
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__50501_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__50501_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__50502){
var map__50512 = p__50502;
var map__50512__$1 = ((((!((map__50512 == null)))?((((map__50512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50512):map__50512);
var handler = cljs.core.get.call(null,map__50512__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__50512__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__50512__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__42645__auto__ = handler;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__42645__auto__ = error_handler;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__50512,map__50512__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__50514){
var vec__50518 = p__50514;
var ok = cljs.core.nth.call(null,vec__50518,(0),null);
var result = cljs.core.nth.call(null,vec__50518,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__50512,map__50512__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__50521){
var map__50524 = p__50521;
var map__50524__$1 = ((((!((map__50524 == null)))?((((map__50524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50524):map__50524);
var opts = map__50524__$1;
var method = cljs.core.get.call(null,map__50524__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__50524__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__50524__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__50524__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__50524__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__42645__auto__ = format;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
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
var args__43727__auto__ = [];
var len__43720__auto___50528 = arguments.length;
var i__43721__auto___50529 = (0);
while(true){
if((i__43721__auto___50529 < len__43720__auto___50528)){
args__43727__auto__.push((arguments[i__43721__auto___50529]));

var G__50530 = (i__43721__auto___50529 + (1));
i__43721__auto___50529 = G__50530;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq50526){
var G__50527 = cljs.core.first.call(null,seq50526);
var seq50526__$1 = cljs.core.next.call(null,seq50526);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__50527,seq50526__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50533 = arguments.length;
var i__43721__auto___50534 = (0);
while(true){
if((i__43721__auto___50534 < len__43720__auto___50533)){
args__43727__auto__.push((arguments[i__43721__auto___50534]));

var G__50535 = (i__43721__auto___50534 + (1));
i__43721__auto___50534 = G__50535;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq50531){
var G__50532 = cljs.core.first.call(null,seq50531);
var seq50531__$1 = cljs.core.next.call(null,seq50531);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__50532,seq50531__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50538 = arguments.length;
var i__43721__auto___50539 = (0);
while(true){
if((i__43721__auto___50539 < len__43720__auto___50538)){
args__43727__auto__.push((arguments[i__43721__auto___50539]));

var G__50540 = (i__43721__auto___50539 + (1));
i__43721__auto___50539 = G__50540;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq50536){
var G__50537 = cljs.core.first.call(null,seq50536);
var seq50536__$1 = cljs.core.next.call(null,seq50536);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__50537,seq50536__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50543 = arguments.length;
var i__43721__auto___50544 = (0);
while(true){
if((i__43721__auto___50544 < len__43720__auto___50543)){
args__43727__auto__.push((arguments[i__43721__auto___50544]));

var G__50545 = (i__43721__auto___50544 + (1));
i__43721__auto___50544 = G__50545;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq50541){
var G__50542 = cljs.core.first.call(null,seq50541);
var seq50541__$1 = cljs.core.next.call(null,seq50541);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__50542,seq50541__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50548 = arguments.length;
var i__43721__auto___50549 = (0);
while(true){
if((i__43721__auto___50549 < len__43720__auto___50548)){
args__43727__auto__.push((arguments[i__43721__auto___50549]));

var G__50550 = (i__43721__auto___50549 + (1));
i__43721__auto___50549 = G__50550;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq50546){
var G__50547 = cljs.core.first.call(null,seq50546);
var seq50546__$1 = cljs.core.next.call(null,seq50546);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__50547,seq50546__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50553 = arguments.length;
var i__43721__auto___50554 = (0);
while(true){
if((i__43721__auto___50554 < len__43720__auto___50553)){
args__43727__auto__.push((arguments[i__43721__auto___50554]));

var G__50555 = (i__43721__auto___50554 + (1));
i__43721__auto___50554 = G__50555;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq50551){
var G__50552 = cljs.core.first.call(null,seq50551);
var seq50551__$1 = cljs.core.next.call(null,seq50551);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__50552,seq50551__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50558 = arguments.length;
var i__43721__auto___50559 = (0);
while(true){
if((i__43721__auto___50559 < len__43720__auto___50558)){
args__43727__auto__.push((arguments[i__43721__auto___50559]));

var G__50560 = (i__43721__auto___50559 + (1));
i__43721__auto___50559 = G__50560;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq50556){
var G__50557 = cljs.core.first.call(null,seq50556);
var seq50556__$1 = cljs.core.next.call(null,seq50556);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__50557,seq50556__$1);
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
var args__43727__auto__ = [];
var len__43720__auto___50563 = arguments.length;
var i__43721__auto___50564 = (0);
while(true){
if((i__43721__auto___50564 < len__43720__auto___50563)){
args__43727__auto__.push((arguments[i__43721__auto___50564]));

var G__50565 = (i__43721__auto___50564 + (1));
i__43721__auto___50564 = G__50565;
continue;
} else {
}
break;
}

var argseq__43728__auto__ = ((((1) < args__43727__auto__.length))?(new cljs.core.IndexedSeq(args__43727__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43728__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50117__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__50117__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50117__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq50561){
var G__50562 = cljs.core.first.call(null,seq50561);
var seq50561__$1 = cljs.core.next.call(null,seq50561);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__50562,seq50561__$1);
});


//# sourceMappingURL=core.js.map