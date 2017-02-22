// Compiled by ClojureScript 1.7.228 {}
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26004__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26004__auto__){
return or__26004__auto__;
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
var or__26004__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35589_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35589_SHARP_));
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
var seq__35594 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35595 = null;
var count__35596 = (0);
var i__35597 = (0);
while(true){
if((i__35597 < count__35596)){
var n = cljs.core._nth.call(null,chunk__35595,i__35597);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35598 = seq__35594;
var G__35599 = chunk__35595;
var G__35600 = count__35596;
var G__35601 = (i__35597 + (1));
seq__35594 = G__35598;
chunk__35595 = G__35599;
count__35596 = G__35600;
i__35597 = G__35601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35594);
if(temp__4657__auto__){
var seq__35594__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35594__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__35594__$1);
var G__35602 = cljs.core.chunk_rest.call(null,seq__35594__$1);
var G__35603 = c__26807__auto__;
var G__35604 = cljs.core.count.call(null,c__26807__auto__);
var G__35605 = (0);
seq__35594 = G__35602;
chunk__35595 = G__35603;
count__35596 = G__35604;
i__35597 = G__35605;
continue;
} else {
var n = cljs.core.first.call(null,seq__35594__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35606 = cljs.core.next.call(null,seq__35594__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__35594 = G__35606;
chunk__35595 = G__35607;
count__35596 = G__35608;
i__35597 = G__35609;
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

var seq__35648_35655 = cljs.core.seq.call(null,deps);
var chunk__35649_35656 = null;
var count__35650_35657 = (0);
var i__35651_35658 = (0);
while(true){
if((i__35651_35658 < count__35650_35657)){
var dep_35659 = cljs.core._nth.call(null,chunk__35649_35656,i__35651_35658);
topo_sort_helper_STAR_.call(null,dep_35659,(depth + (1)),state);

var G__35660 = seq__35648_35655;
var G__35661 = chunk__35649_35656;
var G__35662 = count__35650_35657;
var G__35663 = (i__35651_35658 + (1));
seq__35648_35655 = G__35660;
chunk__35649_35656 = G__35661;
count__35650_35657 = G__35662;
i__35651_35658 = G__35663;
continue;
} else {
var temp__4657__auto___35664 = cljs.core.seq.call(null,seq__35648_35655);
if(temp__4657__auto___35664){
var seq__35648_35665__$1 = temp__4657__auto___35664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35648_35665__$1)){
var c__26807__auto___35666 = cljs.core.chunk_first.call(null,seq__35648_35665__$1);
var G__35667 = cljs.core.chunk_rest.call(null,seq__35648_35665__$1);
var G__35668 = c__26807__auto___35666;
var G__35669 = cljs.core.count.call(null,c__26807__auto___35666);
var G__35670 = (0);
seq__35648_35655 = G__35667;
chunk__35649_35656 = G__35668;
count__35650_35657 = G__35669;
i__35651_35658 = G__35670;
continue;
} else {
var dep_35671 = cljs.core.first.call(null,seq__35648_35665__$1);
topo_sort_helper_STAR_.call(null,dep_35671,(depth + (1)),state);

var G__35672 = cljs.core.next.call(null,seq__35648_35665__$1);
var G__35673 = null;
var G__35674 = (0);
var G__35675 = (0);
seq__35648_35655 = G__35672;
chunk__35649_35656 = G__35673;
count__35650_35657 = G__35674;
i__35651_35658 = G__35675;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35652){
var vec__35654 = p__35652;
var x = cljs.core.nth.call(null,vec__35654,(0),null);
var xs = cljs.core.nthnext.call(null,vec__35654,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35654,x,xs,get_deps__$1){
return (function (p1__35610_SHARP_){
return clojure.set.difference.call(null,p1__35610_SHARP_,x);
});})(vec__35654,x,xs,get_deps__$1))
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
var seq__35688 = cljs.core.seq.call(null,provides);
var chunk__35689 = null;
var count__35690 = (0);
var i__35691 = (0);
while(true){
if((i__35691 < count__35690)){
var prov = cljs.core._nth.call(null,chunk__35689,i__35691);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35692_35700 = cljs.core.seq.call(null,requires);
var chunk__35693_35701 = null;
var count__35694_35702 = (0);
var i__35695_35703 = (0);
while(true){
if((i__35695_35703 < count__35694_35702)){
var req_35704 = cljs.core._nth.call(null,chunk__35693_35701,i__35695_35703);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35704,prov);

var G__35705 = seq__35692_35700;
var G__35706 = chunk__35693_35701;
var G__35707 = count__35694_35702;
var G__35708 = (i__35695_35703 + (1));
seq__35692_35700 = G__35705;
chunk__35693_35701 = G__35706;
count__35694_35702 = G__35707;
i__35695_35703 = G__35708;
continue;
} else {
var temp__4657__auto___35709 = cljs.core.seq.call(null,seq__35692_35700);
if(temp__4657__auto___35709){
var seq__35692_35710__$1 = temp__4657__auto___35709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35692_35710__$1)){
var c__26807__auto___35711 = cljs.core.chunk_first.call(null,seq__35692_35710__$1);
var G__35712 = cljs.core.chunk_rest.call(null,seq__35692_35710__$1);
var G__35713 = c__26807__auto___35711;
var G__35714 = cljs.core.count.call(null,c__26807__auto___35711);
var G__35715 = (0);
seq__35692_35700 = G__35712;
chunk__35693_35701 = G__35713;
count__35694_35702 = G__35714;
i__35695_35703 = G__35715;
continue;
} else {
var req_35716 = cljs.core.first.call(null,seq__35692_35710__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35716,prov);

var G__35717 = cljs.core.next.call(null,seq__35692_35710__$1);
var G__35718 = null;
var G__35719 = (0);
var G__35720 = (0);
seq__35692_35700 = G__35717;
chunk__35693_35701 = G__35718;
count__35694_35702 = G__35719;
i__35695_35703 = G__35720;
continue;
}
} else {
}
}
break;
}

var G__35721 = seq__35688;
var G__35722 = chunk__35689;
var G__35723 = count__35690;
var G__35724 = (i__35691 + (1));
seq__35688 = G__35721;
chunk__35689 = G__35722;
count__35690 = G__35723;
i__35691 = G__35724;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35688);
if(temp__4657__auto__){
var seq__35688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35688__$1)){
var c__26807__auto__ = cljs.core.chunk_first.call(null,seq__35688__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35688__$1);
var G__35726 = c__26807__auto__;
var G__35727 = cljs.core.count.call(null,c__26807__auto__);
var G__35728 = (0);
seq__35688 = G__35725;
chunk__35689 = G__35726;
count__35690 = G__35727;
i__35691 = G__35728;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35688__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35696_35729 = cljs.core.seq.call(null,requires);
var chunk__35697_35730 = null;
var count__35698_35731 = (0);
var i__35699_35732 = (0);
while(true){
if((i__35699_35732 < count__35698_35731)){
var req_35733 = cljs.core._nth.call(null,chunk__35697_35730,i__35699_35732);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35733,prov);

var G__35734 = seq__35696_35729;
var G__35735 = chunk__35697_35730;
var G__35736 = count__35698_35731;
var G__35737 = (i__35699_35732 + (1));
seq__35696_35729 = G__35734;
chunk__35697_35730 = G__35735;
count__35698_35731 = G__35736;
i__35699_35732 = G__35737;
continue;
} else {
var temp__4657__auto___35738__$1 = cljs.core.seq.call(null,seq__35696_35729);
if(temp__4657__auto___35738__$1){
var seq__35696_35739__$1 = temp__4657__auto___35738__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35696_35739__$1)){
var c__26807__auto___35740 = cljs.core.chunk_first.call(null,seq__35696_35739__$1);
var G__35741 = cljs.core.chunk_rest.call(null,seq__35696_35739__$1);
var G__35742 = c__26807__auto___35740;
var G__35743 = cljs.core.count.call(null,c__26807__auto___35740);
var G__35744 = (0);
seq__35696_35729 = G__35741;
chunk__35697_35730 = G__35742;
count__35698_35731 = G__35743;
i__35699_35732 = G__35744;
continue;
} else {
var req_35745 = cljs.core.first.call(null,seq__35696_35739__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35745,prov);

var G__35746 = cljs.core.next.call(null,seq__35696_35739__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35696_35729 = G__35746;
chunk__35697_35730 = G__35747;
count__35698_35731 = G__35748;
i__35699_35732 = G__35749;
continue;
}
} else {
}
}
break;
}

