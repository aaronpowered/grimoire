// Compiled by ClojureScript 1.7.228 {}
goog.provide('infinitelives.utils.sound');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('infinitelives.utils.string');
infinitelives.utils.sound.audio_context = (cljs.core.truth_(window.AudioContext)?(new window.AudioContext()):(new window.webkitAudioContext()));
infinitelives.utils.sound.default_gain = 0.7;
if(typeof infinitelives.utils.sound._BANG_sounds !== 'undefined'){
} else {
infinitelives.utils.sound._BANG_sounds = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Initiates a download of the url as a sound. Returns a channel.
 *   When loaded and decoded, sends a decoded buffer object down the
 *   channel. This buffer can be used directly as a sound source
 */
infinitelives.utils.sound.load_sound = (function infinitelives$utils$sound$load_sound(url){
var req = (new XMLHttpRequest());
var c = cljs.core.async.chan.call(null);
req.open("GET",url,true);

req.responseType = "arraybuffer";

req.onload = ((function (req,c){
return (function (){
return infinitelives.utils.sound.audio_context.decodeAudioData(req.response,((function (req,c){
return (function (p1__32832_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32832_SHARP_);
});})(req,c))
);
});})(req,c))
;

req.send();

return c;
});
infinitelives.utils.sound.register_sound_BANG_ = (function infinitelives$utils$sound$register_sound_BANG_(url,obj){
return cljs.core.swap_BANG_.call(null,infinitelives.utils.sound._BANG_sounds,cljs.core.assoc,infinitelives.utils.string.url_keyword.call(null,url),obj);
});
infinitelives.utils.sound.get_sound = (function infinitelives$utils$sound$get_sound(key){
return key.call(null,cljs.core.deref.call(null,infinitelives.utils.sound._BANG_sounds));
});
/**
 * pass this a buffer, and an optional gain parameter, and the
 *   sound will be played to the speakers
 */
infinitelives.utils.sound.play_sound = (function infinitelives$utils$sound$play_sound(var_args){
var args32833 = [];
var len__27062__auto___32841 = arguments.length;
var i__27063__auto___32842 = (0);
while(true){
if((i__27063__auto___32842 < len__27062__auto___32841)){
args32833.push((arguments[i__27063__auto___32842]));

var G__32843 = (i__27063__auto___32842 + (1));
i__27063__auto___32842 = G__32843;
continue;
} else {
}
break;
}

var G__32838 = args32833.length;
switch (G__32838) {
case 1:
return infinitelives.utils.sound.play_sound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__27081__auto__ = (new cljs.core.IndexedSeq(args32833.slice((2)),(0)));
return infinitelives.utils.sound.play_sound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27081__auto__);

}
});

infinitelives.utils.sound.play_sound.cljs$core$IFn$_invoke$arity$variadic = (function (buff,g,p__32839){
var vec__32840 = p__32839;
var loop_flag = cljs.core.nth.call(null,vec__32840,(0),null);
var source = infinitelives.utils.sound.audio_context.createBufferSource();
var gain = infinitelives.utils.sound.audio_context.createGain();
if(cljs.core.truth_(loop_flag)){
source.loop = true;
} else {
source.loop = false;
}

source.buffer = (((buff instanceof cljs.core.Keyword))?infinitelives.utils.sound.get_sound.call(null,buff):buff);

source.connect(gain);

gain.connect(infinitelives.utils.sound.audio_context.destination);

gain.gain.value = g;

source.start((0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,gain], null);
});

infinitelives.utils.sound.play_sound.cljs$lang$applyTo = (function (seq32834){
var G__32835 = cljs.core.first.call(null,seq32834);
var seq32834__$1 = cljs.core.next.call(null,seq32834);
var G__32836 = cljs.core.first.call(null,seq32834__$1);
var seq32834__$2 = cljs.core.next.call(null,seq32834__$1);
return infinitelives.utils.sound.play_sound.cljs$core$IFn$_invoke$arity$variadic(G__32835,G__32836,seq32834__$2);
});

infinitelives.utils.sound.play_sound.cljs$core$IFn$_invoke$arity$1 = (function (buff){
return infinitelives.utils.sound.play_sound.call(null,buff,infinitelives.utils.sound.default_gain);
});

infinitelives.utils.sound.play_sound.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=sound.js.map