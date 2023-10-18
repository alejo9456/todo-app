
import lightBackgroundImage  from './assets/bg-desktop-light.jpg';
import darkButtonImage from './assets/icon-moon.svg';

export const App = () => {
  return (
    <main className="h-screen relative bg-very-light-gray">

      <section className='h-40vh relative flex justify-center items-center'>
        <img className="h-full w-full absolute object-cover object-center" src={lightBackgroundImage} alt="image" />
        {/* Search */}
        <header className="relative z-10 w-[30rem]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="items-center justify-center text-5xl font-bold mb-0">TODO</h1>
            <span className="z-20">
              <img src={ darkButtonImage } alt="" />
            </span>
          </div>
          <div className="flex items-center w-full bg-white rounded-lg px-5 py-2">
            <input type="checkbox" className="hidden" id="myCheckbox" />
            <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
            </label>
            <input  className="outline-none h-10" type="text" placeholder="Create a new todo..."/>
          </div>
        </header>
      </section>

      <section className="bg-very-light-gray h-60vh relative flex flex-col items-center">

        {/* { TodoList} */}
        <section className="relative transform translate-y-[-3rem] w-[30rem] rounded-md shadow-md">
            <ul>
              {/* TodoItem */}
              <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <input type="checkbox" className="hidden" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
                </label>
                <input  className="outline-none h-10 w-full" type="text" placeholder="Complete online JavaScript course"/>
              </li>
              {/* TodoItem */}
              <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <input type="checkbox" className="hidden" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
                </label>
                <input  className="outline-none h-10 w-full" type="text" placeholder="Jog around the park 3x"/>
              </li>
              {/* TodoItem */}
              <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <input type="checkbox" className="hidden" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
                </label>
                <input  className="outline-none h-10 w-full" type="text" placeholder="10 minutes meditation"/>
              </li>
              {/* TodoItem */}
              <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <input type="checkbox" className="hidden" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
                </label>
                <input  className="outline-none h-10 w-full" type="text" placeholder="Pick up groceries"/>
              </li>
              {/* TodoItem */}
              <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <input type="checkbox" className="hidden" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
                </label>
                <input  className="outline-none h-10 w-full" type="text" placeholder="Complete Todo App on Frontend Mentor"/>
              </li>
            </ul>
            <footer className="flex justify-between px-5 py-2 text-sm">
              <span> 0 item left</span>
              <ul className="flex justify-between">
                <li className="mx-2">
                  <a href="">All</a>
                </li>
                <li  className="mx-2">
                  <a href="">Active</a>
                </li>
                <li  className="mx-2">
                  <a href="">Completed</a>
                </li>
              </ul>
              <button>Clear completed</button>
            </footer>
        </section>

        <footer>
          Drag and drog to reorder list
        </footer>
    
      </section>

    </main>
  )
}
