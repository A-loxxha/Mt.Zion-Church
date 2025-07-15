
  const updates = [
    {
      title: "New Midweek Fellowship Launch",
      date: "July 18, 2025",
      description: "Join us every Wednesday at 6PM for our new Midweek Fellowship starting this week. Come expectant!"
    },
    {
      title: "Children's Ministry Training",
      date: "July 22, 2025",
      description: "All volunteers are invited to attend this special training session after the second service."
    },
    {
      title: "Sermon Series: Walking in Purpose",
      date: "Ongoing",
      description: "Don’t miss our current series exploring what it truly means to walk in God’s purpose for your life."
    }
  ];

  const updateList = document.getElementById('update-list');

  updates.forEach(update => {
    const card = document.createElement('div');
    card.className = 'update-card';
    card.innerHTML = `
      <h3>${update.title}</h3>
      <small>${update.date}</small>
      <p>${update.description}</p>
    `;
    updateList.appendChild(card);
  });

