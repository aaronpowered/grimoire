// Compiled by ClojureScript 1.7.228 {}
goog.provide('fressian_cljs.fns');
goog.require('cljs.core');
goog.require('fressian_cljs.uuid');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
fressian_cljs.fns.expected = (function fressian_cljs$fns$expected(var_args){
var args27651 = [];
var len__27062__auto___27654 = arguments.length;
var i__27063__auto___27655 = (0);
while(true){
if((i__27063__auto___27655 < len__27062__auto___27654)){
args27651.push((arguments[i__27063__auto___27655]));

var G__27656 = (i__27063__auto___27655 + (1));
i__27063__auto___27655 = G__27656;
continue;
} else {
}
break;
}

var G__27653 = args27651.length;
switch (G__27653) {
case 2:
return fressian_cljs.fns.expected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fressian_cljs.fns.expected.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27651.length)].join('')));

}
});

fressian_cljs.fns.expected.cljs$core$IFn$_invoke$arity$2 = (function (expected,ch){
throw goog.string.format("expected %s at %d",expected,ch);
});

fressian_cljs.fns.expected.cljs$core$IFn$_invoke$arity$3 = (function (expected,ch,got){
throw goog.string.format("expected %s at %d, got %s",expected,ch,got);
});

fressian_cljs.fns.expected.cljs$lang$maxFixedArity = 3;
fressian_cljs.fns.uuid_to_byte_array = (function fressian_cljs$fns$uuid_to_byte_array(uuid){
return fressian_cljs.uuid.parse.call(null,uuid.uuid);
});
fressian_cljs.fns.create_array_from_typed = (function fressian_cljs$fns$create_array_from_typed(array_buffer_view){
var arr = (new Array(array_buffer_view.length));
var n__26907__auto___27658 = cljs.core.count.call(null,arr);
var n_27659 = (0);
while(true){
if((n_27659 < n__26907__auto___27658)){
(arr[n_27659] = (array_buffer_view[n_27659]));

var G__27660 = (n_27659 + (1));
n_27659 = G__27660;
continue;
} else {
}
break;
}

return arr;
});
fressian_cljs.fns.byte_array_to_uuid = (function fressian_cljs$fns$byte_array_to_uuid(bytes){
var b_array = (((bytes instanceof Uint8Array))?fressian_cljs.fns.create_array_from_typed.call(null,bytes):bytes);
return (new cljs.core.UUID(clojure.string.join.call(null,"-",fressian_cljs.uuid.unparse.call(null,b_array)),null));
});
fressian_cljs.fns.read_utf8_chars = (function fressian_cljs$fns$read_utf8_chars(source,offset,length){
var buf = (new Array());
var pos_27661 = (0);
while(true){
var ch_27662 = ((source[pos_27661]) & (255));
var ch_GT__GT_4_27663 = (ch_27662 >> (4));
if((pos_27661 < length)){
if((((0) <= ch_GT__GT_4_27663)) && ((ch_GT__GT_4_27663 <= (7)))){
buf.push(ch_27662);

var G__27664 = (pos_27661 + (1));
pos_27661 = G__27664;
continue;
} else {
if((((12) <= ch_GT__GT_4_27663)) && ((ch_GT__GT_4_27663 <= (13)))){
var ch1_27665 = (source[(pos_27661 + (1))]);
buf.push((((ch_27662 & (31)) << (6)) | (ch1_27665 & (63))));

var G__27666 = (pos_27661 + (2));
pos_27661 = G__27666;
continue;
} else {
if(cljs.core._EQ_.call(null,ch_GT__GT_4_27663,(14))){
var ch1_27667 = (source[(pos_27661 + (1))]);
var ch2_27668 = (source[(pos_27661 + (2))]);
buf.push(((((ch_27662 & (15)) << (12)) | ((ch1_27667 & (63)) << (6))) | (ch2_27668 & (63))));

var G__27669 = (pos_27661 + (3));
pos_27661 = G__27669;
continue;
} else {
throw goog.string.format("Invalid UTF-8: %d",ch_27662);

}
}
}
} else {
}
break;
}

return String.fromCharCode.apply(null,buf);
});
fressian_cljs.fns.utf8_encoding_size = (function fressian_cljs$fns$utf8_encoding_size(ch){
if((ch <= (127))){
return (1);
} else {
if((ch > (2047))){
return (2);
} else {
return (3);

}
}
});
fressian_cljs.fns.buffer_string_chunk_utf8 = (function fressian_cljs$fns$buffer_string_chunk_utf8(s,start,buf){
var string_pos = start;
var buffer_pos = (0);
while(true){
if((string_pos < s.length)){
var ch = s.charCodeAt(string_pos);
var encoding_size = fressian_cljs.fns.utf8_encoding_size.call(null,ch);
if(((buffer_pos + encoding_size) <= buf.length)){
var G__27671_27672 = encoding_size;
switch (G__27671_27672) {
case (1):
(buf[buffer_pos] = ch);

break;
case (2):
(buf[buffer_pos] = ((192) | ((ch >> (6)) & (31))));

(buf[(buffer_pos + (1))] = ((128) | ((ch >> (0)) & (63))));

break;
case (3):
(buf[buffer_pos] = ((224) | ((ch >> (12)) & (15))));

(buf[(buffer_pos + (1))] = ((128) | ((ch >> (6)) & (63))));

(buf[(buffer_pos + (2))] = ((128) | ((ch >> (0)) & (63))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(encoding_size)].join('')));

}

var G__27674 = (string_pos + (1));
var G__27675 = (buffer_pos + encoding_size);
string_pos = G__27674;
buffer_pos = G__27675;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string_pos,buffer_pos], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string_pos,buffer_pos], null);
}
break;
}
});

//# sourceMappingURL=fns.js.map