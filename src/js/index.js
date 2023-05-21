const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getText(due) {
    const date = new Date(due)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const dayWeek = date.getDay();
    const dayFormatted = dayWeek[dayWeek];
    return `${hours}:${minutesFormatted}, ${dayFormatted};`

}

function wrongTime(due) {
    if(due === null) return true;
    const date = new Date(due);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours === 0 && minutes === 0;
}

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return t.card('all').then(function (card) {
            if(wrongTime(card.due)) return [];
            return [{
                text: getText(card.due)
            }];
        });
    }
})
