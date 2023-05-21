const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getBadge(due) {
    const date = new Date(due);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const dayWeek = date.getDay();
    const dayFormatted = dayOfWeek[dayWeek];
    if(hours === 0 && minutes === 0) return {text: dayFormatted};
    return {text: `${hours}:${minutesFormatted}, ${dayFormatted}`, color: 'red'};
}

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return t.card('all').then(function (card) {
            if(!card.due) return [];
            return [getBadge(card.due)];
        });
    }
})
