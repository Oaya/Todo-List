exports.getDate =()=>{ 
    const currentDay = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    return today = currentDay.toLocaleDateString('en-US', options);
};