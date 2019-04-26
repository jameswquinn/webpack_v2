// @ts-check
import * as dayjs from "dayjs";
// dayjs ⚠️ requires relativeTime plugin
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function timeago() {
  return alert(dayjs(1556216496152).fromNow());
  // => "5 days ago" ⚠️  the rounding method of this plugin is different from moment.js and date-fns, use with care.
}

timeago();



