
  const events = [
    {
      title: "Worship Night",
      date: "Friday, July 26 at 7:00 PM",
      description: "Join us for an evening of prayer, music, and worship at the church grounds."
    },
    {
      title: "Youth Camp 2025",
      date: "August 10–14, 2025",
      description: "A 5-day camp for teens and young adults focused on faith, fun, and fellowship."
    },
    {
      title: "Bible Study Retreat",
      date: "September 5–7, 2025",
      description: "An in-depth weekend of studying God's Word and fellowship in Naivasha."
    }
  ];

  const eventList = document.getElementById('event-list');

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>${event.date}</strong></p>
      <p>${event.description}</p>
    `;
    eventList.appendChild(card);
  });
