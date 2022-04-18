const quotes = [
  ' Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes. —Jack Handey',
  'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. —Will Ferrell',
  'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. —Michael Scott',
  'My Mama says that alligators are ornery because they got all them teeth and no toothbrush. —Bobby Boucher',
  'A day without sunshine is like, you know, night. —Steve Martin',
  'Eggs are fantastic for a fitness diet. If you don’t like the taste, just add cocoa, flour, sugar, butter, baking powder and cook at 350 for 30 minutes. —Anonymous',
  "Life is short. Drive fast and leave a sexy corpse. That's one of my mottos. —Stanley Hudson",
  'Do not take life too seriously. You will never get out of it alive. —Elbert Hubbard',
  'You only live once, but if you do it right, once is enough. ―Mae West',
  "If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it. ―W.C. Fields",
  "I love mankind... it's people I can't stand!! ― Charles M. Schulz",
  "Two things are infinite: the universe and human stupidity. And I'm not sure about the universe. ―Albert Einstein",
  "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted. —Kevin Malone",
  "As you get older, three things happen. The first is your memory goes, and I can't remember the other two. —Sir Norman Wisdom",
  "If you can't be kind, at least be vague. —Judith Martin",
  "Don't go around saying the world owes you a living. The world owes you nothing. It was here first. —Mark Twain",
  "Housework can't kill you, but why take the chance? —Phyllis Diller",
  'All you need in this life is ignorance and confidence — then success is sure. —Mark Twain',
  'Even if you are on the right track, you will get run over if you just sit there. —Will Rogers'
]

const randomQuote = () => {
  const newQuote = Math.floor(Math.random() * quotes.length)
  $('#home-display').html(`
        <div class="display">
            <h2>Thank you for becoming a user of Deadline!</h2> 
            <p>
            Take a moment to relax and enjoy some insightful quotes from some of the world's greatest minds. 
            <p>
        </div>
        <div class="display">
            <h5><i>${quotes[newQuote]}</i></h5>
            <button class="button" id="new-quote-btn">New Quote</button>
        </div>
    `)
}

module.exports = { randomQuote: randomQuote }
