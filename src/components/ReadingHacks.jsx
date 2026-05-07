"use client";

import { FcBookmark } from "react-icons/fc";

const ReadingHacks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-1">
          {" "}
          <FcBookmark /> Benefits of Reading Books
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Reading books offers many benefits for the mind and personal growth.
          It improves knowledge, strengthens imagination, and helps develop
          critical thinking skills while providing both education and
          entertainment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Expands knowledge and understanding
          </h3>
          <p className="text-gray-600 text-sm">
            Reading exposes you to new information, ideas, and perspectives that
            increase your knowledge and help you understand the world better.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Improves focus and concentration
          </h3>
          <p className="text-gray-600 text-sm">
            Regular reading trains your brain to stay focused for longer
            periods, improving your ability to concentrate on important tasks.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Strengthens vocabulary and language
          </h3>
          <p className="text-gray-600 text-sm">
            Books introduce you to new words and expressions that naturally
            improve your vocabulary and communication skills.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Boosts imagination and creativity
          </h3>
          <p className="text-gray-600 text-sm">
            Reading stories allows your mind to visualize characters, places,
            and events, helping develop creativity and imagination.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Enhances critical thinking
          </h3>
          <p className="text-gray-600 text-sm">
            Books encourage you to analyze situations, understand different
            viewpoints, and think more deeply about various topics.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Reduces stress and relaxes the mind
          </h3>
          <p className="text-gray-600 text-sm">
            Reading can be a peaceful activity that helps reduce stress,
            providing a relaxing escape from daily pressures.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Improves memory and brain function
          </h3>
          <p className="text-gray-600 text-sm">
            Following storylines and remembering characters strengthens memory
            and keeps your brain active and engaged.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Builds empathy and emotional intelligence
          </h3>
          <p className="text-gray-600 text-sm">
            Reading about different characters and experiences helps you better
            understand emotions and perspectives of others.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Encourages lifelong learning
          </h3>
          <p className="text-gray-600 text-sm">
            Books inspire curiosity and motivate readers to keep learning new
            skills, ideas, and knowledge throughout life.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Improves writing skills
          </h3>
          <p className="text-gray-600 text-sm">
            Exposure to well-written content helps you learn better sentence
            structure, storytelling, and writing techniques.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Expands perspective and mindset
          </h3>
          <p className="text-gray-600 text-sm">
            Reading different types of books introduces diverse cultures,
            opinions, and experiences that broaden your thinking.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Supports personal growth
          </h3>
          <p className="text-gray-600 text-sm">
            Books often provide lessons, inspiration, and ideas that help you
            grow personally and professionally over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadingHacks;
