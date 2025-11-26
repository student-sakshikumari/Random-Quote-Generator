const quotes=["Don't compare your journey with others. Focus on your own growth.",
  "Consistency beats talent every single time.",
  "Discipline is choosing what you want most over what you want now.",
  "You don't have to be perfect to start, you just have to start.",
  "The best way to predict your future is to create it.",
  "Small progress is still progress.",
  "Dream big, work hard, stay humble.",
  "You learn more from failure than from success.",
  "Every expert was once a beginner.",
  "Your mindset determines your reality.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t come from what you do occasionally, but from what you do consistently.",
  "Be stronger than your excuses.",
  "Start where you are, use what you have, do what you can.",
  "You are capable of more than you think.",
  "If it doesn’t challenge you, it won’t change you.",
  "Work hard in silence, let your success make the noise.",
  "Growth happens outside your comfort zone.",
  "Don't be afraid to fail. Be afraid not to try.",
  "Stay patient and trust your journey.",
  "The secret of getting ahead is getting started.",
  "Your future self is watching you. Don’t disappoint them.",
  "Discipline is the bridge between goals and accomplishment.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Believe you can, and you’re halfway there.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until it’s done.",
  "Winners are not those who never fail, but those who never quit.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Keep going. Everything you need will come at the perfect time."];

  const button = document.querySelector('button');
  const quote = document.querySelector('h1');

  button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*30);
    quote.textContent=quotes[index]
  })