import TimeAgo from "javascript-time-ago";

interface CustomTimeAgo {
    date_num: number;
}

export const getCustomTimeAgo = ({ date_num }: CustomTimeAgo) => {
    if (date_num === undefined || date_num === null) {
        return "";
    } else {
        const timeAgo = new TimeAgo("en-US");
        const time_ago = timeAgo.format(date_num);
        return time_ago;
    }
};
