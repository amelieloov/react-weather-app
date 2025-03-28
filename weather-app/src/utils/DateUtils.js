export const formatDate = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("sv-SV", {
        month: "short",
        day: "numeric",
      });
};

export const formatWeekday = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("sv-SV", {
        weekday: "long",
    });
}

export const formatDateWithTime = (date) => {
    const date2 = new Date(date); 
    return date2.toLocaleDateString("sv-SV", {
        month: "short",
        day: "numeric",
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
    });
}