// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__42645__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__42645__auto__){
return or__42645__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__42645__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51750_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51750_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51755 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51756 = null;
var count__51757 = (0);
var i__51758 = (0);
while(true){
if((i__51758 < count__51757)){
var n = cljs.core._nth.call(null,chunk__51756,i__51758);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51759 = seq__51755;
var G__51760 = chunk__51756;
var G__51761 = count__51757;
var G__51762 = (i__51758 + (1));
seq__51755 = G__51759;
chunk__51756 = G__51760;
count__51757 = G__51761;
i__51758 = G__51762;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51755);
if(temp__4657__auto__){
var seq__51755__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51755__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__51755__$1);
var G__51763 = cljs.core.chunk_rest.call(null,seq__51755__$1);
var G__51764 = c__43456__auto__;
var G__51765 = cljs.core.count.call(null,c__43456__auto__);
var G__51766 = (0);
seq__51755 = G__51763;
chunk__51756 = G__51764;
count__51757 = G__51765;
i__51758 = G__51766;
continue;
} else {
var n = cljs.core.first.call(null,seq__51755__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51767 = cljs.core.next.call(null,seq__51755__$1);
var G__51768 = null;
var G__51769 = (0);
var G__51770 = (0);
seq__51755 = G__51767;
chunk__51756 = G__51768;
count__51757 = G__51769;
i__51758 = G__51770;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51821_51832 = cljs.core.seq.call(null,deps);
var chunk__51822_51833 = null;
var count__51823_51834 = (0);
var i__51824_51835 = (0);
while(true){
if((i__51824_51835 < count__51823_51834)){
var dep_51836 = cljs.core._nth.call(null,chunk__51822_51833,i__51824_51835);
topo_sort_helper_STAR_.call(null,dep_51836,(depth + (1)),state);

var G__51837 = seq__51821_51832;
var G__51838 = chunk__51822_51833;
var G__51839 = count__51823_51834;
var G__51840 = (i__51824_51835 + (1));
seq__51821_51832 = G__51837;
chunk__51822_51833 = G__51838;
count__51823_51834 = G__51839;
i__51824_51835 = G__51840;
continue;
} else {
var temp__4657__auto___51841 = cljs.core.seq.call(null,seq__51821_51832);
if(temp__4657__auto___51841){
var seq__51821_51842__$1 = temp__4657__auto___51841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51821_51842__$1)){
var c__43456__auto___51843 = cljs.core.chunk_first.call(null,seq__51821_51842__$1);
var G__51844 = cljs.core.chunk_rest.call(null,seq__51821_51842__$1);
var G__51845 = c__43456__auto___51843;
var G__51846 = cljs.core.count.call(null,c__43456__auto___51843);
var G__51847 = (0);
seq__51821_51832 = G__51844;
chunk__51822_51833 = G__51845;
count__51823_51834 = G__51846;
i__51824_51835 = G__51847;
continue;
} else {
var dep_51848 = cljs.core.first.call(null,seq__51821_51842__$1);
topo_sort_helper_STAR_.call(null,dep_51848,(depth + (1)),state);

var G__51849 = cljs.core.next.call(null,seq__51821_51842__$1);
var G__51850 = null;
var G__51851 = (0);
var G__51852 = (0);
seq__51821_51832 = G__51849;
chunk__51822_51833 = G__51850;
count__51823_51834 = G__51851;
i__51824_51835 = G__51852;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51825){
var vec__51829 = p__51825;
var seq__51830 = cljs.core.seq.call(null,vec__51829);
var first__51831 = cljs.core.first.call(null,seq__51830);
var seq__51830__$1 = cljs.core.next.call(null,seq__51830);
var x = first__51831;
var xs = seq__51830__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51829,seq__51830,first__51831,seq__51830__$1,x,xs,get_deps__$1){
return (function (p1__51771_SHARP_){
return clojure.set.difference.call(null,p1__51771_SHARP_,x);
});})(vec__51829,seq__51830,first__51831,seq__51830__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51865 = cljs.core.seq.call(null,provides);
var chunk__51866 = null;
var count__51867 = (0);
var i__51868 = (0);
while(true){
if((i__51868 < count__51867)){
var prov = cljs.core._nth.call(null,chunk__51866,i__51868);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51869_51877 = cljs.core.seq.call(null,requires);
var chunk__51870_51878 = null;
var count__51871_51879 = (0);
var i__51872_51880 = (0);
while(true){
if((i__51872_51880 < count__51871_51879)){
var req_51881 = cljs.core._nth.call(null,chunk__51870_51878,i__51872_51880);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51881,prov);

var G__51882 = seq__51869_51877;
var G__51883 = chunk__51870_51878;
var G__51884 = count__51871_51879;
var G__51885 = (i__51872_51880 + (1));
seq__51869_51877 = G__51882;
chunk__51870_51878 = G__51883;
count__51871_51879 = G__51884;
i__51872_51880 = G__51885;
continue;
} else {
var temp__4657__auto___51886 = cljs.core.seq.call(null,seq__51869_51877);
if(temp__4657__auto___51886){
var seq__51869_51887__$1 = temp__4657__auto___51886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51869_51887__$1)){
var c__43456__auto___51888 = cljs.core.chunk_first.call(null,seq__51869_51887__$1);
var G__51889 = cljs.core.chunk_rest.call(null,seq__51869_51887__$1);
var G__51890 = c__43456__auto___51888;
var G__51891 = cljs.core.count.call(null,c__43456__auto___51888);
var G__51892 = (0);
seq__51869_51877 = G__51889;
chunk__51870_51878 = G__51890;
count__51871_51879 = G__51891;
i__51872_51880 = G__51892;
continue;
} else {
var req_51893 = cljs.core.first.call(null,seq__51869_51887__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51893,prov);

var G__51894 = cljs.core.next.call(null,seq__51869_51887__$1);
var G__51895 = null;
var G__51896 = (0);
var G__51897 = (0);
seq__51869_51877 = G__51894;
chunk__51870_51878 = G__51895;
count__51871_51879 = G__51896;
i__51872_51880 = G__51897;
continue;
}
} else {
}
}
break;
}

var G__51898 = seq__51865;
var G__51899 = chunk__51866;
var G__51900 = count__51867;
var G__51901 = (i__51868 + (1));
seq__51865 = G__51898;
chunk__51866 = G__51899;
count__51867 = G__51900;
i__51868 = G__51901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51865);
if(temp__4657__auto__){
var seq__51865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51865__$1)){
var c__43456__auto__ = cljs.core.chunk_first.call(null,seq__51865__$1);
var G__51902 = cljs.core.chunk_rest.call(null,seq__51865__$1);
var G__51903 = c__43456__auto__;
var G__51904 = cljs.core.count.call(null,c__43456__auto__);
var G__51905 = (0);
seq__51865 = G__51902;
chunk__51866 = G__51903;
count__51867 = G__51904;
i__51868 = G__51905;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51865__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51873_51906 = cljs.core.seq.call(null,requires);
var chunk__51874_51907 = null;
var count__51875_51908 = (0);
var i__51876_51909 = (0);
while(true){
if((i__51876_51909 < count__51875_51908)){
var req_51910 = cljs.core._nth.call(null,chunk__51874_51907,i__51876_51909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51910,prov);

var G__51911 = seq__51873_51906;
var G__51912 = chunk__51874_51907;
var G__51913 = count__51875_51908;
var G__51914 = (i__51876_51909 + (1));
seq__51873_51906 = G__51911;
chunk__51874_51907 = G__51912;
count__51875_51908 = G__51913;
i__51876_51909 = G__51914;
continue;
} else {
var temp__4657__auto___51915__$1 = cljs.core.seq.call(null,seq__51873_51906);
if(temp__4657__auto___51915__$1){
var seq__51873_51916__$1 = temp__4657__auto___51915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51873_51916__$1)){
var c__43456__auto___51917 = cljs.core.chunk_first.call(null,seq__51873_51916__$1);
var G__51918 = cljs.core.chunk_rest.call(null,seq__51873_51916__$1);
var G__51919 = c__43456__auto___51917;
var G__51920 = cljs.core.count.call(null,c__43456__auto___51917);
var G__51921 = (0);
seq__51873_51906 = G__51918;
chunk__51874_51907 = G__51919;
count__51875_51908 = G__51920;
i__51876_51909 = G__51921;
continue;
} else {
var req_51922 = cljs.core.first.call(null,seq__51873_51916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51922,prov);

var G__51923 = cljs.core.next.call(null,seq__51873_51916__$1);
var G__51924 = null;
var G__51925 = (0);
var G__51926 = (0);
seq__51873_51906 = G__51923;
chunk__51874_51907 = G__51924;
count__51875_51908 = G__51925;
i__51876_51909 = G__51926;
continue;
}
} else {
}
}
break;
}

