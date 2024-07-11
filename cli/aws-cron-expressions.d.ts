export declare const minuteExp = "(0?[0-9]|[1-5][0-9])";
export declare const hourExp = "(0?[0-9]|1[0-9]|2[0-3])";
export declare const dayOfMonthExp = "(0?[1-9]|[1-2][0-9]|3[0-1])";
export declare const monthExp = "(0?[1-9]|1[0-2]|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)";
export declare const dayOfWeekExp = "([1-7]|SUN|MON|TUE|WED|THU|FRI|SAT)";
export declare const yearExp = "((19[8-9][0-9])|(2[0-1][0-9][0-9]))";
export declare const numbers = "([0-9]*[1-9][0-9]*)";
export declare function dayOfWeekHash(): string;
export declare function minuteRegex(): string;
export declare function hourRegex(): string;
export declare function dayOfMonthRegex(): string;
export declare function monthRegex(): string;
export declare function dayOfWeekRegex(): string;
export declare function yearRegex(): string;
