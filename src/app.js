
//import * as dayjs from "dayjs";
const dayjs = require("dayjs");
// dayjs ⚠️ requires relativeTime plugin
//import relativeTime from "dayjs/plugin/relativeTime";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function timeago() {
  return alert(dayjs(1556288914222).fromNow());
  // => "5 days ago" ⚠️  the rounding method of this plugin is different from moment.js and date-fns, use with care.
}



timeago();


