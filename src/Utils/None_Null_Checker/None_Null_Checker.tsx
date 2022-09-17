export const none_null_checker = (check: String | number) => {
    return (
        check === "none" ||
        check === "" ||
        check === null ||
        check === undefined
    );
};
