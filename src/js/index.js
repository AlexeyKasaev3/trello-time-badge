const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getBadge(due) {
    const date = new Date(due);
    const today = new Date();
    const difference = date.getTime() - today.getTime();
    const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const dayWeek = date.getDay();
    const dayFormatted = dayOfWeek[dayWeek];
    if(hours === 0 && minutes === 0) return {text: `${dayFormatted} ${daysDifference}d`};
    return {text: `${hours}:${minutesFormatted}, ${dayFormatted} ${daysDifference}d`, color: 'red'};
}

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return t.card('all').then(function (card) {
            if(!card.due) return [];
            return [getBadge(card.due)];
        });
    }
})
