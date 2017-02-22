// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.uuid');
goog.require('cljs.core');
goog.require('clojure.string');
fressian_cljs.uuid.rng = (function fressian_cljs$uuid$rng(){
var r = cljs.core.atom.call(null,(0));
var iter__26776__auto__ = ((function (r){
return (function fressian_cljs$uuid$rng_$_iter__27633(s__27634){
return (new cljs.core.LazySeq(null,((function (r){
return (function (){
var s__27634__$1 = s__27634;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27634__$1);
if(temp__4657__auto__){
var s__27634__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27634__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__27634__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__27636 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__27635 = (0);
while(true){
if((i__27635 < size__26775__auto__)){
var i = cljs.core._nth.call(null,c__26774__auto__,i__27635);
cljs.core.chunk_append.call(null,b__27636,(function (){
if(cljs.core._EQ_.call(null,(i & (3)),(0))){
cljs.core.reset_BANG_.call(null,r,(cljs.core.rand.call(null) * (68719476736)));
} else {
}

return ((cljs.core.deref.call(null,r) >> ((i & (3)) << (3))) & (255));
})()
);

var G__27637 = (i__27635 + (1));
i__27635 = G__27637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),fressian_cljs$uuid$rng_$_iter__27633.call(null,cljs.core.chunk_rest.call(null,s__27634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),null);
}
} else {
var i = cljs.core.first.call(null,s__27634__$2);
return cljs.core.cons.call(null,(function (){
if(cljs.core._EQ_.call(null,(i & (3)),(0))){
cljs.core.reset_BANG_.call(null,r,(cljs.core.rand.call(null) * (68719476736)));
} else {
}

return ((cljs.core.deref.call(null,r) >> ((i & (3)) << (3))) & (255));
})()
,fressian_cljs$uuid$rng_$_iter__27633.call(null,cljs.core.rest.call(null,s__27634__$2)));
}
} else {
return null;
}
break;
}
});})(r))
,null,null));
});})(r))
;
return iter__26776__auto__.call(null,cljs.core.range.call(null,(0),(16)));
});
fressian_cljs.uuid.unparse = (function fressian_cljs$uuid$unparse(buf){
var offset = cljs.core.atom.call(null,(0));
var iter__26776__auto__ = ((function (offset){
return (function fressian_cljs$uuid$unparse_$_iter__27644(s__27645){
return (new cljs.core.LazySeq(null,((function (offset){
return (function (){
var s__27645__$1 = s__27645;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27645__$1);
if(temp__4657__auto__){
var s__27645__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27645__$2)){
var c__26774__auto__ = cljs.core.chunk_first.call(null,s__27645__$2);
var size__26775__auto__ = cljs.core.count.call(null,c__26774__auto__);
var b__27647 = cljs.core.chunk_buffer.call(null,size__26775__auto__);
if((function (){var i__27646 = (0);
while(true){
if((i__27646 < size__26775__auto__)){
var n = cljs.core._nth.call(null,c__26774__auto__,i__27646);
cljs.core.chunk_append.call(null,b__27647,(function (){var token = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (i__27646,n,c__26774__auto__,size__26775__auto__,b__27647,s__27645__$2,temp__4657__auto__,offset){
return (function (p1__27638_SHARP_){
return (((new Uint8Array(cljs.core.int_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27638_SHARP_], null))))[(0)]) + (256)).toString((16)).substr((1));
});})(i__27646,n,c__26774__auto__,size__26775__auto__,b__27647,s__27645__$2,temp__4657__auto__,offset))
,cljs.core.take.call(null,n,cljs.core.drop.call(null,cljs.core.deref.call(null,offset),buf))));
cljs.core.swap_BANG_.call(null,offset,((function (i__27646,token,n,c__26774__auto__,size__26775__auto__,b__27647,s__27645__$2,temp__4657__auto__,offset){
return (function (p1__27639_SHARP_){
return (n + p1__27639_SHARP_);
});})(i__27646,token,n,c__26774__auto__,size__26775__auto__,b__27647,s__27645__$2,temp__4657__auto__,offset))
);

return token;
})());

var G__27648 = (i__27646 + (1));
i__27646 = G__27648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27647),fressian_cljs$uuid$unparse_$_iter__27644.call(null,cljs.core.chunk_rest.call(null,s__27645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27647),null);
}
} else {
var n = cljs.core.first.call(null,s__27645__$2);
return cljs.core.cons.call(null,(function (){var token = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (n,s__27645__$2,temp__4657__auto__,offset){
return (function (p1__27638_SHARP_){
return (((new Uint8Array(cljs.core.int_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27638_SHARP_], null))))[(0)]) + (256)).toString((16)).substr((1));
});})(n,s__27645__$2,temp__4657__auto__,offset))
,cljs.core.take.call(null,n,cljs.core.drop.call(null,cljs.core.deref.call(null,offset),buf))));
cljs.core.swap_BANG_.call(null,offset,((function (token,n,s__27645__$2,temp__4657__auto__,offset){
return (function (p1__27639_SHARP_){
return (n + p1__27639_SHARP_);
});})(token,n,s__27645__$2,temp__4657__auto__,offset))
);

return token;
})(),fressian_cljs$uuid$unparse_$_iter__27644.call(null,cljs.core.rest.call(null,s__27645__$2)));
}
} else {
return null;
}
break;
}
});})(offset))
,null,null));
});})(offset))
;
return iter__26776__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2),(2),(2),(6)], null));
});
fressian_cljs.uuid.parse = (function fressian_cljs$uuid$parse(s){
var buf = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var idx = cljs.core.atom.call(null,(0));
clojure.string.replace.call(null,s.toLowerCase(),/[0-9a-f]{2}/,((function (buf,idx){
return (function (oct){
if((cljs.core.deref.call(null,idx) < (16))){
(buf[cljs.core.deref.call(null,idx)] = parseInt([cljs.core.str("0x"),cljs.core.str(oct)].join('')));

return cljs.core.swap_BANG_.call(null,idx,cljs.core.inc);
} else {
return null;
}
});})(buf,idx))
);

return buf;
});
fressian_cljs.uuid.v4 = (function fressian_cljs$uuid$v4(){
return clojure.string.join.call(null,"-",fressian_cljs.uuid.unparse.call(null,cljs.core.map_indexed.call(null,(function (idx,item){
if(cljs.core._EQ_.call(null,idx,(8))){
return ((item & (63)) | (128));
} else {
return item;
}
}),cljs.core.map_indexed.call(null,(function (idx,item){
if(cljs.core._EQ_.call(null,idx,(6))){
return ((item & (15)) | (64));
} else {
return item;
}
}),fressian_cljs.uuid.rng.call(null)))));
});

//# sourceMappingURL=uuid.js.map