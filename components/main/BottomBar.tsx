export default function BottomBar() {
  return (
    <>
      <aside className="px-10  py-5  md:hidden flex flex-row bg-primaryBg text-white space-x-3 justify-between ">
        <div id="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <div id="explore">
          <svg
            width="32"
            height="32"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM10 18.3036C5.41518 18.3036 1.69643 14.5848 1.69643 10C1.69643 5.41518 5.41518 1.69643 10 1.69643C14.5848 1.69643 18.3036 5.41518 18.3036 10C18.3036 14.5848 14.5848 18.3036 10 18.3036ZM14.4286 5.17634C14.3412 5.14218 14.2479 5.12558 14.154 5.1275C14.0602 5.12941 13.9676 5.1498 13.8817 5.1875L7.83259 7.83482L5.1875 13.8839C5.10714 14.067 5.10714 14.2746 5.1875 14.4576C5.26339 14.6317 5.40402 14.7679 5.58259 14.8371C5.66741 14.8705 5.75446 14.8862 5.84375 14.8862C5.94196 14.8862 6.03795 14.8661 6.12946 14.8259L12.1786 12.1786L14.8237 6.12946C14.8623 6.04118 14.8826 5.94602 14.8835 5.84967C14.8845 5.75333 14.8659 5.65779 14.829 5.56879C14.7921 5.47978 14.7377 5.39915 14.6688 5.33171C14.6 5.26427 14.5183 5.21143 14.4286 5.17634ZM11.4464 10.5L12.0312 11.0848L11.0848 12.0312L10.5 11.4464L7.05357 12.9554L8.56027 9.50893L7.99107 8.9375L8.9375 7.99107L9.5067 8.56027L12.9554 7.05357L11.4464 10.5ZM8.9375 7.99107L7.99107 8.9375L8.56027 9.50893L10.5 11.4464L11.0848 12.0312L12.0312 11.0848L11.4464 10.5L9.50893 8.56027L8.9375 7.99107Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div id="chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </div>
        <div id="setting">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </aside>
    </>
  );
}
