import { useQuiz } from "../store/quiz-context.jsx";
import { categories } from "../utility/data";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Paragraph from "./Paragraph.jsx";
import Button from "./Button.jsx";
import Title from "./Title.jsx";
import ChevronUpIcon from './icons/ChevronUpIcon.jsx';
import ChevronDownIcon from './icons/ChevronDownIcon.jsx';

export default function Categories() {
  const { category, selectCategory, startQuiz } = useQuiz();

  return (
    <div>
      <Title classes="mb-36">Trivia App</Title>

      <div className="flex flex-col items-center mb-24">
        <Paragraph classes="mb-8">Pick a Category</Paragraph>

        <Listbox onChange={selectCategory}>
          <div className="relative w-80">
            <Listbox.Button
              className={({ open }) => `
                relative
                text-lg
                w-full
                cursor-pointer
                rounded-lg
                bg-neutral-50
                py-3
                pl-4
                pr-10
                text-left
                border-2
                text-slate-900
                focus:outline-none
                hover:border-neutral-200
                ${ open && 'border-emerald'}
                ${ category && !open && 'border-emerald-light' }
                ${ !category && 'text-gray-500 border-neutral-100'}
              `}
            >
              {({ open }) => (
                <>
                  <span className="block truncate">
                    { category ? category.text : 'Category' }
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </span>
                </>
              )}
            </Listbox.Button>
    
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1.5 text-lg rounded max-h-60 w-full overflow-auto bg-neutral-50 p-2.5 shadow focus:outline-none">
                {categories.map((category) => (
                  <Listbox.Option
                    key={category.value}
                    className={({ active }) =>
                      `relative rounded cursor-pointer select-none p-2 
                      ${ active ? 'bg-neutral-100 text-primary' : 'text-slate-900'}`
                    }
                    value={category}
                  >
                    {() => (
                      <>
                        <span className="block truncate">
                          {category.text}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div>
        <Button disabled={!category} onClick={startQuiz}>
          Start
        </Button>
      </div>
    </div>
  );
}
