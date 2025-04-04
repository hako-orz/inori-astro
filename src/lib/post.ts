export function formatDate(dateString: string | Date) {
    const now = new Date();
    const date = new Date(dateString);

    let formatDate = '';

    if(now.getFullYear() - date.getFullYear() !== 0) {
        formatDate = `${now.getFullYear() - date.getFullYear()} Year Ago.`;
    } else if(now.getMonth() - date.getMonth() !== 0) {
        formatDate = `${now.getMonth() - date.getMonth()} Month Ago.`;
    } else if(now.getDate() - date.getDate() !== 0) {
        formatDate = `${now.getDate() - date.getDate()} Month Ago.`;
    } else {
        formatDate = 'Today';
    }

    return {
        formatDate,
        date: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }
}