var G__35750 = cljs.core.next.call(null,seq__35688__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35688 = G__35750;
chunk__35689 = G__35751;
count__35690 = G__35752;
i__35691 = G__35753;
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
var seq__35758_35762 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35759_35763 = null;
var count__35760_35764 = (0);
var i__35761_35765 = (0);
while(true){
if((i__35761_35765 < count__35760_35764)){
var ns_35766 = cljs.core._nth.call(null,chunk__35759_35763,i__35761_35765);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35766);

var G__35767 = seq__35758_35762;
var G__35768 = chunk__35759_35763;
var G__35769 = count__35760_35764;
var G__35770 = (i__35761_35765 + (1));
seq__35758_35762 = G__35767;
chunk__35759_35763 = G__35768;
count__35760_35764 = G__35769;
i__35761_35765 = G__35770;
continue;
} else {
var temp__4657__auto___35771 = cljs.core.seq.call(null,seq__35758_35762);
if(temp__4657__auto___35771){
var seq__35758_35772__$1 = temp__4657__auto___35771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35758_35772__$1)){
var c__26807__auto___35773 = cljs.core.chunk_first.call(null,seq__35758_35772__$1);
var G__35774 = cljs.core.chunk_rest.call(null,seq__35758_35772__$1);
var G__35775 = c__26807__auto___35773;
var G__35776 = cljs.core.count.call(null,c__26807__auto___35773);
var G__35777 = (0);
seq__35758_35762 = G__35774;
chunk__35759_35763 = G__35775;
count__35760_35764 = G__35776;
i__35761_35765 = G__35777;
continue;
} else {
var ns_35778 = cljs.core.first.call(null,seq__35758_35772__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35778);

var G__35779 = cljs.core.next.call(null,seq__35758_35772__$1);
var G__35780 = null;
var G__35781 = (0);
var G__35782 = (0);
seq__35758_35762 = G__35779;
chunk__35759_35763 = G__35780;
count__35760_35764 = G__35781;
i__35761_35765 = G__35782;
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
goog.require_figwheel_backup_ = (function (){var or__26004__auto__ = goog.require__;
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
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
var G__35783__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35784__i = 0, G__35784__a = new Array(arguments.length -  0);
while (G__35784__i < G__35784__a.length) {G__35784__a[G__35784__i] = arguments[G__35784__i + 0]; ++G__35784__i;}
  args = new cljs.core.IndexedSeq(G__35784__a,0);
} 
return G__35783__delegate.call(this,args);};
G__35783.cljs$lang$maxFixedArity = 0;
G__35783.cljs$lang$applyTo = (function (arglist__35785){
var args = cljs.core.seq(arglist__35785);
return G__35783__delegate(args);
});
G__35783.cljs$core$IFn$_invoke$arity$variadic = G__35783__delegate;
return G__35783;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35787 = cljs.core._EQ_;
var expr__35788 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35787.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35788))){
var path_parts = ((function (pred__35787,expr__35788){
return (function (p1__35786_SHARP_){
return clojure.string.split.call(null,p1__35786_SHARP_,/[\/\\]/);
});})(pred__35787,expr__35788))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35787,expr__35788){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35790){if((e35790 instanceof Error)){
var e = e35790;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35790;

}
}})());
});
;})(path_parts,sep,root,pred__35787,expr__35788))
} else {
if(cljs.core.truth_(pred__35787.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35788))){
return ((function (pred__35787,expr__35788){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35787,expr__35788){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35787,expr__35788))
);

return deferred.addErrback(((function (deferred,pred__35787,expr__35788){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35787,expr__35788))
);
});
;})(pred__35787,expr__35788))
} else {
return ((function (pred__35787,expr__35788){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35787,expr__35788))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35791,callback){
var map__35794 = p__35791;
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var file_msg = map__35794__$1;
var request_url = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35794,map__35794__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35794,map__35794__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__){
return (function (state_35818){
var state_val_35819 = (state_35818[(1)]);
if((state_val_35819 === (7))){
var inst_35814 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35820_35840 = state_35818__$1;
(statearr_35820_35840[(2)] = inst_35814);

(statearr_35820_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (1))){
var state_35818__$1 = state_35818;
var statearr_35821_35841 = state_35818__$1;
(statearr_35821_35841[(2)] = null);

(statearr_35821_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (4))){
var inst_35798 = (state_35818[(7)]);
var inst_35798__$1 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35822 = state_35818;
(statearr_35822[(7)] = inst_35798__$1);

return statearr_35822;
})();
if(cljs.core.truth_(inst_35798__$1)){
var statearr_35823_35842 = state_35818__$1;
(statearr_35823_35842[(1)] = (5));

} else {
var statearr_35824_35843 = state_35818__$1;
(statearr_35824_35843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (6))){
var state_35818__$1 = state_35818;
var statearr_35825_35844 = state_35818__$1;
(statearr_35825_35844[(2)] = null);

(statearr_35825_35844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (3))){
var inst_35816 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35818__$1,inst_35816);
} else {
if((state_val_35819 === (2))){
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35819 === (11))){
var inst_35810 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35826 = state_35818;
(statearr_35826[(8)] = inst_35810);

return statearr_35826;
})();
var statearr_35827_35845 = state_35818__$1;
(statearr_35827_35845[(2)] = null);

(statearr_35827_35845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (9))){
var inst_35802 = (state_35818[(9)]);
var inst_35804 = (state_35818[(10)]);
var inst_35806 = inst_35804.call(null,inst_35802);
var state_35818__$1 = state_35818;
var statearr_35828_35846 = state_35818__$1;
(statearr_35828_35846[(2)] = inst_35806);

(statearr_35828_35846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (5))){
var inst_35798 = (state_35818[(7)]);
var inst_35800 = figwheel.client.file_reloading.blocking_load.call(null,inst_35798);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,(8),inst_35800);
} else {
if((state_val_35819 === (10))){
var inst_35802 = (state_35818[(9)]);
var inst_35808 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35802);
var state_35818__$1 = state_35818;
var statearr_35829_35847 = state_35818__$1;
(statearr_35829_35847[(2)] = inst_35808);

(statearr_35829_35847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (8))){
var inst_35798 = (state_35818[(7)]);
var inst_35804 = (state_35818[(10)]);
var inst_35802 = (state_35818[(2)]);
var inst_35803 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35804__$1 = cljs.core.get.call(null,inst_35803,inst_35798);
var state_35818__$1 = (function (){var statearr_35830 = state_35818;
(statearr_35830[(9)] = inst_35802);

(statearr_35830[(10)] = inst_35804__$1);

return statearr_35830;
})();
if(cljs.core.truth_(inst_35804__$1)){
var statearr_35831_35848 = state_35818__$1;
(statearr_35831_35848[(1)] = (9));

} else {
var statearr_35832_35849 = state_35818__$1;
(statearr_35832_35849[(1)] = (10));

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
});})(c__30056__auto__))
;
return ((function (switch__29944__auto__,c__30056__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29945__auto__ = null;
var figwheel$client$file_reloading$state_machine__29945__auto____0 = (function (){
var statearr_35836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35836[(0)] = figwheel$client$file_reloading$state_machine__29945__auto__);

(statearr_35836[(1)] = (1));

return statearr_35836;
});
var figwheel$client$file_reloading$state_machine__29945__auto____1 = (function (state_35818){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_35818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e35837){if((e35837 instanceof Object)){
var ex__29948__auto__ = e35837;
var statearr_35838_35850 = state_35818;
(statearr_35838_35850[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35851 = state_35818;
state_35818 = G__35851;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29945__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29945__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29945__auto____0;
figwheel$client$file_reloading$state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29945__auto____1;
return figwheel$client$file_reloading$state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__))
})();
var state__30058__auto__ = (function (){var statearr_35839 = f__30057__auto__.call(null);
(statearr_35839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_35839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__))
);

return c__30056__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35852,callback){
var map__35855 = p__35852;
var map__35855__$1 = ((((!((map__35855 == null)))?((((map__35855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35855):map__35855);
var file_msg = map__35855__$1;
var namespace = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35855,map__35855__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35855,map__35855__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35857){
var map__35860 = p__35857;
var map__35860__$1 = ((((!((map__35860 == null)))?((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35860):map__35860);
var file_msg = map__35860__$1;
var namespace = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25992__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25992__auto__){
var or__26004__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26004__auto__)){
return or__26004__auto__;
} else {
var or__26004__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26004__auto____$1)){
return or__26004__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25992__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35862,callback){
var map__35865 = p__35862;
var map__35865__$1 = ((((!((map__35865 == null)))?((((map__35865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35865):map__35865);
var file_msg = map__35865__$1;
var request_url = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30056__auto___35953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto___35953,out){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto___35953,out){
return (function (state_35935){
var state_val_35936 = (state_35935[(1)]);
if((state_val_35936 === (1))){
var inst_35913 = cljs.core.nth.call(null,files,(0),null);
var inst_35914 = cljs.core.nthnext.call(null,files,(1));
var inst_35915 = files;
var state_35935__$1 = (function (){var statearr_35937 = state_35935;
(statearr_35937[(7)] = inst_35914);

(statearr_35937[(8)] = inst_35913);

(statearr_35937[(9)] = inst_35915);

return statearr_35937;
})();
var statearr_35938_35954 = state_35935__$1;
(statearr_35938_35954[(2)] = null);

(statearr_35938_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (2))){
var inst_35918 = (state_35935[(10)]);
var inst_35915 = (state_35935[(9)]);
var inst_35918__$1 = cljs.core.nth.call(null,inst_35915,(0),null);
var inst_35919 = cljs.core.nthnext.call(null,inst_35915,(1));
var inst_35920 = (inst_35918__$1 == null);
var inst_35921 = cljs.core.not.call(null,inst_35920);
var state_35935__$1 = (function (){var statearr_35939 = state_35935;
(statearr_35939[(10)] = inst_35918__$1);

(statearr_35939[(11)] = inst_35919);

return statearr_35939;
})();
if(inst_35921){
var statearr_35940_35955 = state_35935__$1;
(statearr_35940_35955[(1)] = (4));

} else {
var statearr_35941_35956 = state_35935__$1;
(statearr_35941_35956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (3))){
var inst_35933 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35935__$1,inst_35933);
} else {
if((state_val_35936 === (4))){
var inst_35918 = (state_35935[(10)]);
var inst_35923 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35918);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35935__$1,(7),inst_35923);
} else {
if((state_val_35936 === (5))){
var inst_35929 = cljs.core.async.close_BANG_.call(null,out);
var state_35935__$1 = state_35935;
var statearr_35942_35957 = state_35935__$1;
(statearr_35942_35957[(2)] = inst_35929);

(statearr_35942_35957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (6))){
var inst_35931 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35943_35958 = state_35935__$1;
(statearr_35943_35958[(2)] = inst_35931);

(statearr_35943_35958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (7))){
var inst_35919 = (state_35935[(11)]);
var inst_35925 = (state_35935[(2)]);
var inst_35926 = cljs.core.async.put_BANG_.call(null,out,inst_35925);
var inst_35915 = inst_35919;
var state_35935__$1 = (function (){var statearr_35944 = state_35935;
(statearr_35944[(12)] = inst_35926);

(statearr_35944[(9)] = inst_35915);

return statearr_35944;
})();
var statearr_35945_35959 = state_35935__$1;
(statearr_35945_35959[(2)] = null);

(statearr_35945_35959[(1)] = (2));


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
});})(c__30056__auto___35953,out))
;
return ((function (switch__29944__auto__,c__30056__auto___35953,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____0 = (function (){
var statearr_35949 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35949[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__);

(statearr_35949[(1)] = (1));

return statearr_35949;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____1 = (function (state_35935){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_35935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e35950){if((e35950 instanceof Object)){
var ex__29948__auto__ = e35950;
var statearr_35951_35960 = state_35935;
(statearr_35951_35960[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35961 = state_35935;
state_35935 = G__35961;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__ = function(state_35935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____1.call(this,state_35935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto___35953,out))
})();
var state__30058__auto__ = (function (){var statearr_35952 = f__30057__auto__.call(null);
(statearr_35952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto___35953);

return statearr_35952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto___35953,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35962,opts){
var map__35966 = p__35962;
var map__35966__$1 = ((((!((map__35966 == null)))?((((map__35966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35966):map__35966);
var eval_body__$1 = cljs.core.get.call(null,map__35966__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25992__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25992__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25992__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35968){var e = e35968;
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
return (function (p1__35969_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35969_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35974){
var vec__35975 = p__35974;
var k = cljs.core.nth.call(null,vec__35975,(0),null);
var v = cljs.core.nth.call(null,vec__35975,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35976){
var vec__35977 = p__35976;
var k = cljs.core.nth.call(null,vec__35977,(0),null);
var v = cljs.core.nth.call(null,vec__35977,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35981,p__35982){
var map__36229 = p__35981;
var map__36229__$1 = ((((!((map__36229 == null)))?((((map__36229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36229):map__36229);
var opts = map__36229__$1;
var before_jsload = cljs.core.get.call(null,map__36229__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36229__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36229__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36230 = p__35982;
var map__36230__$1 = ((((!((map__36230 == null)))?((((map__36230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36230):map__36230);
var msg = map__36230__$1;
var files = cljs.core.get.call(null,map__36230__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36230__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36230__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30057__auto__ = (function (){var switch__29944__auto__ = ((function (c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36383){
var state_val_36384 = (state_36383[(1)]);
if((state_val_36384 === (7))){
var inst_36247 = (state_36383[(7)]);
var inst_36245 = (state_36383[(8)]);
var inst_36246 = (state_36383[(9)]);
var inst_36244 = (state_36383[(10)]);
var inst_36252 = cljs.core._nth.call(null,inst_36245,inst_36247);
var inst_36253 = figwheel.client.file_reloading.eval_body.call(null,inst_36252,opts);
var inst_36254 = (inst_36247 + (1));
var tmp36385 = inst_36245;
var tmp36386 = inst_36246;
var tmp36387 = inst_36244;
var inst_36244__$1 = tmp36387;
var inst_36245__$1 = tmp36385;
var inst_36246__$1 = tmp36386;
var inst_36247__$1 = inst_36254;
var state_36383__$1 = (function (){var statearr_36388 = state_36383;
(statearr_36388[(7)] = inst_36247__$1);

(statearr_36388[(11)] = inst_36253);

(statearr_36388[(8)] = inst_36245__$1);

(statearr_36388[(9)] = inst_36246__$1);

(statearr_36388[(10)] = inst_36244__$1);

return statearr_36388;
})();
var statearr_36389_36475 = state_36383__$1;
(statearr_36389_36475[(2)] = null);

(statearr_36389_36475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (20))){
var inst_36287 = (state_36383[(12)]);
var inst_36295 = figwheel.client.file_reloading.sort_files.call(null,inst_36287);
var state_36383__$1 = state_36383;
var statearr_36390_36476 = state_36383__$1;
(statearr_36390_36476[(2)] = inst_36295);

(statearr_36390_36476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (27))){
var state_36383__$1 = state_36383;
var statearr_36391_36477 = state_36383__$1;
(statearr_36391_36477[(2)] = null);

(statearr_36391_36477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (1))){
var inst_36236 = (state_36383[(13)]);
var inst_36233 = before_jsload.call(null,files);
var inst_36234 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36235 = (function (){return ((function (inst_36236,inst_36233,inst_36234,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35978_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35978_SHARP_);
});
;})(inst_36236,inst_36233,inst_36234,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36236__$1 = cljs.core.filter.call(null,inst_36235,files);
var inst_36237 = cljs.core.not_empty.call(null,inst_36236__$1);
var state_36383__$1 = (function (){var statearr_36392 = state_36383;
(statearr_36392[(14)] = inst_36233);

(statearr_36392[(15)] = inst_36234);

(statearr_36392[(13)] = inst_36236__$1);

return statearr_36392;
})();
if(cljs.core.truth_(inst_36237)){
var statearr_36393_36478 = state_36383__$1;
(statearr_36393_36478[(1)] = (2));

} else {
var statearr_36394_36479 = state_36383__$1;
(statearr_36394_36479[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (24))){
var state_36383__$1 = state_36383;
var statearr_36395_36480 = state_36383__$1;
(statearr_36395_36480[(2)] = null);

(statearr_36395_36480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (39))){
var inst_36337 = (state_36383[(16)]);
var state_36383__$1 = state_36383;
var statearr_36396_36481 = state_36383__$1;
(statearr_36396_36481[(2)] = inst_36337);

(statearr_36396_36481[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (46))){
var inst_36378 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36397_36482 = state_36383__$1;
(statearr_36397_36482[(2)] = inst_36378);

(statearr_36397_36482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (4))){
var inst_36281 = (state_36383[(2)]);
var inst_36282 = cljs.core.List.EMPTY;
var inst_36283 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36282);
var inst_36284 = (function (){return ((function (inst_36281,inst_36282,inst_36283,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35979_SHARP_){
var and__25992__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35979_SHARP_);
if(cljs.core.truth_(and__25992__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35979_SHARP_));
} else {
return and__25992__auto__;
}
});
;})(inst_36281,inst_36282,inst_36283,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36285 = cljs.core.filter.call(null,inst_36284,files);
var inst_36286 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36287 = cljs.core.concat.call(null,inst_36285,inst_36286);
var state_36383__$1 = (function (){var statearr_36398 = state_36383;
(statearr_36398[(17)] = inst_36281);

(statearr_36398[(12)] = inst_36287);

(statearr_36398[(18)] = inst_36283);

return statearr_36398;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36399_36483 = state_36383__$1;
(statearr_36399_36483[(1)] = (16));

} else {
var statearr_36400_36484 = state_36383__$1;
(statearr_36400_36484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (15))){
var inst_36271 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36401_36485 = state_36383__$1;
(statearr_36401_36485[(2)] = inst_36271);

(statearr_36401_36485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (21))){
var inst_36297 = (state_36383[(19)]);
var inst_36297__$1 = (state_36383[(2)]);
var inst_36298 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36297__$1);
var state_36383__$1 = (function (){var statearr_36402 = state_36383;
(statearr_36402[(19)] = inst_36297__$1);

return statearr_36402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,(22),inst_36298);
} else {
if((state_val_36384 === (31))){
var inst_36381 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36383__$1,inst_36381);
} else {
if((state_val_36384 === (32))){
var inst_36337 = (state_36383[(16)]);
var inst_36342 = inst_36337.cljs$lang$protocol_mask$partition0$;
var inst_36343 = (inst_36342 & (64));
var inst_36344 = inst_36337.cljs$core$ISeq$;
var inst_36345 = (inst_36343) || (inst_36344);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36345)){
var statearr_36403_36486 = state_36383__$1;
(statearr_36403_36486[(1)] = (35));

} else {
var statearr_36404_36487 = state_36383__$1;
(statearr_36404_36487[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (40))){
var inst_36358 = (state_36383[(20)]);
var inst_36357 = (state_36383[(2)]);
var inst_36358__$1 = cljs.core.get.call(null,inst_36357,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36359 = cljs.core.get.call(null,inst_36357,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36360 = cljs.core.not_empty.call(null,inst_36358__$1);
var state_36383__$1 = (function (){var statearr_36405 = state_36383;
(statearr_36405[(20)] = inst_36358__$1);

(statearr_36405[(21)] = inst_36359);

return statearr_36405;
})();
if(cljs.core.truth_(inst_36360)){
var statearr_36406_36488 = state_36383__$1;
(statearr_36406_36488[(1)] = (41));

} else {
var statearr_36407_36489 = state_36383__$1;
(statearr_36407_36489[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (33))){
var state_36383__$1 = state_36383;
var statearr_36408_36490 = state_36383__$1;
(statearr_36408_36490[(2)] = false);

(statearr_36408_36490[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (13))){
var inst_36257 = (state_36383[(22)]);
var inst_36261 = cljs.core.chunk_first.call(null,inst_36257);
var inst_36262 = cljs.core.chunk_rest.call(null,inst_36257);
var inst_36263 = cljs.core.count.call(null,inst_36261);
var inst_36244 = inst_36262;
var inst_36245 = inst_36261;
var inst_36246 = inst_36263;
var inst_36247 = (0);
var state_36383__$1 = (function (){var statearr_36409 = state_36383;
(statearr_36409[(7)] = inst_36247);

(statearr_36409[(8)] = inst_36245);

(statearr_36409[(9)] = inst_36246);

(statearr_36409[(10)] = inst_36244);

return statearr_36409;
})();
var statearr_36410_36491 = state_36383__$1;
(statearr_36410_36491[(2)] = null);

(statearr_36410_36491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (22))){
var inst_36305 = (state_36383[(23)]);
var inst_36301 = (state_36383[(24)]);
var inst_36297 = (state_36383[(19)]);
var inst_36300 = (state_36383[(25)]);
var inst_36300__$1 = (state_36383[(2)]);
var inst_36301__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36300__$1);
var inst_36302 = (function (){var all_files = inst_36297;
var res_SINGLEQUOTE_ = inst_36300__$1;
var res = inst_36301__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36305,inst_36301,inst_36297,inst_36300,inst_36300__$1,inst_36301__$1,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35980_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35980_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36305,inst_36301,inst_36297,inst_36300,inst_36300__$1,inst_36301__$1,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36303 = cljs.core.filter.call(null,inst_36302,inst_36300__$1);
var inst_36304 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36305__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36304);
var inst_36306 = cljs.core.not_empty.call(null,inst_36305__$1);
var state_36383__$1 = (function (){var statearr_36411 = state_36383;
(statearr_36411[(23)] = inst_36305__$1);

(statearr_36411[(24)] = inst_36301__$1);

(statearr_36411[(26)] = inst_36303);

(statearr_36411[(25)] = inst_36300__$1);

return statearr_36411;
})();
if(cljs.core.truth_(inst_36306)){
var statearr_36412_36492 = state_36383__$1;
(statearr_36412_36492[(1)] = (23));

} else {
var statearr_36413_36493 = state_36383__$1;
(statearr_36413_36493[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (36))){
var state_36383__$1 = state_36383;
var statearr_36414_36494 = state_36383__$1;
(statearr_36414_36494[(2)] = false);

(statearr_36414_36494[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (41))){
var inst_36358 = (state_36383[(20)]);
var inst_36362 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36363 = cljs.core.map.call(null,inst_36362,inst_36358);
var inst_36364 = cljs.core.pr_str.call(null,inst_36363);
var inst_36365 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36364)].join('');
var inst_36366 = figwheel.client.utils.log.call(null,inst_36365);
var state_36383__$1 = state_36383;
var statearr_36415_36495 = state_36383__$1;
(statearr_36415_36495[(2)] = inst_36366);

(statearr_36415_36495[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (43))){
var inst_36359 = (state_36383[(21)]);
var inst_36369 = (state_36383[(2)]);
var inst_36370 = cljs.core.not_empty.call(null,inst_36359);
var state_36383__$1 = (function (){var statearr_36416 = state_36383;
(statearr_36416[(27)] = inst_36369);

return statearr_36416;
})();
if(cljs.core.truth_(inst_36370)){
var statearr_36417_36496 = state_36383__$1;
(statearr_36417_36496[(1)] = (44));

} else {
var statearr_36418_36497 = state_36383__$1;
(statearr_36418_36497[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (29))){
var inst_36305 = (state_36383[(23)]);
var inst_36337 = (state_36383[(16)]);
var inst_36301 = (state_36383[(24)]);
var inst_36297 = (state_36383[(19)]);
var inst_36303 = (state_36383[(26)]);
var inst_36300 = (state_36383[(25)]);
var inst_36333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36336 = (function (){var all_files = inst_36297;
var res_SINGLEQUOTE_ = inst_36300;
var res = inst_36301;
var files_not_loaded = inst_36303;
var dependencies_that_loaded = inst_36305;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36337,inst_36301,inst_36297,inst_36303,inst_36300,inst_36333,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36335){
var map__36419 = p__36335;
var map__36419__$1 = ((((!((map__36419 == null)))?((((map__36419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36419):map__36419);
var namespace = cljs.core.get.call(null,map__36419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36337,inst_36301,inst_36297,inst_36303,inst_36300,inst_36333,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36337__$1 = cljs.core.group_by.call(null,inst_36336,inst_36303);
var inst_36339 = (inst_36337__$1 == null);
var inst_36340 = cljs.core.not.call(null,inst_36339);
var state_36383__$1 = (function (){var statearr_36421 = state_36383;
(statearr_36421[(16)] = inst_36337__$1);

(statearr_36421[(28)] = inst_36333);

return statearr_36421;
})();
if(inst_36340){
var statearr_36422_36498 = state_36383__$1;
(statearr_36422_36498[(1)] = (32));

} else {
var statearr_36423_36499 = state_36383__$1;
(statearr_36423_36499[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (44))){
var inst_36359 = (state_36383[(21)]);
var inst_36372 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36359);
var inst_36373 = cljs.core.pr_str.call(null,inst_36372);
var inst_36374 = [cljs.core.str("not required: "),cljs.core.str(inst_36373)].join('');
var inst_36375 = figwheel.client.utils.log.call(null,inst_36374);
var state_36383__$1 = state_36383;
var statearr_36424_36500 = state_36383__$1;
(statearr_36424_36500[(2)] = inst_36375);

(statearr_36424_36500[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (6))){
var inst_36278 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36425_36501 = state_36383__$1;
(statearr_36425_36501[(2)] = inst_36278);

(statearr_36425_36501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (28))){
var inst_36303 = (state_36383[(26)]);
var inst_36330 = (state_36383[(2)]);
var inst_36331 = cljs.core.not_empty.call(null,inst_36303);
var state_36383__$1 = (function (){var statearr_36426 = state_36383;
(statearr_36426[(29)] = inst_36330);

return statearr_36426;
})();
if(cljs.core.truth_(inst_36331)){
var statearr_36427_36502 = state_36383__$1;
(statearr_36427_36502[(1)] = (29));

} else {
var statearr_36428_36503 = state_36383__$1;
(statearr_36428_36503[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (25))){
var inst_36301 = (state_36383[(24)]);
var inst_36317 = (state_36383[(2)]);
var inst_36318 = cljs.core.not_empty.call(null,inst_36301);
var state_36383__$1 = (function (){var statearr_36429 = state_36383;
(statearr_36429[(30)] = inst_36317);

return statearr_36429;
})();
if(cljs.core.truth_(inst_36318)){
var statearr_36430_36504 = state_36383__$1;
(statearr_36430_36504[(1)] = (26));

} else {
var statearr_36431_36505 = state_36383__$1;
(statearr_36431_36505[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (34))){
var inst_36352 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36352)){
var statearr_36432_36506 = state_36383__$1;
(statearr_36432_36506[(1)] = (38));

} else {
var statearr_36433_36507 = state_36383__$1;
(statearr_36433_36507[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (17))){
var state_36383__$1 = state_36383;
var statearr_36434_36508 = state_36383__$1;
(statearr_36434_36508[(2)] = recompile_dependents);

(statearr_36434_36508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (3))){
var state_36383__$1 = state_36383;
var statearr_36435_36509 = state_36383__$1;
(statearr_36435_36509[(2)] = null);

(statearr_36435_36509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (12))){
var inst_36274 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36436_36510 = state_36383__$1;
(statearr_36436_36510[(2)] = inst_36274);

(statearr_36436_36510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (2))){
var inst_36236 = (state_36383[(13)]);
var inst_36243 = cljs.core.seq.call(null,inst_36236);
var inst_36244 = inst_36243;
var inst_36245 = null;
var inst_36246 = (0);
var inst_36247 = (0);
var state_36383__$1 = (function (){var statearr_36437 = state_36383;
(statearr_36437[(7)] = inst_36247);

(statearr_36437[(8)] = inst_36245);

(statearr_36437[(9)] = inst_36246);

(statearr_36437[(10)] = inst_36244);

return statearr_36437;
})();
var statearr_36438_36511 = state_36383__$1;
(statearr_36438_36511[(2)] = null);

(statearr_36438_36511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (23))){
var inst_36305 = (state_36383[(23)]);
var inst_36301 = (state_36383[(24)]);
var inst_36297 = (state_36383[(19)]);
var inst_36303 = (state_36383[(26)]);
var inst_36300 = (state_36383[(25)]);
var inst_36308 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36310 = (function (){var all_files = inst_36297;
var res_SINGLEQUOTE_ = inst_36300;
var res = inst_36301;
var files_not_loaded = inst_36303;
var dependencies_that_loaded = inst_36305;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36308,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36309){
var map__36439 = p__36309;
var map__36439__$1 = ((((!((map__36439 == null)))?((((map__36439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36439):map__36439);
var request_url = cljs.core.get.call(null,map__36439__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36308,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36311 = cljs.core.reverse.call(null,inst_36305);
var inst_36312 = cljs.core.map.call(null,inst_36310,inst_36311);
var inst_36313 = cljs.core.pr_str.call(null,inst_36312);
var inst_36314 = figwheel.client.utils.log.call(null,inst_36313);
var state_36383__$1 = (function (){var statearr_36441 = state_36383;
(statearr_36441[(31)] = inst_36308);

return statearr_36441;
})();
var statearr_36442_36512 = state_36383__$1;
(statearr_36442_36512[(2)] = inst_36314);

(statearr_36442_36512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (35))){
var state_36383__$1 = state_36383;
var statearr_36443_36513 = state_36383__$1;
(statearr_36443_36513[(2)] = true);

(statearr_36443_36513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (19))){
var inst_36287 = (state_36383[(12)]);
var inst_36293 = figwheel.client.file_reloading.expand_files.call(null,inst_36287);
var state_36383__$1 = state_36383;
var statearr_36444_36514 = state_36383__$1;
(statearr_36444_36514[(2)] = inst_36293);

(statearr_36444_36514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (11))){
var state_36383__$1 = state_36383;
var statearr_36445_36515 = state_36383__$1;
(statearr_36445_36515[(2)] = null);

(statearr_36445_36515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (9))){
var inst_36276 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36446_36516 = state_36383__$1;
(statearr_36446_36516[(2)] = inst_36276);

(statearr_36446_36516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (5))){
var inst_36247 = (state_36383[(7)]);
var inst_36246 = (state_36383[(9)]);
var inst_36249 = (inst_36247 < inst_36246);
var inst_36250 = inst_36249;
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36250)){
var statearr_36447_36517 = state_36383__$1;
(statearr_36447_36517[(1)] = (7));

} else {
var statearr_36448_36518 = state_36383__$1;
(statearr_36448_36518[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (14))){
var inst_36257 = (state_36383[(22)]);
var inst_36266 = cljs.core.first.call(null,inst_36257);
var inst_36267 = figwheel.client.file_reloading.eval_body.call(null,inst_36266,opts);
var inst_36268 = cljs.core.next.call(null,inst_36257);
var inst_36244 = inst_36268;
var inst_36245 = null;
var inst_36246 = (0);
var inst_36247 = (0);
var state_36383__$1 = (function (){var statearr_36449 = state_36383;
(statearr_36449[(7)] = inst_36247);

(statearr_36449[(8)] = inst_36245);

(statearr_36449[(9)] = inst_36246);

(statearr_36449[(32)] = inst_36267);

(statearr_36449[(10)] = inst_36244);

return statearr_36449;
})();
var statearr_36450_36519 = state_36383__$1;
(statearr_36450_36519[(2)] = null);

(statearr_36450_36519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (45))){
var state_36383__$1 = state_36383;
var statearr_36451_36520 = state_36383__$1;
(statearr_36451_36520[(2)] = null);

(statearr_36451_36520[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (26))){
var inst_36305 = (state_36383[(23)]);
var inst_36301 = (state_36383[(24)]);
var inst_36297 = (state_36383[(19)]);
var inst_36303 = (state_36383[(26)]);
var inst_36300 = (state_36383[(25)]);
var inst_36320 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36322 = (function (){var all_files = inst_36297;
var res_SINGLEQUOTE_ = inst_36300;
var res = inst_36301;
var files_not_loaded = inst_36303;
var dependencies_that_loaded = inst_36305;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36320,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36321){
var map__36452 = p__36321;
var map__36452__$1 = ((((!((map__36452 == null)))?((((map__36452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36452):map__36452);
var namespace = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36320,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36323 = cljs.core.map.call(null,inst_36322,inst_36301);
var inst_36324 = cljs.core.pr_str.call(null,inst_36323);
var inst_36325 = figwheel.client.utils.log.call(null,inst_36324);
var inst_36326 = (function (){var all_files = inst_36297;
var res_SINGLEQUOTE_ = inst_36300;
var res = inst_36301;
var files_not_loaded = inst_36303;
var dependencies_that_loaded = inst_36305;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36320,inst_36322,inst_36323,inst_36324,inst_36325,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36305,inst_36301,inst_36297,inst_36303,inst_36300,inst_36320,inst_36322,inst_36323,inst_36324,inst_36325,state_val_36384,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36327 = setTimeout(inst_36326,(10));
var state_36383__$1 = (function (){var statearr_36454 = state_36383;
(statearr_36454[(33)] = inst_36325);

(statearr_36454[(34)] = inst_36320);

return statearr_36454;
})();
var statearr_36455_36521 = state_36383__$1;
(statearr_36455_36521[(2)] = inst_36327);

(statearr_36455_36521[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (16))){
var state_36383__$1 = state_36383;
var statearr_36456_36522 = state_36383__$1;
(statearr_36456_36522[(2)] = reload_dependents);

(statearr_36456_36522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (38))){
var inst_36337 = (state_36383[(16)]);
var inst_36354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36337);
var state_36383__$1 = state_36383;
var statearr_36457_36523 = state_36383__$1;
(statearr_36457_36523[(2)] = inst_36354);

(statearr_36457_36523[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (30))){
var state_36383__$1 = state_36383;
var statearr_36458_36524 = state_36383__$1;
(statearr_36458_36524[(2)] = null);

(statearr_36458_36524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (10))){
var inst_36257 = (state_36383[(22)]);
var inst_36259 = cljs.core.chunked_seq_QMARK_.call(null,inst_36257);
var state_36383__$1 = state_36383;
if(inst_36259){
var statearr_36459_36525 = state_36383__$1;
(statearr_36459_36525[(1)] = (13));

} else {
var statearr_36460_36526 = state_36383__$1;
(statearr_36460_36526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (18))){
var inst_36291 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36291)){
var statearr_36461_36527 = state_36383__$1;
(statearr_36461_36527[(1)] = (19));

} else {
var statearr_36462_36528 = state_36383__$1;
(statearr_36462_36528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (42))){
var state_36383__$1 = state_36383;
var statearr_36463_36529 = state_36383__$1;
(statearr_36463_36529[(2)] = null);

(statearr_36463_36529[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (37))){
var inst_36349 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36464_36530 = state_36383__$1;
(statearr_36464_36530[(2)] = inst_36349);

(statearr_36464_36530[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (8))){
var inst_36257 = (state_36383[(22)]);
var inst_36244 = (state_36383[(10)]);
var inst_36257__$1 = cljs.core.seq.call(null,inst_36244);
var state_36383__$1 = (function (){var statearr_36465 = state_36383;
(statearr_36465[(22)] = inst_36257__$1);

return statearr_36465;
})();
if(inst_36257__$1){
var statearr_36466_36531 = state_36383__$1;
(statearr_36466_36531[(1)] = (10));

} else {
var statearr_36467_36532 = state_36383__$1;
(statearr_36467_36532[(1)] = (11));

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
});})(c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29944__auto__,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____0 = (function (){
var statearr_36471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____1 = (function (state_36383){
while(true){
var ret_value__29946__auto__ = (function (){try{while(true){
var result__29947__auto__ = switch__29944__auto__.call(null,state_36383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29947__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__29948__auto__ = e36472;
var statearr_36473_36533 = state_36383;
(statearr_36473_36533[(5)] = ex__29948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36534 = state_36383;
state_36383 = G__36534;
continue;
} else {
return ret_value__29946__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29945__auto__;
})()
;})(switch__29944__auto__,c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30058__auto__ = (function (){var statearr_36474 = f__30057__auto__.call(null);
(statearr_36474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30056__auto__);

return statearr_36474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30058__auto__);
});})(c__30056__auto__,map__36229,map__36229__$1,opts,before_jsload,on_jsload,reload_dependents,map__36230,map__36230__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30056__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36537,link){
var map__36540 = p__36537;
var map__36540__$1 = ((((!((map__36540 == null)))?((((map__36540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36540):map__36540);
var file = cljs.core.get.call(null,map__36540__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36540,map__36540__$1,file){
return (function (p1__36535_SHARP_,p2__36536_SHARP_){
if(cljs.core._EQ_.call(null,p1__36535_SHARP_,p2__36536_SHARP_)){
return p1__36535_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36540,map__36540__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36546){
var map__36547 = p__36546;
var map__36547__$1 = ((((!((map__36547 == null)))?((((map__36547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36547):map__36547);
var match_length = cljs.core.get.call(null,map__36547__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36547__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36542_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36542_SHARP_);
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
var args36549 = [];
var len__27062__auto___36552 = arguments.length;
var i__27063__auto___36553 = (0);
while(true){
if((i__27063__auto___36553 < len__27062__auto___36552)){
args36549.push((arguments[i__27063__auto___36553]));

var G__36554 = (i__27063__auto___36553 + (1));
i__27063__auto___36553 = G__36554;
continue;
} else {
}
break;
}

var G__36551 = args36549.length;
switch (G__36551) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36549.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36556_SHARP_,p2__36557_SHARP_){
return cljs.core.assoc.call(null,p1__36556_SHARP_,cljs.core.get.call(null,p2__36557_SHARP_,key),p2__36557_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36558){
var map__36561 = p__36558;
var map__36561__$1 = ((((!((map__36561 == null)))?((((map__36561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36561):map__36561);
var f_data = map__36561__$1;
var file = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36563,files_msg){
var map__36570 = p__36563;
var map__36570__$1 = ((((!((map__36570 == null)))?((((map__36570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36570):map__36570);
var opts = map__36570__$1;
var on_cssload = cljs.core.get.call(null,map__36570__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36572_36576 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36573_36577 = null;
var count__36574_36578 = (0);
var i__36575_36579 = (0);
while(true){
if((i__36575_36579 < count__36574_36578)){
var f_36580 = cljs.core._nth.call(null,chunk__36573_36577,i__36575_36579);
figwheel.client.file_reloading.reload_css_file.call(null,f_36580);

var G__36581 = seq__36572_36576;
var G__36582 = chunk__36573_36577;
var G__36583 = count__36574_36578;
var G__36584 = (i__36575_36579 + (1));
seq__36572_36576 = G__36581;
chunk__36573_36577 = G__36582;
count__36574_36578 = G__36583;
i__36575_36579 = G__36584;
continue;
} else {
var temp__4657__auto___36585 = cljs.core.seq.call(null,seq__36572_36576);
if(temp__4657__auto___36585){
var seq__36572_36586__$1 = temp__4657__auto___36585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36572_36586__$1)){
var c__26807__auto___36587 = cljs.core.chunk_first.call(null,seq__36572_36586__$1);
var G__36588 = cljs.core.chunk_rest.call(null,seq__36572_36586__$1);
var G__36589 = c__26807__auto___36587;
var G__36590 = cljs.core.count.call(null,c__26807__auto___36587);
var G__36591 = (0);
seq__36572_36576 = G__36588;
chunk__36573_36577 = G__36589;
count__36574_36578 = G__36590;
i__36575_36579 = G__36591;
continue;
} else {
var f_36592 = cljs.core.first.call(null,seq__36572_36586__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36592);

var G__36593 = cljs.core.next.call(null,seq__36572_36586__$1);
var G__36594 = null;
var G__36595 = (0);
var G__36596 = (0);
seq__36572_36576 = G__36593;
chunk__36573_36577 = G__36594;
count__36574_36578 = G__36595;
i__36575_36579 = G__36596;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36570,map__36570__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36570,map__36570__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map