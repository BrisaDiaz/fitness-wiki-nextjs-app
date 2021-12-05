export function AddButton({ onClick, darck, testId }) {
  return (
    <div
      data-testid={testId}
      onClick={() => onClick()}
      className={'w-12 h-12 l rounded-full border   border-green-500 shadow-lg  cursor-pointer flex justify-center items-center relative transform scale-75 '.concat(
        darck
          ? ' bg-green-600 hover:bg-green-700'
          : ' bg-white hover:bg-gray-100'
      )}
    >
      <div
        className={'h-6 w-1 broder-b-6 rounded-full self-center absolute   '.concat(
          darck ? ' bg-white ' : 'bg-gray-600 '
        )}
      />
      <div
        className={'h-6 w-1 broder-b-6  rounded-full self-center absolute transform rotate-90   '.concat(
          darck ? ' bg-white ' : 'bg-gray-600 '
        )}
      />
    </div>
  )
}
export function EditButton({ onClick, testId }) {
  return (
    <div
      data-testid={testId}
      onClick={() => onClick()}
      className="w-10 h-10 rounded-full  bg-white  shadow-md  hover:bg-gray-100 cursor-pointer flex justify-center items-center p-2 transform scale-95  border   border-green-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="edit"
        className="svg-inline--fa fa-edit fa-w-18"
        role="img"
        viewBox="0 0 576 512"
      >
        <path
          fill="#10b981"
          d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
        />
      </svg>
    </div>
  )
}
export function DeleteButton({ onClick, testId }) {
  return (
    <div
      data-testid={testId}
      onClick={() => onClick()}
      className="w-10 h-10 rounded-full  bg-white shadow-md hover:bg-gray-100 cursor-pointer flex justify-center items-center p-2.5 transform scale-95  border   border-green-500 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="trash-alt"
        className="svg-inline--fa fa-trash-alt fa-w-14"
        role="img"
        viewBox="0 0 448 512"
      >
        <path
          fill="#10b981"
          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
        />
      </svg>
    </div>
  )
}
