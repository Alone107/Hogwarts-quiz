import React from "react";
import hog from "../assets/png.png";

export const Pismo = (props) => {
  return (
    <div className="bg-yellow-300/95 p-6 py-6 h-screen max-w-4xl flex flex-col items-center gap-8  sm:gap-16 rounded-lg">
      <img src={hog} alt="" className=" w-52 h-52 " />
      <h2 className="text-3xl text-center">Уважаемая Анна Щеглова,</h2>
      <p className="text-2xl text-center">
        Мы рады сообщить Вам, что вы были выбраны в качестве теста в школу
        Hogwarts.
      </p>
      <p className="text-2xl text-center">
        Пожалуйста ответьте на все вопросы и узнайте на сколько вы всё таки
        разбираетесь во вселенной Harry Potter
      </p>
      <button onClick={props.onClickModal} className="text-2xl text-center">
        Начать
      </button>
    </div>
  );
};
