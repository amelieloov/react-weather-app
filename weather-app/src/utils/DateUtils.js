export const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // or any other formatting
};