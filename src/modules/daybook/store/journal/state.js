export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Obi wan, Ahora yo soy el maestro',
            picture: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'No oses despreciar mi poder',
            picture: null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Y te lo impide Obi Wan! Mientes!',
            picture: null
        },
    ]
})