var G__51927 = cljs.core.next.call(null,seq__51865__$1);
var G__51928 = null;
var G__51929 = (0);
var G__51930 = (0);
seq__51865 = G__51927;
chunk__51866 = G__51928;
count__51867 = G__51929;
i__51868 = G__51930;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51935_51939 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51936_51940 = null;
var count__51937_51941 = (0);
var i__51938_51942 = (0);
while(true){
if((i__51938_51942 < count__51937_51941)){
var ns_51943 = cljs.core._nth.call(null,chunk__51936_51940,i__51938_51942);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51943);

var G__51944 = seq__51935_51939;
var G__51945 = chunk__51936_51940;
var G__51946 = count__51937_51941;
var G__51947 = (i__51938_51942 + (1));
seq__51935_51939 = G__51944;
chunk__51936_51940 = G__51945;
count__51937_51941 = G__51946;
i__51938_51942 = G__51947;
continue;
} else {
var temp__4657__auto___51948 = cljs.core.seq.call(null,seq__51935_51939);
if(temp__4657__auto___51948){
var seq__51935_51949__$1 = temp__4657__auto___51948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51935_51949__$1)){
var c__43456__auto___51950 = cljs.core.chunk_first.call(null,seq__51935_51949__$1);
var G__51951 = cljs.core.chunk_rest.call(null,seq__51935_51949__$1);
var G__51952 = c__43456__auto___51950;
var G__51953 = cljs.core.count.call(null,c__43456__auto___51950);
var G__51954 = (0);
seq__51935_51939 = G__51951;
chunk__51936_51940 = G__51952;
count__51937_51941 = G__51953;
i__51938_51942 = G__51954;
continue;
} else {
var ns_51955 = cljs.core.first.call(null,seq__51935_51949__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51955);

var G__51956 = cljs.core.next.call(null,seq__51935_51949__$1);
var G__51957 = null;
var G__51958 = (0);
var G__51959 = (0);
seq__51935_51939 = G__51956;
chunk__51936_51940 = G__51957;
count__51937_51941 = G__51958;
i__51938_51942 = G__51959;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__42645__auto__ = goog.require__;
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51960__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51961__i = 0, G__51961__a = new Array(arguments.length -  0);
while (G__51961__i < G__51961__a.length) {G__51961__a[G__51961__i] = arguments[G__51961__i + 0]; ++G__51961__i;}
  args = new cljs.core.IndexedSeq(G__51961__a,0);
} 
return G__51960__delegate.call(this,args);};
G__51960.cljs$lang$maxFixedArity = 0;
G__51960.cljs$lang$applyTo = (function (arglist__51962){
var args = cljs.core.seq(arglist__51962);
return G__51960__delegate(args);
});
G__51960.cljs$core$IFn$_invoke$arity$variadic = G__51960__delegate;
return G__51960;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51964 = cljs.core._EQ_;
var expr__51965 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51964.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51965))){
var path_parts = ((function (pred__51964,expr__51965){
return (function (p1__51963_SHARP_){
return clojure.string.split.call(null,p1__51963_SHARP_,/[\/\\]/);
});})(pred__51964,expr__51965))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51964,expr__51965){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51967){if((e51967 instanceof Error)){
var e = e51967;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51967;

}
}})());
});
;})(path_parts,sep,root,pred__51964,expr__51965))
} else {
if(cljs.core.truth_(pred__51964.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51965))){
return ((function (pred__51964,expr__51965){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51964,expr__51965){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51964,expr__51965))
);

return deferred.addErrback(((function (deferred,pred__51964,expr__51965){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51964,expr__51965))
);
});
;})(pred__51964,expr__51965))
} else {
return ((function (pred__51964,expr__51965){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51964,expr__51965))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51968,callback){
var map__51971 = p__51968;
var map__51971__$1 = ((((!((map__51971 == null)))?((((map__51971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51971):map__51971);
var file_msg = map__51971__$1;
var request_url = cljs.core.get.call(null,map__51971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51971,map__51971__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51971,map__51971__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__){
return (function (state_51995){
var state_val_51996 = (state_51995[(1)]);
if((state_val_51996 === (7))){
var inst_51991 = (state_51995[(2)]);
var state_51995__$1 = state_51995;
var statearr_51997_52017 = state_51995__$1;
(statearr_51997_52017[(2)] = inst_51991);

(statearr_51997_52017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (1))){
var state_51995__$1 = state_51995;
var statearr_51998_52018 = state_51995__$1;
(statearr_51998_52018[(2)] = null);

(statearr_51998_52018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (4))){
var inst_51975 = (state_51995[(7)]);
var inst_51975__$1 = (state_51995[(2)]);
var state_51995__$1 = (function (){var statearr_51999 = state_51995;
(statearr_51999[(7)] = inst_51975__$1);

return statearr_51999;
})();
if(cljs.core.truth_(inst_51975__$1)){
var statearr_52000_52019 = state_51995__$1;
(statearr_52000_52019[(1)] = (5));

} else {
var statearr_52001_52020 = state_51995__$1;
(statearr_52001_52020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (6))){
var state_51995__$1 = state_51995;
var statearr_52002_52021 = state_51995__$1;
(statearr_52002_52021[(2)] = null);

(statearr_52002_52021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (3))){
var inst_51993 = (state_51995[(2)]);
var state_51995__$1 = state_51995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51995__$1,inst_51993);
} else {
if((state_val_51996 === (2))){
var state_51995__$1 = state_51995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51995__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51996 === (11))){
var inst_51987 = (state_51995[(2)]);
var state_51995__$1 = (function (){var statearr_52003 = state_51995;
(statearr_52003[(8)] = inst_51987);

return statearr_52003;
})();
var statearr_52004_52022 = state_51995__$1;
(statearr_52004_52022[(2)] = null);

(statearr_52004_52022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (9))){
var inst_51979 = (state_51995[(9)]);
var inst_51981 = (state_51995[(10)]);
var inst_51983 = inst_51981.call(null,inst_51979);
var state_51995__$1 = state_51995;
var statearr_52005_52023 = state_51995__$1;
(statearr_52005_52023[(2)] = inst_51983);

(statearr_52005_52023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (5))){
var inst_51975 = (state_51995[(7)]);
var inst_51977 = figwheel.client.file_reloading.blocking_load.call(null,inst_51975);
var state_51995__$1 = state_51995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51995__$1,(8),inst_51977);
} else {
if((state_val_51996 === (10))){
var inst_51979 = (state_51995[(9)]);
var inst_51985 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51979);
var state_51995__$1 = state_51995;
var statearr_52006_52024 = state_51995__$1;
(statearr_52006_52024[(2)] = inst_51985);

(statearr_52006_52024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51996 === (8))){
var inst_51981 = (state_51995[(10)]);
var inst_51975 = (state_51995[(7)]);
var inst_51979 = (state_51995[(2)]);
var inst_51980 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51981__$1 = cljs.core.get.call(null,inst_51980,inst_51975);
var state_51995__$1 = (function (){var statearr_52007 = state_51995;
(statearr_52007[(9)] = inst_51979);

(statearr_52007[(10)] = inst_51981__$1);

return statearr_52007;
})();
if(cljs.core.truth_(inst_51981__$1)){
var statearr_52008_52025 = state_51995__$1;
(statearr_52008_52025[(1)] = (9));

} else {
var statearr_52009_52026 = state_51995__$1;
(statearr_52009_52026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44817__auto__))
;
return ((function (switch__44705__auto__,c__44817__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44706__auto__ = null;
var figwheel$client$file_reloading$state_machine__44706__auto____0 = (function (){
var statearr_52013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52013[(0)] = figwheel$client$file_reloading$state_machine__44706__auto__);

(statearr_52013[(1)] = (1));

return statearr_52013;
});
var figwheel$client$file_reloading$state_machine__44706__auto____1 = (function (state_51995){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_51995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e52014){if((e52014 instanceof Object)){
var ex__44709__auto__ = e52014;
var statearr_52015_52027 = state_51995;
(statearr_52015_52027[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52028 = state_51995;
state_51995 = G__52028;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44706__auto__ = function(state_51995){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44706__auto____1.call(this,state_51995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44706__auto____0;
figwheel$client$file_reloading$state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44706__auto____1;
return figwheel$client$file_reloading$state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__))
})();
var state__44819__auto__ = (function (){var statearr_52016 = f__44818__auto__.call(null);
(statearr_52016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_52016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__))
);

return c__44817__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52029,callback){
var map__52032 = p__52029;
var map__52032__$1 = ((((!((map__52032 == null)))?((((map__52032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52032):map__52032);
var file_msg = map__52032__$1;
var namespace = cljs.core.get.call(null,map__52032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52032,map__52032__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52032,map__52032__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52034){
var map__52037 = p__52034;
var map__52037__$1 = ((((!((map__52037 == null)))?((((map__52037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52037):map__52037);
var file_msg = map__52037__$1;
var namespace = cljs.core.get.call(null,map__52037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__42633__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__42633__auto__){
var or__42645__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__42645__auto__)){
return or__42645__auto__;
} else {
var or__42645__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__42645__auto____$1)){
return or__42645__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__42633__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52039,callback){
var map__52042 = p__52039;
var map__52042__$1 = ((((!((map__52042 == null)))?((((map__52042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52042):map__52042);
var file_msg = map__52042__$1;
var request_url = cljs.core.get.call(null,map__52042__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44817__auto___52146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto___52146,out){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto___52146,out){
return (function (state_52128){
var state_val_52129 = (state_52128[(1)]);
if((state_val_52129 === (1))){
var inst_52102 = cljs.core.seq.call(null,files);
var inst_52103 = cljs.core.first.call(null,inst_52102);
var inst_52104 = cljs.core.next.call(null,inst_52102);
var inst_52105 = files;
var state_52128__$1 = (function (){var statearr_52130 = state_52128;
(statearr_52130[(7)] = inst_52103);

(statearr_52130[(8)] = inst_52104);

(statearr_52130[(9)] = inst_52105);

return statearr_52130;
})();
var statearr_52131_52147 = state_52128__$1;
(statearr_52131_52147[(2)] = null);

(statearr_52131_52147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (2))){
var inst_52111 = (state_52128[(10)]);
var inst_52105 = (state_52128[(9)]);
var inst_52110 = cljs.core.seq.call(null,inst_52105);
var inst_52111__$1 = cljs.core.first.call(null,inst_52110);
var inst_52112 = cljs.core.next.call(null,inst_52110);
var inst_52113 = (inst_52111__$1 == null);
var inst_52114 = cljs.core.not.call(null,inst_52113);
var state_52128__$1 = (function (){var statearr_52132 = state_52128;
(statearr_52132[(10)] = inst_52111__$1);

(statearr_52132[(11)] = inst_52112);

return statearr_52132;
})();
if(inst_52114){
var statearr_52133_52148 = state_52128__$1;
(statearr_52133_52148[(1)] = (4));

} else {
var statearr_52134_52149 = state_52128__$1;
(statearr_52134_52149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (3))){
var inst_52126 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52128__$1,inst_52126);
} else {
if((state_val_52129 === (4))){
var inst_52111 = (state_52128[(10)]);
var inst_52116 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52111);
var state_52128__$1 = state_52128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52128__$1,(7),inst_52116);
} else {
if((state_val_52129 === (5))){
var inst_52122 = cljs.core.async.close_BANG_.call(null,out);
var state_52128__$1 = state_52128;
var statearr_52135_52150 = state_52128__$1;
(statearr_52135_52150[(2)] = inst_52122);

(statearr_52135_52150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (6))){
var inst_52124 = (state_52128[(2)]);
var state_52128__$1 = state_52128;
var statearr_52136_52151 = state_52128__$1;
(statearr_52136_52151[(2)] = inst_52124);

(statearr_52136_52151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52129 === (7))){
var inst_52112 = (state_52128[(11)]);
var inst_52118 = (state_52128[(2)]);
var inst_52119 = cljs.core.async.put_BANG_.call(null,out,inst_52118);
var inst_52105 = inst_52112;
var state_52128__$1 = (function (){var statearr_52137 = state_52128;
(statearr_52137[(12)] = inst_52119);

(statearr_52137[(9)] = inst_52105);

return statearr_52137;
})();
var statearr_52138_52152 = state_52128__$1;
(statearr_52138_52152[(2)] = null);

(statearr_52138_52152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44817__auto___52146,out))
;
return ((function (switch__44705__auto__,c__44817__auto___52146,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____0 = (function (){
var statearr_52142 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52142[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__);

(statearr_52142[(1)] = (1));

return statearr_52142;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____1 = (function (state_52128){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_52128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e52143){if((e52143 instanceof Object)){
var ex__44709__auto__ = e52143;
var statearr_52144_52153 = state_52128;
(statearr_52144_52153[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52154 = state_52128;
state_52128 = G__52154;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__ = function(state_52128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____1.call(this,state_52128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto___52146,out))
})();
var state__44819__auto__ = (function (){var statearr_52145 = f__44818__auto__.call(null);
(statearr_52145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto___52146);

return statearr_52145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto___52146,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52155,opts){
var map__52159 = p__52155;
var map__52159__$1 = ((((!((map__52159 == null)))?((((map__52159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52159):map__52159);
var eval_body__$1 = cljs.core.get.call(null,map__52159__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__42633__auto__ = eval_body__$1;
if(cljs.core.truth_(and__42633__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__42633__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52161){var e = e52161;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52162_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52162_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__52171){
var vec__52172 = p__52171;
var k = cljs.core.nth.call(null,vec__52172,(0),null);
var v = cljs.core.nth.call(null,vec__52172,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52175){
var vec__52176 = p__52175;
var k = cljs.core.nth.call(null,vec__52176,(0),null);
var v = cljs.core.nth.call(null,vec__52176,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52182,p__52183){
var map__52430 = p__52182;
var map__52430__$1 = ((((!((map__52430 == null)))?((((map__52430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52430):map__52430);
var opts = map__52430__$1;
var before_jsload = cljs.core.get.call(null,map__52430__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52430__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52430__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52431 = p__52183;
var map__52431__$1 = ((((!((map__52431 == null)))?((((map__52431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52431):map__52431);
var msg = map__52431__$1;
var files = cljs.core.get.call(null,map__52431__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52431__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52431__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44817__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44818__auto__ = (function (){var switch__44705__auto__ = ((function (c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52584){
var state_val_52585 = (state_52584[(1)]);
if((state_val_52585 === (7))){
var inst_52446 = (state_52584[(7)]);
var inst_52445 = (state_52584[(8)]);
var inst_52448 = (state_52584[(9)]);
var inst_52447 = (state_52584[(10)]);
var inst_52453 = cljs.core._nth.call(null,inst_52446,inst_52448);
var inst_52454 = figwheel.client.file_reloading.eval_body.call(null,inst_52453,opts);
var inst_52455 = (inst_52448 + (1));
var tmp52586 = inst_52446;
var tmp52587 = inst_52445;
var tmp52588 = inst_52447;
var inst_52445__$1 = tmp52587;
var inst_52446__$1 = tmp52586;
var inst_52447__$1 = tmp52588;
var inst_52448__$1 = inst_52455;
var state_52584__$1 = (function (){var statearr_52589 = state_52584;
(statearr_52589[(7)] = inst_52446__$1);

(statearr_52589[(8)] = inst_52445__$1);

(statearr_52589[(9)] = inst_52448__$1);

(statearr_52589[(10)] = inst_52447__$1);

(statearr_52589[(11)] = inst_52454);

return statearr_52589;
})();
var statearr_52590_52676 = state_52584__$1;
(statearr_52590_52676[(2)] = null);

(statearr_52590_52676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (20))){
var inst_52488 = (state_52584[(12)]);
var inst_52496 = figwheel.client.file_reloading.sort_files.call(null,inst_52488);
var state_52584__$1 = state_52584;
var statearr_52591_52677 = state_52584__$1;
(statearr_52591_52677[(2)] = inst_52496);

(statearr_52591_52677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (27))){
var state_52584__$1 = state_52584;
var statearr_52592_52678 = state_52584__$1;
(statearr_52592_52678[(2)] = null);

(statearr_52592_52678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (1))){
var inst_52437 = (state_52584[(13)]);
var inst_52434 = before_jsload.call(null,files);
var inst_52435 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52436 = (function (){return ((function (inst_52437,inst_52434,inst_52435,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52179_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52179_SHARP_);
});
;})(inst_52437,inst_52434,inst_52435,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52437__$1 = cljs.core.filter.call(null,inst_52436,files);
var inst_52438 = cljs.core.not_empty.call(null,inst_52437__$1);
var state_52584__$1 = (function (){var statearr_52593 = state_52584;
(statearr_52593[(14)] = inst_52434);

(statearr_52593[(13)] = inst_52437__$1);

(statearr_52593[(15)] = inst_52435);

return statearr_52593;
})();
if(cljs.core.truth_(inst_52438)){
var statearr_52594_52679 = state_52584__$1;
(statearr_52594_52679[(1)] = (2));

} else {
var statearr_52595_52680 = state_52584__$1;
(statearr_52595_52680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (24))){
var state_52584__$1 = state_52584;
var statearr_52596_52681 = state_52584__$1;
(statearr_52596_52681[(2)] = null);

(statearr_52596_52681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (39))){
var inst_52538 = (state_52584[(16)]);
var state_52584__$1 = state_52584;
var statearr_52597_52682 = state_52584__$1;
(statearr_52597_52682[(2)] = inst_52538);

(statearr_52597_52682[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (46))){
var inst_52579 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52598_52683 = state_52584__$1;
(statearr_52598_52683[(2)] = inst_52579);

(statearr_52598_52683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (4))){
var inst_52482 = (state_52584[(2)]);
var inst_52483 = cljs.core.List.EMPTY;
var inst_52484 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52483);
var inst_52485 = (function (){return ((function (inst_52482,inst_52483,inst_52484,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52180_SHARP_){
var and__42633__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52180_SHARP_);
if(cljs.core.truth_(and__42633__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52180_SHARP_));
} else {
return and__42633__auto__;
}
});
;})(inst_52482,inst_52483,inst_52484,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52486 = cljs.core.filter.call(null,inst_52485,files);
var inst_52487 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52488 = cljs.core.concat.call(null,inst_52486,inst_52487);
var state_52584__$1 = (function (){var statearr_52599 = state_52584;
(statearr_52599[(17)] = inst_52482);

(statearr_52599[(18)] = inst_52484);

(statearr_52599[(12)] = inst_52488);

return statearr_52599;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52600_52684 = state_52584__$1;
(statearr_52600_52684[(1)] = (16));

} else {
var statearr_52601_52685 = state_52584__$1;
(statearr_52601_52685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (15))){
var inst_52472 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52602_52686 = state_52584__$1;
(statearr_52602_52686[(2)] = inst_52472);

(statearr_52602_52686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (21))){
var inst_52498 = (state_52584[(19)]);
var inst_52498__$1 = (state_52584[(2)]);
var inst_52499 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52498__$1);
var state_52584__$1 = (function (){var statearr_52603 = state_52584;
(statearr_52603[(19)] = inst_52498__$1);

return statearr_52603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52584__$1,(22),inst_52499);
} else {
if((state_val_52585 === (31))){
var inst_52582 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52584__$1,inst_52582);
} else {
if((state_val_52585 === (32))){
var inst_52538 = (state_52584[(16)]);
var inst_52543 = inst_52538.cljs$lang$protocol_mask$partition0$;
var inst_52544 = (inst_52543 & (64));
var inst_52545 = inst_52538.cljs$core$ISeq$;
var inst_52546 = (inst_52544) || (inst_52545);
var state_52584__$1 = state_52584;
if(cljs.core.truth_(inst_52546)){
var statearr_52604_52687 = state_52584__$1;
(statearr_52604_52687[(1)] = (35));

} else {
var statearr_52605_52688 = state_52584__$1;
(statearr_52605_52688[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (40))){
var inst_52559 = (state_52584[(20)]);
var inst_52558 = (state_52584[(2)]);
var inst_52559__$1 = cljs.core.get.call(null,inst_52558,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52560 = cljs.core.get.call(null,inst_52558,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52561 = cljs.core.not_empty.call(null,inst_52559__$1);
var state_52584__$1 = (function (){var statearr_52606 = state_52584;
(statearr_52606[(21)] = inst_52560);

(statearr_52606[(20)] = inst_52559__$1);

return statearr_52606;
})();
if(cljs.core.truth_(inst_52561)){
var statearr_52607_52689 = state_52584__$1;
(statearr_52607_52689[(1)] = (41));

} else {
var statearr_52608_52690 = state_52584__$1;
(statearr_52608_52690[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (33))){
var state_52584__$1 = state_52584;
var statearr_52609_52691 = state_52584__$1;
(statearr_52609_52691[(2)] = false);

(statearr_52609_52691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (13))){
var inst_52458 = (state_52584[(22)]);
var inst_52462 = cljs.core.chunk_first.call(null,inst_52458);
var inst_52463 = cljs.core.chunk_rest.call(null,inst_52458);
var inst_52464 = cljs.core.count.call(null,inst_52462);
var inst_52445 = inst_52463;
var inst_52446 = inst_52462;
var inst_52447 = inst_52464;
var inst_52448 = (0);
var state_52584__$1 = (function (){var statearr_52610 = state_52584;
(statearr_52610[(7)] = inst_52446);

(statearr_52610[(8)] = inst_52445);

(statearr_52610[(9)] = inst_52448);

(statearr_52610[(10)] = inst_52447);

return statearr_52610;
})();
var statearr_52611_52692 = state_52584__$1;
(statearr_52611_52692[(2)] = null);

(statearr_52611_52692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (22))){
var inst_52502 = (state_52584[(23)]);
var inst_52501 = (state_52584[(24)]);
var inst_52498 = (state_52584[(19)]);
var inst_52506 = (state_52584[(25)]);
var inst_52501__$1 = (state_52584[(2)]);
var inst_52502__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52501__$1);
var inst_52503 = (function (){var all_files = inst_52498;
var res_SINGLEQUOTE_ = inst_52501__$1;
var res = inst_52502__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52502,inst_52501,inst_52498,inst_52506,inst_52501__$1,inst_52502__$1,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52181_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52181_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52502,inst_52501,inst_52498,inst_52506,inst_52501__$1,inst_52502__$1,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52504 = cljs.core.filter.call(null,inst_52503,inst_52501__$1);
var inst_52505 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52506__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52505);
var inst_52507 = cljs.core.not_empty.call(null,inst_52506__$1);
var state_52584__$1 = (function (){var statearr_52612 = state_52584;
(statearr_52612[(23)] = inst_52502__$1);

(statearr_52612[(24)] = inst_52501__$1);

(statearr_52612[(25)] = inst_52506__$1);

(statearr_52612[(26)] = inst_52504);

return statearr_52612;
})();
if(cljs.core.truth_(inst_52507)){
var statearr_52613_52693 = state_52584__$1;
(statearr_52613_52693[(1)] = (23));

} else {
var statearr_52614_52694 = state_52584__$1;
(statearr_52614_52694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (36))){
var state_52584__$1 = state_52584;
var statearr_52615_52695 = state_52584__$1;
(statearr_52615_52695[(2)] = false);

(statearr_52615_52695[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (41))){
var inst_52559 = (state_52584[(20)]);
var inst_52563 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52564 = cljs.core.map.call(null,inst_52563,inst_52559);
var inst_52565 = cljs.core.pr_str.call(null,inst_52564);
var inst_52566 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52565)].join('');
var inst_52567 = figwheel.client.utils.log.call(null,inst_52566);
var state_52584__$1 = state_52584;
var statearr_52616_52696 = state_52584__$1;
(statearr_52616_52696[(2)] = inst_52567);

(statearr_52616_52696[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (43))){
var inst_52560 = (state_52584[(21)]);
var inst_52570 = (state_52584[(2)]);
var inst_52571 = cljs.core.not_empty.call(null,inst_52560);
var state_52584__$1 = (function (){var statearr_52617 = state_52584;
(statearr_52617[(27)] = inst_52570);

return statearr_52617;
})();
if(cljs.core.truth_(inst_52571)){
var statearr_52618_52697 = state_52584__$1;
(statearr_52618_52697[(1)] = (44));

} else {
var statearr_52619_52698 = state_52584__$1;
(statearr_52619_52698[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (29))){
var inst_52502 = (state_52584[(23)]);
var inst_52501 = (state_52584[(24)]);
var inst_52498 = (state_52584[(19)]);
var inst_52506 = (state_52584[(25)]);
var inst_52504 = (state_52584[(26)]);
var inst_52538 = (state_52584[(16)]);
var inst_52534 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52537 = (function (){var all_files = inst_52498;
var res_SINGLEQUOTE_ = inst_52501;
var res = inst_52502;
var files_not_loaded = inst_52504;
var dependencies_that_loaded = inst_52506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52538,inst_52534,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52536){
var map__52620 = p__52536;
var map__52620__$1 = ((((!((map__52620 == null)))?((((map__52620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52620):map__52620);
var namespace = cljs.core.get.call(null,map__52620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52538,inst_52534,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52538__$1 = cljs.core.group_by.call(null,inst_52537,inst_52504);
var inst_52540 = (inst_52538__$1 == null);
var inst_52541 = cljs.core.not.call(null,inst_52540);
var state_52584__$1 = (function (){var statearr_52622 = state_52584;
(statearr_52622[(28)] = inst_52534);

(statearr_52622[(16)] = inst_52538__$1);

return statearr_52622;
})();
if(inst_52541){
var statearr_52623_52699 = state_52584__$1;
(statearr_52623_52699[(1)] = (32));

} else {
var statearr_52624_52700 = state_52584__$1;
(statearr_52624_52700[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (44))){
var inst_52560 = (state_52584[(21)]);
var inst_52573 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52560);
var inst_52574 = cljs.core.pr_str.call(null,inst_52573);
var inst_52575 = [cljs.core.str("not required: "),cljs.core.str(inst_52574)].join('');
var inst_52576 = figwheel.client.utils.log.call(null,inst_52575);
var state_52584__$1 = state_52584;
var statearr_52625_52701 = state_52584__$1;
(statearr_52625_52701[(2)] = inst_52576);

(statearr_52625_52701[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (6))){
var inst_52479 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52626_52702 = state_52584__$1;
(statearr_52626_52702[(2)] = inst_52479);

(statearr_52626_52702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (28))){
var inst_52504 = (state_52584[(26)]);
var inst_52531 = (state_52584[(2)]);
var inst_52532 = cljs.core.not_empty.call(null,inst_52504);
var state_52584__$1 = (function (){var statearr_52627 = state_52584;
(statearr_52627[(29)] = inst_52531);

return statearr_52627;
})();
if(cljs.core.truth_(inst_52532)){
var statearr_52628_52703 = state_52584__$1;
(statearr_52628_52703[(1)] = (29));

} else {
var statearr_52629_52704 = state_52584__$1;
(statearr_52629_52704[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (25))){
var inst_52502 = (state_52584[(23)]);
var inst_52518 = (state_52584[(2)]);
var inst_52519 = cljs.core.not_empty.call(null,inst_52502);
var state_52584__$1 = (function (){var statearr_52630 = state_52584;
(statearr_52630[(30)] = inst_52518);

return statearr_52630;
})();
if(cljs.core.truth_(inst_52519)){
var statearr_52631_52705 = state_52584__$1;
(statearr_52631_52705[(1)] = (26));

} else {
var statearr_52632_52706 = state_52584__$1;
(statearr_52632_52706[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (34))){
var inst_52553 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
if(cljs.core.truth_(inst_52553)){
var statearr_52633_52707 = state_52584__$1;
(statearr_52633_52707[(1)] = (38));

} else {
var statearr_52634_52708 = state_52584__$1;
(statearr_52634_52708[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (17))){
var state_52584__$1 = state_52584;
var statearr_52635_52709 = state_52584__$1;
(statearr_52635_52709[(2)] = recompile_dependents);

(statearr_52635_52709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (3))){
var state_52584__$1 = state_52584;
var statearr_52636_52710 = state_52584__$1;
(statearr_52636_52710[(2)] = null);

(statearr_52636_52710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (12))){
var inst_52475 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52637_52711 = state_52584__$1;
(statearr_52637_52711[(2)] = inst_52475);

(statearr_52637_52711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (2))){
var inst_52437 = (state_52584[(13)]);
var inst_52444 = cljs.core.seq.call(null,inst_52437);
var inst_52445 = inst_52444;
var inst_52446 = null;
var inst_52447 = (0);
var inst_52448 = (0);
var state_52584__$1 = (function (){var statearr_52638 = state_52584;
(statearr_52638[(7)] = inst_52446);

(statearr_52638[(8)] = inst_52445);

(statearr_52638[(9)] = inst_52448);

(statearr_52638[(10)] = inst_52447);

return statearr_52638;
})();
var statearr_52639_52712 = state_52584__$1;
(statearr_52639_52712[(2)] = null);

(statearr_52639_52712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (23))){
var inst_52502 = (state_52584[(23)]);
var inst_52501 = (state_52584[(24)]);
var inst_52498 = (state_52584[(19)]);
var inst_52506 = (state_52584[(25)]);
var inst_52504 = (state_52584[(26)]);
var inst_52509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52511 = (function (){var all_files = inst_52498;
var res_SINGLEQUOTE_ = inst_52501;
var res = inst_52502;
var files_not_loaded = inst_52504;
var dependencies_that_loaded = inst_52506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52509,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52510){
var map__52640 = p__52510;
var map__52640__$1 = ((((!((map__52640 == null)))?((((map__52640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52640):map__52640);
var request_url = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52509,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52512 = cljs.core.reverse.call(null,inst_52506);
var inst_52513 = cljs.core.map.call(null,inst_52511,inst_52512);
var inst_52514 = cljs.core.pr_str.call(null,inst_52513);
var inst_52515 = figwheel.client.utils.log.call(null,inst_52514);
var state_52584__$1 = (function (){var statearr_52642 = state_52584;
(statearr_52642[(31)] = inst_52509);

return statearr_52642;
})();
var statearr_52643_52713 = state_52584__$1;
(statearr_52643_52713[(2)] = inst_52515);

(statearr_52643_52713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (35))){
var state_52584__$1 = state_52584;
var statearr_52644_52714 = state_52584__$1;
(statearr_52644_52714[(2)] = true);

(statearr_52644_52714[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (19))){
var inst_52488 = (state_52584[(12)]);
var inst_52494 = figwheel.client.file_reloading.expand_files.call(null,inst_52488);
var state_52584__$1 = state_52584;
var statearr_52645_52715 = state_52584__$1;
(statearr_52645_52715[(2)] = inst_52494);

(statearr_52645_52715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (11))){
var state_52584__$1 = state_52584;
var statearr_52646_52716 = state_52584__$1;
(statearr_52646_52716[(2)] = null);

(statearr_52646_52716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (9))){
var inst_52477 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52647_52717 = state_52584__$1;
(statearr_52647_52717[(2)] = inst_52477);

(statearr_52647_52717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (5))){
var inst_52448 = (state_52584[(9)]);
var inst_52447 = (state_52584[(10)]);
var inst_52450 = (inst_52448 < inst_52447);
var inst_52451 = inst_52450;
var state_52584__$1 = state_52584;
if(cljs.core.truth_(inst_52451)){
var statearr_52648_52718 = state_52584__$1;
(statearr_52648_52718[(1)] = (7));

} else {
var statearr_52649_52719 = state_52584__$1;
(statearr_52649_52719[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (14))){
var inst_52458 = (state_52584[(22)]);
var inst_52467 = cljs.core.first.call(null,inst_52458);
var inst_52468 = figwheel.client.file_reloading.eval_body.call(null,inst_52467,opts);
var inst_52469 = cljs.core.next.call(null,inst_52458);
var inst_52445 = inst_52469;
var inst_52446 = null;
var inst_52447 = (0);
var inst_52448 = (0);
var state_52584__$1 = (function (){var statearr_52650 = state_52584;
(statearr_52650[(7)] = inst_52446);

(statearr_52650[(8)] = inst_52445);

(statearr_52650[(9)] = inst_52448);

(statearr_52650[(10)] = inst_52447);

(statearr_52650[(32)] = inst_52468);

return statearr_52650;
})();
var statearr_52651_52720 = state_52584__$1;
(statearr_52651_52720[(2)] = null);

(statearr_52651_52720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (45))){
var state_52584__$1 = state_52584;
var statearr_52652_52721 = state_52584__$1;
(statearr_52652_52721[(2)] = null);

(statearr_52652_52721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (26))){
var inst_52502 = (state_52584[(23)]);
var inst_52501 = (state_52584[(24)]);
var inst_52498 = (state_52584[(19)]);
var inst_52506 = (state_52584[(25)]);
var inst_52504 = (state_52584[(26)]);
var inst_52521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52523 = (function (){var all_files = inst_52498;
var res_SINGLEQUOTE_ = inst_52501;
var res = inst_52502;
var files_not_loaded = inst_52504;
var dependencies_that_loaded = inst_52506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52521,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52522){
var map__52653 = p__52522;
var map__52653__$1 = ((((!((map__52653 == null)))?((((map__52653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52653):map__52653);
var namespace = cljs.core.get.call(null,map__52653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52521,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52524 = cljs.core.map.call(null,inst_52523,inst_52502);
var inst_52525 = cljs.core.pr_str.call(null,inst_52524);
var inst_52526 = figwheel.client.utils.log.call(null,inst_52525);
var inst_52527 = (function (){var all_files = inst_52498;
var res_SINGLEQUOTE_ = inst_52501;
var res = inst_52502;
var files_not_loaded = inst_52504;
var dependencies_that_loaded = inst_52506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52521,inst_52523,inst_52524,inst_52525,inst_52526,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52502,inst_52501,inst_52498,inst_52506,inst_52504,inst_52521,inst_52523,inst_52524,inst_52525,inst_52526,state_val_52585,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52528 = setTimeout(inst_52527,(10));
var state_52584__$1 = (function (){var statearr_52655 = state_52584;
(statearr_52655[(33)] = inst_52526);

(statearr_52655[(34)] = inst_52521);

return statearr_52655;
})();
var statearr_52656_52722 = state_52584__$1;
(statearr_52656_52722[(2)] = inst_52528);

(statearr_52656_52722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (16))){
var state_52584__$1 = state_52584;
var statearr_52657_52723 = state_52584__$1;
(statearr_52657_52723[(2)] = reload_dependents);

(statearr_52657_52723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (38))){
var inst_52538 = (state_52584[(16)]);
var inst_52555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52538);
var state_52584__$1 = state_52584;
var statearr_52658_52724 = state_52584__$1;
(statearr_52658_52724[(2)] = inst_52555);

(statearr_52658_52724[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (30))){
var state_52584__$1 = state_52584;
var statearr_52659_52725 = state_52584__$1;
(statearr_52659_52725[(2)] = null);

(statearr_52659_52725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (10))){
var inst_52458 = (state_52584[(22)]);
var inst_52460 = cljs.core.chunked_seq_QMARK_.call(null,inst_52458);
var state_52584__$1 = state_52584;
if(inst_52460){
var statearr_52660_52726 = state_52584__$1;
(statearr_52660_52726[(1)] = (13));

} else {
var statearr_52661_52727 = state_52584__$1;
(statearr_52661_52727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (18))){
var inst_52492 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
if(cljs.core.truth_(inst_52492)){
var statearr_52662_52728 = state_52584__$1;
(statearr_52662_52728[(1)] = (19));

} else {
var statearr_52663_52729 = state_52584__$1;
(statearr_52663_52729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (42))){
var state_52584__$1 = state_52584;
var statearr_52664_52730 = state_52584__$1;
(statearr_52664_52730[(2)] = null);

(statearr_52664_52730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (37))){
var inst_52550 = (state_52584[(2)]);
var state_52584__$1 = state_52584;
var statearr_52665_52731 = state_52584__$1;
(statearr_52665_52731[(2)] = inst_52550);

(statearr_52665_52731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52585 === (8))){
var inst_52458 = (state_52584[(22)]);
var inst_52445 = (state_52584[(8)]);
var inst_52458__$1 = cljs.core.seq.call(null,inst_52445);
var state_52584__$1 = (function (){var statearr_52666 = state_52584;
(statearr_52666[(22)] = inst_52458__$1);

return statearr_52666;
})();
if(inst_52458__$1){
var statearr_52667_52732 = state_52584__$1;
(statearr_52667_52732[(1)] = (10));

} else {
var statearr_52668_52733 = state_52584__$1;
(statearr_52668_52733[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44705__auto__,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____0 = (function (){
var statearr_52672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52672[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__);

(statearr_52672[(1)] = (1));

return statearr_52672;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____1 = (function (state_52584){
while(true){
var ret_value__44707__auto__ = (function (){try{while(true){
var result__44708__auto__ = switch__44705__auto__.call(null,state_52584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44708__auto__;
}
break;
}
}catch (e52673){if((e52673 instanceof Object)){
var ex__44709__auto__ = e52673;
var statearr_52674_52734 = state_52584;
(statearr_52674_52734[(5)] = ex__44709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52735 = state_52584;
state_52584 = G__52735;
continue;
} else {
return ret_value__44707__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__ = function(state_52584){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____1.call(this,state_52584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44706__auto__;
})()
;})(switch__44705__auto__,c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44819__auto__ = (function (){var statearr_52675 = f__44818__auto__.call(null);
(statearr_52675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44817__auto__);

return statearr_52675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44819__auto__);
});})(c__44817__auto__,map__52430,map__52430__$1,opts,before_jsload,on_jsload,reload_dependents,map__52431,map__52431__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44817__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52738,link){
var map__52741 = p__52738;
var map__52741__$1 = ((((!((map__52741 == null)))?((((map__52741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52741):map__52741);
var file = cljs.core.get.call(null,map__52741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52741,map__52741__$1,file){
return (function (p1__52736_SHARP_,p2__52737_SHARP_){
if(cljs.core._EQ_.call(null,p1__52736_SHARP_,p2__52737_SHARP_)){
return p1__52736_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52741,map__52741__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52747){
var map__52748 = p__52747;
var map__52748__$1 = ((((!((map__52748 == null)))?((((map__52748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52748):map__52748);
var match_length = cljs.core.get.call(null,map__52748__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52748__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52743_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52743_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args52750 = [];
var len__43720__auto___52753 = arguments.length;
var i__43721__auto___52754 = (0);
while(true){
if((i__43721__auto___52754 < len__43720__auto___52753)){
args52750.push((arguments[i__43721__auto___52754]));

var G__52755 = (i__43721__auto___52754 + (1));
i__43721__auto___52754 = G__52755;
continue;
} else {
}
break;
}

var G__52752 = args52750.length;
switch (G__52752) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52750.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52757_SHARP_,p2__52758_SHARP_){
return cljs.core.assoc.call(null,p1__52757_SHARP_,cljs.core.get.call(null,p2__52758_SHARP_,key),p2__52758_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52759){
var map__52762 = p__52759;
var map__52762__$1 = ((((!((map__52762 == null)))?((((map__52762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52762):map__52762);
var f_data = map__52762__$1;
var file = cljs.core.get.call(null,map__52762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52764,p__52765){
var map__52774 = p__52764;
var map__52774__$1 = ((((!((map__52774 == null)))?((((map__52774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52774):map__52774);
var opts = map__52774__$1;
var on_cssload = cljs.core.get.call(null,map__52774__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52775 = p__52765;
var map__52775__$1 = ((((!((map__52775 == null)))?((((map__52775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52775):map__52775);
var files_msg = map__52775__$1;
var files = cljs.core.get.call(null,map__52775__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52778_52782 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52779_52783 = null;
var count__52780_52784 = (0);
var i__52781_52785 = (0);
while(true){
if((i__52781_52785 < count__52780_52784)){
var f_52786 = cljs.core._nth.call(null,chunk__52779_52783,i__52781_52785);
figwheel.client.file_reloading.reload_css_file.call(null,f_52786);

var G__52787 = seq__52778_52782;
var G__52788 = chunk__52779_52783;
var G__52789 = count__52780_52784;
var G__52790 = (i__52781_52785 + (1));
seq__52778_52782 = G__52787;
chunk__52779_52783 = G__52788;
count__52780_52784 = G__52789;
i__52781_52785 = G__52790;
continue;
} else {
var temp__4657__auto___52791 = cljs.core.seq.call(null,seq__52778_52782);
if(temp__4657__auto___52791){
var seq__52778_52792__$1 = temp__4657__auto___52791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52778_52792__$1)){
var c__43456__auto___52793 = cljs.core.chunk_first.call(null,seq__52778_52792__$1);
var G__52794 = cljs.core.chunk_rest.call(null,seq__52778_52792__$1);
var G__52795 = c__43456__auto___52793;
var G__52796 = cljs.core.count.call(null,c__43456__auto___52793);
var G__52797 = (0);
seq__52778_52782 = G__52794;
chunk__52779_52783 = G__52795;
count__52780_52784 = G__52796;
i__52781_52785 = G__52797;
continue;
} else {
var f_52798 = cljs.core.first.call(null,seq__52778_52792__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52798);

var G__52799 = cljs.core.next.call(null,seq__52778_52792__$1);
var G__52800 = null;
var G__52801 = (0);
var G__52802 = (0);
seq__52778_52782 = G__52799;
chunk__52779_52783 = G__52800;
count__52780_52784 = G__52801;
i__52781_52785 = G__52802;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52774,map__52774__$1,opts,on_cssload,map__52775,map__52775__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52774,map__52774__$1,opts,on_cssload,map__52775,map__52775__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map