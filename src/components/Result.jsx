import React from "react";

export const Result = (props, question, correct) => {
  const allQuest = props.question.length;
  return (
    <div className="h-screen  flex flex-col items-center justify-center ">
      <div className=" bg-amber-200 py-8 px-8 rounded min-h-72 shadow-cyan-500 shadow-lg flex  flex-col items-center justify-center gap-12">
        <p className=" text-3xl text-center">Поздравляю</p>
        {props.correct == allQuest ? (
          <p className="text-3xl text-center">
            Вы живёте во вселенной Гарри Поттер
          </p>
        ) : (
          ""
        )}
          {props.correct > (allQuest - 6) ? (
          <p className="text-3xl text-center">
            Вы отлично знаете Гарри Поттер. Молодец :)
          </p>
        ) : (
          ""
        )}
        {props.correct > (allQuest - 10) ? (
          <p className="text-3xl text-center">
            Вы хорошо знаете Гарри Поттер.
          </p>
        ) : (
          ""
        )}
        {props.correct > (allQuest - 15) ? (
          <p className="text-3xl text-center">
            Вам стоит узнать о ней что то новое
          </p>
        ) : (
          ""
        )}
          {props.correct > (allQuest - 20) ? (
          <p className="text-3xl text-center">
            Вы ужасно знаете Гарри Поттер :(
          </p>
        ) : (
          ""
        )}
            {props.correct == 0 ? (
          <p className="text-3xl text-center">
            Вы ужасны. Не надо так обманывать :(
          </p>
        ) : (
          ""
        )}
        <p className=" text-2xl text-center">
          Вы правильно ответили на {props.correct} вопросов из {allQuest}
        </p>
        <a href="/">
          <button className="p-2 bg-yellow-300 rounded">
            Попробывать снова :)
          </button>
        </a>
      </div>
    </div>
  );
};
