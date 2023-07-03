const pDateArray = document.querySelectorAll(".card-created-at");
pDateArray.forEach((pDate) => {
    const dateString = pDate.innerHTML;
    const date = new Date(dateString);

    const dayOfWeek = date.toLocaleDateString("pt-BR", { weekday: "long" });
    const formattedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1); 

    const day = date.toLocaleDateString("pt-BR", { day: "numeric" });
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.toLocaleString("pt-BR", { year: "numeric" });

    const formattedDateString = `${formattedDayOfWeek}, ${day} de ${month} de ${year}`;
    pDate.innerHTML = formattedDateString;
});