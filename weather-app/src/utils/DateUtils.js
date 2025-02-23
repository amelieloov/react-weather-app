export const formatDate = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("sv-SV", {
        month: "long",
        day: "numeric",
      });
};

export const formatWeekday = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("sv-SV", {
        weekday: "long",
    });
}

export const formatTime = (date) => {
    const now = new Date(date);
    return now.toLocaleDateString("sv-SV", {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
    });
}