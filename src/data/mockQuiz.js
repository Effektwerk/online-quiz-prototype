// src/data/mockQuiz.js
export const quizData = {
    quizId: 'daily-2024-08-15',
    quizDate: '2024-08-15',
    category: 'General Knowledge',
    questions: [
      {
        id: 1,
        question_text: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        correct_answer_index: 1,
        image_url: "https://images.unsplash.com/photo-1589182373726-e4f64fa2ee6e?q=80&w=400&auto=format&fit=crop", // Cropped
        image_prompt: "A majestic view of Mount Everest peak with blue sky."
      },
      {
        id: 2,
        question_text: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Saturn", "Mars", "Venus"],
        correct_answer_index: 2,
        image_url: "https://images.unsplash.com/photo-1611275577079-6d6a64f089f0?q=80&w=400&auto=format&fit=crop", // Cropped
        image_prompt: "A realistic depiction of the planet Mars showing its reddish surface."
      },
      {
        id: 3,
        question_text: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lime"],
        correct_answer_index: 2,
        image_url: "https://images.unsplash.com/photo-1598511806226-f360b18f9669?q=80&w=400&auto=format&fit=crop", // Cropped
        image_prompt: "A bowl of freshly made guacamole with tortilla chips."
      },
       // Add 7 more similar questions for a total of 10
       {
        id: 4,
        question_text: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Raphael", "Donatello", "Leonardo da Vinci"],
        correct_answer_index: 3,
        image_url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Close up of the Mona Lisa painting."
      },
       {
        id: 5,
        question_text: "What is the chemical symbol for Gold?",
        options: ["Go", "Ag", "Au", "Gd"],
        correct_answer_index: 2,
        image_url: "https://images.unsplash.com/photo-1589762197801-fe0720466853?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Shiny gold bars stacked."
      },
       {
        id: 6,
        question_text: "What currency is used in Japan?",
        options: ["Dollar", "Yen", "Won", "Euro"],
        correct_answer_index: 1,
        image_url: "https://images.unsplash.com/photo-1534961980173-5f7a5a2f0669?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Japanese Yen banknotes and coins."
      },
       {
        id: 7,
        question_text: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct_answer_index: 3,
        image_url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Expansive view of the Pacific Ocean from above."
      },
       {
        id: 8,
        question_text: "In which sport would you perform a slam dunk?",
        options: ["Tennis", "Basketball", "Volleyball", "Soccer"],
        correct_answer_index: 1,
        image_url: "https://images.unsplash.com/photo-1518608157484-f6b4f79a01a8?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Action shot of a basketball player performing a slam dunk."
      },
       {
        id: 9,
        question_text: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correct_answer_index: 3,
        image_url: "https://images.unsplash.com/photo-1572076016706-4ce718cdb5b9?q=80&w=400&auto=format&fit=crop",
        image_prompt: "Parliament Hill in Ottawa, Canada."
      },
       {
        id: 10,
        question_text: "Which country is famous for the Eiffel Tower?",
        options: ["Italy", "Spain", "France", "Germany"],
        correct_answer_index: 2,
        image_url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400&auto=format&fit=crop",
        image_prompt: "The Eiffel Tower in Paris, France."
      }
    ]
  };
