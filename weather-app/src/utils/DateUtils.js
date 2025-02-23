export const formatDate = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("en-US", {
        month: "long", // "February"
        day: "numeric", // 23
      });
};

export const formatWeekday = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("en-US", {
        weekday: "long", // "Monday"
    });
}