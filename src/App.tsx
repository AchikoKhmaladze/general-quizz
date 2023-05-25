import { useEffect, useState } from "react";
import { FC } from "react";
import "./index.css";
import axios from "axios";

const App: FC = () => {
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of France?",
      options: [
        { id: 0, text: "Paris", isCorrect: true },
        { id: 1, text: "London", isCorrect: false },
        { id: 2, text: "Berlin", isCorrect: false },
        { id: 3, text: "Rome", isCorrect: false },
      ],
    },
    {
      text: "Who wrote the novel 'To Kill a Mockingbird'?",
      options: [
        { id: 0, text: "Harper Lee", isCorrect: true },
        { id: 1, text: "Mark Twain", isCorrect: false },
        { id: 2, text: "F. Scott Fitzgerald", isCorrect: false },
        { id: 3, text: "J.D. Salinger", isCorrect: false },
      ],
    },
    {
      text: "What is the largest country by land area?",
      options: [
        { id: 0, text: "Russia", isCorrect: true },
        { id: 1, text: "China", isCorrect: false },
        { id: 2, text: "Canada", isCorrect: false },
        { id: 3, text: "United States", isCorrect: false },
      ],
    },
    {
      text: "Who painted the 'Starry Night'?",
      options: [
        { id: 0, text: "Vincent van Gogh", isCorrect: true },
        { id: 1, text: "Pablo Picasso", isCorrect: false },
        { id: 2, text: "Leonardo da Vinci", isCorrect: false },
        { id: 3, text: "Claude Monet", isCorrect: false },
      ],
    },
    {
      text: "What is the symbol for the chemical element oxygen?",
      options: [
        { id: 0, text: "O", isCorrect: true },
        { id: 1, text: "Ox", isCorrect: false },
        { id: 2, text: "Om", isCorrect: false },
        { id: 3, text: "On", isCorrect: false },
      ],
    },
    {
      text: "What is the largest ocean on Earth?",
      options: [
        { id: 0, text: "Atlantic Ocean", isCorrect: false },
        { id: 1, text: "Indian Ocean", isCorrect: false },
        { id: 2, text: "Arctic Ocean", isCorrect: false },
        { id: 3, text: "Pacific Ocean", isCorrect: true },
      ],
    },
    {
      text: "Who painted the Mona Lisa?",
      options: [
        { id: 0, text: "Pablo Picasso", isCorrect: false },
        { id: 1, text: "Leonardo da Vinci", isCorrect: true },
        { id: 2, text: "Vincent van Gogh", isCorrect: false },
        { id: 3, text: "Michelangelo", isCorrect: false },
      ],
    },
    {
      text: "What is the chemical symbol for gold?",
      options: [
        { id: 0, text: "Go", isCorrect: false },
        { id: 1, text: "Au", isCorrect: true },
        { id: 2, text: "Ag", isCorrect: false },
        { id: 3, text: "Ge", isCorrect: false },
      ],
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: "Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },
    {
      text: "Who invented the telephone?",
      options: [
        { id: 0, text: "Alexander Graham Bell", isCorrect: true },
        { id: 1, text: "Thomas Edison", isCorrect: false },
        { id: 2, text: "Nikola Tesla", isCorrect: false },
        { id: 3, text: "Albert Einstein", isCorrect: false },
      ],
    },
    {
      text: "What is the largest organ in the human body?",
      options: [
        { id: 0, text: "Liver", isCorrect: false },
        { id: 1, text: "Heart", isCorrect: false },
        { id: 2, text: "Brain", isCorrect: false },
        { id: 3, text: "Skin", isCorrect: true },
      ],
    },
    {
      text: "Who is the author of 'The Great Gatsby'?",
      options: [
        { id: 0, text: "F. Scott Fitzgerald", isCorrect: true },
        { id: 1, text: "Ernest Hemingway", isCorrect: false },
        { id: 2, text: "J.D. Salinger", isCorrect: false },
        { id: 3, text: "Mark Twain", isCorrect: false },
      ],
    },
    {
      text: "What is the largest planet in the solar system?",
      options: [
        { id: 0, text: "Jupiter", isCorrect: true },
        { id: 1, text: "Saturn", isCorrect: false },
        { id: 2, text: "Neptune", isCorrect: false },
        { id: 3, text: "Mars", isCorrect: false },
      ],
    },
    {
      text: "Who painted the 'Sistine Chapel' ceiling?",
      options: [
        { id: 0, text: "Leonardo da Vinci", isCorrect: false },
        { id: 1, text: "Michelangelo", isCorrect: true },
        { id: 2, text: "Raphael", isCorrect: false },
        { id: 3, text: "Donatello", isCorrect: false },
      ],
    },
    {
      text: "What is the symbol for the chemical element sodium?",
      options: [
        { id: 0, text: "S", isCorrect: false },
        { id: 1, text: "So", isCorrect: false },
        { id: 2, text: "Na", isCorrect: true },
        { id: 3, text: "N", isCorrect: false },
      ],
    },
    {
      text: "Who is the author of the 'Harry Potter' book series?",
      options: [
        { id: 0, text: "J.R.R. Tolkien", isCorrect: false },
        { id: 1, text: "J.K. Rowling", isCorrect: true },
        { id: 2, text: "C.S. Lewis", isCorrect: false },
        { id: 3, text: "George R.R. Martin", isCorrect: false },
      ],
    },
    {
      text: "What is the chemical symbol for silver?",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "Ag", isCorrect: true },
        { id: 2, text: "Au", isCorrect: false },
        { id: 3, text: "Sr", isCorrect: false },
      ],
    },
    {
      text: "Who is the Greek god of the sea?",
      options: [
        { id: 0, text: "Hades", isCorrect: false },
        { id: 1, text: "Poseidon", isCorrect: true },
        { id: 2, text: "Zeus", isCorrect: false },
        { id: 3, text: "Apollo", isCorrect: false },
      ],
    },
    {
      text: "What is the tallest mountain in North America?",
      options: [
        { id: 0, text: "Mount Everest", isCorrect: false },
        { id: 1, text: "Mount Kilimanjaro", isCorrect: false },
        { id: 2, text: "Mount McKinley", isCorrect: true },
        { id: 3, text: "Mount Fuji", isCorrect: false },
      ],
    },
    {
      text: "Who wrote the play 'Hamlet'?",
      options: [
        { id: 0, text: "William Shakespeare", isCorrect: true },
        { id: 1, text: "George Bernard Shaw", isCorrect: false },
        { id: 2, text: "Anton Chekhov", isCorrect: false },
        { id: 3, text: "Oscar Wilde", isCorrect: false },
      ],
    },
    {
      text: "What is the chemical symbol for calcium?",
      options: [
        { id: 0, text: "Cu", isCorrect: false },
        { id: 1, text: "Ca", isCorrect: true },
        { id: 2, text: "Co", isCorrect: false },
        { id: 3, text: "C", isCorrect: false },
      ],
    },
    {
      text: "Which country is home to the kangaroo?",
      options: [
        { id: 0, text: "Australia", isCorrect: true },
        { id: 1, text: "Brazil", isCorrect: false },
        { id: 2, text: "South Africa", isCorrect: false },
        { id: 3, text: "Canada", isCorrect: false },
      ],
    },
    {
      text: "Who won the FIFA World Cup in 2018?",
      options: [
        { id: 0, text: "France", isCorrect: true },
        { id: 1, text: "Brazil", isCorrect: false },
        { id: 2, text: "Germany", isCorrect: false },
        { id: 3, text: "Argentina", isCorrect: false },
      ],
    },
    {
      text: "Who is the all-time leading goal scorer in international football?",
      options: [
        { id: 0, text: "Cristiano Ronaldo", isCorrect: false },
        { id: 1, text: "Lionel Messi", isCorrect: false },
        { id: 2, text: "Neymar", isCorrect: false },
        { id: 3, text: "Miroslav Klose", isCorrect: true },
      ],
    },
    {
      text: "Which team has won the UEFA Champions League the most times?",
      options: [
        { id: 0, text: "Real Madrid", isCorrect: true },
        { id: 1, text: "Barcelona", isCorrect: false },
        { id: 2, text: "Bayern Munich", isCorrect: false },
        { id: 3, text: "AC Milan", isCorrect: false },
      ],
    },
  ];

  const [score, setScore] = useState(0);
  const [quests, setQuests] = useState(1);
  const [answers, setAnswers] = useState(0);
  const [show, setShow] = useState(true);
  const [currentQuest, setCurrentQuest] = useState(1);
  const Check = (correct) => {
    setAnswers(answers + 1);
    setQuests(quests + 1);
    if (correct) {
      setScore(score + 1);
    } else {
      return;
    }
  };

  const checkLastQuestion = () => {
    if (currentQuest === questions.length) {
      setShow(false);
    }
  };

  return (
    <>
      <div className="h-full w-full  linear bg-gradient-to-r from-sky-900 to-blue-900">
        <div className="flex justify-center items-center px-5 h-screen">
          {show ? (
            <div className="px-5 pb-10 pt-6 items-center text-center flex flex-col rounded-2xl  w-full sm:w-[600px] shadow-xl hover:shadow-2xl cursor-pointer transition duration-200 ease-out transform bg-gray-400">
              <h1 className="text-3xl">Current score: {score}</h1>
              <h1 className="text-2xl font-semibold mt-5 text-blue-800">
                Questions {quests} out of {questions.length}
              </h1>
              <p className="mt-5 text-2xl">{questions[answers].text}</p>
              <div className="mt-[60px] flex w-full flex-col gap-[15px]">
                {questions[answers].options.map((item) => (
                  <p
                    onClick={() => {
                      Check(item.isCorrect);
                      checkLastQuestion();
                      setCurrentQuest(currentQuest + 1);
                    }}
                    className="hover:scale-[1.02] backface ease-out text-2xl shadow-md transition transform duration-200 hover:shadow-xl text-center rounded-xl cursor-pointer py-3 bg-white"
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="sm:hover:shadow-xl shadow-none transition transform duration-200 flex items-center rounded-xl flex-col px-7 sm:px-10 sm:py-7 py-6 text-center  bg-slate-500">
              <h1 className="sm:text-3xl text-2xl text-white ">
                Final Results
              </h1>
              <p className="sm:text-2xl text-xl mt-3 text-white ">
                {score} out of {questions.length} correct -{" "}
                {`(${((score * 100) / questions.length).toFixed()}%)`}
              </p>
              <button
                onClick={() => {
                  setShow(true);
                  setAnswers(0);
                  setScore(0);
                  setQuests(1);
                  setCurrentQuest(1);
                }}
                className="cursor-pointer p-2 font-semibold rounded-xl text-lg text-white w-[150px] mt-9 bg-blue-600"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
