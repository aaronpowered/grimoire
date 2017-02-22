// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.string');
goog.require('cljs.core');
infinitelives.utils.string.ends_with_QMARK_ = (function infinitelives$utils$string$ends_with_QMARK_(str,end){
var len = str.length;
var end_len = end.length;
return cljs.core.not_EQ_.call(null,(-1),str.indexOf(end,(len - end_len)));
});
infinitelives.utils.string.starts_with_QMARK_ = (function infinitelives$utils$string$starts_with_QMARK_(str,start){
return cljs.core._EQ_.call(null,(0),str.indexOf(start));
});
infinitelives.utils.string.url_keyword = (function infinitelives$utils$string$url_keyword(url){
return cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.last.call(null,url.split("/")).split(".")));
});
infinitelives.utils.string.get_extension = (function infinitelives$utils$string$get_extension(path){
return cljs.core.last.call(null,path.split("."));
});

//# sourceMappingURL=string.js.map