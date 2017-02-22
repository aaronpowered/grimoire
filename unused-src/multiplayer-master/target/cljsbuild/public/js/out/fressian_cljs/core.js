// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fressian_cljs.reader');
goog.require('fressian_cljs.writer');
goog.require('fressian_cljs.adler32');
goog.require('fressian_cljs.defs');
fressian_cljs.core.load_string = (function fressian_cljs$core$load_string(s){
throw (new Error("load-string not supported."));
});
/**
 * Return the map constructor for a record
 */
fressian_cljs.core.record_map_constructor_name = (function fressian_cljs$core$record_map_constructor_name(rname){
var comps = clojure.string.split.call(null,[cljs.core.str(rname)].join(''),/\./);
return [cljs.core.str(clojure.string.join.call(null,".",cljs.core.map.call(null,((function (comps){
return (function (p1__28035_SHARP_){
return clojure.string.replace.call(null,p1__28035_SHARP_,"_","-");
});})(comps))
,cljs.core.butlast.call(null,comps)))),cljs.core.str("/map->"),cljs.core.str(cljs.core.last.call(null,comps))].join('');
});
fressian_cljs.core.cljs_read_handler = cljs.core.PersistentHashMap.fromArrays(["map","vec","ratio","record","key","char","bigint","byte","sym"],[(function (reader,tag,component_count){
var kvs = fressian_cljs.reader.read_object.call(null,reader);
return cljs.core.apply.call(null,cljs.core.hash_map,kvs);
}),(function (reader,tag,component_count){
return cljs.core.vec.call(null,fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return (parseInt(fressian_cljs.reader.read_object.call(null,reader)) / parseInt(fressian_cljs.reader.read_object.call(null,reader)));
}),(function (reader,tag,component_count){
var rname = fressian_cljs.reader.read_object.call(null,reader);
var rmap = fressian_cljs.reader.read_object.call(null,reader);
var temp__4655__auto__ = fressian_cljs.core.load_string.call(null,fressian_cljs.core.record_map_constructor_name.call(null,rname));
if(cljs.core.truth_(temp__4655__auto__)){
var rcons = temp__4655__auto__;
return rcons.call(null,rmap);
} else {
return (new fressian_cljs.defs.TaggedObject("record",cljs.core.into_array.call(null,Object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rname,rmap], null)),null,null,null,null));
}
}),(function (reader,tag,component_count){
return cljs.core.keyword.call(null,fressian_cljs.reader.read_object.call(null,reader),fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return String.fromCharCode(fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return fressian_cljs.reader.read_object.call(null,reader);
}),(function (reader,tag,component_count){
return fressian_cljs.reader.read_object.call(null,reader);
}),(function (reader,tag,component_count){
return cljs.core.symbol.call(null,fressian_cljs.reader.read_object.call(null,reader),fressian_cljs.reader.read_object.call(null,reader));
})]);
fressian_cljs.core.cljs_write_handler = cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentVector,new cljs.core.PersistentArrayMap(null, 1, ["vec",(function (wtr,v){
fressian_cljs.writer.write_tag.call(null,wtr,"vec",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.seq.call(null,v));
})], null)], true, false);
if(typeof fressian_cljs.core.create_reader !== 'undefined'){
} else {
fressian_cljs.core.create_reader = (function (){var method_table__26917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26921__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fressian-cljs.core","create-reader"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26921__auto__,method_table__26917__auto__,prefer_table__26918__auto__,method_cache__26919__auto__,cached_hierarchy__26920__auto__));
})();
}
cljs.core._add_method.call(null,fressian_cljs.core.create_reader,ArrayBuffer,(function() { 
var G__28039__delegate = function (buf,p__28036){
var map__28037 = p__28036;
var map__28037__$1 = ((((!((map__28037 == null)))?((((map__28037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var handlers = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.atom.call(null,(new fressian_cljs.reader.FressianReader(buf,(0),(function (){var or__26004__auto__ = handlers;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return fressian_cljs.core.cljs_read_handler;
}
})(),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,null)));
};
var G__28039 = function (buf,var_args){
var p__28036 = null;
if (arguments.length > 1) {
var G__28040__i = 0, G__28040__a = new Array(arguments.length -  1);
while (G__28040__i < G__28040__a.length) {G__28040__a[G__28040__i] = arguments[G__28040__i + 1]; ++G__28040__i;}
  p__28036 = new cljs.core.IndexedSeq(G__28040__a,0);
} 
return G__28039__delegate.call(this,buf,p__28036);};
G__28039.cljs$lang$maxFixedArity = 1;
G__28039.cljs$lang$applyTo = (function (arglist__28041){
var buf = cljs.core.first(arglist__28041);
var p__28036 = cljs.core.rest(arglist__28041);
return G__28039__delegate(buf,p__28036);
});
G__28039.cljs$core$IFn$_invoke$arity$variadic = G__28039__delegate;
return G__28039;
})()
);
cljs.core._add_method.call(null,fressian_cljs.core.create_reader,Blob,(function() { 
var G__28045__delegate = function (buf,p__28042){
var map__28043 = p__28042;
var map__28043__$1 = ((((!((map__28043 == null)))?((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var handlers = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
throw "Blob FressianReader has been implemented yet.";
};
var G__28045 = function (buf,var_args){
var p__28042 = null;
if (arguments.length > 1) {
var G__28046__i = 0, G__28046__a = new Array(arguments.length -  1);
while (G__28046__i < G__28046__a.length) {G__28046__a[G__28046__i] = arguments[G__28046__i + 1]; ++G__28046__i;}
  p__28042 = new cljs.core.IndexedSeq(G__28046__a,0);
} 
return G__28045__delegate.call(this,buf,p__28042);};
G__28045.cljs$lang$maxFixedArity = 1;
G__28045.cljs$lang$applyTo = (function (arglist__28047){
var buf = cljs.core.first(arglist__28047);
var p__28042 = cljs.core.rest(arglist__28047);
return G__28045__delegate(buf,p__28042);
});
G__28045.cljs$core$IFn$_invoke$arity$variadic = G__28045__delegate;
return G__28045;
})()
);
fressian_cljs.core.read = (function fressian_cljs$core$read(var_args){
var args__27069__auto__ = [];
var len__27062__auto___28050 = arguments.length;
var i__27063__auto___28051 = (0);
while(true){
if((i__27063__auto___28051 < len__27062__auto___28050)){
args__27069__auto__.push((arguments[i__27063__auto___28051]));

var G__28052 = (i__27063__auto___28051 + (1));
i__27063__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return fressian_cljs.core.read.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

fressian_cljs.core.read.cljs$core$IFn$_invoke$arity$variadic = (function (readable,options){
return fressian_cljs.reader.read_object.call(null,cljs.core.apply.call(null,fressian_cljs.core.create_reader,readable,options));
});

fressian_cljs.core.read.cljs$lang$maxFixedArity = (1);

fressian_cljs.core.read.cljs$lang$applyTo = (function (seq28048){
var G__28049 = cljs.core.first.call(null,seq28048);
var seq28048__$1 = cljs.core.next.call(null,seq28048);
return fressian_cljs.core.read.cljs$core$IFn$_invoke$arity$variadic(G__28049,seq28048__$1);
});
fressian_cljs.core.create_writer = (function fressian_cljs$core$create_writer(var_args){
var args__27069__auto__ = [];
var len__27062__auto___28057 = arguments.length;
var i__27063__auto___28058 = (0);
while(true){
if((i__27063__auto___28058 < len__27062__auto___28057)){
args__27069__auto__.push((arguments[i__27063__auto___28058]));

var G__28059 = (i__27063__auto___28058 + (1));
i__27063__auto___28058 = G__28059;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((0) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((0)),(0))):null);
return fressian_cljs.core.create_writer.cljs$core$IFn$_invoke$arity$variadic(argseq__27070__auto__);
});

fressian_cljs.core.create_writer.cljs$core$IFn$_invoke$arity$variadic = (function (p__28054){
var map__28055 = p__28054;
var map__28055__$1 = ((((!((map__28055 == null)))?((((map__28055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var handlers = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var buffer = (new ArrayBuffer((65536)));
return cljs.core.atom.call(null,(new fressian_cljs.writer.FressianWriter(buffer,(0),(function (){var or__26004__auto__ = handlers;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return fressian_cljs.core.cljs_write_handler;
}
})(),fressian_cljs.adler32.make_adler32.call(null),fressian_cljs.defs.create_interleaved_index_hop_map.call(null,(16)),fressian_cljs.defs.create_interleaved_index_hop_map.call(null,(16)),null,null,null)));
});

fressian_cljs.core.create_writer.cljs$lang$maxFixedArity = (0);

fressian_cljs.core.create_writer.cljs$lang$applyTo = (function (seq28053){
return fressian_cljs.core.create_writer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28053));
});
fressian_cljs.core.write = (function fressian_cljs$core$write(var_args){
var args__27069__auto__ = [];
var len__27062__auto___28064 = arguments.length;
var i__27063__auto___28065 = (0);
while(true){
if((i__27063__auto___28065 < len__27062__auto___28064)){
args__27069__auto__.push((arguments[i__27063__auto___28065]));

var G__28066 = (i__27063__auto___28065 + (1));
i__27063__auto___28065 = G__28066;
continue;
} else {
}
break;
}

var argseq__27070__auto__ = ((((1) < args__27069__auto__.length))?(new cljs.core.IndexedSeq(args__27069__auto__.slice((1)),(0))):null);
return fressian_cljs.core.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);
});

fressian_cljs.core.write.cljs$core$IFn$_invoke$arity$variadic = (function (obj,options){
var map__28062 = (cljs.core.truth_(options)?cljs.core.apply.call(null,cljs.core.hash_map,options):null);
var map__28062__$1 = ((((!((map__28062 == null)))?((((map__28062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28062):map__28062);
var footer_QMARK_ = cljs.core.get.call(null,map__28062__$1,new cljs.core.Keyword(null,"footer?","footer?",-986176238));
var writer = cljs.core.apply.call(null,fressian_cljs.core.create_writer,options);
fressian_cljs.writer.write_object.call(null,writer,obj);

if(cljs.core.truth_(footer_QMARK_)){
fressian_cljs.writer.write_footer.call(null,writer);
} else {
}

return (new Int8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,writer)))).subarray((0),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,writer)));
});

fressian_cljs.core.write.cljs$lang$maxFixedArity = (1);

fressian_cljs.core.write.cljs$lang$applyTo = (function (seq28060){
var G__28061 = cljs.core.first.call(null,seq28060);
var seq28060__$1 = cljs.core.next.call(null,seq28060);
return fressian_cljs.core.write.cljs$core$IFn$_invoke$arity$variadic(G__28061,seq28060__$1);
});

//# sourceMappingURL=core.js.map