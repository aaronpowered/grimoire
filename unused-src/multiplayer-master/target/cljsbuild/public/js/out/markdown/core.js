// Compiled by ClojureScript 1.7.228 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__28937){
var map__28944 = p__28937;
var map__28944__$1 = ((((!((map__28944 == null)))?((((map__28944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);
var replacement_transformers = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__28944,map__28944__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_28946 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__28947 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_28946,map__28944,map__28944__$1,replacement_transformers,custom_transformers){
return (function (p__28948,transformer){
var vec__28949 = p__28948;
var text = cljs.core.nth.call(null,vec__28949,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__28949,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_28946,map__28944,map__28944__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__26004__auto__ = replacement_transformers;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__28947,(0),null);
var new_state = cljs.core.nth.call(null,vec__28947,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_28946;
}});
;})(map__28944,map__28944__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__27069__auto__ = [];
var len__27062__auto___28952 = arguments.length;
var i__27063__auto___28953 = (0);
while(true){
if((i__27063__auto___28953 < len__27062__auto___28952)){
args__27069__auto__.push((arguments[i__27063__auto___28953]));

var G__28954 = (i__27063__auto___28953 + (1));
i__27063__auto___28953 = G__28954;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq28950){
var G__28951 = cljs.core.first.call(null,seq28950);
var seq28950__$1 = cljs.core.next.call(null,seq28950);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__28951,seq28950__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__28959_28963 = cljs.core.seq.call(null,lines);
var chunk__28960_28964 = null;
var count__28961_28965 = (0);
var i__28962_28966 = (0);
while(true){
if((i__28962_28966 < count__28961_28965)){
var line_28967 = cljs.core._nth.call(null,chunk__28960_28964,i__28962_28966);
markdown.links.parse_reference_link.call(null,line_28967,references);

var G__28968 = seq__28959_28963;
var G__28969 = chunk__28960_28964;
var G__28970 = count__28961_28965;
var G__28971 = (i__28962_28966 + (1));
seq__28959_28963 = G__28968;
chunk__28960_28964 = G__28969;
count__28961_28965 = G__28970;
i__28962_28966 = G__28971;
continue;
} else {
var temp__4657__auto___28972 = cljs.core.seq.call(null,seq__28959_28963);
if(temp__4657__auto___28972){
var seq__28959_28973__$1 = temp__4657__auto___28972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28959_28973__$1)){
var c__26807__auto___28974 = cljs.core.chunk_first.call(null,seq__28959_28973__$1);
var G__28975 = cljs.core.chunk_rest.call(null,seq__28959_28973__$1);
var G__28976 = c__26807__auto___28974;
var G__28977 = cljs.core.count.call(null,c__26807__auto___28974);
var G__28978 = (0);
seq__28959_28963 = G__28975;
chunk__28960_28964 = G__28976;
count__28961_28965 = G__28977;
i__28962_28966 = G__28978;
continue;
} else {
var line_28979 = cljs.core.first.call(null,seq__28959_28973__$1);
markdown.links.parse_reference_link.call(null,line_28979,references);

var G__28980 = cljs.core.next.call(null,seq__28959_28973__$1);
var G__28981 = null;
var G__28982 = (0);
var G__28983 = (0);
seq__28959_28963 = G__28980;
chunk__28960_28964 = G__28981;
count__28961_28965 = G__28982;
i__28962_28966 = G__28983;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__28988_28992 = cljs.core.seq.call(null,lines);
var chunk__28989_28993 = null;
var count__28990_28994 = (0);
var i__28991_28995 = (0);
while(true){
if((i__28991_28995 < count__28990_28994)){
var line_28996 = cljs.core._nth.call(null,chunk__28989_28993,i__28991_28995);
markdown.links.parse_footnote_link.call(null,line_28996,footnotes);

var G__28997 = seq__28988_28992;
var G__28998 = chunk__28989_28993;
var G__28999 = count__28990_28994;
var G__29000 = (i__28991_28995 + (1));
seq__28988_28992 = G__28997;
chunk__28989_28993 = G__28998;
count__28990_28994 = G__28999;
i__28991_28995 = G__29000;
continue;
} else {
var temp__4657__auto___29001 = cljs.core.seq.call(null,seq__28988_28992);
if(temp__4657__auto___29001){
var seq__28988_29002__$1 = temp__4657__auto___29001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28988_29002__$1)){
var c__26807__auto___29003 = cljs.core.chunk_first.call(null,seq__28988_29002__$1);
var G__29004 = cljs.core.chunk_rest.call(null,seq__28988_29002__$1);
var G__29005 = c__26807__auto___29003;
var G__29006 = cljs.core.count.call(null,c__26807__auto___29003);
var G__29007 = (0);
seq__28988_28992 = G__29004;
chunk__28989_28993 = G__29005;
count__28990_28994 = G__29006;
i__28991_28995 = G__29007;
continue;
} else {
var line_29008 = cljs.core.first.call(null,seq__28988_29002__$1);
markdown.links.parse_footnote_link.call(null,line_29008,footnotes);

var G__29009 = cljs.core.next.call(null,seq__28988_29002__$1);
var G__29010 = null;
var G__29011 = (0);
var G__29012 = (0);
seq__28988_28992 = G__29009;
chunk__28989_28993 = G__29010;
count__28990_28994 = G__29011;
i__28991_28995 = G__29012;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__29015 = cljs.core.split_with.call(null,(function (p1__29013_SHARP_){
return cljs.core.not_empty.call(null,p1__29013_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__29015,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__29015,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_29023 = markdown.common._STAR_substring_STAR_;
var formatter29024 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_29023,formatter29024){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_29023,formatter29024))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__29025 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__29025,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__29025,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__29027_29030 = lines__$1;
var vec__29028_29031 = G__29027_29030;
var line_29032 = cljs.core.nth.call(null,vec__29028_29031,(0),null);
var more_29033 = cljs.core.nthnext.call(null,vec__29028_29031,(1));
var state_29034 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__29027_29035__$1 = G__29027_29030;
var state_29036__$1 = state_29034;
while(true){
var vec__29029_29037 = G__29027_29035__$1;
var line_29038__$1 = cljs.core.nth.call(null,vec__29029_29037,(0),null);
var more_29039__$1 = cljs.core.nthnext.call(null,vec__29029_29037,(1));
var state_29040__$2 = state_29036__$1;
var state_29041__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_29040__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_29040__$2),cljs.core.first.call(null,more_29039__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_29040__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_29040__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_29039__$1))){
var G__29042 = more_29039__$1;
var G__29043 = cljs.core.assoc.call(null,transformer.call(null,html,line_29038__$1,cljs.core.first.call(null,more_29039__$1),state_29041__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_29038__$1));
G__29027_29035__$1 = G__29042;
state_29036__$1 = G__29043;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_29041__$3))),line_29038__$1,"",cljs.core.assoc.call(null,state_29041__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter29024;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_29023;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__27069__auto__ = [];
var len__27062__auto___29046 = arguments.length;
var i__27063__auto___29047 = (0);
while(true){
if((i__27063__auto___29047 < len__27062__auto___29046)){
args__27069__auto__.push((arguments[i__27063__auto___29047]));

var G__29048 = (i__27063__auto___29047 + (1));
i__27063__auto___29047 = G__29048;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq29044){
var G__29045 = cljs.core.first.call(null,seq29044);
var seq29044__$1 = cljs.core.next.call(null,seq29044);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__29045,seq29044__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__27069__auto__ = [];
var len__27062__auto___29051 = arguments.length;
var i__27063__auto___29052 = (0);
while(true){
if((i__27063__auto___29052 < len__27062__auto___29051)){
args__27069__auto__.push((arguments[i__27063__auto___29052]));

var G__29053 = (i__27063__auto___29052 + (1));
i__27063__auto___29052 = G__29053;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq29049){
var G__29050 = cljs.core.first.call(null,seq29049);
var seq29049__$1 = cljs.core.next.call(null,seq29049);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__29050,seq29049__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__27069__auto__ = [];
var len__27062__auto___29055 = arguments.length;
var i__27063__auto___29056 = (0);
while(true){
if((i__27063__auto___29056 < len__27062__auto___29055)){
args__27069__auto__.push((arguments[i__27063__auto___29056]));

var G__29057 = (i__27063__auto___29056 + (1));
i__27063__auto___29056 = G__29057;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq29054){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29054));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__27069__auto__ = [];
var len__27062__auto___29059 = arguments.length;
var i__27063__auto___29060 = (0);
while(true){
if((i__27063__auto___29060 < len__27062__auto___29059)){
args__27069__auto__.push((arguments[i__27063__auto___29060]));

var G__29061 = (i__27063__auto___29060 + (1));
i__27063__auto___29060 = G__29061;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq29058){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29058));
});

//# sourceMappingURL=core.js.map